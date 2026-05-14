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
    type: 'Rozwijająca się pracownia',
    context: 'Projektowanie ogrodów rozwijało się głównie przez polecenia, ale brakowało przewidywalnego źródła nowych rozmów.',
    implementation: [
      'wdrożenie kampanii w social media',
      'formularz kwalifikujący zgłoszenia',
      'proces kontaktu po wypełnieniu formularza',
    ],
    resultMetric: '3 umowy',
    resultLabel: 'w pierwszych 30 dniach współpracy',
    resultDescription: 'Największa zmiana była w tym, że zapytania zaczęły przechodzić przez konkretny proces, zamiast kończyć się na luźnych wiadomościach.',
  },
  {
    name: 'Kasia',
    type: 'Pracownia po roku intensywnego rozwoju',
    context: 'Sprzedaż działała falami. Raz pojawiało się więcej zapytań, później następował przestój.',
    implementation: [
      'stała kampania leadowa',
      'kwalifikacja leadów przed rozmową',
      'analiza powodów utraty zapytań',
    ],
    resultMetric: '109 280 zł',
    resultLabel: 'wartość podpisanych umów w miesiąc',
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
    resultMetric: '5 osób',
    resultLabel: 'zespół po rozwoju pracowni',
    resultDescription: 'Maciej rozwinął pracownię do 5 osobowego zespołu, bo zaczął zarządzać procesem, a nie pojedynczymi wiadomościami.',
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
    resultMetric: '2 umowy',
    resultLabel: 'podpisane w pierwszym miesiącu współpracy',
    resultDescription: 'Efekt pojawił się nie dlatego, że sama reklama magicznie sprzedała usługę, ale dlatego, że każdy etap po zgłoszeniu był dopilnowany.',
  },
];
