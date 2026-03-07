# Documento di Pianificazione: Redesign Hero Section

**Data**: 2026-01-16
**Funzionalità**: Redesign dell'hero section in stile Blue Ocean Finance

---

## Obiettivi

1. **Rimuovere i counter** - Eliminare la sezione statistiche (€150M+, 98%, 48h)
2. **Background con immagine stock** - Aggiungere un'immagine di sfondo con overlay blu
3. **Layout allineato a sinistra** - Stile più elegante e professionale
4. **Testo con parole evidenziate in grassetto** - Come nell'esempio di riferimento

---

## Implementazione Completata

**Data completamento**: 2026-01-16
**Stato**: ✅ Completato con successo

### File Creati

| File | Descrizione |
|------|-------------|
| `public/hero-bg.jpg` | Immagine di sfondo (grattacieli moderni da Unsplash) |

### File Modificati

| File | Modifiche |
|------|-----------|
| `components/sections-dark/HeroSectionDark.tsx` | Completo redesign con nuovo layout |

### Cambiamenti Implementati

1. **Background**
   - Immagine stock di grattacieli moderni
   - Overlay blu (#012A4A) al 90% per mantenere il brand color
   - Gradient fade verso il basso per transizione fluida

2. **Layout**
   - Contenuto allineato a sinistra (non più centrato)
   - Max width 4xl per il contenuto
   - Padding aumentato per più respiro

3. **Tipografia**
   - Titolo: "La Boutique della Finanza Agevolata per le Imprese Italiane."
   - Sottotitolo con parole chiave in grassetto: "bandi pubblici", "crediti d'imposta", "agevolazioni fiscali"
   - Colori: bianco per titolo, bianco/80 per sottotitolo

4. **CTA Buttons**
   - Pulsante primario: bianco con testo blu
   - Pulsante secondario: outline bianco trasparente

5. **Rimossi**
   - Sezione counter (€150M+, 98%, 48h)
   - GlowOrb e GridPattern effects
   - Import di Sparkles

### Verifica

- ✅ Build completato senza errori
- ✅ Immagine ottimizzata da Next.js Image component
- ✅ Design responsive per mobile/tablet/desktop
