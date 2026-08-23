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
