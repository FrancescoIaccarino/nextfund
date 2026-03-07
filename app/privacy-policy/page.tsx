export default function PrivacyPolicyPage() {
  return (
    <div className="py-16">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold">Privacy Policy</h1>
          <div className="prose prose-neutral max-w-none">
            <p className="lead">
              Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).
            </p>

            <h2>1. Titolare del Trattamento</h2>
            <p>
              NextFund Advisory S.r.l.<br />
              Via Example 123, 20100 Milano<br />
              Email: privacy@nextfundadvisory.com
            </p>

            <h2>2. Dati Raccolti</h2>
            <p>
              Attraverso il nostro sito web raccogliamo i seguenti dati personali:
            </p>
            <ul>
              <li>Dati di contatto (nome, email, telefono)</li>
              <li>Dati aziendali (nome azienda, ruolo)</li>
              <li>Dati di navigazione (cookie tecnici)</li>
            </ul>

            <h2>3. Finalità del Trattamento</h2>
            <p>
              I dati personali vengono trattati per le seguenti finalità:
            </p>
            <ul>
              <li>Rispondere alle richieste di contatto</li>
              <li>Fornire i servizi richiesti</li>
              <li>Inviare comunicazioni commerciali (solo previo consenso)</li>
            </ul>

            <h2>4. Diritti dell'Interessato</h2>
            <p>
              In qualsiasi momento è possibile esercitare i diritti previsti dal GDPR, tra cui:
            </p>
            <ul>
              <li>Diritto di accesso ai dati</li>
              <li>Diritto di rettifica</li>
              <li>Diritto alla cancellazione</li>
              <li>Diritto di limitazione del trattamento</li>
              <li>Diritto alla portabilità dei dati</li>
            </ul>

            <p>
              Per esercitare tali diritti, contattare: privacy@nextfundadvisory.com
            </p>

            <p className="text-sm text-muted-foreground mt-8">
              Ultimo aggiornamento: Dicembre 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
