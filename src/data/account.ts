export type DemoOrder = {
  id: string;
  date: string;
  status: "Zugestellt" | "Unterwegs" | "In Bearbeitung";
  total: number;
  items: { title: string; qty: number }[];
};

export const demoCustomer = {
  firstName: "Nina",
  lastName: "Brunner",
  email: "nina.brunner@example.ch",
  phone: "+41 79 000 00 00",
  memberSince: "März 2025",
  petName: "Emil",
  petType: "Hund · Labrador",
  petAge: "11 Jahre",
  points: 240,
};

export const demoAddresses = [
  {
    id: "addr-1",
    label: "Lieferadresse",
    name: "Nina Brunner",
    street: "Seestrasse 24",
    city: "8002 Zürich",
    country: "Schweiz",
    primary: true,
  },
  {
    id: "addr-2",
    label: "Rechnungsadresse",
    name: "Nina Brunner",
    street: "Postfach 118",
    city: "8032 Zürich",
    country: "Schweiz",
    primary: false,
  },
];

export const demoOrders: DemoOrder[] = [
  {
    id: "SEN-10428",
    date: "12. Juli 2026",
    status: "Zugestellt",
    total: 148.8,
    items: [
      { title: "SENIVIA Senior Mobility Box", qty: 1 },
      { title: "Lachsöl für Haut & Fell", qty: 2 },
    ],
  },
  {
    id: "SEN-10391",
    date: "28. Juni 2026",
    status: "Unterwegs",
    total: 71,
    items: [{ title: "Gelenk & Gewebe Formel", qty: 1 }],
  },
  {
    id: "SEN-10233",
    date: "3. Mai 2026",
    status: "Zugestellt",
    total: 34.9,
    items: [{ title: "Zahnpflege Set", qty: 1 }],
  },
];