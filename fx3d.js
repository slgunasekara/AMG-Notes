/* =========================================================
   AMG Notes — scroll-driven 3D effects
   1) floating 3D document sheets that fly / spin as you scroll
   2) 3D reveal (flip-in) of cards and sections
   3) hero that recedes in depth + logo that tilts with pointer / scroll
   4) thin scroll-progress line
   Everything is transform/opacity only, runs inside requestAnimationFrame,
   and switches itself off for "prefers-reduced-motion".
   The opening screen itself is controlled by the small inline script
   in index.html and announces itself with the "amg:ready" event.
   ========================================================= */
(function(){
    'use strict';

    var reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    var finePointer = !!(window.matchMedia && window.matchMedia('(pointer: fine)').matches);
    var body = document.body;
    var ready = !body.classList.contains('is-loading');

    function clamp(v, a, b){ return v < a ? a : (v > b ? b : v); }
    function mod(n, m){ return ((n % m) + m) % m; }

    /* ---------------------------------------------------------
       2) 3D REVEAL
       --------------------------------------------------------- */
    var REVEAL = [
        ['.tool-pill', 'rv-chip'],
        ['.section-head', ''],
        ['.semester-card', 'rv-big'],
        ['.module-card', 'rv-big'],
        ['.sub-card', ''],
        ['.card', ''],
        ['.person-card', '']
    ];
    var STAGGER = { 'tool-pill': 1, 'card': 1, 'person-card': 1 };
    var io = null;

    function tagReveals(){
        if(reduce) return;
        REVEAL.forEach(function(pair){
            var nodes = document.querySelectorAll(pair[0]);
            for(var i = 0; i < nodes.length; i++){
                var el = nodes[i];
                if(el.__rvTagged) continue;
                el.__rvTagged = true;
                el.classList.add('rv');
                if(pair[1]) el.classList.add(pair[1]);
            }
        });
    }

    function siblingIndex(el){
        var i = 0, n = el;
        while((n = n.previousElementSibling)) i++;
        return i;
    }

    function reveal(el){
        var key = el.classList.contains('card') ? 'card'
                : el.classList.contains('person-card') ? 'person-card'
                : el.classList.contains('tool-pill') ? 'tool-pill' : '';
        var delay = key && STAGGER[key] ? (siblingIndex(el) % 8) * 55 : 0;
        el.style.setProperty('--d', delay + 'ms');
        el.classList.add('rv-in');
        var cleaned = false;
        function clean(){
            if(cleaned) return;
            cleaned = true;
            // Drop the helper classes so the hover tilt works and a later
            // display:none -> block (search box) never replays the animation.
            el.classList.remove('rv', 'rv-in', 'rv-big', 'rv-chip');
            el.style.removeProperty('--d');
            el.__rvTagged = true;
        }
        el.addEventListener('animationend', function(e){ if(e.target === el) clean(); });
        setTimeout(clean, 2600 + delay);
    }

    function observeReveals(){
        if(reduce) return;
        if(!('IntersectionObserver' in window)){
            // very old browser: just show everything
            document.querySelectorAll('.rv').forEach(function(el){ el.classList.add('rv-in'); });
            return;
        }
        if(!io){
            io = new IntersectionObserver(function(entries){
                entries.forEach(function(entry){
                    if(!entry.isIntersecting) return;
                    io.unobserve(entry.target);
                    reveal(entry.target);
                });
            }, { rootMargin: '0px 0px -6% 0px', threshold: 0 });
        }
        var pending = document.querySelectorAll('.rv:not(.rv-in)');
        for(var i = 0; i < pending.length; i++){
            if(!pending[i].__rvObserved){
                pending[i].__rvObserved = true;
                io.observe(pending[i]);
            }
        }
    }

    /* ---------------------------------------------------------
       1) 3D DOCUMENT SCENE
       --------------------------------------------------------- */
    var world = document.getElementById('sceneWorld');
    var sheets = [];
    var W = window.innerWidth, H = window.innerHeight;
    var MARGIN = 170;

    function buildScene(){
        if(!world || reduce) return;
        world.innerHTML = '';
        sheets = [];
        var small = W < 700;
        var count = small ? 9 : (W < 1100 ? 13 : 18);
        for(var i = 0; i < count; i++){
            var depth = Math.random();                       // 0 far ... 1 near
            var z = -560 + depth * 800;
            var size = (small ? 40 : 54) + depth * (small ? 46 : 74) + Math.random() * 20;
            var el = document.createElement('div');
            el.className = 'sheet' + (Math.random() < 0.34 ? ' solid' : '');
            el.style.setProperty('--w', size.toFixed(1) + 'px');
            var base = (0.2 + depth * 0.36) * (small ? 0.8 : 1);
            world.appendChild(el);
            sheets.push({
                el: el, depth: depth, z: z, base: base,
                x: Math.random() * W,
                y0: Math.random(),
                speed: 0.12 + depth * 0.5,
                rx0: -30 + Math.random() * 60,
                ry0: Math.random() * 360,
                rz0: -40 + Math.random() * 80,
                kRy: (Math.random() < 0.5 ? -1 : 1) * (0.05 + Math.random() * 0.09),
                kRx: (Math.random() < 0.5 ? -1 : 1) * (0.02 + Math.random() * 0.04)
            });
        }
        render(cur, px, py);
    }

    var target = 0, cur = 0, tpx = 0, tpy = 0, px = 0, py = 0, raf = 0;
    var hero = document.querySelector('header.hero');
    var heroH = hero ? hero.offsetHeight : 600;
    var logoImg = document.querySelector('.brand-logo img');
    var progress = null;
    if(!reduce){
        progress = document.createElement('div');
        progress.id = 'scrollProgress';
        progress.setAttribute('aria-hidden', 'true');
        body.appendChild(progress);
    }

    function render(sy, mx, my){
        if(world){
            var span = H + MARGIN * 2;
            for(var i = 0; i < sheets.length; i++){
                var s = sheets[i];
                var yy = mod(s.y0 * span - sy * s.speed, span);      // 0..span
                var y = yy - MARGIN;
                var edge = Math.min(1, yy / 120, (span - yy) / 120);   // fade at the wrap points
                var xx = s.x + mx * (s.depth * 26 - 6);
                s.el.style.opacity = (s.base * clamp(edge, 0, 1)).toFixed(3);
                s.el.style.transform =
                    'translate3d(' + xx.toFixed(1) + 'px,' + y.toFixed(1) + 'px,' + s.z.toFixed(0) + 'px) ' +
                    'rotateX(' + (s.rx0 + sy * s.kRx + my * 8).toFixed(2) + 'deg) ' +
                    'rotateY(' + (s.ry0 + sy * s.kRy + mx * 10).toFixed(2) + 'deg) ' +
                    'rotateZ(' + (s.rz0 + sy * 0.012).toFixed(2) + 'deg)';
            }
        }
    }

    function updateScrollLinked(sy){
        // hero recedes into the screen as you scroll away from it
        if(hero){
            var t = clamp(sy / (heroH * 0.95), 0, 1);
            if(t <= 0.001){
                hero.style.transform = '';
                hero.style.opacity = '';
            } else {
                hero.style.transform =
                    'perspective(900px) translate3d(0,' + (-t * 26).toFixed(1) + 'px,' + (-t * 150).toFixed(1) + 'px) rotateX(' + (t * 13).toFixed(2) + 'deg)';
                hero.style.opacity = (1 - t * 0.9).toFixed(3);
            }
        }
        // progress line
        if(progress){
            var max = Math.max(1, document.documentElement.scrollHeight - H);
            progress.style.transform = 'scaleX(' + clamp(sy / max, 0, 1).toFixed(4) + ')';
        }
        // logo tilts a little with scroll too (touch screens have no pointer)
        if(logoImg){
            var spin = clamp(sy, 0, 600) * 0.03;
            logoImg.style.setProperty('--ly', (px * 18 + spin).toFixed(2) + 'deg');
            logoImg.style.setProperty('--lx', (-py * 14).toFixed(2) + 'deg');
        }
    }

    function tick(){
        raf = 0;
        cur += (target - cur) * 0.13;
        if(Math.abs(target - cur) < 0.15) cur = target;
        px += (tpx - px) * 0.09;
        py += (tpy - py) * 0.09;
        if(Math.abs(tpx - px) < 0.002) px = tpx;
        if(Math.abs(tpy - py) < 0.002) py = tpy;
        render(cur, px, py);
        updateScrollLinked(target);
        if(cur !== target || px !== tpx || py !== tpy) request();
    }
    function request(){ if(!raf) raf = requestAnimationFrame(tick); }

    function onScroll(){
        target = window.pageYOffset || document.documentElement.scrollTop || 0;
        request();
    }
    function onPointer(e){
        tpx = clamp((e.clientX / Math.max(1, W)) * 2 - 1, -1, 1);
        tpy = clamp((e.clientY / Math.max(1, H)) * 2 - 1, -1, 1);
        request();
    }
    var lastW = W, resizeTimer = 0;
    function onResize(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
            var newW = window.innerWidth;
            H = window.innerHeight;
            heroH = hero ? hero.offsetHeight : heroH;
            // phones fire resize when the URL bar hides — only rebuild when the width really changes
            if(Math.abs(newW - lastW) > 40){
                W = newW; lastW = newW;
                buildScene();
            }
            request();
        }, 120);
    }

    /* ---------------------------------------------------------
       Public hook (script.js calls it after every re-render)
       --------------------------------------------------------- */
    window.AMGFX = {
        refresh: function(){
            tagReveals();
            if(ready) observeReveals();
            heroH = hero ? hero.offsetHeight : heroH;
        }
    };

    function start(){
        ready = true;
        observeReveals();
        request();
    }

    if(!reduce){
        buildScene();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);
        window.addEventListener('orientationchange', onResize);
        if(finePointer) window.addEventListener('pointermove', onPointer, { passive: true });
        onScroll();
    }
    tagReveals();
    if(ready) start(); else document.addEventListener('amg:ready', start, { once: true });
})();
