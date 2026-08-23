/* ---------------- Icon library (inline, theme-colored) ---------------- */
const ICONS = {
    book:'<path d="M4 4.5h8.2a2.6 2.6 0 0 1 2.6 2.6V20H6.6A2.6 2.6 0 0 1 4 17.4z"/><path d="M14.8 4.5H19a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1h-4.2V7.1a2.6 2.6 0 0 0-2.6-2.6z" opacity=".55"/><rect x="6.2" y="8" width="6.2" height="1.5" rx=".75" fill="#12327A" opacity=".55"/><rect x="6.2" y="11.2" width="6.2" height="1.5" rx=".75" fill="#12327A" opacity=".4"/>',
    flask:'<path d="M9.6 2.5h4.8v5.7l4.7 8.7a2.1 2.1 0 0 1-1.8 3.1H6.7a2.1 2.1 0 0 1-1.8-3.1l4.7-8.7z"/><path d="M7.3 14.8h9.4l1.7 3.2a1 1 0 0 1-.9 1.5H6.5a1 1 0 0 1-.9-1.5z" fill="#12327A" opacity=".38"/><circle cx="12" cy="12.4" r="1.15" fill="#12327A" opacity=".5"/>',
    badge:'<circle cx="12" cy="8.6" r="6.4"/><path d="M8.6 14.3L5.8 21.5l6.2-2.7 6.2 2.7-2.8-7.2" opacity=".55"/><path d="M9.4 8.6l1.8 1.8 3.4-3.6" fill="none" stroke="#12327A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity=".6"/>',
    database:'<ellipse cx="12" cy="5.6" rx="8" ry="3"/><path d="M4 5.6V11.8c0 1.66 3.58 3 8 3s8-1.34 8-3V5.6" opacity=".45"/><path d="M4 11.8V18c0 1.66 3.58 3 8 3s8-1.34 8-3v-6.2" opacity=".8"/>',
    terminal:'<rect x="2.4" y="4" width="19.2" height="16" rx="2.6"/><path d="M6 9.6l3.4 2.9L6 15.4" fill="none" stroke="#12327A" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/><rect x="12.4" y="14.2" width="6" height="1.7" rx=".85" fill="#12327A" opacity=".7"/>',
    gear:'<circle cx="12" cy="12" r="3.6"/><g opacity=".92"><rect x="10.85" y="1.4" width="2.3" height="4.3" rx="1.1"/><rect x="10.85" y="1.4" width="2.3" height="4.3" rx="1.1" transform="rotate(45 12 12)"/><rect x="10.85" y="1.4" width="2.3" height="4.3" rx="1.1" transform="rotate(90 12 12)"/><rect x="10.85" y="1.4" width="2.3" height="4.3" rx="1.1" transform="rotate(135 12 12)"/><rect x="10.85" y="1.4" width="2.3" height="4.3" rx="1.1" transform="rotate(180 12 12)"/><rect x="10.85" y="1.4" width="2.3" height="4.3" rx="1.1" transform="rotate(225 12 12)"/><rect x="10.85" y="1.4" width="2.3" height="4.3" rx="1.1" transform="rotate(270 12 12)"/><rect x="10.85" y="1.4" width="2.3" height="4.3" rx="1.1" transform="rotate(315 12 12)"/></g><circle cx="12" cy="12" r="1.4" fill="#12327A" opacity=".55"/>',
    globe:'<circle cx="12" cy="12" r="9.2"/><path d="M2.8 12h18.4M12 2.8c2.7 2.9 4.2 6.2 4.2 9.2s-1.5 6.3-4.2 9.2c-2.7-2.9-4.2-6.2-4.2-9.2S9.3 5.7 12 2.8z" fill="none" stroke="#12327A" stroke-width="1.3" opacity=".5"/>',
    layers:'<path d="M12 2.6l9.6 5.3L12 13.2 2.4 7.9z"/><path d="M2.4 12.3L12 17.6l9.6-5.3" fill="none" stroke="#12327A" stroke-width="1.9" stroke-linecap="round" opacity=".55"/><path d="M2.4 17L12 22.3l9.6-5.3" fill="none" stroke="#12327A" stroke-width="1.9" stroke-linecap="round" opacity=".35"/>',
    link:'<rect x="1.8" y="9.6" width="10.6" height="6.4" rx="3.2" transform="rotate(-35 7.1 12.8)"/><rect x="11.6" y="8" width="10.6" height="6.4" rx="3.2" transform="rotate(-35 16.9 11.2)" opacity=".6"/>',
    network:'<circle cx="5.4" cy="6" r="2.8"/><circle cx="18.6" cy="6" r="2.8"/><circle cx="12" cy="18.6" r="2.8"/><path d="M5.4 8.8v2.8M18.6 8.8v2.8M7.5 12.8l3.2 3.4M16.5 12.8l-3.2 3.4" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity=".9"/>',
    plug:'<path d="M5.8 8.2h12.4v3.5a6.2 6.2 0 0 1-12.4 0z"/><rect x="8.1" y="2.2" width="2.3" height="5.2" rx="1.1"/><rect x="13.6" y="2.2" width="2.3" height="5.2" rx="1.1"/><rect x="10.8" y="16.6" width="2.4" height="5.2" rx="1.2"/>',
    leaf:'<path d="M4.8 21c9.2-1 14.9-6.3 15.9-16.5C10.8 5.9 5.6 11.5 4.8 21z"/><path d="M6.3 19.5c3-3 6.3-6.9 9-11.9" fill="none" stroke="#12327A" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>',
    stack:'<rect x="2.3" y="3.3" width="8.4" height="8.4" rx="2"/><rect x="13.3" y="3.3" width="8.4" height="8.4" rx="2" opacity=".6"/><rect x="7.8" y="12.4" width="8.4" height="8.4" rx="2" opacity=".85"/>',
    code:'<path d="M9.2 5l-7 7 7 7 2-2-5-5 5-5z"/><path d="M14.8 5l7 7-7 7-2-2 5-5-5-5z" opacity=".6"/>',
    brain:'<path d="M12 3.1c-2.7 0-4.6 1.8-4.9 4.1-2.1.7-3.6 2.7-3.4 5 .2 2.5 2.3 4.3 4.8 4.3H12z"/><path d="M12 3.1c2.7 0 4.6 1.8 4.9 4.1 2.1.7 3.6 2.7 3.4 5-.2 2.5-2.3 4.3-4.8 4.3H12z" opacity=".62"/><rect x="10.7" y="15.5" width="2.6" height="6" rx="1.3"/>',
    sigma:'<path d="M5.6 4.6h12.8l-.8 3.6H9.2L14 12l-4.8 4.4h9.4L17.8 20H5.6l7-8z"/>',
    chip:'<rect x="6.2" y="6.2" width="11.6" height="11.6" rx="2.2"/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1" fill="#12327A" opacity=".6"/><rect x="2" y="9" width="3.2" height="2.1" rx="1"/><rect x="2" y="12.9" width="3.2" height="2.1" rx="1"/><rect x="18.8" y="9" width="3.2" height="2.1" rx="1"/><rect x="18.8" y="12.9" width="3.2" height="2.1" rx="1"/><rect x="9" y="2" width="2.1" height="3.2" rx="1"/><rect x="12.9" y="2" width="2.1" height="3.2" rx="1"/><rect x="9" y="18.8" width="2.1" height="3.2" rx="1"/><rect x="12.9" y="18.8" width="2.1" height="3.2" rx="1"/>',
    cloud:'<path d="M6.9 18.6a4.7 4.7 0 0 1-1.1-9.2 5.9 5.9 0 0 1 11.4-2.1 5 5 0 0 1 1.4 9.8 4.4 4.4 0 0 1-.9 1.5z"/><path d="M8.4 14.6h7.6" fill="none" stroke="#12327A" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>',
    doc:'<path d="M5.4 2.4h8.1L19 7.7v13.9H5.4z"/><path d="M13.5 2.4v5.3H19" opacity=".5"/><rect x="7.9" y="11.8" width="8.2" height="1.6" rx=".8" fill="#12327A" opacity=".6"/><rect x="7.9" y="15.2" width="8.2" height="1.6" rx=".8" fill="#12327A" opacity=".6"/>',
    branch:'<circle cx="6" cy="6" r="2.1" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="6" cy="18" r="2.1" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="12" r="2.1" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M6 8.1V16M6 8.1c0 4.3 4 4.3 8.5 4.3H16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    spark:'<path d="M12 2.2c.7 4.4 2.7 7.4 7 8.1-4.3.7-6.3 3.7-7 8.1-.7-4.4-2.7-7.4-7-8.1 4.3-.7 6.3-3.7 7-8.1z"/>',
    sparkle:'<path d="M8.2 2.6c.5 3 1.9 5 4.9 5.6-3 .5-4.4 2.6-4.9 5.6-.5-3-1.9-5-4.9-5.6 3-.5 4.4-2.6 4.9-5.6z"/><path d="M17 11.5c.35 1.9 1.2 3.2 3.1 3.6-1.9.35-2.75 1.7-3.1 3.6-.35-1.9-1.2-3.25-3.1-3.6 1.9-.35 2.75-1.7 3.1-3.6z" opacity=".78"/>',
    asterisk:'<path d="M12 2.4v9.2M12 12.4v9.2M4.6 6.2l7.4 5.4M12 12.4l7.4 5.4M19.4 6.2L12 11.6M12 12.4l-7.4 5.4" fill="none" stroke="#ffffff" stroke-width="2.3" stroke-linecap="round"/><circle cx="12" cy="12" r="1.7"/>',
    whale:'<path d="M2.6 13.4c2.2-4.4 6.6-6.6 10.8-6.6 4.3 0 7.4 2.2 8.4 5.3-1.1.55-2.2.5-3.2-.05-.4 1.75-2.1 3.05-4.3 3.05H8.2c-2.2 0-4.3-.6-5.6-1.7z"/><circle cx="17.6" cy="10.4" r="1" fill="#12327A" opacity=".7"/><path d="M12.6 7.4c.6-1.6 2-2.8 3.8-3.2-.2 1.7-1.1 3-2.6 3.7" opacity=".6"/>',
    notebook:'<rect x="4" y="2.6" width="15.4" height="18.8" rx="2.2"/><rect x="4" y="2.6" width="4.2" height="18.8" rx="1.4" fill="#12327A" opacity=".35"/><rect x="10.6" y="8" width="6.6" height="1.5" rx=".75" fill="#12327A" opacity=".55"/><rect x="10.6" y="11.2" width="6.6" height="1.5" rx=".75" fill="#12327A" opacity=".4"/>',
    arrow:'<path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    drive:'<path d="M8.6 3.4h6.8l6.2 10.6-3.4 5.9H12l3.4-5.9-6.8-10.6z" opacity=".85"/><path d="M8.6 3.4L1.8 14l3.4 5.9L12 8.5z" opacity=".55"/><path d="M4.8 20.9h14.4l-3.4-5.9H8.2z"/>'
};
function svg(name, cls){ return `<svg viewBox="0 0 24 24" fill="#fff" class="${cls||''}">${ICONS[name]||ICONS.doc}</svg>`; }
function navSvg(kind){
    return kind === 'people'
        ? '<circle cx="6" cy="6" r="2.1"/><circle cx="6" cy="18" r="2.1"/><circle cx="18" cy="12" r="2.1"/><path d="M6 8.1V16M6 8.1c0 4.3 4 4.3 8.5 4.3H16"/>'
        : '<path d="M12 3.2l8.4 4.6L12 12.4 3.6 7.8z"/><path d="M3.6 12.4L12 17l8.4-4.6"/>';
}
function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function driveAwareIcon(url, fallback){
    return /drive\.google\.com/.test(url || '') ? 'drive' : (fallback || 'link');
}
function uid(){ return 'x' + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }

/* ---------------- Fixed tools row (not editable via Owner Panel — general utility links) ---------------- */
const TOOLS = [
    {t:'Google Docs', u:'https://docs.google.com/document/u/0/', i:'doc', c:'#4285F4,#34A853'},
    {t:'GeeksforGeeks', u:'https://www.geeksforgeeks.org/', i:'code', c:'#2F8D46,#0C7C36'},
    {t:'W3Schools', u:'https://www.w3schools.com/', i:'globe', c:'#04AA6D,#04724D'},
    {t:'ChatGPT', u:'https://chatgpt.com/?model=auto', i:'spark', c:'#10A37F,#0D8266'},
    {t:'Gemini', u:'https://gemini.google.com/app', i:'sparkle', c:'#4285F4,#9B72CB'},
    {t:'Claude', u:'https://claude.ai/new', i:'asterisk', c:'#D97757,#B85C3E'},
    {t:'DeepSeek', u:'https://chat.deepseek.com/', i:'whale', c:'#4D6BFE,#3350D6'},
    {t:'NotebookLM', u:'https://notebooklm.google.com/', i:'notebook', c:'#F9AB00,#E37400'}
];
function renderTools(){
    document.getElementById('toolsRow').innerHTML = TOOLS.map(t=>{
        const [c1,c2] = t.c.split(',');
        return `<a class="tool-pill" href="${t.u}" target="_blank" rel="noopener" data-search="${t.t.toLowerCase()}">
      <span class="tbadge" style="background:linear-gradient(135deg,${c1},${c2})">${svg(t.i)}</span>${t.t}
    </a>`;
    }).join('');
}

/* =========================================================
   CONTENT (data-driven: site title/subtitle + all modules)
   Source of truth priority when the page loads:
     1) an unpublished draft saved in this browser (localStorage)
     2) data.json fetched from this site (what's actually published on GitHub)
     3) the built-in DEFAULT_CONTENT below, as a last-resort fallback
   ========================================================= */
const CONTENT_KEY = 'amg_content_draft_v2';
const GH_CONFIG_KEY = 'amg_gh_config_v1';
let CONTENT = null;
let PUBLISHED_SHA = null; // sha of data.json as last fetched from GitHub, needed to publish updates

const DEFAULT_CONTENT = {
  "settings": {
    "siteTitle": "Documents by AMG",
    "siteSubtitle": "Every note, VIVA guide, PDF and GitHub repo — organised by course, semester and module. Click any card to jump straight to the resource."
  },
  "tools": [
    {
      "t": "Google Docs",
      "u": "https://docs.google.com/document/u/0/",
      "i": "doc",
      "c": "#4285F4,#34A853"
    },
    {
      "t": "GeeksforGeeks",
      "u": "https://www.geeksforgeeks.org/",
      "i": "code",
      "c": "#2F8D46,#0C7C36"
    },
    {
      "t": "W3Schools",
      "u": "https://www.w3schools.com/",
      "i": "globe",
      "c": "#04AA6D,#04724D"
    },
    {
      "t": "ChatGPT",
      "u": "https://chatgpt.com/?model=auto",
      "i": "spark",
      "c": "#10A37F,#0D8266"
    },
    {
      "t": "Gemini",
      "u": "https://gemini.google.com/app",
      "i": "sparkle",
      "c": "#4285F4,#9B72CB"
    },
    {
      "t": "Claude",
      "u": "https://claude.ai/new",
      "i": "asterisk",
      "c": "#D97757,#B85C3E"
    },
    {
      "t": "DeepSeek",
      "u": "https://chat.deepseek.com/",
      "i": "whale",
      "c": "#4D6BFE,#3350D6"
    },
    {
      "t": "NotebookLM",
      "u": "https://notebooklm.google.com/",
      "i": "notebook",
      "c": "#F9AB00,#E37400"
    }
  ],
  "courses": [
    {
      "id": "came",
      "label": "CAME Course ( AI / ML )",
      "locked": true,
      "semesters": [
        {
          "id": "came-core",
          "label": "Core Modules",
          "locked": false,
          "modules": [
            {
              "id": "came-python",
              "label": "Python for AI / ML",
              "locked": false,
              "resources": [
                {
                  "id": "r1",
                  "t": "Introduction to Python and Basic Syntax",
                  "u": "https://docs.google.com/document/d/11dBODKj3eJ8gUUdevrfrEB_HRqgHA9dTbaMfDf1aEiE/edit?tab=t.0",
                  "i": "code",
                  "visible": true
                },
                {
                  "id": "r2",
                  "t": "Python for ML",
                  "u": "https://docs.google.com/document/d/11dBODKj3eJ8gUUdevrfrEB_HRqgHA9dTbaMfDf1aEiE/edit?tab=t.0",
                  "i": "code",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": []
            },
            {
              "id": "came-math",
              "label": "Mathematical Foundations",
              "locked": false,
              "resources": [
                {
                  "id": "r3",
                  "t": "Mathematical Foundations for ML",
                  "u": "https://docs.google.com/document/d/1dmqADrE-hph5LuVJUry-xlod3DgIRGu6lZvojompilg/edit?tab=t.0",
                  "i": "sigma",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": []
            },
            {
              "id": "came-ml",
              "label": "Machine Learning",
              "locked": false,
              "resources": [
                {
                  "id": "r4",
                  "t": "Introduction to Machine Learning",
                  "u": "https://docs.google.com/document/d/1Z4_rxkXORi_yrGHRhytXf7B0qKe0_yQxBW6UdEyCDKs/edit?tab=t.0",
                  "i": "brain",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": []
            },
            {
              "id": "came-dl",
              "label": "Deep Learning",
              "locked": false,
              "resources": [
                {
                  "id": "r5",
                  "t": "Deep Learning & Neural Networks",
                  "u": "https://docs.google.com/document/d/1CLpxCuWo04MhmcAh4VNt1eU-AWWwoF_z9cLxCCbTi_A/edit?tab=t.0",
                  "i": "chip",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": []
            },
            {
              "id": "came-prod",
              "label": "Production ML",
              "locked": false,
              "resources": [
                {
                  "id": "r6",
                  "t": "Production ML Systems",
                  "u": "https://docs.google.com/document/d/1Jbg8i3IeUYXAaFqP2MSsA6MrqHeBWZYAb3p06W5Qu0c/edit?tab=t.0",
                  "i": "cloud",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": []
            }
          ]
        }
      ]
    },
    {
      "id": "hdse",
      "label": "HDSE",
      "locked": true,
      "semesters": [
        {
          "id": "hdse-sem1",
          "label": "Semester 1",
          "locked": true,
          "modules": [
            {
              "id": "hdse-s1-foundations",
              "label": "Foundations (Python / Linux)",
              "locked": false,
              "resources": [
                {
                  "id": "f1",
                  "t": "Python Basics",
                  "u": "https://docs.google.com/document/d/1IbAqHpC1bBuQQuyruzXdrMzZelOhgolPtUyZdE5IJ-8/edit?tab=t.0",
                  "i": "code",
                  "visible": true
                },
                {
                  "id": "f2",
                  "t": "Linux Basics",
                  "u": "https://docs.google.com/document/d/1zDb34o19STOO-GEQkF220b_GDaASbEUQmgcJpNvygiU/edit?tab=t.0",
                  "i": "code",
                  "visible": true
                },
                {
                  "id": "f3",
                  "t": "Linux Fundamentals",
                  "u": "https://docs.google.com/document/d/1Ua17Mhc2TiVyeykO6eaX08bXZ8Y4X4qr5Q7TEtUXlEI/edit?tab=t.0",
                  "i": "code",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": []
            },
            {
              "id": "hdse-s1-prf",
              "label": "Programming Fundamentals (PRF)",
              "locked": false,
              "resources": [
                {
                  "id": "p1",
                  "t": "PRF Full Note",
                  "u": "https://docs.google.com/document/d/1YBgb1URQofg5VcfPPVhDdqt1N_sq-j-Kh-Bk_PUQKmU/edit?usp=sharing",
                  "i": "leaf",
                  "visible": true
                },
                {
                  "id": "p2",
                  "t": "PRF Summary",
                  "u": "https://docs.google.com/document/d/1BoNTYJTfPKh5FozDPG3h-qnEe1hF9GYmvU24f0jM80g/edit?tab=t.0",
                  "i": "doc",
                  "visible": true
                },
                {
                  "id": "p3",
                  "t": "PRF Galle Notes",
                  "u": "https://docs.google.com/document/d/1i7BbykDhweZG6ZoUoQKlqQQpZ8WNXPwRBm1oAc-rLLI/edit?tab=t.0",
                  "i": "doc",
                  "visible": true
                },
                {
                  "id": "p4",
                  "t": "PRF Panadura Notes",
                  "u": "https://docs.google.com/document/d/1MSCENziGNURWoKxqGPg4nhGsoBoBMCTcnfK9CjVfk2Y/edit?tab=t.0",
                  "i": "doc",
                  "visible": true
                },
                {
                  "id": "p5",
                  "t": "PRF Remedial Galle Session",
                  "u": "https://docs.google.com/document/d/12l5-F5wwLNUGD9apruNLQjKgzRTPWVWpSEFpyNWKtS4/edit?usp=sharing",
                  "i": "badge",
                  "visible": true
                },
                {
                  "id": "p6",
                  "t": "PRF Remedial by TDS · Panadura",
                  "u": "https://docs.google.com/document/d/1MSCENziGNURWoKxqGPg4nhGsoBoBMCTcnfK9CjVfk2Y/edit?tab=t.0",
                  "i": "badge",
                  "visible": true
                },
                {
                  "id": "p7",
                  "t": "PRF Remedial by TDS",
                  "u": "https://docs.google.com/document/d/1mIeGaqpeMcbrpwMaU2VInS4Ban34ehHZC5tlbMgzCHc/edit?tab=t.0#heading=h.dexkl1gnzmr3",
                  "i": "badge",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": []
            },
            {
              "id": "hdse-s1-dbms",
              "label": "Database Management Systems (DBMS)",
              "locked": false,
              "resources": [
                {
                  "id": "db1",
                  "t": "DBMS Full Note",
                  "u": "https://docs.google.com/document/d/18vDYDeQLgzsiFpTnLM2PaLvsiKDLAye0vU7N-DueDHo/edit?tab=t.0",
                  "i": "database",
                  "visible": true
                },
                {
                  "id": "db2",
                  "t": "DBMS Repeated Full Note",
                  "u": "https://docs.google.com/document/d/1IIYX1smAJQNrCY4FgMi3B2vnaaKLUKgG3i9J58INpC8/edit?tab=t.0",
                  "i": "database",
                  "visible": true
                },
                {
                  "id": "db3",
                  "t": "DBMS Commands",
                  "u": "https://docs.google.com/document/d/1hZOf7Cqk2qXyhTANqJXZMSIIugZcDAPDYwz2oI2Vhs4/edit?tab=t.0",
                  "i": "terminal",
                  "visible": true
                },
                {
                  "id": "db4",
                  "t": "DBMS Exam / Viva",
                  "u": "https://docs.google.com/document/d/1LLOpjiyU9Ar50TBsfIMHiADswnOrswW9WHGm6u_r2f4/edit?tab=t.0#heading=h.go1muws1y9y4",
                  "i": "badge",
                  "visible": true
                },
                {
                  "id": "db5",
                  "t": "DBMS Galle Notes",
                  "u": "https://docs.google.com/document/d/1x18T96sGW8WkVTRoltA-fsRPP1xEW6WUgltEGXv2Dj4/edit?usp=sharing",
                  "i": "database",
                  "visible": true
                },
                {
                  "id": "db6",
                  "t": "DBMS Panadura Notes",
                  "u": "https://docs.google.com/document/d/1QC_1zmrvMsGxRxok6SZ3E40vweXDYIY-YqgzYNUXvSY/edit?usp=sharing",
                  "i": "database",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": []
            },
            {
              "id": "hdse-s1-oop",
              "label": "Object Oriented Programming (OOP)",
              "locked": false,
              "resources": [
                {
                  "id": "o1",
                  "t": "OOP Lab Session",
                  "u": "https://docs.google.com/document/d/1665VXJaWxvCKK1EwDEIlrUGagcOcR7QJ1qaYyW2CyNI/edit?usp=sharing",
                  "i": "flask",
                  "visible": true
                },
                {
                  "id": "o2",
                  "t": "OOP Full Note",
                  "u": "https://docs.google.com/document/d/15YUh0IGVE914dOjRBUs5w0EVu5xbUemWXZvhP47veCY/edit?tab=t.0",
                  "i": "book",
                  "visible": true
                },
                {
                  "id": "o3",
                  "t": "OOP Exam / Viva",
                  "u": "https://docs.google.com/document/d/1Jfq7UrIOHSNOEsoDIyEOPkfNBMJOmPtzR3jxQ5qXNKg/edit?tab=t.0",
                  "i": "badge",
                  "visible": true
                },
                {
                  "id": "o4",
                  "t": "OOP Galle Lab Session",
                  "u": "https://docs.google.com/document/d/1OnqoOqsRcm4k9tdm0TYygMYKvU2Oj191A16Q2f_JNO8/edit?usp=sharing",
                  "i": "flask",
                  "visible": true
                },
                {
                  "id": "o5",
                  "t": "OOP Panadura Lab Session",
                  "u": "https://docs.google.com/document/d/1nFtTxuY_mhirZs_4UkBuqRviYNNkT4GIU9tQYxvicB4/edit?usp=sharing",
                  "i": "flask",
                  "visible": true
                },
                {
                  "id": "o6",
                  "t": "OOP Galle Notes",
                  "u": "https://docs.google.com/document/d/1W_2behCSIt1ZUgBbHQtH2oWxaZXwXauif0bJOayi_Ww/edit?usp=sharing",
                  "i": "book",
                  "visible": true
                },
                {
                  "id": "o7",
                  "t": "OOP Panadura Notes",
                  "u": "https://docs.google.com/document/d/1NmtWVQZAoE_akmkE9UdH3Z_mfscnJKQV9-xqn720zy4/edit?tab=t.0#heading=h.pxxzpzw95adm",
                  "i": "book",
                  "visible": true
                },
                {
                  "id": "o8",
                  "t": "OOP Remedial by TDS",
                  "u": "https://docs.google.com/document/d/1kCqCVVamV7extSeQtKQa7KpMF2PmSJZsRB4RyU1yhDk/edit?tab=t.0",
                  "i": "badge",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": []
            },
            {
              "id": "hdse-s1-swe",
              "label": "Software Engineering (SWE)",
              "locked": false,
              "resources": [
                {
                  "id": "sw1",
                  "t": "SWE Full Note",
                  "u": "https://docs.google.com/document/d/13aUNBDXK86AOn9zojTw2vIP-XDvyljyuDfFL4F7Leww/edit?tab=t.0",
                  "i": "gear",
                  "visible": true
                },
                {
                  "id": "sw2",
                  "t": "SWE Repeated Full Note",
                  "u": "https://docs.google.com/document/d/1uJHHjh278LbVYaqoOS0bl1jyaBpsNkP_eLyBK1TAZVE/edit?tab=t.0",
                  "i": "gear",
                  "visible": true
                },
                {
                  "id": "sw3",
                  "t": "SWE Exam / Viva",
                  "u": "https://docs.google.com/document/d/120RJmBmoth3ef_ryS8XsdGrssnFc3vQI_dJTLBeRK-8/edit?tab=t.0",
                  "i": "badge",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": []
            },
            {
              "id": "hdse-s1-dbp",
              "label": "Database Programming (DBP)",
              "locked": false,
              "resources": [
                {
                  "id": "dp1",
                  "t": "DBP Full Note",
                  "u": "https://docs.google.com/document/d/1MOIEtYBcbQ6T7QeBIwVY5pVxaKdx6PQtZnSzuPPZfFQ/edit?tab=t.0",
                  "i": "database",
                  "visible": true
                },
                {
                  "id": "dp2",
                  "t": "DBP Exam / Viva",
                  "u": "https://docs.google.com/document/d/1LLOpjiyU9Ar50TBsfIMHiADswnOrswW9WHGm6u_r2f4/edit?tab=t.0#heading=h.go1muws1y9y4",
                  "i": "badge",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": [
                {
                  "id": "per1",
                  "n": "Kavindu Akash - DBP",
                  "p": "https://github.com/KavinduAkash",
                  "visible": true,
                  "l": [
                    {
                      "t": "Super Market",
                      "u": "https://github.com/KavinduAkash/supermarket_hdse_76/tree/master"
                    },
                    {
                      "t": "Food City",
                      "u": "https://github.com/KavinduAkash/foodcity-75-76"
                    }
                  ]
                }
              ]
            },
            {
              "id": "hdse-s1-general",
              "label": "General / Misc",
              "locked": false,
              "resources": [],
              "pdfs": [],
              "repos": [
                {
                  "id": "per2",
                  "n": "AMG Repo · Praveena Gunasekara",
                  "p": "https://github.com/slgunasekara/",
                  "visible": true,
                  "l": []
                }
              ]
            }
          ]
        },
        {
          "id": "hdse-sem2",
          "label": "Semester 2",
          "locked": true,
          "modules": [
            {
              "id": "hdse-s2-web",
              "label": "Web Technologies",
              "locked": false,
              "resources": [
                {
                  "id": "w1",
                  "t": "Web Technologies (HTML . CSS . JS) Full Note",
                  "u": "https://docs.google.com/document/d/1QCFSmtf_q5uP8zpbTrWNMlCWMH3hpEJJYIZdfvFbv68/edit?tab=t.0",
                  "i": "globe",
                  "visible": true
                },
                {
                  "id": "w2",
                  "t": "Web VIVA",
                  "u": "https://docs.google.com/document/d/1IA2ZTc9N_nQX1ng3e5iJnT3ilIJKRWIvfIasI4f5_tk/edit?tab=t.0#heading=h.pv54tskdf7am",
                  "i": "badge",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": [
                {
                  "id": "per3",
                  "n": "Kavindu Akash - Web",
                  "p": "https://github.com/KavinduAkash",
                  "visible": true,
                  "l": [
                    {
                      "t": "Web",
                      "u": "https://github.com/KavinduAkash/ITS1119-HDSE75"
                    }
                  ]
                }
              ]
            },
            {
              "id": "hdse-s2-arch",
              "label": "Software Architecture",
              "locked": false,
              "resources": [
                {
                  "id": "a1",
                  "t": "Software Architecture & Design Pattern",
                  "u": "https://docs.google.com/document/d/1LwWL_iQY0itbzEC3_4bQZeRYQGeet9Wet6Y0o9h-bEw/edit?tab=t.0#heading=h.5fibx0x5tj2a",
                  "i": "layers",
                  "visible": true
                },
                {
                  "id": "a2",
                  "t": "Layered Architecture Viva / Exam",
                  "u": "https://docs.google.com/document/d/1yxebcslAPE72cSglHzgVpOILlh9TCnXqhwlSet3y55M/edit?tab=t.0#heading=h.rxroluf1e56g",
                  "i": "badge",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": [
                {
                  "id": "per4",
                  "n": "Udaara San - Architecture",
                  "p": "https://github.com/udarasan",
                  "visible": true,
                  "l": [
                    {
                      "t": "Layered",
                      "u": "https://github.com/udarasan/LA-PROJECT-75.git"
                    },
                    {
                      "t": "Layered Rules",
                      "u": "https://github.com/udarasan/LA_RULES_76"
                    }
                  ]
                }
              ]
            },
            {
              "id": "hdse-s2-orm",
              "label": "ORM",
              "locked": false,
              "resources": [
                {
                  "id": "o1",
                  "t": "ORM Full Note",
                  "u": "https://docs.google.com/document/d/18SD8c62RO0ZSYnBuxAXw9gGp_JOyE0LIdG3rd5x_o8k/edit?tab=t.0",
                  "i": "link",
                  "visible": true
                },
                {
                  "id": "o2",
                  "t": "ORM Udaara",
                  "u": "https://docs.google.com/document/d/1b5gMlMEcQL5Au0B4iKuZWW3uwBf_e2A70iv2wm0hf7U/edit?tab=t.0#heading=h.u2bi3vhi37wy",
                  "i": "link",
                  "visible": true
                },
                {
                  "id": "o3",
                  "t": "ORM Viva / Exam",
                  "u": "https://docs.google.com/document/d/1_XLv5vjykaLcELK_vBcCC044e5jp5DGL73NCN4dxJes/edit?tab=t.0",
                  "i": "badge",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": [
                {
                  "id": "per5",
                  "n": "Shamodha - ORM",
                  "p": "https://github.com/shamodhas-ijse-teaching",
                  "visible": true,
                  "l": [
                    {
                      "t": "ORM 1 · 76",
                      "u": "https://github.com/shamodhas-ijse-teaching/orm-day-01-76"
                    },
                    {
                      "t": "ORM 2 · 76",
                      "u": "https://github.com/shamodhas-ijse-teaching/orm-day-03-76"
                    },
                    {
                      "t": "ORM 3 · 76 (End Code)",
                      "u": "https://github.com/shamodhas-ijse-teaching/orm-end-76"
                    },
                    {
                      "t": "ORM 1 · 75",
                      "u": "https://github.com/shamodhas-ijse-teaching/orm-day-01-75"
                    },
                    {
                      "t": "ORM 2 · 75",
                      "u": "https://github.com/shamodhas-ijse-teaching/orm-day-02-75"
                    },
                    {
                      "t": "ORM 3 · 75",
                      "u": "https://github.com/shamodhas-ijse-teaching/orm-day-03-75"
                    }
                  ]
                }
              ]
            },
            {
              "id": "hdse-s2-network",
              "label": "Networking (CNS)",
              "locked": false,
              "resources": [
                {
                  "id": "n1",
                  "t": "Network Programming Introduction",
                  "u": "https://docs.google.com/document/d/1xMKXsJyrj3AYJQ6_F5l2TjfJHOhdAm08yQ4Qez58zpA/edit?tab=t.0#heading=h.y7wrvj4cqehu",
                  "i": "network",
                  "visible": true
                },
                {
                  "id": "n2",
                  "t": "Foundation of Network Documentation",
                  "u": "https://docs.google.com/document/d/1yjx0p7snzk2PC4gZ2ol1OgD2_jvsa_FGq7Bi6ntJloI/edit?tab=t.0#heading=h.s2xifd8ngzwu",
                  "i": "network",
                  "visible": true
                },
                {
                  "id": "n3",
                  "t": "Computer Network Programming (CNS)",
                  "u": "https://docs.google.com/document/d/1669hdobAdqSgjnkHeQmm5YAwTwyD6JOVY1YYCII_otM/edit?tab=t.0",
                  "i": "network",
                  "visible": true
                },
                {
                  "id": "n4",
                  "t": "CNS Exam / Viva",
                  "u": "https://docs.google.com/document/d/1iWYOosABYFpOzPSxtRfVnnVBhYxUtrogvhtoIVd5LEs/edit?tab=t.0",
                  "i": "badge",
                  "visible": true
                },
                {
                  "id": "n5",
                  "t": "CNS Malindu",
                  "u": "https://docs.google.com/document/d/1r_31nBthhibiOssXyQgOzLOIh2GaAfEaxy8wXsZihks/edit?usp=sharing",
                  "i": "network",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": [
                {
                  "id": "per6",
                  "n": "Udaara San - Networking",
                  "p": "https://github.com/udarasan",
                  "visible": true,
                  "l": [
                    {
                      "t": "Networking Intro / Chatapp",
                      "u": "https://github.com/udarasan/chatapp-75"
                    },
                    {
                      "t": "Java-Socket Programming",
                      "u": "https://github.com/udarasan/Java-Scoket-Programming"
                    }
                  ]
                }
              ]
            },
            {
              "id": "hdse-s2-aad",
              "label": "Advanced API Development (AAD)",
              "locked": false,
              "resources": [
                {
                  "id": "aa1",
                  "t": "Advance API Developments (AAD) Full Note",
                  "u": "https://docs.google.com/document/d/1NUQ-IZdf0YDnTDQqAyTyQupQBxE6n0bNmVNF6rFrh64/edit?tab=t.0",
                  "i": "plug",
                  "visible": true
                },
                {
                  "id": "aa2",
                  "t": "Advance API Developments (AAD) Viva / Exam",
                  "u": "https://docs.google.com/document/d/1AJtM4EfmgvUKXUHJ_sZgjnekWxcPMqWFzJXF9QMDVHM/edit?tab=t.0",
                  "i": "badge",
                  "visible": true
                },
                {
                  "id": "aa3",
                  "t": "Advance API Developments (AAD) TDS Note",
                  "u": "https://docs.google.com/document/d/1z_s5e6O3BDu9rS3AAkZHK5t0ms2mjByb-fXsJmbnXgs/edit?tab=t.0",
                  "i": "doc",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": [
                {
                  "id": "per7",
                  "n": "Yasiru - AAD",
                  "p": "https://github.com/Ryasiru/",
                  "visible": true,
                  "l": [
                    {
                      "t": "AAD Day 03 · 75",
                      "u": "https://github.com/Ryasiru/AAD_75"
                    },
                    {
                      "t": "AAD Day 03 · 76",
                      "u": "https://github.com/Ryasiru/AAD_76"
                    },
                    {
                      "t": "AAD Day 04 Task-1 · 76",
                      "u": "https://github.com/Ryasiru/AAD-76-Task-01"
                    },
                    {
                      "t": "AAD Day 05 Task-2 · 76",
                      "u": "https://github.com/Ryasiru/AAD-76-Task-02"
                    },
                    {
                      "t": "AAD Day end · 76",
                      "u": "https://github.com/Ryasiru/spring-security.git"
                    }
                  ]
                },
                {
                  "id": "per8",
                  "n": "Friends Repo · Tharusha",
                  "p": "https://github.com/Tharushadils",
                  "visible": true,
                  "l": [
                    {
                      "t": "AAD",
                      "u": "https://github.com/Tharushadils/AAD_Class_Project/tree/master"
                    }
                  ]
                },
                {
                  "id": "per9",
                  "n": "AMG Repo · Praveena Gunasekara",
                  "p": "https://github.com/slgunasekara/",
                  "visible": true,
                  "l": [
                    {
                      "t": "AAD Day 1",
                      "u": "https://github.com/slgunasekara/aad_day_1"
                    },
                    {
                      "t": "AAD Day 2",
                      "u": "https://github.com/slgunasekara/aad_day_2"
                    }
                  ]
                }
              ]
            },
            {
              "id": "hdse-s2-spring",
              "label": "Spring Boot & Java EE",
              "locked": false,
              "resources": [
                {
                  "id": "sp1",
                  "t": "Spring Boot Full Note",
                  "u": "https://docs.google.com/document/d/1fdShxkISKhISkUNqAH9XNvc1SWSsqAF7LK_pXryl8lo/edit?tab=t.0#heading=h.5r67fq2iyupq",
                  "i": "leaf",
                  "visible": true
                },
                {
                  "id": "sp2",
                  "t": "Spring Boot Exam / Viva",
                  "u": "https://docs.google.com/document/d/1fdShxkISKhISkUNqAH9XNvc1SWSsqAF7LK_pXryl8lo/edit?tab=t.0#heading=h.5r67fq2iyupq",
                  "i": "badge",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": [
                {
                  "id": "per10",
                  "n": "Udaara San - Spring / JavaEE",
                  "p": "https://github.com/udarasan",
                  "visible": true,
                  "l": [
                    {
                      "t": "JavaEE Theory (74)",
                      "u": "https://github.com/udarasan/JavaEE-Theory"
                    },
                    {
                      "t": "JavaEE - GDSE74",
                      "u": "https://github.com/udarasan/JavaEE-GDSE74"
                    },
                    {
                      "t": "Spring Framework 74",
                      "u": "https://github.com/udarasan/SpringFramework74"
                    },
                    {
                      "t": "JavaEE - 71 Batch",
                      "u": "https://github.com/udarasan/GDSE71-JavaEE"
                    },
                    {
                      "t": "JavaEE Final Project (71)",
                      "u": "https://github.com/udarasan/JAVAEE-FINAL-PROJECT-71"
                    },
                    {
                      "t": "Spring Framework 71",
                      "u": "https://github.com/udarasan/Spring-Framework-71"
                    },
                    {
                      "t": "Threads in Java",
                      "u": "https://github.com/udarasan/Threads-In-Java-72"
                    }
                  ]
                }
              ]
            },
            {
              "id": "hdse-s2-mern",
              "label": "MERN Stack",
              "locked": false,
              "resources": [
                {
                  "id": "m1",
                  "t": "MERN Stack Full Note",
                  "u": "https://docs.google.com/document/d/1ddz41P9v5Qyb4Lqt5a_-NFnLNIDrxlegD32lLTXrO2E/edit?tab=t.0",
                  "i": "stack",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": []
            },
            {
              "id": "hdse-s2-english",
              "label": "Professional English",
              "locked": false,
              "resources": [
                {
                  "id": "e1",
                  "t": "Professional English",
                  "u": "https://docs.google.com/document/d/1dIXMvkzJrUeyb-HIRn0g4LMWyqQvn-tgxZXOcTfc9nU/edit?tab=t.0",
                  "i": "book",
                  "visible": true
                }
              ],
              "pdfs": [],
              "repos": []
            }
          ]
        }
      ]
    }
  ]
};

async function loadContent(){
    const draft = localStorage.getItem(CONTENT_KEY);
    if(draft){
        try{ CONTENT = JSON.parse(draft); return 'draft'; }catch(e){}
    }
    try{
        const res = await fetch('data.json', {cache:'no-store'});
        if(res.ok){ CONTENT = await res.json(); return 'published'; }
    }catch(e){}
    CONTENT = JSON.parse(JSON.stringify(DEFAULT_CONTENT));
    return 'default';
}
function saveDraft(){ localStorage.setItem(CONTENT_KEY, JSON.stringify(CONTENT)); }

/* ---------------- Card / chip renderers ---------------- */
function cardHTML(item, extraClass){
    return `<a class="card ${extraClass||''}" href="${item.u}" target="_blank" rel="noopener" data-search="${esc(item.t.toLowerCase())}">
    <span class="art"><span class="blob b1"></span><span class="blob b2"></span>${svg(item.i)}</span>
    <span class="ctitle">${esc(item.t)}</span>
    <span class="cmeta">Open ${svg('arrow')}</span>
  </a>`;
}
function initials(name){
    return (name||'').replace(/[^A-Za-z ]/g,'').trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase() || 'A';
}
function personHTML(p){
    const chips = (p.l||[]).map(link=>`<a class="link-chip" href="${link.u}" target="_blank" rel="noopener" data-search="${esc((p.n+' '+link.t).toLowerCase())}">${svg('branch')} ${esc(link.t)}</a>`).join('');
    return `<div class="person-card" data-search="${esc(p.n.toLowerCase())}">
    <div class="person-top">
      <a class="avatar" href="${p.p||'#'}" target="_blank" rel="noopener" title="${esc(p.n)} on GitHub">${initials(p.n)}</a>
      <div><div class="person-name">${esc(p.n)}</div></div>
    </div>
    <div class="link-chip-row">${chips || '<span class="empty-note">No repo links yet.</span>'}</div>
  </div>`;
}

/* ---------------- Render one module's three sub-cards (Resources / PDF-Drive / Lecture Repo) ---------------- */
function moduleCardHTML(m){
    const resources = (m.resources||[]).filter(it=>it.visible !== false);
    const pdfs = (m.pdfs||[]).filter(it=>it.visible !== false);
    const repos = (m.repos||[]).filter(it=>it.visible !== false);
    let body = '';
    if(resources.length){
        body += `<div class="sub-card sub-res">
      <div class="sub-card-head">📄 Resources <span class="count">${resources.length}</span></div>
      <div class="card-grid small">${resources.map(r=>cardHTML(r)).join('')}</div>
    </div>`;
    }
    if(pdfs.length){
        body += `<div class="sub-card sub-pdf">
      <div class="sub-card-head">📁 PDF / Drive <span class="count">${pdfs.length}</span></div>
      <div class="card-grid small">${pdfs.map(p=>cardHTML(p,'pdf-card')).join('')}</div>
    </div>`;
    }
    if(repos.length){
        body += `<div class="sub-card sub-repo">
      <div class="sub-card-head">🐙 Lecture Repo <span class="count">${repos.length}</span></div>
      <div class="people-grid small">${repos.map(personHTML).join('')}</div>
    </div>`;
    }
    if(!body) body = '<div class="module-empty">Nothing published in this module yet.</div>';
    return `<div class="module-card" id="modcard_${m.id}">
    <div class="module-card-head"><h3>${esc(m.label)}</h3><span class="count">${resources.length} resources · ${pdfs.length} pdf/drive · ${repos.length} repo owners</span></div>
    <div class="sub-card-grid">${body}</div>
  </div>`;
}
function semesterCardHTML(sem){
    const modCount = (sem.modules||[]).length;
    return `<div class="semester-card" id="${sem.id}">
    <div class="semester-card-head"><h3>${esc(sem.label)}</h3><span class="count">${modCount} modules</span></div>
    ${(sem.modules||[]).map(moduleCardHTML).join('') || '<div class="module-empty">No modules in this semester yet.</div>'}
  </div>`;
}

/* ---------------- Render every course as its own card + nav pill ---------------- */
function renderModules(){
    const host = document.getElementById('modulesHost');
    const navInner = document.getElementById('jumpnavInner');
    navInner.querySelectorAll('a[data-modnav]').forEach(a=>a.remove());
    host.innerHTML = '';

    (CONTENT.courses||[]).forEach(course=>{
        const totalModules = (course.semesters||[]).reduce((n,s)=>n+(s.modules||[]).length,0);
        const sec = document.createElement('section');
        sec.className = 'section course-card';
        sec.id = course.id;
        sec.innerHTML = `<div class="section-head"><h2><span class="lbl-text">${esc(course.label)}</span></h2><div class="rule"></div><span class="count">${totalModules} modules</span></div>
      ${(course.semesters||[]).map(semesterCardHTML).join('') || '<div class="module-empty">No semesters yet.</div>'}`;
        host.appendChild(sec);

        const navLink = document.createElement('a');
        navLink.href = '#' + course.id;
        navLink.dataset.target = course.id;
        navLink.dataset.modnav = '1';
        navLink.innerHTML = `<svg viewBox="0 0 24 24">${navSvg('grid')}</svg>${esc(course.label)}`;
        navInner.appendChild(navLink);
    });

    applyTextSettings();
    rebuildSpyTargets();
}
function applyTextSettings(){
    const s = CONTENT.settings || {};
    if(s.siteTitle) document.querySelector('h1.title').textContent = s.siteTitle;
    if(s.siteSubtitle) document.querySelector('p.subtitle').textContent = s.siteSubtitle;
}

/* =========================================================
   AUTH
   ========================================================= */
// Owner password is never stored in plain text — only its SHA-256 hash
// lives in this file, so simply viewing the source does not reveal it.
// This is a plain, dependency-free SHA-256 implementation (not the
// browser's Web Crypto API) so it also works when the page is opened
// directly from disk via file:// — crypto.subtle is disabled by browsers
// on file:// / non-https origins, which silently broke the login button
// before.
const OWNER_USER = 'praveen';
const OWNER_HASH = '5f6d85795935b1867132762b3645e0e7e68be6b4450abfdf5192c61c79cad2d2';
const SESSION_KEY = 'amg_session_v1';

function sha256(ascii){
    function rightRotate(v,a){ return (v>>>a) | (v<<(32-a)); }
    const mathPow = Math.pow;
    const maxWord = mathPow(2,32);
    let result = '';
    const words = [];
    const asciiBitLength = ascii.length*8;
    let hash = sha256.h = sha256.h || [];
    const k = sha256.k = sha256.k || [];
    let primeCounter = k.length;
    const isComposite = {};
    for(let candidate=2; primeCounter<64; candidate++){
        if(!isComposite[candidate]){
            for(let i=0;i<313;i+=candidate) isComposite[i]=candidate;
            hash[primeCounter] = (mathPow(candidate,0.5)*maxWord)|0;
            k[primeCounter++] = (mathPow(candidate,1/3)*maxWord)|0;
        }
    }
    ascii += '\x80';
    while(ascii.length%64-56) ascii += '\x00';
    for(let i=0;i<ascii.length;i++){
        const j = ascii.charCodeAt(i);
        if(j>>8) return '';
        words[i>>2] |= j << ((3-i)%4)*8;
    }
    words[words.length] = ((asciiBitLength/maxWord)|0);
    words[words.length] = (asciiBitLength);
    for(let j=0;j<words.length;){
        const w = words.slice(j,j+=16);
        const oldHash = hash;
        hash = hash.slice(0,8);
        for(let i=0;i<64;i++){
            const w15 = w[i-15], w2 = w[i-2];
            const a = hash[0], e = hash[4];
            const temp1 = hash[7]
                + (rightRotate(e,6) ^ rightRotate(e,11) ^ rightRotate(e,25))
                + ((e&hash[5])^((~e)&hash[6]))
                + k[i]
                + (w[i] = (i<16) ? w[i] : (
                    w[i-16]
                    + (rightRotate(w15,7) ^ rightRotate(w15,18) ^ (w15>>>3))
                    + w[i-7]
                    + (rightRotate(w2,17) ^ rightRotate(w2,19) ^ (w2>>>10))
                )|0);
            const temp2 = (rightRotate(a,2) ^ rightRotate(a,13) ^ rightRotate(a,22))
                + ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2]));
            hash = [(temp1+temp2)|0].concat(hash);
            hash[4] = (hash[4]+temp1)|0;
        }
        for(let i=0;i<8;i++){
            hash[i] = (hash[i]+oldHash[i])|0;
        }
    }
    for(let i=0;i<8;i++){
        for(let j=3;j+1;j--){
            const b = (hash[i]>>(j*8))&255;
            result += ((b<16)?'0':'')+b.toString(16);
        }
    }
    return result;
}

function getSession(){
    try{ return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); }catch(e){ return null; }
}
function setSession(s){ localStorage.setItem(SESSION_KEY, JSON.stringify(s)); }
function clearSession(){ localStorage.removeItem(SESSION_KEY); }

function openLoginModal(){
    document.getElementById('loginError').classList.remove('show');
    document.getElementById('loginUser').value = '';
    document.getElementById('loginPass').value = '';
    document.getElementById('loginScreen').classList.add('open');
    setTimeout(()=> document.getElementById('loginUser').focus(), 50);
}
function closeLoginModal(){
    document.getElementById('loginScreen').classList.remove('open');
}

async function handleLogin(e){
    e.preventDefault();
    const u = document.getElementById('loginUser').value.trim();
    const p = document.getElementById('loginPass').value;
    const errBox = document.getElementById('loginError');
    errBox.classList.remove('show');
    if(!u || !p){
        errBox.textContent = 'Please enter both a username and password.';
        errBox.classList.add('show');
        return;
    }
    const hash = await sha256(p);
    if(u.toLowerCase() === OWNER_USER && hash === OWNER_HASH){
        setSession({ user: u, role: 'owner' });
        closeLoginModal();
        enterSite();
        return;
    }
    errBox.textContent = 'Incorrect username or password.';
    errBox.classList.add('show');
}

// The site itself is always visible to everyone — no gate. Logging in
// only ever unlocks the Owner Panel for the site owner; nothing else
// in the app is restricted, so there is no separate "guest" role.
function enterSite(){
    const session = getSession();
    const isOwner = !!(session && session.role === 'owner');
    document.getElementById('ownerLoginBtn').classList.toggle('hidden', isOwner);
    document.getElementById('ubBadge').classList.toggle('hidden', !isOwner);
    document.getElementById('ownerPanelBtn').classList.toggle('hidden', !isOwner);
    document.getElementById('logoutBtn').classList.toggle('hidden', !isOwner);
    if(isOwner){
        document.getElementById('ubName').textContent = 'Owner';
    }
    showSiteView();
}

document.getElementById('loginForm').addEventListener('submit', handleLogin);
document.getElementById('ownerLoginBtn').addEventListener('click', openLoginModal);
document.getElementById('loginCloseBtn').addEventListener('click', closeLoginModal);
document.getElementById('loginScreen').addEventListener('click', (e)=>{
    if(e.target.id === 'loginScreen') closeLoginModal();
});
document.getElementById('logoutBtn').addEventListener('click', ()=>{
    clearSession();
    showSiteView();
    enterSite();
});

/* ---------------- View switching ---------------- */
function showSiteView(){
    document.getElementById('content').style.display = '';
    document.querySelector('header.hero').style.display = '';
    document.querySelector('nav.jumpnav').style.display = '';
    document.querySelector('footer').style.display = '';
    document.getElementById('adminView').classList.remove('show');
}
function showAdminView(){
    document.getElementById('content').style.display = 'none';
    document.querySelector('header.hero').style.display = 'none';
    document.querySelector('nav.jumpnav').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    document.getElementById('adminView').classList.add('show');
    window.scrollTo({top:0});
    renderAdminPanel();
}
document.getElementById('ownerPanelBtn').addEventListener('click', ()=>{
    const s = getSession();
    if(s && s.role === 'owner') showAdminView();
});
document.getElementById('backToSiteBtn').addEventListener('click', showSiteView);

/* =========================================================
   ADMIN PANEL — tabs
   ========================================================= */
document.querySelectorAll('.admin-tab').forEach(tab=>{
    tab.addEventListener('click', ()=>{
        document.querySelectorAll('.admin-tab').forEach(t=>t.classList.remove('active'));
        document.querySelectorAll('.admin-page').forEach(p=>p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.page).classList.add('active');
    });
});

function flash(id, text, ok){
    const el = document.getElementById(id);
    el.textContent = text;
    el.className = 'admin-msg ' + (ok ? 'ok' : 'err');
    setTimeout(()=>{ el.className = 'admin-msg'; }, 3500);
}

/* ---------------- Tree lookup helpers (Course → Semester → Module) ---------------- */
function courseById(id){ return CONTENT.courses.find(c=>c.id===id); }
function findSemester(semId){
    for(const c of CONTENT.courses){
        const s = (c.semesters||[]).find(x=>x.id===semId);
        if(s) return { course:c, semester:s };
    }
    return null;
}
function findModule(modId){
    for(const c of CONTENT.courses){
        for(const s of (c.semesters||[])){
            const m = (s.modules||[]).find(x=>x.id===modId);
            if(m) return { course:c, semester:s, module:m };
        }
    }
    return null;
}
function slugify(name, existing){
    let id = (name||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') || ('id' + Date.now());
    if(existing.includes(id)) id = id + '-' + Date.now().toString(36).slice(-4);
    return id;
}
function allIds(){
    const ids = [];
    CONTENT.courses.forEach(c=>{ ids.push(c.id); (c.semesters||[]).forEach(s=>{ ids.push(s.id); (s.modules||[]).forEach(m=>ids.push(m.id)); }); });
    return ids;
}

/* ---------------- Cascading selects (preserve current selection across re-renders) ---------------- */
function fillSelectPreserve(sel, optionsHtml){
    const prev = sel.value;
    sel.innerHTML = optionsHtml;
    if([...sel.options].some(o=>o.value===prev)) sel.value = prev;
}
function fillCourseSelect(sel){
    fillSelectPreserve(sel, CONTENT.courses.map(c=>`<option value="${c.id}">${esc(c.label)}</option>`).join(''));
}
function fillSemesterSelect(sel, courseId){
    const c = courseById(courseId);
    fillSelectPreserve(sel, (c ? c.semesters : []).map(s=>`<option value="${s.id}">${esc(s.label)}</option>`).join(''));
}
function fillModuleSelectFor(sel, courseId, semId){
    const c = courseById(courseId);
    const s = c ? (c.semesters||[]).find(x=>x.id===semId) : null;
    fillSelectPreserve(sel, (s ? s.modules : []).map(m=>`<option value="${m.id}">${esc(m.label)}</option>`).join(''));
}
function refreshAddCascade(){
    const courseSel = document.getElementById('addCourseSelect');
    const semSel = document.getElementById('addSemesterSelect');
    const modSel = document.getElementById('addModuleSelect');
    fillCourseSelect(courseSel);
    fillSemesterSelect(semSel, courseSel.value);
    fillModuleSelectFor(modSel, courseSel.value, semSel.value);
}
document.getElementById('addCourseSelect').addEventListener('change', ()=>{
    fillSemesterSelect(document.getElementById('addSemesterSelect'), document.getElementById('addCourseSelect').value);
    fillModuleSelectFor(document.getElementById('addModuleSelect'), document.getElementById('addCourseSelect').value, document.getElementById('addSemesterSelect').value);
});
document.getElementById('addSemesterSelect').addEventListener('change', ()=>{
    fillModuleSelectFor(document.getElementById('addModuleSelect'), document.getElementById('addCourseSelect').value, document.getElementById('addSemesterSelect').value);
});
document.getElementById('newModCourseSelect').addEventListener('change', ()=>{
    fillSemesterSelect(document.getElementById('newModSemSelect'), document.getElementById('newModCourseSelect').value);
});

function renderAdminPanel(){
    const totalModules = CONTENT.courses.reduce((n,c)=>n+(c.semesters||[]).reduce((n2,s)=>n2+(s.modules||[]).length,0),0);
    const totalRes = CONTENT.courses.reduce((n,c)=>n+(c.semesters||[]).reduce((n2,s)=>n2+(s.modules||[]).reduce((n3,m)=>n3+(m.resources||[]).length+(m.pdfs||[]).length,0),0),0);
    document.getElementById('statusSummary').textContent =
        `${CONTENT.courses.length} courses · ${totalModules} modules · ${totalRes} resource/PDF items · site title "${CONTENT.settings.siteTitle}".`;

    refreshAddCascade();
    fillCourseSelect(document.getElementById('newSemCourseSelect'));
    fillCourseSelect(document.getElementById('newModCourseSelect'));
    fillSemesterSelect(document.getElementById('newModSemSelect'), document.getElementById('newModCourseSelect').value);

    // Page text
    document.getElementById('siteTitleInput').value = CONTENT.settings.siteTitle || '';
    document.getElementById('siteSubtitleInput').value = CONTENT.settings.siteSubtitle || '';
    let labelRows = '';
    CONTENT.courses.forEach(c=>{
        labelRows += `<div class="label-row"><span title="${esc(c.id)}">${esc(c.id)}</span><input type="text" data-label-id="${c.id}" data-label-kind="course" value="${esc(c.label)}"></div>`;
        (c.semesters||[]).forEach(s=>{
            labelRows += `<div class="label-row" style="padding-left:18px;"><span title="${esc(s.id)}">↳ ${esc(s.id)}</span><input type="text" data-label-id="${s.id}" data-label-kind="semester" value="${esc(s.label)}"></div>`;
            (s.modules||[]).forEach(m=>{
                labelRows += `<div class="label-row" style="padding-left:36px;"><span title="${esc(m.id)}">↳ ${esc(m.id)}</span><input type="text" data-label-id="${m.id}" data-label-kind="module" value="${esc(m.label)}"></div>`;
            });
        });
    });
    document.getElementById('labelListHost').innerHTML = labelRows;

    renderStructureHost();
}

/* ---------------- Add a resource / PDF / repo — all target the module chosen in the Add tab cascade ---------------- */
function currentAddModule(){
    const modId = document.getElementById('addModuleSelect').value;
    const found = findModule(modId);
    return found ? found.module : null;
}
document.getElementById('addItemBtn').addEventListener('click', ()=>{
    const m = currentAddModule();
    const title = document.getElementById('addItemTitle').value.trim();
    const url = document.getElementById('addItemUrl').value.trim();
    if(!m){ flash('addItemMsg','Create a module first (Structure tab).', false); return; }
    if(!title || !url){ flash('addItemMsg','Please add a title and a link.', false); return; }
    m.resources = m.resources || [];
    m.resources.push({ id: uid(), t: title, u: url, i: driveAwareIcon(url), visible: true });
    saveDraft();
    document.getElementById('addItemTitle').value = '';
    document.getElementById('addItemUrl').value = '';
    flash('addItemMsg','Resource added to "' + m.label + '".', true);
    renderModules();
    renderAdminPanel();
});
document.getElementById('pdfAddBtn').addEventListener('click', ()=>{
    const m = currentAddModule();
    const title = document.getElementById('pdfTitle').value.trim();
    const url = document.getElementById('pdfUrl').value.trim();
    if(!m){ flash('pdfAddMsg','Create a module first (Structure tab).', false); return; }
    if(!title || !url){ flash('pdfAddMsg','Please add a title and a link.', false); return; }
    m.pdfs = m.pdfs || [];
    m.pdfs.push({ id: uid(), t: title, u: url, i: 'drive', visible: true });
    saveDraft();
    document.getElementById('pdfTitle').value = '';
    document.getElementById('pdfUrl').value = '';
    flash('pdfAddMsg','Drive/PDF card added to "' + m.label + '".', true);
    renderModules();
    renderAdminPanel();
});
document.getElementById('repoAddBtn').addEventListener('click', ()=>{
    const m = currentAddModule();
    const personName = document.getElementById('repoPersonName').value.trim();
    const profileUrl = document.getElementById('repoProfileUrl').value.trim();
    const repoTitle = document.getElementById('repoTitle').value.trim();
    const repoUrl = document.getElementById('repoUrl').value.trim();
    if(!m){ flash('repoAddMsg','Create a module first (Structure tab).', false); return; }
    if(!personName || !repoTitle || !repoUrl){ flash('repoAddMsg','Please add a person name, repo title and repo URL.', false); return; }
    m.repos = m.repos || [];
    let person = m.repos.find(p => p.n.toLowerCase() === personName.toLowerCase());
    if(!person){
        person = { id: uid(), n: personName, p: profileUrl || '#', visible: true, l: [] };
        m.repos.push(person);
    } else if(profileUrl){
        person.p = profileUrl;
    }
    person.l = person.l || [];
    person.l.push({ t: repoTitle, u: repoUrl });
    saveDraft();
    document.getElementById('repoPersonName').value = '';
    document.getElementById('repoProfileUrl').value = '';
    document.getElementById('repoTitle').value = '';
    document.getElementById('repoUrl').value = '';
    flash('repoAddMsg','Repo added to "' + m.label + '".', true);
    renderModules();
    renderAdminPanel();
});

/* ---------------- Create Course / Semester / Module ---------------- */
document.getElementById('newCourseBtn').addEventListener('click', ()=>{
    const name = document.getElementById('newCourseName').value.trim();
    if(!name){ flash('newCourseMsg','Give the course a name first.', false); return; }
    CONTENT.courses.push({ id: slugify(name, allIds()), label: name, locked:false, semesters: [] });
    saveDraft(); document.getElementById('newCourseName').value = '';
    flash('newCourseMsg','Course created.', true);
    renderModules(); renderAdminPanel();
});
document.getElementById('newSemBtn').addEventListener('click', ()=>{
    const courseId = document.getElementById('newSemCourseSelect').value;
    const name = document.getElementById('newSemName').value.trim();
    const c = courseById(courseId);
    if(!c){ flash('newSemMsg','Create a course first.', false); return; }
    if(!name){ flash('newSemMsg','Give the semester a name first.', false); return; }
    c.semesters = c.semesters || [];
    c.semesters.push({ id: slugify(c.id + '-' + name, allIds()), label: name, locked:false, modules: [] });
    saveDraft(); document.getElementById('newSemName').value = '';
    flash('newSemMsg','Semester created under "' + c.label + '".', true);
    renderModules(); renderAdminPanel();
});
document.getElementById('newModBtn').addEventListener('click', ()=>{
    const courseId = document.getElementById('newModCourseSelect').value;
    const semId = document.getElementById('newModSemSelect').value;
    const name = document.getElementById('newModName').value.trim();
    const c = courseById(courseId);
    const s = c ? (c.semesters||[]).find(x=>x.id===semId) : null;
    if(!s){ flash('newModMsg','Create a semester first.', false); return; }
    if(!name){ flash('newModMsg','Give the module a name first.', false); return; }
    s.modules = s.modules || [];
    s.modules.push({ id: slugify(s.id + '-' + name, allIds()), label: name, locked:false, resources:[], pdfs:[], repos:[] });
    saveDraft(); document.getElementById('newModName').value = '';
    flash('newModMsg','Module created under "' + s.label + '".', true);
    renderModules(); renderAdminPanel();
});

/* ---------------- Structure tree (rename / hide / delete at every level) ---------------- */
function itemEditRow(kind, keys, item){
    // kind: 'res' | 'pdf' | 'person' | 'link'
    const key = keys.join('|||');
    if(kind === 'person'){
        return `<div class="item-edit-row">
      <span class="toggle"><input type="checkbox" ${item.visible!==false?'checked':''} data-vis="p|||${key}"><span class="slider"></span></span>
      <input type="text" value="${esc(item.n)}" data-f="name" data-key="${key}" placeholder="Person name">
      <input type="text" value="${esc(item.p||'')}" data-f="profile" data-key="${key}" placeholder="GitHub profile URL">
      <button class="it-save" data-save="person|||${key}" title="Save">✓</button>
      <button class="it-del" data-del="person|||${key}" title="Delete person">✕</button>
    </div>` + (item.l||[]).map((link,li)=>`<div class="item-edit-row" style="padding-left:20px;">
      <input type="text" value="${esc(link.t)}" data-f="linkt" data-key="${key}|||${li}" placeholder="Repo title">
      <input type="text" value="${esc(link.u)}" data-f="linku" data-key="${key}|||${li}" placeholder="Repo URL">
      <button class="it-save" data-save="link|||${key}|||${li}" title="Save">✓</button>
      <button class="it-del" data-del="link|||${key}|||${li}" title="Delete repo link">✕</button>
    </div>`).join('');
    }
    const isRes = kind === 'res';
    return `<div class="item-edit-row">
    <span class="toggle"><input type="checkbox" ${item.visible!==false?'checked':''} data-vis="${kind}|||${key}"><span class="slider"></span></span>
    <input type="text" value="${esc(item.t)}" data-f="title" data-key="${key}" placeholder="Title">
    <input type="text" value="${esc(item.u)}" data-f="url" data-key="${key}" placeholder="URL">
    <button class="it-save" data-save="${kind}|||${key}" title="Save">✓</button>
    <button class="it-del" data-del="${kind}|||${key}" title="Delete">✕</button>
  </div>`;
}
function renderStructureHost(){
    const host = document.getElementById('structureHost');
    let html = '';
    CONTENT.courses.forEach(course=>{
        html += `<div class="module-block" style="border-left:3px solid var(--blue-600);">
      <div class="mb-head">
        <div class="mb-title">📘 ${esc(course.label)}<small>Course · id: ${esc(course.id)}${course.locked?'':' · custom'}</small></div>
        ${course.locked ? '' : `<button class="it-del" data-del-course="${course.id}" title="Delete course">✕</button>`}
      </div>`;
        (course.semesters||[]).forEach(sem=>{
            html += `<div style="margin:10px 0 6px 14px;padding-left:12px;border-left:2px dashed var(--blue-100);">
        <div class="mb-head" style="margin-bottom:6px;">
          <div class="mb-title" style="font-size:13.5px;">📗 ${esc(sem.label)}<small>Semester · id: ${esc(sem.id)}${sem.locked?'':' · custom'}</small></div>
          ${sem.locked ? '' : `<button class="it-del" data-del-sem="${course.id}|||${sem.id}" title="Delete semester">✕</button>`}
        </div>`;
            (sem.modules||[]).forEach(mod=>{
                const resItems = (mod.resources||[]).map(r=>itemEditRow('res',[mod.id,r.id],r)).join('');
                const pdfItems = (mod.pdfs||[]).map(p=>itemEditRow('pdf',[mod.id,p.id],p)).join('');
                const repoItems = (mod.repos||[]).map(p=>itemEditRow('person',[mod.id,p.id],p)).join('');
                html += `<div style="margin:8px 0 10px 14px;padding:10px 12px;border-radius:10px;background:var(--blue-50);">
          <div class="mb-head" style="margin-bottom:4px;">
            <div class="mb-title" style="font-size:13px;">📙 ${esc(mod.label)}<small>Module · id: ${esc(mod.id)}${mod.locked?'':' · custom'}</small></div>
            ${mod.locked ? '' : `<button class="it-del" data-del-mod="${mod.id}" title="Delete module">✕</button>`}
          </div>
          <div style="font-size:11px;font-weight:700;color:var(--blue-700);margin-top:8px;">📄 Resources</div>
          ${resItems || '<div class="empty-note">None yet.</div>'}
          <div style="font-size:11px;font-weight:700;color:#C2410C;margin-top:8px;">📁 PDF / Drive</div>
          ${pdfItems || '<div class="empty-note">None yet.</div>'}
          <div style="font-size:11px;font-weight:700;color:var(--blue-700);margin-top:8px;">🐙 Lecture Repo</div>
          ${repoItems || '<div class="empty-note">None yet.</div>'}
        </div>`;
            });
        });
        html += `</div>`;
    });
    host.innerHTML = html || '<p class="empty-note">Nothing yet — create a course first.</p>';
    wireStructureHandlers(host);
}
function wireStructureHandlers(host){
    host.querySelectorAll('[data-vis]').forEach(cb=>{
        cb.addEventListener('change', ()=>{
            const [kind, modId, itemId] = cb.dataset.vis.split('|||');
            const found = findModule(modId);
            if(!found) return;
            const arr = kind==='res' ? found.module.resources : kind==='pdf' ? found.module.pdfs : found.module.repos;
            const item = (arr||[]).find(x=>x.id===itemId);
            if(item){ item.visible = cb.checked; saveDraft(); renderModules(); }
        });
    });
    host.querySelectorAll('[data-save]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            const parts = btn.dataset.save.split('|||');
            const kind = parts[0];
            if(kind === 'person'){
                const modId = parts[1], itemId = parts[2];
                const found = findModule(modId);
                if(!found) return;
                const person = (found.module.repos||[]).find(x=>x.id===itemId);
                const key = modId + '|||' + itemId;
                const nameInput = host.querySelector(`[data-f="name"][data-key="${key}"]`);
                const profInput = host.querySelector(`[data-f="profile"][data-key="${key}"]`);
                if(person && nameInput){
                    person.n = nameInput.value.trim() || person.n;
                    person.p = (profInput && profInput.value.trim()) || person.p;
                    saveDraft(); renderModules(); flash('repoAddMsg','Saved.', true);
                }
            } else if(kind === 'link'){
                const modId = parts[1], itemId = parts[2], li = parts[3];
                const found = findModule(modId);
                if(!found) return;
                const person = (found.module.repos||[]).find(x=>x.id===itemId);
                const key = modId + '|||' + itemId + '|||' + li;
                const tInput = host.querySelector(`[data-f="linkt"][data-key="${key}"]`);
                const uInput = host.querySelector(`[data-f="linku"][data-key="${key}"]`);
                if(person && person.l && person.l[li] && tInput && uInput){
                    person.l[li].t = tInput.value.trim() || person.l[li].t;
                    person.l[li].u = uInput.value.trim() || person.l[li].u;
                    saveDraft(); renderModules(); flash('repoAddMsg','Saved.', true);
                }
            } else {
                // 'res' or 'pdf'
                const modId = parts[1], itemId = parts[2];
                const found = findModule(modId);
                if(!found) return;
                const arr = kind==='res' ? found.module.resources : found.module.pdfs;
                const item = (arr||[]).find(x=>x.id===itemId);
                const key = modId + '|||' + itemId;
                const titleInput = host.querySelector(`[data-f="title"][data-key="${key}"]`);
                const urlInput = host.querySelector(`[data-f="url"][data-key="${key}"]`);
                if(item && titleInput && urlInput){
                    item.t = titleInput.value.trim() || item.t;
                    item.u = urlInput.value.trim() || item.u;
                    if(kind==='res') item.i = driveAwareIcon(item.u, item.i);
                    saveDraft(); renderModules();
                    flash(kind==='pdf' ? 'pdfAddMsg' : 'addItemMsg','Saved.', true);
                }
            }
        });
    });
    host.querySelectorAll('[data-del]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            const parts = btn.dataset.del.split('|||');
            const kind = parts[0];
            if(!confirm('Delete this?')) return;
            if(kind === 'person'){
                const modId = parts[1], itemId = parts[2];
                const found = findModule(modId);
                if(found) found.module.repos = (found.module.repos||[]).filter(x=>x.id!==itemId);
            } else if(kind === 'link'){
                const modId = parts[1], itemId = parts[2], li = parts[3];
                const found = findModule(modId);
                const person = found ? (found.module.repos||[]).find(x=>x.id===itemId) : null;
                if(person && person.l) person.l.splice(li,1);
            } else {
                const modId = parts[1], itemId = parts[2];
                const found = findModule(modId);
                if(found){
                    if(kind==='res') found.module.resources = (found.module.resources||[]).filter(x=>x.id!==itemId);
                    else found.module.pdfs = (found.module.pdfs||[]).filter(x=>x.id!==itemId);
                }
            }
            saveDraft(); renderModules(); renderAdminPanel();
        });
    });
    host.querySelectorAll('[data-del-mod]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            if(!confirm('Delete this whole module and everything in it?')) return;
            const modId = btn.dataset.delMod;
            const found = findModule(modId);
            if(found) found.semester.modules = found.semester.modules.filter(x=>x.id!==modId);
            saveDraft(); renderModules(); renderAdminPanel();
        });
    });
    host.querySelectorAll('[data-del-sem]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            if(!confirm('Delete this whole semester and everything in it?')) return;
            const [courseId, semId] = btn.dataset.delSem.split('|||');
            const c = courseById(courseId);
            if(c) c.semesters = c.semesters.filter(x=>x.id!==semId);
            saveDraft(); renderModules(); renderAdminPanel();
        });
    });
    host.querySelectorAll('[data-del-course]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            if(!confirm('Delete this whole course and everything in it?')) return;
            const courseId = btn.dataset.delCourse;
            CONTENT.courses = CONTENT.courses.filter(x=>x.id!==courseId);
            saveDraft(); renderModules(); renderAdminPanel();
        });
    });
}

/* ---------------- Page text (site title/subtitle + course/semester/module labels) ---------------- */
document.getElementById('saveTextBtn').addEventListener('click', ()=>{
    CONTENT.settings.siteTitle = document.getElementById('siteTitleInput').value.trim() || CONTENT.settings.siteTitle;
    CONTENT.settings.siteSubtitle = document.getElementById('siteSubtitleInput').value.trim() || CONTENT.settings.siteSubtitle;
    document.querySelectorAll('#labelListHost [data-label-id]').forEach(inp=>{
        const val = inp.value.trim();
        if(!val) return;
        const kind = inp.dataset.labelKind;
        if(kind === 'course'){ const c = courseById(inp.dataset.labelId); if(c) c.label = val; }
        else if(kind === 'semester'){ const f = findSemester(inp.dataset.labelId); if(f) f.semester.label = val; }
        else { const f = findModule(inp.dataset.labelId); if(f) f.module.label = val; }
    });
    saveDraft();
    renderModules();
    flash('textMsg','Page text updated.', true);
});

/* =========================================================
   GITHUB SYNC — publish CONTENT to data.json in the repo
   ========================================================= */
function loadGhConfig(){
    try{ return JSON.parse(localStorage.getItem(GH_CONFIG_KEY) || 'null') || {}; }catch(e){ return {}; }
}
function saveGhConfig(cfg){ localStorage.setItem(GH_CONFIG_KEY, JSON.stringify(cfg)); }

function ghStatus(text, kind){
    const el = document.getElementById('ghStatus');
    el.textContent = text;
    el.className = 'gh-status ' + (kind||'pending');
}
function b64EncodeUnicode(str){
    return btoa(unescape(encodeURIComponent(str)));
}
function b64DecodeUnicode(str){
    return decodeURIComponent(escape(atob(str)));
}

function initGhTab(){
    const cfg = loadGhConfig();
    document.getElementById('ghRepo').value = cfg.repo || 'slgunasekara/AMG-Notes';
    document.getElementById('ghBranch').value = cfg.branch || 'main';
    document.getElementById('ghToken').value = cfg.token || '';
    document.getElementById('ghConnectedBadge').style.display = cfg.token ? '' : 'none';
    if(cfg.token) document.getElementById('ghUserLabel').textContent = cfg.repo || '';
}

document.getElementById('ghSaveConfigBtn').addEventListener('click', ()=>{
    const cfg = {
        repo: document.getElementById('ghRepo').value.trim(),
        branch: document.getElementById('ghBranch').value.trim() || 'main',
        token: document.getElementById('ghToken').value.trim()
    };
    if(!cfg.repo || !cfg.token){ ghStatus('Please fill in the repo (owner/repo) and a token.', 'err'); return; }
    saveGhConfig(cfg);
    initGhTab();
    ghStatus('Connection saved in this browser.', 'ok');
});
document.getElementById('ghForgetBtn').addEventListener('click', ()=>{
    localStorage.removeItem(GH_CONFIG_KEY);
    document.getElementById('ghToken').value = '';
    document.getElementById('ghConnectedBadge').style.display = 'none';
    ghStatus('Token removed from this browser.', 'ok');
});

async function ghGetFile(cfg){
    const url = `https://api.github.com/repos/${cfg.repo}/contents/data.json?ref=${encodeURIComponent(cfg.branch)}`;
    const res = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + cfg.token,
            'Accept': 'application/vnd.github+json'
        }
    });
    if(res.status === 404) return null; // file doesn't exist yet
    if(!res.ok) throw new Error('GitHub error ' + res.status + ': ' + (await res.text()).slice(0,200));
    return res.json();
}

document.getElementById('ghPullBtn').addEventListener('click', async ()=>{
    const cfg = { repo: document.getElementById('ghRepo').value.trim(), branch: document.getElementById('ghBranch').value.trim() || 'main', token: document.getElementById('ghToken').value.trim() };
    if(!cfg.repo){ ghStatus('Enter the repo first (owner/repo).', 'err'); return; }
    ghStatus('Pulling latest data.json…', 'pending');
    try{
        const headers = cfg.token ? { 'Authorization': 'Bearer ' + cfg.token, 'Accept':'application/vnd.github+json' } : {};
        const file = await ghGetFile(cfg);
        if(!file){ ghStatus('No data.json found yet in that repo/branch — nothing to pull.', 'err'); return; }
        const jsonText = b64DecodeUnicode(file.content.replace(/\n/g,''));
        CONTENT = JSON.parse(jsonText);
        PUBLISHED_SHA = file.sha;
        saveDraft();
        renderModules();
        renderAdminPanel();
        ghStatus('Pulled the latest published content. Your local draft was replaced.', 'ok');
    }catch(err){
        ghStatus('Could not pull: ' + err.message, 'err');
    }
});

document.getElementById('ghPublishBtn').addEventListener('click', async ()=>{
    const cfg = {
        repo: document.getElementById('ghRepo').value.trim(),
        branch: document.getElementById('ghBranch').value.trim() || 'main',
        token: document.getElementById('ghToken').value.trim()
    };
    if(!cfg.repo || !cfg.token){ ghStatus('Fill in repo and token, then Save connection first.', 'err'); return; }
    ghStatus('Publishing…', 'pending');
    try{
        let sha = PUBLISHED_SHA;
        if(!sha){
            const existing = await ghGetFile(cfg);
            sha = existing ? existing.sha : undefined;
        }
        const body = {
            message: 'Update site content via Owner Panel',
            content: b64EncodeUnicode(JSON.stringify(CONTENT, null, 2)),
            branch: cfg.branch
        };
        if(sha) body.sha = sha;
        const res = await fetch(`https://api.github.com/repos/${cfg.repo}/contents/data.json`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + cfg.token,
                'Accept': 'application/vnd.github+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if(!res.ok){
            const errText = await res.text();
            throw new Error('GitHub error ' + res.status + ': ' + errText.slice(0,300));
        }
        const data = await res.json();
        PUBLISHED_SHA = data.content.sha;
        saveGhConfig(cfg);
        ghStatus('Published! data.json committed to ' + cfg.repo + ' (' + cfg.branch + ').', 'ok');
    }catch(err){
        ghStatus('Publish failed: ' + err.message, 'err');
    }
});

/* ---------------- Backup (export / import / reset) ---------------- */
document.getElementById('exportBtn').addEventListener('click', ()=>{
    const blob = new Blob([JSON.stringify(CONTENT, null, 2)], {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'amg-notes-backup.json';
    a.click();
});
document.getElementById('importBtn').addEventListener('click', ()=> document.getElementById('importFile').click());
document.getElementById('importFile').addEventListener('change', (e)=>{
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = ()=>{
        try{
            const data = JSON.parse(reader.result);
            if(!data.courses || !data.settings) throw new Error('not a valid AMG Notes backup file');
            CONTENT = data;
            saveDraft();
            renderModules();
            renderAdminPanel();
            flash('backupMsg','Backup imported into this browser as your current draft.', true);
        }catch(err){ flash('backupMsg','That file could not be read: ' + err.message, false); }
    };
    reader.readAsText(file);
    e.target.value = '';
});
document.getElementById('resetBtn').addEventListener('click', async ()=>{
    if(!confirm('This discards any unpublished changes in this browser and reloads the last published version. Continue?')) return;
    localStorage.removeItem(CONTENT_KEY);
    await loadContent();
    renderModules();
    renderAdminPanel();
    flash('backupMsg','Reloaded the last published content.', true);
});

/* =========================================================
   AI CHATBOT (hardcoded replies only — no external API calls)
   Rules use whole-word matching so short keywords (like "hi") never
   accidentally match inside unrelated words (like "th-hi-s").
   ========================================================= */
const CREATOR_REPLY = `This notes hub was built by <b>Praveena Gunasekara</b>.<br>
      🔗 <a href="https://github.com/slgunasekara" target="_blank" rel="noopener">GitHub</a><br>
      🔗 <a href="https://www.facebook.com/" target="_blank" rel="noopener">Facebook</a><br>
      🔗 <a href="https://slgunasekara.github.io/amg-portfolio/" target="_blank" rel="noopener">Portfolio</a><br>
      🏢 Company: <a href="https://slgunasekara.github.io/AMGLankaGroup/" target="_blank" rel="noopener">AMG Lanka Group</a>`;

const CHAT_RULES = [
    { k:['who made','who created','who built','who is the creator','who is the developer','creator','developer','who is created','owner of this site','who is the owner','admin of this site'], r: CREATOR_REPLY },
    { k:['login','log in','sign in','password','how do i login','how do i log in'], r:'You don\'t need to log in at all to browse the notes — everything here is open. The "🔒 Owner Login" button at the top-right is only for the site owner, to unlock the Owner Panel for editing the page.' },
    { k:['find notes','how do i find','search','notes'], r:'Use the search bar at the top, or jump to a section from the nav bar — every module (CAME, SEM 1, SEM 2, Lecture Docs, repos, and any custom sections the owner has added) has its own pill.' },
    { k:['semester 3','sem 3','semester 4','sem 4','semester 5','sem 5','other course','other courses'], r:'If the owner has published a Semester 3/4/5 or Other Courses section, you\'ll see it in the top nav bar automatically.' },
    { k:['owner panel','customize','admin panel'], r:'Only the owner account can open the Owner Panel — from there they can add resources, publish/hide/rename cards, create new modules, edit page text, and publish everything to GitHub.' },
    { k:['github'], r:'Here you go: <a href="https://github.com/slgunasekara" target="_blank" rel="noopener">github.com/slgunasekara</a>' },
    { k:['facebook'], r:'Here you go: <a href="https://www.facebook.com/" target="_blank" rel="noopener">facebook.com</a>' },
    { k:['portfolio'], r:'Here you go: <a href="https://slgunasekara.github.io/amg-portfolio/" target="_blank" rel="noopener">Praveena\'s portfolio</a>' },
    { k:['hi','hello','hey','ayubowan','vanakkam'], r:'Hi! 👋 I can help you find notes, explain how login works, or tell you who built this site. What do you need?' },
    { k:['thank', 'thanks', 'ok', 'okay'], r:'You\'re welcome! Anything else I can help with?' }
];
function escapeRegex(s){ return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }
function keywordMatches(msgLower, keyword){
    // whole-word / whole-phrase match so short keywords like "hi" never
    // fire on substrings inside unrelated words like "this"
    const re = new RegExp('(^|[^a-z0-9])' + escapeRegex(keyword) + '([^a-z0-9]|$)', 'i');
    return re.test(msgLower);
}
function getBotReply(msg){
    const m = msg.toLowerCase();
    for(const rule of CHAT_RULES){
        if(rule.k.some(kw => keywordMatches(m, kw))) return rule.r;
    }
    return 'I\'m a simple built-in assistant, so I only know about this notes hub — try asking how to login, how to find notes, or who created the site.';
}
function addChatMsg(text, who){
    const box = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'msg ' + (who === 'me' ? 'me' : 'bot');
    div.innerHTML = text;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}
function sendChat(text){
    if(!text) return;
    addChatMsg(esc(text), 'me');
    document.getElementById('chatInput').value = '';
    setTimeout(()=> addChatMsg(getBotReply(text), 'bot'), 300);
}
document.getElementById('chatToggleBtn').addEventListener('click', ()=>{
    const win = document.getElementById('chatWindow');
    win.classList.toggle('open');
    if(win.classList.contains('open') && !document.getElementById('chatMessages').children.length){
        addChatMsg('Hi! 👋 Ask me how to login, where to find your notes, or who built this site.', 'bot');
    }
});
document.getElementById('chatCloseBtn').addEventListener('click', ()=> document.getElementById('chatWindow').classList.remove('open'));
document.getElementById('chatSendBtn').addEventListener('click', ()=> sendChat(document.getElementById('chatInput').value.trim()));
document.getElementById('chatInput').addEventListener('keydown', (e)=>{ if(e.key==='Enter') sendChat(e.target.value.trim()); });
document.querySelectorAll('.chat-chip').forEach(chip=>{
    chip.addEventListener('click', ()=> sendChat(chip.dataset.q));
});

/* ---------------- Search ---------------- */
const searchBox = document.getElementById('searchBox');
const resultCount = document.getElementById('resultCount');
const noResults = document.getElementById('noResults');

searchBox.addEventListener('input', ()=>{
    const q = searchBox.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.card, .link-chip');
    const personCards = document.querySelectorAll('.person-card');
    let visible = 0;

    cards.forEach(el=>{
        const match = !q || el.dataset.search.includes(q);
        el.style.display = match ? '' : 'none';
        if(match) visible++;
    });

    personCards.forEach(pc=>{
        const anyChipVisible = [...pc.querySelectorAll('.link-chip')].some(c=>c.style.display !== 'none');
        const nameMatch = pc.dataset.search.includes(q);
        pc.style.display = (!q || anyChipVisible || nameMatch) ? '' : 'none';
    });

    resultCount.textContent = q ? visible + ' found' : '';
    noResults.style.display = (q && visible === 0) ? 'block' : 'none';

    document.querySelectorAll('.section').forEach(s=>s.style.display='');
});

/* ---------------- Scroll-spy for nav (rebuilt whenever modules change) ---------------- */
let spyObserver = null;
function rebuildSpyTargets(){
    const navLinks = document.querySelectorAll('#jumpnavInner a[data-target]');
    const ids = ['tools'].concat(CONTENT.courses.map(c=>c.id));
    const spyTargets = ids.map(id => document.getElementById(id)).filter(Boolean);

    if(spyObserver) spyObserver.disconnect();
    spyObserver = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const id = entry.target.id;
                navLinks.forEach(a=> a.classList.toggle('active', a.dataset.target === id));
            }
        });
    }, { rootMargin: '-100px 0px -70% 0px', threshold: 0 });

    spyTargets.forEach(el => spyObserver.observe(el));
}

/* ---------------- Back to top ---------------- */
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', ()=>{
    toTop.classList.toggle('show', window.scrollY > 500);
});
toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

/* ---------------- Basic right-click / devtools deterrent ---------------- */
/* Note: this only discourages casual users; it cannot truly prevent
   access to page source or devtools for anyone who knows how to
   disable JS, use browser dev menus, or view-source. */
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.key === 'F12') e.preventDefault();
    if (e.ctrlKey && e.shiftKey && ['I','J','C','i','j','c'].includes(e.key)) e.preventDefault();
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) e.preventDefault();
    if (e.ctrlKey && (e.key === 's' || e.key === 'S')) e.preventDefault();
});
document.addEventListener('selectstart', e => {
    if (e.target && e.target.id === 'searchBox') return;
    e.preventDefault();
});

/* ---------------- Boot ---------------- */
(async function boot(){
    renderTools();
    await loadContent();
    initGhTab();
    renderModules();
    enterSite();
    // Defensive: some browsers restore an autofilled/remembered value into
    // the search box on page load even with autocomplete="off" — force it
    // back to empty so the page never opens with a stray pre-filled search.
    setTimeout(()=>{ searchBox.value = ''; }, 0);
})();
