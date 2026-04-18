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
- Celá šířka obrazovky
- Název firmy + stručný slogan
- Jedno tlačítko CTA (např. „Kontaktujte nás")
- Čistý vizuál na pozadí nebo vedle textu (ultrazvukový přístroj, zdravotnické prostředí)

### Sekce obsahu (O nás, Služby)
- Střídání bílého a světle šedého pozadí
- Obsah centrovaný, max šířka ~1100px
- Dostatek bílého prostoru kolem textu
- Služby jako karty nebo bloky v gridu (2–3 sloupce na desktopu, 1 na mobilu)

### Kontakt
- Formulář na levé straně, kontaktní údaje na pravé (na desktopu)
- Na mobilu vše pod sebou
- Mapa (volitelně)

### Patička
- Název firmy, adresa, základní kontakt
- Odkaz na přepnutí jazyka

## 6. Vizuální prvky

- **Obrázky:** Profesionální fotografie ultrazvukových přístrojů a zdravotnického prostředí. Vytvořené nebo upravené v **Canvě**.
- **Ikony:** Jednoduché, liniové (line icons) — pro služby a kontaktní údaje
- **Stíny:** Jemné box-shadow na kartách, nic výrazného
- **Zaoblení:** Mírně zaoblené rohy (4–8px) na kartách a tlačítkách
- **Animace:** Minimální — maximálně jemný fade-in při scrollu (pokud bude JS)

## 7. Responzivita

- **Mobile-first** přístup
- Breakpointy: ~768px (tablet), ~1024px (desktop)
- Na mobilu: jednoduchý jednosloupcový layout, hamburger menu
- Na desktopu: vícesloupcové gridy, fixní navigace

## 8. Co nedělat

- Žádné výrazné gradientové pozadí
- Žádné animace pro efekt — jen funkční
- Žádné více než 2–3 barvy v jedné sekci
- Žádné generické stock fotky s falešnými úsměvy
- Žádný vizuální nepořádek — méně je více
- **Logo:** nenatáčet, neměnit barvy, neměnit proporce, nedeformovat, nezasahovat do ochranné zóny
