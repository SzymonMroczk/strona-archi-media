export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Konsultacja strategiczna',
    description:
      'Rozmawiamy o Twojej pracowni, ofercie, obecnym sposobie pozyskiwania klientów, sprzedaży i celach.',
  },
  {
    number: '02',
    title: 'Strategia',
    description:
      'Określamy grupę docelową, komunikację, formularz zgłoszeniowy i sposób kwalifikowania zapytań.',
  },
  {
    number: '03',
    title: 'Uruchomienie kampanii',
    description: 'Tworzymy i uruchamiamy kampanię Meta Ads na Facebooku i Instagramie.',
  },
  {
    number: '04',
    title: 'Obsługa potencjalnych klientów',
    description:
      'Układamy proces kontaktu, rozmów, follow upów i kwalifikacji klientów.',
  },
  {
    number: '05',
    title: 'Analiza i optymalizacja',
    description:
      'Sprawdzamy wyniki, analizujemy rozmowy i poprawiamy elementy, które wpływają na sprzedaż.',
  },
];
