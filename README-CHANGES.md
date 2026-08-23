# AMG-Notes — v3 (Course → Semester → Module, cards-within-cards) — README

## නවතම fixes

1. **Owner name hide කළා** — Sign-in form එකේ username placeholder එකේ තිබ්බ "praveen" hint එකත්, login වුනාට පස්සේ top-right badge එකේ පෙන්නපු username එකත් අයින් කළා. දැන් "Owner" කියලා විතරයි පෙන්නන්නේ.
2. **Sign-in button click bug fix කළා** — Login card එකට දාපු continuous 3D floating animation එක (`loginFloat`) තමයි root cause එක — card එක continuously rotate/move වෙන නිසා cursor එක button එක උඩ තිබ්බත් click coordinate එකයි button එකේ actual (moved) position එකයි mismatch වෙලා click එක register වුනේ නෑ. Enter key එකෙන් සෘජුවම submit වෙන නිසා ඒකට මේ issue බලපාන්නේ නෑ. Animation එක අයින් කරලා card එක static කළා — දැන් click එකෙන්ම log වෙනවා.

## Files — දැන් වෙන වෙනම files වශයෙන්

කලින් `index.html` file එකකම හැම දෙයක්ම (CSS, JS) inline කරලා තිබුණා — ඒක නිසා `script.js` වගේ file එකක් වෙනම edit කරන්න බැරි වුනා. දැන් වෙන වෙනම files 5ක්:

- `index.html` — HTML structure විතරයි
- `styles.css` — CSS ඔක්කොම
- `script.js` — JS logic ඔක්කොම (admin panel, GitHub sync, chatbot, search — ඔක්කොම)
- `data.json` — site content (courses/semesters/modules)
- `assets/amg.png` — logo

ඔයාට `script.js` වෙනම edit කරන්න ඕන නම් දැන් ඒක ලේසියෙන් කරගන්න පුළුවන් — repo එකේ මේ 5 files ම root එකට upload කරන්න (folder structure එකම තියාගෙන, `assets/` folder එකත් සමගම).

## Structure

```
Course (CAME / HDSE)
  └─ Semester (Semester 1, Semester 2, ...)
       └─ Module (OOP, DBMS, PRF, ...)
            ├─ 📄 Resources     (notes / docs)
            ├─ 📁 PDF / Drive   (drive links)
            └─ 🐙 Lecture Repo  (GitHub repos)
```

## Visual design — cards within cards

- **Course card** → ඇතුළේ **Semester card** (light blue) → ඇතුළේ **Module card** (white) → ඇතුළේ **3 sub-cards**: 📄 Resources (blue) / 📁 PDF · Drive (orange) / 🐙 Lecture Repo (grey-blue).
- Resources සහ PDF cards දෙකම කලින් තිබ්බ ලස්සන 3D hover card design එකෙන්ම — chip නෙවෙයි. PDF cards වලට orange/red gradient icon එකක්.

## Search bar fix

Page load වෙනකොටම "amg" auto-fill වෙච්ච issue එක fix කළා — `autocomplete="off"` + boot වෙද්දී explicit clear එකක්.

## Owner Panel tabs

1. **Overview** — quick status.
2. **Add** — Course → Semester → Module select කරලා, Resource / PDF-Drive / GitHub repo add කරන්න.
3. **Structure** — New Course/Semester/Module හදන්න, tree එකෙන් rename/hide/delete කරන්න.
4. **Page Text** — site title/subtitle + හැම level එකකම label එක edit කරන්න.
5. **GitHub Sync** — token/repo save කරලා Publish කළාම `data.json` commit වෙනවා.
6. **Backup** — Export/Import/Reset.

## GitHub token

Token එක site code එකට කවදාවත් embed වෙන්නේ නෑ — Owner Panel → GitHub Sync → Save connection කළාම browser localStorage එකේ save වෙනවා විතරයි.

⚠️ කලින් chat එකේ share කරපු token එක revoke කරලා අලුත් fine-grained token එකක් හදාගන්න.

## Deploy කරන විදිය

`index.html`, `styles.css`, `script.js`, `data.json`, `assets/amg.png` — **files 5ම** ඔයාගේ `AMG-Notes` repo root එකට upload කරන්න (පරණ ඒවා replace කරලා). ඊට පස්සේ Owner Panel → GitHub Sync → Publish එකෙන්ම future changes push කරගන්න පුළුවන් (`data.json` විතරක් update වෙන්නේ, code files වෙනස් වෙන්නේ නෑ, unless code එකටම වෙනසක්).

## Login

Username/password කලින් තිබුණ ඒවගේම තියෙනවා.

## v4 — Site-wide login gate + course dropdown nav

1. **Site gate ඇවිත් තියෙනවා** — දැන් page එක load වෙන ගමන්ම, කලින් තිබ්බ "Owner Login" එකෙන් වෙනම, site එකම block කරන full-page login screen එකක් (`#siteGate`) පෙන්නනවා. හැමෝටම login වෙන්න ඕන — shared credentials: `amg` / `amg123`. Owner ගේ තමන්ගේ username/password එකෙන් login වුනොත් ඒකෙන්ම කෙලින්ම Owner Panel එකත් unlock වෙනවා (වෙනම Owner Login කරන්න ඕන නෑ). කලින් තිබ්බ "🔒 Owner Login" button එකෙන් open වෙන chota modal එක (`#loginScreen`) හරියටම කලින් වගේම තියෙනවා — guest login එකකින් පස්සේ owner බවට upgrade වෙන්න ඕන කෙනෙක්ට use කරන්න පුළුවන්.
2. **Design එක** — දාපු `log.PNG` reference image එකේ split-panel style එකට close කරලා හදලා තියෙනවා: left side dark-blue panel එකේ `assets/amg.png` logo එකයි brand name එකයි, right side එකේ login form එක. "Good Morning / Good Afternoon / Good Evening / Good Night" greeting එක browser එකේ current time එක අනුව auto වෙනස් වෙනවා, page load වුනාට පස්සේ 2 seconds ගානක් late වෙලා උඩ ඉඳන් පහළට fade-in වෙනවා (image එකේ තිබ්බ animation style එකට සමානව). Password field එකට show/hide (👁) toggle එකකුත්, "Remember me" checkbox එකකුත් (uncheck කළොත් browser tab එක close වුනාම login එක expire වෙනවා, check කළොත් permanent) දාලා තියෙනවා.
3. **Course dropdown nav** — Top nav bar එකේ course button එකක් click කළාම කලින් වගේ කෙලින්ම course එකට යන්නේ නෑ — ඒ course එකට add කරපු semester list එක button එක යටින්ම dropdown එකක් විදිහට open වෙනවා. Dropdown එකේ semester එකක් click කළහම විතරයි ඒ semester එකට page එක scroll වෙන්නේ. Course button එකම ආයෙත් click කළොත්, හරි වෙන පැත්තකක් click කළොත්, semester එකක් select කළොත් — dropdown එක auto close වෙනවා.
4. **Semester card module quick-nav** — Semester එකකට giya ගමන්ම, semester card එකේ උඩම, ඒ semester එකේ add කරලා තියෙන module ඔක්කොම pill-button විදිහට පෙන්නනවා. ඒ buttons වලින් එකක් click කළහම කෙලින්ම ඒ module card එකට scroll වෙනවා.

## v4.1 — Dropdown clipping fix + nested module navigation

1. **Dropdown fix** — කලින් dropdown එක click කරාට පේන්නෙම නෑ කියල issue එකක් තිබුණා. Cause එක: top nav bar එකට (`.jumpnav-inner`) දාලා තිබුණු `overflow-x:auto` (horizontal scroll දෙන්නත් ඕන නිසා) එකේම side-effect එකක් විදිහට browser එක `overflow-y`ත් auto කරලා dropdown එකේ menu එක clip කරලා invisible කරලා තිබ්බේ. දැන් fix කරලා තියෙන්නේ dropdown menu එක JS එකෙන් `<body>` එකට කෙලින්ම attach කරලා (`position:fixed` එකෙන්, button එකේ actual screen position එක JS එකෙන් calculate කරලා) — දැන් nav bar එකේ scroll container එකෙන් bare කරන්නේ නෑ.
2. **Nested navigation** — Course button එක click කළහම semester list එක පේනවා. Semester එකකට module already add කරලා තියෙනවා නම්, ඒ semester එක click කළහම navigate වෙන්නේ නෑ — ඒක යටින්ම module list එක expand වෙනවා (accordion විදිහට), module එකක් click කළහම විතරයි ඒකට navigate වෙන්නේ (deepest/final sub-part එකට). Semester එකකට module නැත්නම් (හිස් semester එකක් නම්), ඒක තමයි final sub-part එක නිසා ඒ semester එකම click කළහම කෙලින්ම navigate වෙනවා.
