export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Czy Archimedia robi tylko reklamy?',
    answer:
      'Nie. Kampanie leadowe są ważnym elementem współpracy, ale patrzymy też na ofertę, sprzedaż i proces obsługi zapytań.',
  },
  {
    question: 'Czy pracujecie tylko z architektami wnętrz?',
    answer:
      'Główna specjalizacja Archimedia to architekci wnętrz, projektanci wnętrz i pracownie projektowe.',
  },
  {
    question: 'Czy muszę mieć dużą pracownię?',
    answer:
      'Nie. Współpraca może być dopasowana zarówno do samodzielnego projektanta, jak i do małej pracowni, która chce uporządkować marketing i sprzedaż.',
  },
  {
    question: 'Czy reklamy od razu dadzą klientów?',
    answer:
      'Reklamy mogą wygenerować zapytania, ale wynik zależy też od oferty, budżetu, jakości obsługi leadów i procesu sprzedaży. Dlatego Archimedia pracuje nad całym systemem, a nie tylko nad samym uruchomieniem kampanii.',
  },
  {
    question: 'Czy pomagacie w sprzedaży?',
    answer:
      'Tak. Pomagamy ułożyć sposób kontaktu z leadami, kwalifikację klientów, rozmowę sprzedażową i dalsze kroki po pierwszym zapytaniu.',
  },
  {
    question: 'Czy wdrażacie CRM?',
    answer:
      'Możemy pomóc wdrożyć prosty proces CRM w arkuszu Google albo Asanie, aby leady, zadania i kolejne kroki były uporządkowane.',
  },
];
