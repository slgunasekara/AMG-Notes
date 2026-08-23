# AMG-Notes — v3 (Course → Semester → Module, cards-within-cards) — README

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

Chip-style design එක වෙනුවට **card එකක් ඇතුළේ card එකක්** කියන structure එකටම මාරු කළා:

- **Course card** (top level, ලොකුම card එක) → ඇතුළේ
- **Semester card** (light blue background) → ඇතුළේ
- **Module card** (white card) → ඇතුළේ
- **3 sub-cards**: 📄 Resources (blue background) / 📁 PDF · Drive (orange background) / 🐙 Lecture Repo (grey-blue background)

Resource සහ PDF items දෙකම කලින් තිබ්බ **ලස්සන 3D hover card design එකෙන්ම** (icon + gradient art + title) පෙන්නනවා — chip නෙවෙයි. PDF cards වලට orange/red gradient icon එකක් දීලා Resources cards වලින් visual වශයෙන් වෙනස් කරලා තියෙනවා. Lecture Repo කලින් වගේම person-card design එකෙන්ම.

## Owner Panel tabs

1. **Overview** — quick status (courses/modules/items count).
2. **Add** — මුලින්ම Course → Semester → Module තුනම select කරන්න (top එකේ), ඊට පස්සේ පහළින් තියෙන 3 forms වලින් ඕනම එකකට add කරන්න:
   - **Add a resource** — notes/docs (blue 3D card)
   - **Add a PDF / Google Drive link** — වෙනම design එකක් (orange/red 3D card, drive icon)
   - **Add a GitHub repo** — person + repo (කලින් "Lecture Repo" style එකම — person card)
3. **Structure** — New Course / New Semester / New Module හදන්න, සහ පහළින් **"Everything on this site"** tree එකක් — course → semester → module → resources/pdfs/repos ඔක්කොම rename/hide/delete කරන්න පුළුවන් inline.
4. **Page Text** — site title/subtitle + Course/Semester/Module හැම එකකම label එක edit කරන්න indented list එකකින්.
5. **GitHub Sync** — token/repo save කරලා Publish කළාම `data.json` commit වෙනවා.
6. **Backup** — Export/Import/Reset.

## GitHub token ගැන — වැදගත්

Token එක **site code එකට කවදාවත් embed කරන්නේ නෑ** (static site එකක් නිසා). Owner Panel → GitHub Sync → Save connection කළාම, token එක **ඔයාගේ browser එකේ localStorage** එකේ save වෙනවා — repo/site code එකට යන්නේ නෑ. Save කළාට පස්සේ, ඒ browser එකේම ආයෙත් type කරන්න ඕන නෑ.

⚠️ කලින් chat එකේ share කරපු token එක **revoke කරලා අලුත් fine-grained token එකක් හදන්න** recommend කරනවා.

## Deploy කරන විදිය

1. `index.html`, `data.json`, `assets/amg.png` ඔයාගේ `AMG-Notes` repo root එකට upload කරන්න (පරණ ඒවා replace කරලා).
2. First-time upload එකෙන් පස්සේ, Owner Panel → GitHub Sync → **Publish** button එකෙන්ම `data.json` update කරගන්න පුළුවන් — `index.html` ආයෙත් replace කරන්න ඕන නෑ.

## Login

Username/password කලින් තිබුණ ඒවගේම තියෙනවා — කිසිම වෙනසක් නෑ.
