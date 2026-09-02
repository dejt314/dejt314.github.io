# EMTEK s.c. — strona

Statyczna strona firmowa: czysty HTML/CSS/JS, bez frameworka, bez build toola,
bez backendu, bez bibliotek z CDN. Ikony jako inline SVG, font z systemowego stacka.

## Pliki

| Plik | Rola |
|---|---|
| `index.html` | Strona główna — 10 sekcji wg planu |
| `styles.css` | Wspólny arkusz stylów (design tokens w `:root`) |
| `main.js` | Rok w stopce + podświetlenie aktywnej strony w navbarze + menu mobilne |
| `assets/emtek-logo.png` | Logo używane na stronie (przycięte do treści z oryginału) |
| `assets/EMTEK-LOGO-POZIOM.png` | Oryginalny plik logo od klienta |
| `systemy.html` | Podstrona — szkielet (kotwice: `#insoft`, `#comarch`, `#insert`, `#novitus`, `#eset`, `#infrastruktura`) |
| `partnerzy.html` | Podstrona — szkielet |
| `realizacje.html` | Podstrona — szkielet (obsłuży `?tag=`) |
| `dlaczego-emtek.html` | Podstrona — szkielet (pełne 5 argumentów) |
| `kontakt.html` | Podstrona — szkielet (bez formularza, tylko `mailto:` / `tel:`) |

Nawigacja: zamiast nieistniejącej podstrony „Usługi" w navbarze jest „Strona główna" (→ `index.html`).

## Podgląd lokalny

```bash
python3 -m http.server 8000
```

Następnie otwórz http://localhost:8000.

## Status treści

- **Gotowe:** struktura sekcji, kolory, karty Systemów / Dla kogo / Dlaczego EMTEK.
- **Placeholder:** realizacje (wymyślone przykłady), odpowiedzi FAQ, kroki „Jak zaczynamy”.
- **Brak:** logotypy partnerów (na razie tekstowe placeholdery), pełna treść podstron.

## Dane kontaktowe użyte w kodzie

- e-mail: `biuro@emtek.com.pl`
- telefony: `665 303 263`, `665 303 265`
- zasięg: Kraków i Małopolska
- hosting (dyskretny link w stopce): `dhosting.pl`

## Logo

`assets/emtek-logo.png` (631 × 164 px) to oryginał `EMTEK-LOGO-POZIOM.png` przycięty
do samej treści (usunięty biały margines), żeby dobrze siadał w navbarze i stopce.
Wyświetlany z wysokością 34–36 px. Podmiana: nadpisz `emtek-logo.png` nowym plikiem
o zbliżonych proporcjach.
