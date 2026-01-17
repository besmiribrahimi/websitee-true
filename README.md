# 🎓 Sistemi i Menaxhimit të Universitetit

Një aplikacion web modern dhe interaktiv për menaxhimin e universitetit, ndërtuar me JavaScript vanilaj, HTML dhe CSS. Në zhvillim nga 2024.

![Statusi](https://img.shields.io/badge/Statusi-Ne%20Zhvillim-blue)
![Licence](https://img.shields.io/badge/Licence-MIT-green)
![Versioni](https://img.shields.io/badge/Versioni-0.1.0-orange)

---

## 📋 Përshkrimi

Ky projekt është një sistem i plotë për menaxhimin e universitetit me këto veçori:
- 📚 Menaxhimi i Studentëve dhe Fakultetit
- 📊 Paneli i Administrimit
- 🔐 Sistem i Sigurt i Hyrjes
- 📰 Portali i Lajmeve
- 🏆 Shfaqje Projektesh
- 👥 Drejtoria e Personelit
- 📞 Sistemi i Kontaktit
- 📈 Menaxhimi i Hierarkisë

---

## ✨ Karakteristikat

- **UI Interaktiv** me animacione të rrjedhshme dhe efekte ripple
- **Dizajn Responsiv** - Funksionon në desktop dhe në pajisjet mobile
- **Autentifikimi i Sigurt** - Sistem hyrje me fjalëkalim të mbrojtur
- **Paneli Admin** - Menaxhoni përdoruesit, përmbajtjen dhe cilësimet e sistemit
- **Navigimi Dinamik** - Navbar inteligjent me scroll të rrjedhshëm
- **Regjistrim Ngjarjesh** - Ndiqni aktivitetet e përdoruesit dhe ngjarjet e sistemit
- **Përditësime Real-time** - Lajme në live dhe njoftime të menjëhershme
- **Rikuperimi i Fjalëkalimit** - Funksionaliteti për rivendosjen e fjalëkalimit

---

## 🛠️ Teknologjitë e Përdorura

- **Frontend**: HTML5, CSS3, JavaScript Vanilaj
- **Ruajtja e të Dhënave**: JSON (simulim i ruajtjes lokale)
- **Dizajni**: CSS i personalizuar me animacione dhe tranzicione
- **Ikonat & Asetet**: Grafika SVG dhe optimizim imazhesh

---

## 📚 Burimet e Të Mësuarit

Ky projekt është ndërtuar me inspirim dhe udhëzim nga këto tutorial YouTube:

### 🎬 Videot që e Ndihmuan

| Tema | Video | Kanal |
|------|-------|--------|
| **Inspirimi Kryesor** | [Shiko](https://www.youtube.com/watch?v=oYRda7UtuhA) | YouTube |
| **Siguria dhe Praktika të Mira** | [Shiko](https://www.youtube.com/watch?v=r6d5XSCBiX8) | YouTube |
| **Zhvillimi i Navbar** | [Shiko](https://www.youtube.com/watch?v=U8smiWQ8Seg) | YouTube |
| **Efektet Ripple.js** | [Shiko](https://www.youtube.com/watch?v=WFH-TMp6l_c) | YouTube |
| **Sistemi i Hyrjes (1)** | [Shiko](https://www.youtube.com/watch?v=p1GmFCGuVjw) | YouTube |
| **Sistemi i Hyrjes (2)** | [Shiko](https://www.youtube.com/watch?v=bVl5_UdcAy0) | YouTube |
| **Sistemi i Hyrjes (3)** | [Shiko](https://www.youtube.com/watch?v=AVPUZRDU7GU) | YouTube |

---

## 🧪 Kredencialet për Testim

Përdorni këto kredenciale për të testuar aplikacionin:

### Llogaritë e Studentëve
| Përdoruesi | Fjalëkalimi | Email | Emri | Roli |
|----------|----------|-------|------|------|
| `besmir` | `admin1234` | besmiribr77p@gmail.com | Besmir Ibrahimi | Studenti |
| `student1` | `password123` | student1@universiteti.com | Ardit Kelmendi | Studenti |
| `student2` | `pass123` | student2@universiteti.com | Marigona Hoxhaj | Studenti |

### Llogaritë e Profesorëve
| Përdoruesi | Fjalëkalimi | Email | Emri | Roli |
|----------|----------|-------|------|------|
| `prof1` | `prof123` | prof1@universiteti.com | Prof. Dr. Albin Krasniqi | Profesor |
| `prof2` | `prof123` | prof2@universiteti.com | Prof. Dr. Shkelzen Kelmendi | Profesor |

### Llogaria e Admin-it
| Përdoruesi | Fjalëkalimi | Email | Emri | Roli |
|----------|----------|-------|------|------|
| `admin` | `admin123` | admin@universiteti.com | Admin User | Admin |

---

## 📁 Struktura e Plotë e Projektit

```
web/
├── README.md                          # Dokumentacioni i projektit
├── reaDEme.me                         # Dokumenta origjinale
│
├── 📂 html/                           # Faqet HTML kryesore
│   ├── home.html                      # Faqja ballina (Home)
│   ├── loginpage.html                 # Faqja e hyrjes
│   ├── paneliiadminit.html           # Paneli i administrimit
│   ├── paneliiadminit_fixed.html     # Paneli admin (versioni i fiksuar)
│   ├── departamentet.html            # Faqja e departamenteve
│   ├── hiearkija.html                # Hierarkia e universitetit
│   ├── stafi.html                    # Drejtoria e stafit
│   ├── projektet.html                # Shfaqja e projekteve
│   ├── lajmet.html                   # Seksioni i lajmeve
│   ├── paslogi.html                  # Portali pas hyrjes
│   ├── pema.html                     # Pema e kurikulum
│   ├── pemaeuniveritetit.html        # Pema e universitetit
│   ├── apliko.html                   # Forma e aplikimit
│   ├── kontakt.html                  # Faqja e kontaktit
│   ├── ne.html                       # Faqja për ne
│   ├── forgot.html                   # Forma për harrimin e fjalëkalimit
│   ├── reset.html                    # Forma për rivendosjen e fjalëkalimit
│   ├── web1.html                     # Faqja web 1
│   └── 📂 backup/                    # Backup i faqeve HTML
│       ├── apliko.html
│       ├── departamentet.html
│       ├── forgot.html
│       ├── hiearkija.html
│       ├── home.html
│       ├── kontakt.html
│       ├── lajmet.html
│       ├── loginpage.html
│       ├── ne.html
│       ├── paneliiadminit.html
│       ├── paneliiadminit_fixed.html
│       ├── paslogi.html
│       ├── pema.html
│       ├── pemaeuniveritetit.html
│       ├── projektet.html
│       ├── reset.html
│       ├── stafi.html
│       └── web1.html
│
├── 📂 css/                            # Stilet CSS të të gjithë faqeve
│   ├── style[krejtktu].css           # Stili kryesor i plotë
│   ├── common.css                    # Stilet e përbashkëta
│   ├── auth.css                      # Stilet për autentifikimin
│   ├── home.css                      # Stilet e faqes home
│   ├── logincss.css                  # Stilet e faqes login
│   ├── paneliiadmini.css             # Stilet e panelit admin
│   ├── departamentet.css             # Stilet e departamenteve
│   ├── styledepartament.css          # Stilet shtesë të departamentit
│   ├── hiearkija.css                 # Stilet e hierarkisë
│   ├── stylehiearkija.css            # Stilet shtesë të hierarkisë
│   ├── stafi.css                     # Stilet e stafit
│   ├── projektet.css                 # Stilet e projekteve
│   ├── lajmet.css                    # Stilet e lajmeve
│   ├── paslogi.css                   # Stilet e portalit pas hyrjes
│   ├── pema.css                      # Stilet e pemës
│   ├── pemaeuniveritetit.css         # Stilet e pemës të universitetit
│   ├── apliko.css                    # Stilet e formës së aplikimit
│   ├── kontakt.css                   # Stilet e faqes kontakt
│   ├── ne.css                        # Stilet e faqes për ne
│   ├── forgot.css                    # Stilet e formës për harrimin
│   ├── reset.css                     # Stilet e formës reset
│   ├── web1.css                      # Stilet e web1
│   ├── 📂 backup/                    # Backup i stileve
│   └── 📂 css/                       # Nënfolde CSS shtesë
│
├── 📂 js/                             # Logjika JavaScript
│   ├── login.js                      # Logjika e autentifikimit
│   ├── admin-panel.js                # Funksionaliteti i panelit admin
│   ├── nav.js                        # Logjika e navigimit
│   ├── home.js                       # Logjika e faqes home
│   ├── departamente.js               # Logjika e departamenteve
│   ├── stafi.js                      # Logjika e stafit
│   ├── hiearkija.js                  # Logjika e hierarkisë
│   ├── projektet-filter.js           # Filter për projektet
│   ├── lajmet-filter.js              # Filter për lajmet
│   ├── paslogi-portal.js             # Logjika e portalit pas hyrjes
│   ├── kontakt.js                    # Logjika e formës kontakt
│   ├── kontakt-form.js               # Shëndrruesja e kontaktit
│   ├── forgot-password.js            # Logjika e harrimit të fjalëkalimit
│   ├── reset-password.js             # Logjika e rivendosjes
│   ├── web1.js                       # Logjika e web1
│   ├── interactive-bg.js             # Animacione të sfondit
│   ├── logo-manager.js               # Menaxhimi i logove
│   ├── ticker.js                     # Ticker i lajmeve
│   └── eventlog.js                   # Regjistrim i ngjarjeve
│
├── 📂 data/                           # Skedarët e të dhënave
│   ├── loginbs.json                  # Kredencialet e përdoruesit (JSON)
│   ├── login.sql                     # Skema e bazës SQL
│   └── aigenretetext.txt             # Tekst i gjeneruar nga AI
│
├── 📂 foto/                           # Skedarë mediash
│   └── harvard-university-cambridge-usa_1268-14363.avif
│
└── 📂 backup/                         # Backup të përgjithshëm
    └── [Kopje të skedarëve të rëndësishëm]
```

---

## 🚀 Filloni Më Shpejt

### Para se të filloni
- Browser modern (Chrome, Firefox, Safari, Edge)
- Nuk kërkohet instalim - JavaScript i pastër

### Instalimi

1. Klononi depozitorin
```bash
git clone https://github.com/besmiribrahimi/websitee-true
cd university-management-system
```

2. Hapeni në browser
```bash
# Hapni skedarin HTML drejtpërdrejt
open html/home.html
# ose
start html/home.html  # Windows
```

3. Ose përdorni një server lokal
```bash
# Duke përdorur Python 3
python -m http.server 8000

# Duke përdorur Node.js
npx http-server

# Vizitoni http://localhost:8000
```

---

## 📝 Gjenerim i Përmbajtjes

⚠️ **Shenim i Rëndësishëm**: Disa elementë përmbajtjeje në këtë aplikacion, duke përfshirë:
- Emrat e përdoruesve (p.sh., Besmir Ibrahimi, Ardit Kelmendi)
- Emrat e departamenteve ("Drejtime", hierarkia organizative)
- Titujt akademikë dhe përshkrimet
- Lënda dhe përmbajtja

Janë **gjeneruar duke përdorur AI (Inteligjencën Artificiale)** për qëllime demonstruese. Këto **nuk janë persona realë apo departamente universitetare të vërteta**.

---

## 📄 Faqet dhe Funksionalitetet

| Faqja | Përshkrimi |
|------|-------------|
| 🏠 **Ballina** | Faqja hyrëse me informacion të universitetit |
| 🔑 **Hyrje** | Faqja e sigurt e autentifikimit |
| 📊 **Paneli Admin** | Tabela kontrolli për administratorët |
| 🏢 **Departamentet** | Shikimi dhe menaxhimi i departamenteve |
| 👨‍🏫 **Stafi** | Drejtoria e stafit dhe profile |
| 📚 **Projektet** | Shfaqje projektesh të studentëve/fakultetit |
| 📰 **Lajmet** | Lajmet e universitetit dhe njoftimet |
| 👥 **Hierarkija** | Struktura organizative |
| 💼 **Aplikuesi** | Aplikime të studentëve/stafit |
| 📞 **Kontakti** | Forma kontakti dhe informacion |
| 🔒 **Siguria** | Veçoritë e rikuperimit të fjalëkalimit |

---

## 🎨 Pikat Kryesore të Dizajnit

- **UI Modern** me dizajn të pastër dhe profesional
- **Animacione të Rrjedhshme** duke përfshirë efekte ripple dhe tranzicione
- **Elementë Interaktivë** për më shumë angazhim të përdoruesit
- **Lejon Përgjigje** përshtatet me të gjitha madhësitë e ekranit
- **Gati për Dark Mode** variablat CSS për ndërrimin e temës

---

## 🔐 Veçoritë e Sigurisë

- Konsiderime të enkriptimit të fjalëkalimit
- Validim i sigurt i hyrjes
- Menaxhimi i seancës
- Kontroll i hyrjes bazuar në rolin e admin-it
- Mbrojtja CSRF e gatshme

---

## 🤝 Kontribucioni

Kontributet janë të mirëpritura! Mos ngurroni të:
1. Bëni fork të depozitorit
2. Krijoni degën tuaj të veçorisë (`git checkout -b feature/emails.txt`)
3. Konfirmoni ndryshimet tuaja (`git commit -m 'Shtoj ndonjë mail'`)
4. Shtyjeni në degën (`git push origin feature/VeçoriaFamtaze`)
5. Hapni një Pull Request

---

## 📄 Licence

Ky projekt është licencuar nën licencën MIT - shikoni skedarin LICENSE për më shumë detaje.

---

## 👨‍💻 Autori

**Besmir Ibrahimi**
- Email: besmiribr77p@gmail.com
- GitHub: [@besmiribrahimi](https://github.com/besmiribrahimi)

---

## 🗓️ Kronologjia e Zhvillimit

- **Fillesa**: 2024
- **Statusi Aktual**: Në Zhvillim Aktiv
- **Përditësim i Fundit**: Janar 2026

---

## 🐛 Problemet e Njohur & Përmirësimet

- [ ] Nevojitet integrimi i Backend API-je
- [ ] Migrimi i bazës së të dhënave nga JSON
- [ ] Sistemi i njoftimeve me email
- [ ] Autentifikimi me dy faktorë
- [ ] Versioni i aplikacionit mobile
- [ ] Optimizimi i performancës

---

## 📞 Mbështetje & Kontakti

Për mbështetje, pyetje ose sugjerime, ju lutemi kontaktoni: **besmiribr77p@gmail.com**

---

## 🙏 Mirënjohja

- Të gjithë krijuesit e mrekullueshëm të tutorialeve në YouTube
- Komunitetit të kodit të hapur
- Inspirimi nga sistemet moderne të menaxhimit të universitetit

---

<div align="center">

**Bërë me ❤️ nga Besmir Ibrahimi**

⭐ Nëse e gjeni këtë projekt të dobishëm, ju lutem jepini një yll!

</div>
