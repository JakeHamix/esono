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

| Vrstva     | Volba                         |
|------------|-------------------------------|
| Markup     | HTML5                         |
| Styly      | CSS3 (bez frameworků)         |
| JavaScript | Žádný (pokud nebude nutný)    |
| Design     | Canva (vizuální podklady)     |
| Hosting    | GitHub Pages                  |
| VCS        | Git / GitHub                  |

Žádné build nástroje, bundlery ani preprocesory. Web se nasadí pushnutím do větve `main`.

## 3. Struktura webu

```
/
├── index.html          ← přesměrování na /cs/
├── cs/
│   └── index.html      ← jednostránkový web (čeština)
├── en/
│   └── index.html      ← jednostránkový web (angličtina)
├── assets/
│   ├── css/
│   │   └── style.css   ← sdílený stylesheet
│   └── img/            ← obrázky, loga, exporty z Canvy
└── PRD.md
```

- Čeština je **výchozí jazyk**. Kořenový `index.html` přesměrovává na `/cs/`.
- Každý jazyk má jeden `index.html` — veškerý obsah na jedné stránce.
- Sdílená složka `assets/` obsahuje CSS a obrázky pro oba jazyky.
- Přidání nového jazyka = nová složka (např. `/de/`) s přeloženým `index.html`.

## 4. Sekce stránky

Web je **jednostránkový layout** s kotvícími odkazy na sekce a plynulým scrollováním. Navigace odkazuje na jednotlivé sekce.

### Hero
- Logo eSONO s doprovodným textem „ultrazvukové přístroje"
- Stručný slogan vystihující poslání firmy
- Klíčový vizuál (ultrazvukový přístroj nebo zdravotnické prostředí)
- Tlačítko výzvy k akci (scrolluje na Kontakt)

### O nás
- **Příběh firmy:** eSONO vzniklo v červenci 2025 jako nástupce ultrazvukové divize společnosti EXRAY s.r.o. Firma převzala kompletní portfolio vybavení, zákaznické vztahy a servisní závazky.
- **Mise:** Poskytovat komplexní služby v oblasti ultrazvukové diagnostiky — od prodeje přístrojů přes distribuci až po odborný servis a opravy.
- **Odbornost:** Tým s dlouholetými zkušenostmi v oboru ultrazvukové techniky. Řemeslná živnost na montáž, opravy, revize a zkoušky elektrických zařízení.
- **Zákaznická základna:** Desítky aktivních klientů — nemocnice, kliniky, soukromé lékařské praxe po celé ČR.
- Fotografie týmu nebo provozovny (volitelné)

### Služby
Každá služba jako samostatný blok nebo karta s popisem a relevantní ikonou.

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
- Mapa (embed)
- Kontaktní formulář (statický — Formspree nebo podobná služba)
- IČO, DIČ pro obchodní partnery

## 5. Lokalizace

- **Přístup:** Na základě adresářů. Každý jazyk má vlastní `index.html`.
- **Výchozí jazyk:** Čeština (`/cs/`)
- **Podporované jazyky:** Čeština, Angličtina
- **Rozšiřitelnost:** Nové jazyky se přidají vytvořením nové složky s přeloženým `index.html`.
- **Přepínač jazyka:** Odkaz v hlavičce pro přepnutí mezi `/cs/` a `/en/`.
- **Bez JavaScriptu:** Lokalizace je čistě strukturální (samostatné soubory), ne za běhu.

## 6. Vizuální směr

Podrobně rozpracováno v `DESIGN.md`. Stručně:

- Barevná paleta vychází z oficiálního logo manuálu — primární zelená (`#88B340`), černá, bílá
- Typografie: **Manrope** (Google Fonts) — Extra Bold pro nadpisy, Regular pro text
- Responzivní: mobile-first, funguje na všech velikostech obrazovky
- Vizuální podklady vytvořené v **Canvě**
- Fixní navigační hlavička s kotvícími odkazy na sekce
- Patička s informacemi o firmě

## 7. Mimo rozsah (prozatím)

- Žádný CMS ani backend
- Žádný e-shop / online objednávky
- Žádný blog ani sekce novinek
- Žádná autentizace ani uživatelské účty
- Žádná analytika (lze přidat později jednoduchým script tagem)
- Katalog produktů / ceník — prozatím pouze obecný přehled značek a řad
