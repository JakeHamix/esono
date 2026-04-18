# e-Sono — Produktové požadavky (PRD)

## 1. Přehled

**Firma:** eSONO s.r.o. (IČO: 234 53 834)  
**Odvětví:** Zdravotnictví — ultrazvuková technika  
**Služby:** Prodej, distribuce, servis a opravy ultrazvukových přístrojů  
**Vznik:** Červenec 2025 — nástupce ultrazvukové divize EXRAY s.r.o.  
**Jednatelé:** Jan Hamadej (75 %), Václav Uhlíř (25 %)  
**Sídlo:** Karlovarská 89, 271 01 Nové Strašecí  
**Provozovna:** Dobronická 1257, Praha 4 - Libuš  

**Účel webu:** Vytvořit online prezentaci firmy, představit nabízené služby a poskytnout kontaktní informace pro potenciální zákazníky a partnery.  
**Cílová skupina:** Zdravotničtí pracovníci, kliniky, nemocnice a zdravotnická zařízení v České republice (primárně) i v zahraničí.

## 2. Technologie a hosting

| Vrstva     | Volba                                      |
|------------|--------------------------------------------|
| Markup     | HTML5                                      |
| Styly      | Tailwind CSS (CDN)                         |
| JavaScript | Minimální — i18next, Lucide Icons, app.js  |
| Design     | Canva (vizuální podklady)                  |
| Hosting    | GitHub Pages (deploy přes GitHub Actions)  |
| VCS        | Git / GitHub                               |

Žádné build nástroje, bundlery ani npm. CDN knihovny jsou povoleny (Tailwind CSS, Lucide Icons, i18next, Google Fonts). Deploy se spustí automaticky pushnutím do větve `main` přes GitHub Actions workflow.

## 3. Struktura webu

```
/
├── index.html              ← přesměrování na cs/
├── cs/
│   └── index.html          ← jednostránkový web (český text v HTML)
├── en/                     ← generováno při deployi (GitHub Actions)
│   └── index.html          ← kopie cs/index.html, i18next přepne na angličtinu
├── assets/
│   ├── css/
│   │   └── custom.css      ← minimální vlastní CSS (scroll, animace)
│   ├── js/
│   │   └── app.js          ← i18n, dark mode, hamburger menu, Lucide init
│   ├── i18n/
│   │   └── en.json         ← anglické překlady
│   └── img/                ← obrázky, loga, exporty z Canvy
├── .github/
│   └── workflows/
│       └── deploy.yml      ← GitHub Actions deploy (kopíruje cs → en)
└── docs/
```

- Čeština je **výchozí jazyk**. Kořenový `index.html` přesměrovává na `cs/`.
- V repozitáři existuje pouze `cs/index.html` — `en/index.html` se generuje při deployi.
- Sdílená složka `assets/` obsahuje CSS, JS, překlady a obrázky.
- Anglický text se načítá za běhu přes i18next z `assets/i18n/en.json`.
- Přidání nového jazyka = nový JSON soubor (např. `assets/i18n/de.json`) + úprava deploy workflow.

## 4. Sekce stránky

Web je **jednostránkový layout** s kotvícími odkazy na sekce a plynulým scrollováním. Navigace odkazuje na jednotlivé sekce.

### Hero
- Stručný slogan vystihující poslání firmy
- Klíčový vizuál (ultrazvukový přístroj — `hero.png`)
- Tlačítko výzvy k akci (scrolluje na Kontakt)

### Statistiky
- Číselný přehled hned pod hero sekcí
- 4 klíčové metriky: aktivní klienti (24+), roky zkušeností (15+), servisované přístroje (100+), celostátní pokrytí (ČR)

### O nás
- **Příběh firmy:** eSONO vzniklo v červenci 2025 jako nástupce ultrazvukové divize společnosti EXRAY s.r.o. Firma převzala kompletní portfolio vybavení, zákaznické vztahy a servisní závazky.
- **Mise:** Poskytovat komplexní služby v oblasti ultrazvukové diagnostiky — od prodeje přístrojů přes distribuci až po odborný servis a opravy.
- **Odbornost:** Tým s dlouholetými zkušenostmi v oboru ultrazvukové techniky. Řemeslná živnost na montáž, opravy, revize a zkoušky elektrických zařízení.
- **Zákaznická základna:** Desítky aktivních klientů — nemocnice, kliniky, soukromé lékařské praxe po celé ČR.
- Fotografie týmu nebo provozovny (volitelné)

### Proč zvolit eSONO?
- 3 klíčové výhody v gridu: Certifikovaný servis, Osobní přístup, Kompletní životní cyklus
- Lucide ikony (shield-check, heart-handshake, refresh-cw)

### Služby
Každá služba jako samostatný blok nebo karta s popisem a Lucide ikonou.

1. **Prodej ultrazvukových přístrojů**
   - Primární značka: **GE Healthcare**
   - Řady: Vivid (kardiologie), LOGIQ (obecné zobrazování), Voluson (porodnictví/gynekologie), Versana
   - Široké portfolio sond a příslušenství
   - Nové i repasované přístroje

2. **Distribuce a dodávky**
   - Dodávky přístrojů a sond do zdravotnických zařízení po celé ČR
   - Kompletní logistika včetně instalace

3. **Servis a opravy**
   - Pravidelná údržba a preventivní servis
   - Diagnostika a opravy ultrazvukových přístrojů
   - Řemeslná živnost — montáž, opravy, revize a zkoušky elektrických zařízení

4. **Pronájem přístrojů**
   - Dlouhodobý pronájem ultrazvukových přístrojů a sond
   - Flexibilní podmínky pro zdravotnická zařízení

### Kontakt
- **Sídlo:** Karlovarská 89, 271 01 Nové Strašecí
- **Provozovna:** Dobronická 1257, Praha 4 - Libuš
- Telefon, e-mail
- Google Maps embed (iframe — provozovna)
- Kontaktní formulář (statický — Formspree)
- IČO, DIČ, datová schránka pro obchodní partnery

## 5. Lokalizace

- **Přístup:** Jeden zdrojový HTML soubor (`cs/index.html`) s českým textem v markupu. Anglický text se načítá za běhu pomocí **i18next** z `assets/i18n/en.json`.
- **Výchozí jazyk:** Čeština (`/cs/`) — statický text v HTML, viditelný pro vyhledávače i bez JS.
- **Podporované jazyky:** Čeština, Angličtina
- **Přepínač jazyka:** Odkaz s vlaječkou v hlavičce pro přepnutí mezi `/cs/` a `/en/`.
- **Deploy:** `en/index.html` se generuje automaticky při deployi (kopie `cs/index.html`) přes GitHub Actions.
- **Rozšiřitelnost:** Nový jazyk = nový JSON soubor (`assets/i18n/de.json`) + přidání kopie do deploy workflow.
- **Přeložitelné prvky:** Každý přeložitelný element má atribut `data-i18n="klíč"`. Skript `app.js` detekuje jazyk z URL a přepne text.

## 6. Vizuální směr

Podrobně rozpracováno v `DESIGN.md`. Stručně:

- Barevná paleta vychází z oficiálního logo manuálu — primární zelená (`#88B340`), černá, bílá
- **Dark mode** — automatická detekce systémového nastavení, ruční přepínač (sun/moon), persistence v localStorage
- Typografie: **Manrope** (Google Fonts) — Extra Bold pro nadpisy, Regular pro text
- Responzivní: mobile-first, funguje na všech velikostech obrazovky
- Vizuální podklady vytvořené v **Canvě**
- Fixní navigační hlavička s kotvícími odkazy na sekce, hamburger menu na mobilu
- **Scroll animace** — fade-in / slide-in efekty při scrollování (Intersection Observer)
- Patička s informacemi o firmě, adaptivní dle dark/light mode

## 7. Mimo rozsah (prozatím)

- Žádný CMS ani backend
- Žádný e-shop / online objednávky
- Žádný blog ani sekce novinek
- Žádná autentizace ani uživatelské účty
- Žádná analytika (lze přidat později jednoduchým script tagem)
- Katalog produktů / ceník — prozatím pouze obecný přehled značek a řad
