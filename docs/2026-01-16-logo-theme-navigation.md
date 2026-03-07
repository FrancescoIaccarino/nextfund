# Documento di Pianificazione: Logo, Theme e Navigazione

**Data**: 2026-01-16
**Funzionalità**: Integrazione logo SVG, correzione temi e semplificazione navigazione

---

## Obiettivi

1. **Integrare i loghi SVG** - Usare il logo blu per tema chiaro e bianco per tema scuro
2. **Correggere intestazioni in dark mode** - Le intestazioni rimangono blu invece di adattarsi al tema
3. **Rimuovere sezione Bandi** - Semplificare la navigazione lasciando solo Home e Contatti

---

## Implementazione Completata

**Data completamento**: 2026-01-16
**Stato**: ✅ Completato con successo

### File Creati

| File | Descrizione |
|------|-------------|
| `public/logo-white.svg` | Logo bianco per dark mode |
| `public/logo-blue.svg` | Logo blu (#012A4A) per light mode |

### File Modificati

| File | Modifiche |
|------|-----------|
| `components/layout/Header.tsx` | Logo dinamico con useTheme, rimosso BandiMegaMenu, semplificata navigazione (solo Contatti) |
| `components/layout/Footer.tsx` | Aggiornato logo con Image component, rimosso Sparkles |
| `components/sections-dark/HeroSectionDark.tsx` | Intestazione blu → `dark:text-white` |
| `components/sections-dark/FeatureShowcase.tsx` | Intestazione blu → `dark:text-white` |
| `components/sections-dark/ProcessSection.tsx` | Intestazione blu → `dark:text-white` |
| `components/sections-dark/TestimonialsSection.tsx` | Intestazione blu → `dark:text-white` |
| `components/sections-dark/FAQSection.tsx` | Intestazione blu → `dark:text-white` |
| `components/cards/FeatureCard.tsx` | Icone e bullet points tema-responsive |
| `components/cards/TestimonialCard.tsx` | Avatar fallback tema-responsive |

### Funzionalità Implementate

1. **Logo Dinamico**
   - Light mode: logo blu (#012A4A)
   - Dark mode: logo bianco
   - Implementato con `useTheme` da next-themes e `mounted` state per evitare hydration mismatch

2. **Intestazioni Tema-Responsive**
   - Tutte le intestazioni evidenziate usano `text-nextfund-blue dark:text-white`
   - Visibili correttamente sia in light che dark mode

3. **Navigazione Semplificata**
   - Rimossa sezione "Bandi" dal menu
   - Rimossi link: Servizi, Bandi, Processo, FAQ
   - Mantenuto solo: Contatti + CTA "Chiamaci Ora"

4. **Componenti Cards Aggiornati**
   - FeatureCard: icone e bullet tema-responsive
   - TestimonialCard: avatar fallback tema-responsive

### Verifica

- ✅ Build completato senza errori
- ✅ TypeScript compilation success
- ✅ 30 pagine generate staticamente

---

## Note Tecniche

- Il colore brand blu `#012A4A` è mantenuto per light mode
- In dark mode il blu scuro non è visibile, quindi si usa bianco
- Il pattern `dark:text-white` garantisce leggibilità in entrambi i temi
- `mounted` state evita errori di hydration con useTheme

---

## Possibili Miglioramenti Futuri

- Aggiungere animazione di transizione al cambio logo
- Considerare un blu più chiaro per dark mode invece del bianco puro
