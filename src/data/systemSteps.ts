export interface SystemStep {
  title: string;
  description: string;
}

export const systemSteps: SystemStep[] = [
  {
    title: 'Grupa docelowa',
    description:
      'Ustalamy, do jakich klientów chcesz trafiać i jaki typ inwestora ma największy sens dla Twojej pracowni.',
  },
  {
    title: 'Reklama',
    description:
      'Uruchamiamy kampanie na Facebooku i Instagramie, których celem jest pozyskiwanie zapytań od osób zainteresowanych projektem wnętrza.',
  },
  {
    title: 'Formularz',
    description:
      'Potencjalni klienci zostawiają zgłoszenie przez formularz, dzięki czemu można szybciej ocenić, czy pasują do Twojej oferty.',
  },
  {
    title: 'Kontakt',
    description:
      'Kontaktujesz się z osobami, które zostawiły zgłoszenie i prowadzisz je do rozmowy sprzedażowej.',
  },
  {
    title: 'Sprzedaż',
    description:
      'Celem nie jest sam lead. Celem jest podpisanie umowy na projekt wnętrza.',
  },
];
