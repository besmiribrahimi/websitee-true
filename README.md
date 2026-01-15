## ⚠️ Njoftim i Rëndësishëm

Të gjitha emrat, profilet, personat, fakultetet dhe struktura organizative të paraqitura në këtë webfaqe janë **të gjeneruara**.

Ky projekt është krijuar **vetëm për qëllime mësimore dhe demonstrative** dhe **nuk përfaqëson** strukturën reale.
## **Editori**
  WEB STROM 2023.1

# 🎓 Faqja e Universitetit të Vushtrrit

Një uebfaqe moderne, responsiv dhe funksionale për Universitetin e Vushtrrit, e ndërtuar me HTML5, CSS3 dhe JavaScript vanilla.

## 📋 Përshkrimi i Projektit

Ky projekt është një faqe interneti komprehensive për universitetin, e cila përfshin:

- **Faqja e Mirësirjes** - Një hyrje dinamike me animacione
- **Faqja Kryesore** - Informacione të detajuara për universitet
- **Departamentet** - Shfaqja e të gjitha departamenteve akademike
- **Hierarkia** - Struktura organizative dhe drejtimi akademik
- **Stafi** - Drejtoria e plotë e përsonelје me kërkesë dhe filtrues
- **Projektet** - Projektet kërkimore dhe bashkëpunimet ndërkombëtare
- **Apliko** - Formulari i aplikimit për studentët
- **Lajmet** - Lajmet dhe njoftime të universitetit
- **Kontakt** - Forma e kontaktit dhe informacioni i lokacionit
- **Portali i Studentit** - Portali i siguruar për studentët e kyçur
- **Sistemet e Kyçjes/Zkyçjes** - Autentifikimi dhe rikthimi i fjalëkalimit

## ✨ Karakteristikat Kryesore

- ✅ **Responsive Design** - Funksionar perfekt në desktop, tablet dhe telefona
- ✅ **Navigim Mobil** - Meny drawer-style për ekrane të vogla
- ✅ **Animacione Fluide** - Efekte CSS të lëmuara dhe interaksionet e JavaScript
- ✅ **Sfondi Interaktiv** - Sfond me gradiente dinamike dhe orbe lunguese
- ✅ **Formularë të Sigurta** - Validimi i formularit në anën e klientit
- ✅ **SEO-Friendly** - Meta tags dhe struktura semantike HTML
- ✅ **Aksesibilitet** - ARIA labels dhe navigim përmes tastiere
- ✅ **Performancë e Lartë** - Kode i optimizuar dhe imazhe të optimizuara
  
## 🔐 Login


- **Profesor**: > Username:albin  Password:pro123    Email:albinkras@universiteti.com  Emri:Prof. Dr. Albin Krasniqi
- **Student**:  > Username:besmir Password:admin1234 Email:besmiribr77p@gmail.com      Emri:Besmir Ibrahimi
- **Admin**:    > Username:admin  Password:admin     Email:student@universiteti.com    Emri:Student
    
## 📁 Struktura e Projektit

```
website/
├── css/
│   ├── apliko.css                 # Stilet për faqen e aplikimit
│   ├── auth.css                   # Stilet për formularë autentifikimi
│   ├── departamentet.css          # Stilet për faqen e departamenteve
│   ├── hiearkija.css              # Stilet për faqen e hierarkisë
│   ├── home.css                   # Stilet për faqen e mirësirjes
│   ├── kontakt.css                # Stilet për faqen e kontaktit
│   ├── lajmet.css                 # Stilet për faqen e lajmeve
│   ├── logincss.css               # Stilet për faqen e kyçjes
│   ├── ne.css                     # Stilet për faqen "Rreth Nesh"
│   ├── paneliiadmini.css          # Stilet për panelin e administratorit
│   ├── paslogi.css                # Stilet për portalin e studentit
│   ├── pemaeuniveritetit.css      # Stilet për faqen e pemës
│   ├── projektet.css              # Stilet për faqen e projekteve
│   ├── stafi.css                  # Stilet për faqen e stafit
│   ├── style[krejtktu].css        # Stilet globale (design system)
│   ├── styledepartament.css       # Stilet shtesë për departamentet
│   ├── stylehiearkija.css         # Stilet shtesë për hierarkisë
│   ├── web1.css                   # Stilet për faqen kryesore
│   └── backup/                    # Kopja siguresë e ficheve CSS
│
├── html/
│   ├── home.html                  # Faqja e mirësirjes
│   ├── web1.html                  # Faqja kryesore
│   ├── ne.html                    # Faqja "Rreth Nesh"
│   ├── departamentet.html         # Faqja e departamenteve
│   ├── hiearkija.html             # Faqja e hierarkisë
│   ├── stafi.html                 # Faqja e stafit
│   ├── projektet.html             # Faqja e projekteve
│   ├── apliko.html                # Faqja e aplikimit
│   ├── lajmet.html                # Faqja e lajmeve
│   ├── kontakt.html               # Faqja e kontaktit
│   ├── loginpage.html             # Faqja e kyçjes
│   ├── forgot.html                # Faqja "Harrova fjalëkalimin"
│   ├── reset.html                 # Faqja e rikthimit të fjalëkalimit
│   ├── paslogi.html               # Portali i studentit (pas kyçjes)
│   ├── pema.html                  # Faqja e pemës (variant)
│   ├── pemaeuniveritetit.html     # Faqja e pemës universitare
│   ├── paneliiadminit.html        # Paneli i administratorit
│   └── backup/                    # Kopja siguresë e ficheve HTML
│
├── js/
│   ├── nav.js                     # Menaxhimi i navigimit mobil
│   ├── home.js                    # Skenari për faqen e mirësirjes
│   ├── admin-panel.js             # Logika e panelit të administratorit
│   ├── departamente.js            # Filtrimi i departamenteve
│   ├── eventlog.js                # Regjistri i eventeve
│   ├── forgot-password.js         # Logjika e rikuperimit të fjalëkalimit
│   ├── hiearkija.js               # Logjika e hierarkisë
│   ├── interactive-bg.js          # Efektet e sfondit interaktiv
│   ├── kontakt-form.js            # Validimi i formës së kontaktit
│   ├── kontakt.js                 # Logjika shtesë për kontaktin
│   ├── lajmet-filter.js           # Filtrimi i lajmeve
│   ├── login.js                   # Logjika e kyçjes
│   ├── logo-manager.js            # Menaxhimi i logove
│   ├── paslogi-portal.js          # Logjika e portalit të studentit
│   ├── projektet-filter.js        # Filtrimi i projekteve
│   ├── reset-password.js          # Rikthimi i fjalëkalimit
│   ├── stafi.js                   # Kërkimi dhe filtrimi i stafit
│   ├── ticker.js                  # Për shirit lajmesh kërcyes
│   └── web1.js                    # Skenari i faqes kryesore
│
├── foto/
│   ├── Untitled.jpg               # Logo i universitetit
│   └── harvard-university-cambridge-usa_1268-14363.avif  # Imazhe kampusi
│
├── data/
│   ├── login.sql                  # Struktura e bazës të dhënash
│   ├── loginbs.json               # Të dhënat e shembullit JSON
│   └── aigenretetext.txt          # Të dhënat e testimit
│
└── README.md                      # Ky file
```

## 🛠️ Teknologjitë e Përdorura

- **HTML5** - Struktura semantike
- **CSS3** - Styling me Grid, Flexbox, animacione
- **JavaScript (Vanilla)** - Pa framework për shpejtësi maksimale
- **Google Maps API** - Hartën e lokacionit
- **Responsive Design** - Mobile-first approach

## 📱 Responsivness Breakpoints

- **Desktop**: > 900px
- **Tablet**: 700px - 900px
- **Telefon**: < 700px (me navigation drawer)

## 🚀 Fillim i Shpejtë

### Kërkesa
- Browser modern (Chrome, Firefox, Safari, Edge)
- Server web (Apache, Nginx) ose server lokal

### Instalim

1. Klononi ose shkarkoni projektin:
```bash
git clone <repo-url>
cd website
```

2. Hyrni në drejtorinë e projektit dhe hapni me server lokal:
```bash
# Duke përdorur Python
python -m http.server 8000

# Ose duke përdorur Node.js
npx serve
```

3. Hapni në browser:
```
http://localhost:8000
```

## 📚 Dokumentimi i Faqes

### Faqja e Mirësirjes (home.html)
- Animacione particle background
- Statistika dinamike me counter
- Call-to-action për futje në faqen kryesore

### Faqja Kryesore (web1.html)
- Heroi section me CTA buttons
- Shfaqja e statistikave universitare
- Seksione të tjera të rëndësishme

### Departamentet (departamentet.html)
- Grid i departamenteve
- Përshkrime të detajuara
- Responsive design

### Stafi (stafi.html)
- Kërkesë të stafit
- Filtrimi sipas departamentit
- Karta të detajuara të stafit

### Lajmet (lajmet.html)
- Filtrimi i lajmeve
- Kategori të ndryshme
- Paginim

### Kontakt (kontakt.html)
- Forma e kontaktit
- Informacioni i lokacionit
- Hartë interaktive
- Layout responsiv 1fr 1fr grid

## 🔐 Siguria

- Validimi i formës në anën e klientit
- CSRF protection për formularë
- Kyçja e sigurta e sesionit
- Fjalëkalim i hashuar

## ✅ Testing

Testet responsive:
- Hapni DevTools (F12)
- Kaloni në "Device Toolbar"
- Testoni në madhësi të ndryshme ekrani

## 📧 Kontakti

**Email**: Besmiriibr77p@gmail.com
**Telefon**: +383 45 583 645  


## 📄 Licenca

**Open Source**

---

**Shënime për Frokerat**

- Përdorni CSS variables 
- Mbani kodin të organizuar
- Dokumentoni funksionet të JavaScript
- Testoni në browserë të ndryshëm
- Përdorni semantic HTML për aksesibilitet
- Optimizoni imazhet para ngarkimit
- Pershtatni për mobile-first

**Përditësimet e Fundit**: 15 Janar 2026
