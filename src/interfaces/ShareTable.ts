interface ShareTable {
  id: number;
  Aktien: string;
  Anteil_am_Depot: string;
  ISIN_WKN: string;
  Kaufdatum: string;
  Anzahl_Anteile: string;
  Kaufpreis_pro_Anteil: number;
  Transaktionskosten: number;
  Gesamtpreis: number;
  Gesamtwert_Position: number;
  Aktueller_Marktpreis_pro_Anteil: number;
  Aktueller_Wert: number;
  Gewinn: number;
  Performance: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

  export default ShareTable;