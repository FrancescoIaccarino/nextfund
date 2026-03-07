# Rimozione Dark Mode e Angoli Squadrati

**Data**: 2026-02-16
**Stato**: Completato

## Obiettivo

1. **Rimuovere completamente il tema scuro** - Mantenere solo il tema chiaro
2. **Rendere tutti gli angoli squadrati** - Eliminare border-radius da pulsanti, card, box e tutti gli elementi per un look corporate/professionale

## Cosa verrà implementato

### 1. Rimozione Dark Mode

**Azioni:**

- **Rimuovere `next-themes`** dalla dipendenza e dal layout
- **Eliminare `ThemeProvider`** (`components/theme-provider.tsx`) e il suo utilizzo in `app/layout.tsx`
- **Eliminare `ThemeToggle`** (`components/layout/ThemeToggle.tsx`) e il suo riferimento nell'Header
- **Rimuovere la sezione `.dark`** da `app/globals.css` (righe 40-60 circa)
- **Rimuovere `darkMode: ["class"]`** da `tailwind.config.ts`
- **Rimuovere i colori `dark`** custom da `tailwind.config.ts` (dark.bg.primary, secondary, tertiary, card)
- **Pulire tutte le classi `dark:`** dai 13 file che le utilizzano:
  1. `app/insights/[slug]/page.tsx`
  2. `components/sections-dark/FAQSection.tsx`
  3. `components/sections-dark/ProcessSection.tsx`
  4. `components/sections-dark/FeatureShowcase.tsx`
  5. `components/sections-dark/LogoBand.tsx`
  6. `components/layout/ThemeToggle.tsx` (da eliminare)
  7. `components/bandi/BandoCard.tsx`
  8. `components/ContactForm.tsx`
  9. `components/cards/TestimonialCard.tsx`
  10. `components/cards/FeatureCard.tsx`
  11. `tailwind.config.ts`
  12. `components/ui/alert.tsx`
  13. `app/privacy-policy/page.tsx`
- **Semplificare la logica del logo nell'Header** - Rimuovere la logica condizionale basata su `resolvedTheme`

### 2. Angoli Squadrati (Border Radius = 0)

**Azioni:**

- **Cambiare `--radius: 0.75rem` a `--radius: 0`** in `app/globals.css`
- **Aggiornare `tailwind.config.ts`** - I valori `lg`, `md`, `sm` derivano da `--radius` quindi diventeranno automaticamente 0
- **Sostituire tutte le classi `rounded-*`** con `rounded-none` o rimuoverle completamente nei ~58 file interessati
  - `rounded-full` su elementi decorativi circolari (avatar, icone) -> da valutare caso per caso: gli avatar possono rimanere rotondi, i pulsanti e le card no
  - `rounded-xl`, `rounded-lg`, `rounded-md`, `rounded-sm` -> rimuovere
- **Aggiornare i componenti shadcn/ui** (`button`, `card`, `input`, `textarea`, `badge`, `alert`, `checkbox`, `dropdown-menu`, `navigation-menu`, `select`, `sheet`, `progress`)

**Nota importante sugli avatar/icone circolari**: Elementi che devono rimanere circolari per natura (avatar utenti, indicatori di stato) manterranno `rounded-full`. Solo gli elementi UI strutturali (card, pulsanti, input, badge, box) diventeranno squadrati.

## File che verranno modificati

### Da eliminare:
- `components/theme-provider.tsx`
- `components/layout/ThemeToggle.tsx`

### Da modificare:
- `app/globals.css` - Rimuovere `.dark`, cambiare `--radius`
- `app/layout.tsx` - Rimuovere ThemeProvider
- `tailwind.config.ts` - Rimuovere darkMode e colori dark
- `components/layout/Header.tsx` - Rimuovere logica tema
- Tutti i ~58 file con classi `rounded-*`
- Tutti i ~13 file con classi `dark:`
- Componenti shadcn/ui (`button`, `card`, `input`, `textarea`, `badge`, `alert`, etc.)

## Approccio tecnico

1. Prima modificare i file di configurazione centrali (`globals.css`, `tailwind.config.ts`)
2. Poi eliminare i componenti non necessari (`ThemeProvider`, `ThemeToggle`)
3. Aggiornare `layout.tsx` e `Header.tsx`
4. Pulire le classi `dark:` da tutti i file
5. Rimuovere/sostituire le classi `rounded-*` dai componenti
6. Verificare con `npm run build` che non ci siano errori

---

## Implementazione Completata

**Data completamento**: 2026-02-16

### File eliminati:
- `components/theme-provider.tsx` - Wrapper next-themes
- `components/layout/ThemeToggle.tsx` - Pulsante toggle tema chiaro/scuro

### File di configurazione modificati:
- `app/globals.css` - Rimossa sezione `.dark` (20 righe), `--radius` cambiato da `0.75rem` a `0`
- `tailwind.config.ts` - Rimosso `darkMode: ["class"]` e colori `dark.bg.*`
- `app/layout.tsx` - Rimosso import e wrapper `ThemeProvider`, rimosso `suppressHydrationWarning`
- `components/layout/Header.tsx` - Rimosso `useTheme`, `ThemeToggle`, logica `resolvedTheme`, `mounted` state

### Pacchetti rimossi:
- `next-themes` - Disinstallato via npm

### Classi `dark:` rimosse da 11 file:
- `app/insights/[slug]/page.tsx`, `app/privacy-policy/page.tsx`
- `components/sections-dark/FAQSection.tsx`, `ProcessSection.tsx`, `FeatureShowcase.tsx`, `LogoBand.tsx`
- `components/bandi/BandoCard.tsx`, `components/ContactForm.tsx`
- `components/cards/TestimonialCard.tsx`, `FeatureCard.tsx`
- `components/ui/alert.tsx`

### Classi `rounded-*` rimosse da ~50 file:
- **13 componenti shadcn/ui**: button, card, input, textarea, badge, alert, checkbox, dropdown-menu, navigation-menu, select, sheet (avatar e progress mantenuti `rounded-full`)
- **19 pagine**: chi-siamo, servizi, contatti, bandi + 15 sotto-pagine bandi
- **22 componenti custom**: FeatureCard, TestimonialCard, ProcessStep, ContactForm, BandoCard, FAQSection, FinalCTA, ServiceCard, CalcolatoreAgevolazioni, BandiMegaMenu, BandoNavigation, ContactSection, StatsSection, WhyChooseCard, ContactCTA, Hero, Benefits, Services, Results, Process, Team, Testimonial

### `rounded-full` mantenuto su (elementi naturalmente circolari):
- Avatar (`components/ui/avatar.tsx`)
- Progress bar (`components/ui/progress.tsx`)
- Numeri step (w-8 h-8 badge circolari)
- Dot indicators (w-1.5/h-2 bullet points)
- Carousel indicators
- Avatar testimonianze

### Verifica:
- `npm run build` completato con successo (0 errori, 29 pagine generate)
- Zero classi `dark:` residue nel codebase
- Zero classi `rounded-xl/lg/md/sm` residue nel codebase
