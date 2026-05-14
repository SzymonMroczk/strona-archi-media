# Archi Media

Publiczna strona sprzedażowa dla marki Archi Media — Szymon Mroczkowski.  
Marketing w branży architektonicznej.

**Stack:** Astro, TypeScript, Tailwind CSS, Cloudflare Pages

---

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona dostępna pod: `http://localhost:4321`

---

## Budowanie projektu

```bash
npm run build
```

Pliki wyjściowe trafiają do katalogu `dist/`.

Podgląd po zbudowaniu:

```bash
npm run preview
```

---

## Wrzucenie na GitLab

```bash
git init
git remote add origin https://gitlab.com/TWOJ_UZYTKOWNIK/archimedia.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

---

## Deployment na Cloudflare Pages

### Krok po kroku:

1. Wejdź na [dash.cloudflare.com](https://dash.cloudflare.com)
2. Przejdź do **Workers & Pages**
3. Kliknij **Create application**
4. Wybierz zakładkę **Pages**
5. Kliknij **Connect to Git** i połącz swoje konto GitLab
6. Wybierz repozytorium `archimedia`
7. Ustaw następujące opcje:

| Ustawienie | Wartość |
|---|---|
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |

8. Kliknij **Save and Deploy**

Cloudflare Pages automatycznie wykryje każdy push na branch `main` i uruchomi nowy deployment.

---

## Formularz kontaktowy

Formularz działa tylko po stronie frontendu. Aby podpiąć backend, otwórz plik:

```
src/components/ContactSection.astro
```

Znajdź komentarz:

```js
// TODO: Replace this block with your form submission endpoint or service
// Example: await fetch('/api/contact', { method: 'POST', body: new FormData(form) })
```

I zastąp go wywołaniem do wybranego serwisu, np.:
- [Formspree](https://formspree.io)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Make.com webhook](https://make.com)
- Własny endpoint API

---

## Struktura projektu

```
src/
  components/     # Komponenty Astro (sekcje strony)
  data/           # Pliki TypeScript z danymi (case studies, FAQ, etc.)
  layouts/        # BaseLayout z metadanymi SEO
  pages/          # index.astro (jedna strona)
  styles/         # global.css (Tailwind + Google Fonts)
```
