# NextFund Advisory

Sito web aziendale costruito con Next.js 16, Tailwind CSS e shadcn/ui.

## Stack Tecnologico

- **Next.js 16.1.1** - Framework React con App Router e Turbopack
- **React 19** - Libreria UI
- **TypeScript 5.7** - Linguaggio tipizzato
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **shadcn/ui** - Componenti UI accessibili e personalizzabili

## Come Iniziare

### Installazione

```bash
npm install
```

### Sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel tuo browser.

### Build

```bash
npm run build
```

### Produzione

```bash
npm start
```

## Struttura del Progetto

```
nextfundadvisory.com/
├── app/              # App Router directory
│   ├── layout.tsx   # Layout principale
│   ├── page.tsx     # Homepage
│   └── globals.css  # Stili globali
├── components/      # Componenti React e shadcn/ui
├── lib/            # Utility e helper functions
├── public/         # File statici
└── ...config files # Configurazioni
```

## Prossimi Passi

1. Inizializza shadcn/ui: `npx shadcn@latest init`
2. Aggiungi componenti: `npx shadcn@latest add button`
3. Personalizza i colori e il tema in `tailwind.config.ts`
