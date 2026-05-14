export interface CaseStudy {
  name: string;
  type: string;
  context: string;
  implementation: string[];
  resultMetric: string;
  resultLabel: string;
  resultDescription: string;
}

export const caseStudies: CaseStudy[] = [
  {
    name: 'Karolina',
    type: 'Pracownia projektowania wnętrz',
    context: 'Dobre projekty, ale brak przewidywalnego źródła zapytań poza poleceniami.',
    implementation: [
      'komunikacja pod klientów z rynku pierwotnego',
      'formularz kwalifikujący zgłoszenia',
      'proces kontaktu po wypełnieniu formularza',
    ],
    resultMetric: '1 miesiąc',
    resultLabel: 'pierwsze umowy z kampanii',
    resultDescription: 'Największa zmiana była w tym, że zapytania zaczęły przechodzić przez konkretny proces, zamiast kończyć się na luźnych wiadomościach.',
  },
  {
    name: 'Kasia',
    type: 'Rozwijająca się pracownia',
    context: 'Sprzedaż działała falami. Raz pojawiało się więcej zapytań, później następował przestój.',
    implementation: [
      'stała kampania leadowa',
      'kwalifikacja klientów przed rozmową',
      'analiza powodów utraty zapytań',
    ],
    resultMetric: '12 miesięcy',
    resultLabel: 'ciągła praca na lejku sprzedaży',
    resultDescription: 'Zamiast pojedynczej akcji reklamowej powstał proces, który można analizować, poprawiać i skalować.',
  },
  {
    name: 'Maciej',
    type: 'Biuro z większymi ambicjami',
    context: 'Problemem nie była tylko liczba zapytań, ale też brak uporządkowania sprzedaży i obsługi klienta.',
    implementation: [
      'system pozyskiwania klientów',
      'podział etapów sprzedaży',
      'wdrożenie pracy na statusach',
    ],
    resultMetric: 'zespół',
    resultLabel: 'rozwój pracowni po uporządkowaniu procesu',
    resultDescription: 'Kampania była jednym z elementów. Kluczowe było to, że właściciel zaczął zarządzać procesem, a nie pojedynczymi wiadomościami.',
  },
  {
    name: 'Przemek',
    type: 'Pracownia po starcie kampanii',
    context: 'Wcześniej brakowało stałego dopływu rozmów z osobami realnie zainteresowanymi projektem.',
    implementation: [
      'nowa komunikacja reklamowa',
      'szybki kontakt z potencjalnym klientem',
      'prowadzenie rozmowy do decyzji o współpracy',
    ],
    resultMetric: 'umowy',
    resultLabel: 'podpisane po pierwszym miesiącu',
    resultDescription: 'Efekt pojawił się nie dlatego, że sama reklama magicznie sprzedała usługę, ale dlatego, że każdy etap po zgłoszeniu był dopilnowany.',
  },
];
