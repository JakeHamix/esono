# e-Sono — Design & vizuální identita

## 1. Celkový dojem

Web e-Sono má působit **korporátně, precizně a medicínsky**. Návštěvník by měl okamžitě vnímat profesionalitu, spolehlivost a odbornost. Žádné zbytečné dekorace — každý prvek má svůj účel.

**Klíčová slova:** preciznost, důvěra, čistota, profesionalita, zdravotnictví

## 2. Barevná paleta

Vychází z oficiálního logo manuálu e-Sono.

| Účel              | Barva                          | Poznámka                                  |
|-------------------|--------------------------------|-------------------------------------------|
| Primární (brand)  | Zelená (`#88B340`)             | Hlavní barva značky (Pantone 5763 C)      |
| Doplňková         | Černá (`#000000`)              | Text loga, ikona — kontrast a čitelnost   |
| Pozadí            | Bílá (`#FFFFFF`)               | Čistý, vzdušný základ                     |
| Pozadí sekcí      | Světle šedá (`#F4F6F8`)       | Střídání sekcí pro vizuální oddělení      |
| Text              | Tmavě šedá (`#2D2D2D`)        | Hlavní text — dobrá čitelnost             |
| Text sekundární   | Střední šedá (`#6B7280`)      | Popisky, doplňkový text                   |

### Dark mode barvy

| Účel              | Barva                          | Poznámka                                  |
|-------------------|--------------------------------|-------------------------------------------|
| Pozadí            | Tmavě modrošedá (`#111827`)    | Hlavní pozadí v dark mode                 |
| Povrch            | Tmavě šedá (`#1F2937`)         | Karty, hlavička, patička v dark mode      |
| Okraje            | Šedá (`#374151`)               | Oddělovače, rámečky v dark mode           |
| Text              | Světle šedá (`#E5E7EB`)        | Hlavní text v dark mode (gray-200)        |
| Text sekundární   | Šedá (`#9CA3AF`)               | Popisky v dark mode (gray-400)            |

Paleta je úmyslně střízlivá. Zelená (#88B340) je oficiální barva značky — evokuje zdraví, přírodu a inovaci. Černá dodává kontrast a profesionalitu.

## 3. Typografie

- **Font:** Manrope (Google Fonts, open-source)
- **Nadpisy:** Manrope Extra Bold
- **Tělo textu:** Manrope Regular / Medium
- **Velikosti:** Jasná hierarchie — velké nadpisy sekcí, menší podnadpisy, kompaktní tělo textu
- **Řádkování:** Dostatečné pro pohodlné čtení (1.5–1.7)

Manrope je oficiální font značky e-Sono dle logo manuálu. Moderní geometrický sans-serif, optimalizovaný pro digitální i tiskové použití.

## 4. Logo

### Varianty
- **Logo s textem** — ikona + „eSONO" + oddělovací linka + „ultrazvukové přístroje". Pro hlavičku webu.
- **Logo bez textu** — ikona + „eSONO". Pro kompaktnější použití.
- **Ikona samotná** — ultrazvukový symbol. Pro favicon, sociální sítě.

### Barevné verze
- **Barva** — zelená + černá na průhledném pozadí (primární pro web)
- **Černá** — jednobarevná černá verze
- **Bílá** — pro tmavé pozadí

### Ochranná zóna
- Výška písmene „O" definuje ochrannou zónu loga
- Do zóny nesmí zasahovat žádné jiné vizuální prvky

### Minimální velikosti
- Logo bez textu: 8 mm
- Logo s textem: 17 mm
- Ikona: 5 mm

### Soubory pro web
- SVG: `assets/img/` — škálovatelné, primární formát pro web
- PNG: pro fallback a favicon
- Zdrojové soubory: `input_resources/zasilka-VAWJ25BXVBNTZ8SM/LOGO/eSONO_logo_finalversion/`

## 5. Layout a struktura

### Navigace
- Fixní hlavička nahoře
- Logo vlevo, navigační odkazy vpravo (O nás, Služby, Kontakt)
- Přepínač jazyka (CZ / EN) na pravém okraji
- Na mobilu: hamburger menu

### Hero sekce
- Celá šířka obrazovky, dva sloupce na desktopu (text vlevo, obrázek vpravo)
- Stručný slogan + jedno tlačítko CTA („Kontaktujte nás")
- Vizuál `hero.png` vedle textu
- Slide-in animace (text zleva, obrázek zprava)

### Statistiky
- Lišta s 4 číselnými metrikami hned pod hero sekcí
- Čísla v primární zelené, popisky v sekundární šedé
- Staggerovaný fade-in efekt

### Sekce obsahu (O nás, Proč nás, Služby)
- Střídání bílého a světle šedého pozadí (v dark mode: dark-surface / dark-bg)
- Obsah centrovaný, max šířka ~1100px
- Dostatek bílého prostoru kolem textu
- „Proč zvolit eSONO?" — 3 sloupce s ikonami v kruhovém badge
- Služby jako karty v gridu (2 sloupce na desktopu, 1 na mobilu)

### Kontakt
- Formulář na levé straně, kontaktní údaje na pravé (na desktopu)
- Na mobilu vše pod sebou
- Google Maps embed (iframe) pod kontaktní sekcí

### Patička
- Adaptivní dle dark/light mode (světle šedá / tmavá)
- Logo ve správné barevné variantě dle režimu
- Název firmy, adresa, základní kontakt
- Odkaz na přepnutí jazyka

## 6. Vizuální prvky

- **Obrázky:** Profesionální fotografie ultrazvukových přístrojů a zdravotnického prostředí. Vytvořené nebo upravené v **Canvě**.
- **Ikony:** Lucide Icons (CDN) — liniové ikony pro služby (handshake, truck, wrench, calendar-clock), výhody (shield-check, heart-handshake, refresh-cw) a UI prvky (menu, sun/moon, building, map-pin, mail, phone). Stylované v primární zelené na `bg-primary/10` badge.
- **Vlaječky:** Inline SVG vlaječky (CZ, GB) v přepínači jazyků.
- **Stíny:** Jemné box-shadow na kartách, nic výrazného
- **Zaoblení:** Mírně zaoblené rohy (4–8px) na kartách a tlačítkách, kruhové badge pro ikony výhod
- **Animace:** Scroll reveal efekty přes Intersection Observer:
  - `data-reveal="up"` — fade-in + slide nahoru (nadpisy, karty)
  - `data-reveal="left"` / `"right"` — fade-in + slide z boku (hero, kontakt)
  - `data-reveal-delay="1-4"` — staggerované zpoždění pro gridy
  - Jednorázové spuštění při 15% viditelnosti, 0.6s ease-out

## 7. Dark mode

- **Přepínání:** Tailwind `darkMode: 'class'` — třída `dark` na `<html>`
- **Detekce:** Automatická dle systémového nastavení (`prefers-color-scheme: dark`)
- **Persistence:** Uživatelská volba uložena v `localStorage` (klíč `theme`)
- **Bez záblesku:** Dark class se aplikuje synchronně před vykreslením DOM (IIFE v `app.js`)
- **Přepínač:** Tlačítko sun/moon (Lucide) v hlavičce vedle jazykového přepínače
- **Logo:** V hlavičce a patičce se automaticky přepíná mezi `logo-color.svg` (light) a `logo-white.svg` (dark) pomocí `dark:hidden` / `hidden dark:block`
- **Všechny sekce** mají dark varianty: pozadí, text, rámečky, formulářové prvky, karty

## 8. Responzivita

- **Mobile-first** přístup
- Breakpointy: ~768px (tablet), ~1024px (desktop)
- Na mobilu: jednoduchý jednosloupcový layout, hamburger menu
- Na desktopu: vícesloupcové gridy, fixní navigace

## 9. Co nedělat

- Žádné výrazné gradientové pozadí
- Žádné animace pro efekt — jen funkční
- Žádné více než 2–3 barvy v jedné sekci
- Žádné generické stock fotky s falešnými úsměvy
- Žádný vizuální nepořádek — méně je více
- **Logo:** nenatáčet, neměnit barvy, neměnit proporce, nedeformovat, nezasahovat do ochranné zóny
