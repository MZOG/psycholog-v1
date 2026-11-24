const fieldClass =
  "min-h-12 rounded-button border border-field bg-white px-3.5 text-md text-ink";
const labelClass = "text-sm font-semibold";

/** Static form — it does not send anything yet (see struktura.pdf, "Następne kroki"). */
export function ContactForm() {
  return (
    <form className="flex flex-col gap-5 rounded-card border border-line bg-white p-8">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="imie" className={labelClass}>
          Imię
        </label>
        <input id="imie" name="imie" type="text" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="kontakt" className={labelClass}>
          E-mail lub telefon
        </label>
        <input id="kontakt" name="kontakt" type="text" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="forma" className={labelClass}>
          Preferowana forma spotkania
        </label>
        <select id="forma" name="forma" className={fieldClass}>
          <option>Stacjonarnie</option>
          <option>Online</option>
          <option>Bez znaczenia</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="wiadomosc" className={labelClass}>
          Wiadomość (opcjonalnie)
        </label>
        <textarea
          id="wiadomosc"
          name="wiadomosc"
          rows={4}
          className="resize-y rounded-button border border-field bg-white px-3.5 py-3 text-md text-ink"
        />
      </div>
      <div className="flex items-start gap-3">
        <input id="zgoda" name="zgoda" type="checkbox" className="mt-0.5 size-5.5 shrink-0" />
        <label htmlFor="zgoda" className="text-xs text-muted">
          Zgadzam się na przetwarzanie danych w celu odpowiedzi na wiadomość. [ODSYŁACZ DO POLITYKI PRYWATNOŚCI]
        </label>
      </div>
      <button
        type="button"
        className="min-h-12 cursor-pointer self-start rounded-button bg-accent px-7 font-semibold text-white"
      >
        Wyślij wiadomość
      </button>
    </form>
  );
}
