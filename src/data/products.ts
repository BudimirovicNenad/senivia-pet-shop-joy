import gelenk1 from "@/assets/products/gelenk/gelenk-1.jpg.asset.json";
import gelenk2 from "@/assets/products/gelenk/gelenk-2.jpg.asset.json";
import gelenk3 from "@/assets/products/gelenk/gelenk-3.jpg.asset.json";
import gelenk4 from "@/assets/products/gelenk/gelenk-4.jpg.asset.json";
import gelenk5 from "@/assets/products/gelenk/gelenk-5.jpg.asset.json";
import ageing1 from "@/assets/products/healthy-ageing/1.jpg.asset.json";
import ageing2 from "@/assets/products/healthy-ageing/2.png.asset.json";
import ageing3 from "@/assets/products/healthy-ageing/3.jpg.asset.json";
import ageing4 from "@/assets/products/healthy-ageing/4.jpg.asset.json";
import ageing5 from "@/assets/products/healthy-ageing/5.jpg.asset.json";
import lachs1 from "@/assets/products/lachsoel/1.png.asset.json";
import lachs2 from "@/assets/products/lachsoel/2.jpg.asset.json";
import lachs3 from "@/assets/products/lachsoel/3.jpg.asset.json";
import lachs4 from "@/assets/products/lachsoel/4.jpg.asset.json";
import lachs5 from "@/assets/products/lachsoel/5.jpg.asset.json";
import mob1 from "@/assets/products/mobility-snacks/1.jpg.asset.json";
import mob2 from "@/assets/products/mobility-snacks/2.png.asset.json";
import mob3 from "@/assets/products/mobility-snacks/3.jpg.asset.json";
import mob4 from "@/assets/products/mobility-snacks/4.jpg.asset.json";
import mob5 from "@/assets/products/mobility-snacks/5.jpg.asset.json";
import sens1 from "@/assets/products/sensitive-skin-stomach-lamm/1.jpg.asset.json";
import sens2 from "@/assets/products/sensitive-skin-stomach-lamm/2.jpg.asset.json";
import sens3 from "@/assets/products/sensitive-skin-stomach-lamm/3.jpg.asset.json";
import sens4 from "@/assets/products/sensitive-skin-stomach-lamm/4.jpg.asset.json";
import sens5 from "@/assets/products/sensitive-skin-stomach-lamm/5.png.asset.json";
import faug1 from "@/assets/products/faugis-wellness-formel/1.jpg.asset.json";
import faug2 from "@/assets/products/faugis-wellness-formel/2.jpg.asset.json";
import faug3 from "@/assets/products/faugis-wellness-formel/3.jpg.asset.json";
import faug4 from "@/assets/products/faugis-wellness-formel/4.jpg.asset.json";
import faug5 from "@/assets/products/faugis-wellness-formel/5.jpg.asset.json";
import intest1 from "@/assets/products/intestinal-care-snacks/1.jpg.asset.json";
import intest2 from "@/assets/products/intestinal-care-snacks/2.jpg.asset.json";
import intest3 from "@/assets/products/intestinal-care-snacks/3.jpg.asset.json";
import intest4 from "@/assets/products/intestinal-care-snacks/4.jpg.asset.json";
import intest5 from "@/assets/products/intestinal-care-snacks/5.jpg.asset.json";
import sham1 from "@/assets/products/ultra-sensitive-shampoo/1.jpg.asset.json";
import sham2 from "@/assets/products/ultra-sensitive-shampoo/2.jpg.asset.json";
import sham3 from "@/assets/products/ultra-sensitive-shampoo/3.jpg.asset.json";
import sham4 from "@/assets/products/ultra-sensitive-shampoo/4.jpg.asset.json";
import sham5 from "@/assets/products/ultra-sensitive-shampoo/5.jpg.asset.json";
import paste1 from "@/assets/products/zahnpasta-2-in-1/1.jpg.asset.json";
import paste2 from "@/assets/products/zahnpasta-2-in-1/2.png.asset.json";
import paste3 from "@/assets/products/zahnpasta-2-in-1/3.jpg.asset.json";
import paste4 from "@/assets/products/zahnpasta-2-in-1/4.jpg.asset.json";
import paste5 from "@/assets/products/zahnpasta-2-in-1/5.jpg.asset.json";
import brush1 from "@/assets/products/zahnbuerste/1.jpg.asset.json";
import brush2 from "@/assets/products/zahnbuerste/2.jpg.asset.json";
import brush3 from "@/assets/products/zahnbuerste/3.jpg.asset.json";
import brush4 from "@/assets/products/zahnbuerste/4.jpg.asset.json";
import brush5 from "@/assets/products/zahnbuerste/5.jpg.asset.json";
import finger1 from "@/assets/products/fingerbuersten-set/1.png.asset.json";
import finger2 from "@/assets/products/fingerbuersten-set/2.jpg.asset.json";
import finger3 from "@/assets/products/fingerbuersten-set/3.jpg.asset.json";
import finger4 from "@/assets/products/fingerbuersten-set/4.jpg.asset.json";
import finger5 from "@/assets/products/fingerbuersten-set/5.jpg.asset.json";
import oral1 from "@/assets/products/daily-oral-care-snacks/1.jpg.asset.json";
import oral2 from "@/assets/products/daily-oral-care-snacks/2.png.asset.json";
import oral3 from "@/assets/products/daily-oral-care-snacks/3.jpg.asset.json";
import oral4 from "@/assets/products/daily-oral-care-snacks/4.jpg.asset.json";
import oral5 from "@/assets/products/daily-oral-care-snacks/5.jpg.asset.json";
import boxMobility from "@/assets/boxes/box-senior-mobility.jpg";
import boxDarm from "@/assets/boxes/box-darm-sensitiv.jpg";
import boxZahn from "@/assets/boxes/box-zahn-atem.jpg";

export type Species = "hund" | "katze" | "beide";

export type NeedId =
  | "mobilitaet"
  | "ernaehrung"
  | "verdauung"
  | "zahnpflege"
  | "pflege"
  | "vitalitaet";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  tagline: string;
  price: number;
  size: string;
  species: Species;
  needs: NeedId[];
  image: string;
  images?: string[];
  benefits: string[];
  description: string;
  usage: string;
  sourceUrl: string;
  sku?: string;
  barcode?: string;
  specs?: { label: string; value: string }[];
  rating: number;
  reviews: number;
};

export const needs: { id: NeedId; label: string; description: string }[] = [
  { id: "mobilitaet", label: "Beweglichkeit & Gelenke", description: "Unterstützung für Gelenke, Knorpel und Bewegungsfreude." },
  { id: "ernaehrung", label: "Ernährung & Vitalität", description: "Sorgfältig abgestimmtes Futter für die zweite Lebenshälfte." },
  { id: "verdauung", label: "Darm & Sensibilität", description: "Milde Rezepturen für empfindliche Haut und Magen." },
  { id: "zahnpflege", label: "Zähne & Atem", description: "Tägliche Mundpflege ohne Stress." },
  { id: "pflege", label: "Pflege & Hygiene", description: "Sanfte Pflege für Haut und Fell im Alter." },
  { id: "vitalitaet", label: "Alltag & Wohlbefinden", description: "Kleine Rituale für gute Tage." },
];

export const products: Product[] = [
  {
    slug: "gelenk-gewebe-formel",
    name: "Mobility Formula – Gelenke & Gewebe",
    brand: "Nature's Protection",
    tagline: "Ergänzungsfuttermittel für erwachsene Hunde – Gelenke und Gewebe",
    price: 32,
    size: "75 g · 75 Tabletten",
    species: "hund",
    needs: ["mobilitaet"],
    image: gelenk1.url,
    images: [gelenk1.url, gelenk2.url, gelenk3.url, gelenk4.url, gelenk5.url],
    benefits: [
      "Für Gelenke, Knorpel und Bindegewebe",
      "Mit Microzeogen-Detox-Komplex",
      "Unterstützt Haut, Fell und Verdauung",
      "Für das natürliche Abwehrsystem",
    ],
    description:
      "Ergänzungsfuttermittel mit Vitaminen und Mineralstoffen für erwachsene Hunde, deren Gelenke im Alter mehr Aufmerksamkeit brauchen. Die Formel unterstützt Knorpel und Bindegewebe, wirkt über den Microzeogen-Komplex entlastend auf den Stoffwechsel und begleitet zugleich Haut, Fell, Verdauung und das natürliche Abwehrsystem. Basis: Fisch.",
    usage: "Täglich mit dem Futter geben. Dosierung nach Gewicht gemäss Packungsangabe.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-complementary-feed-for-adult-dogs-for-joint-and-tissues-supp--CAN63297",
    sku: "CAN63297",
    barcode: "4779051632978",
    specs: [
      { label: "Hauptzutat", value: "Fisch" },
      { label: "Format", value: "75 g (75 Tabletten)" },
      { label: "Bruttogewicht", value: "100 g" },
      { label: "Masse", value: "9.8 × 4.5 × 4.5 cm" },
    ],
    rating: 4.8,
    reviews: 34,
  },
  {
    slug: "healthy-ageing",
    name: "Healthy Ageing – Zähne, Gelenke & Knochen",
    brand: "Nature's Protection",
    tagline: "Ergänzungsfutter in Pulverform für ältere Hunde und Katzen",
    price: 21,
    size: "250 g Pulver",
    species: "beide",
    needs: ["vitalitaet", "ernaehrung", "mobilitaet"],
    image: ageing1.url,
    images: [ageing1.url, ageing2.url, ageing3.url, ageing4.url, ageing5.url],
    benefits: [
      "Für Zähne, Gelenke und Knochen",
      "Speziell für die Senior-Lebensphase",
      "Mit Microzeogen-Mineralkomplex",
      "Für Hund und Katze geeignet",
    ],
    description:
      "Ein Ergänzungsfutter aus der Life-Long-MZG-System-Linie, das die typischen Themen des Älterwerdens begleitet: stabile Knochen, belastbare Gelenke und gesunde Zähne. Der natürliche Microzeogen-Mineralkomplex unterstützt die Nährstoffaufnahme und hilft, Stoffwechselrückstände zu binden. Die feine Pulverform lässt sich unauffällig unter das gewohnte Futter mischen – für Hunde und Katzen.",
    usage: "Einmal täglich unter das Futter mischen. Menge nach Körpergewicht gemäss Packungsangabe.",
    sourceUrl:
      "https://petly-groom.shop/it/product/healthy-ageing-nature-s-protection-complementary-feed-for-senior-dogs-and-cats-f--CAN451425",
    sku: "CAN451425",
    barcode: "4779051632886",
    specs: [
      { label: "Form", value: "Pulver" },
      { label: "Format", value: "250 g" },
      { label: "Bruttogewicht", value: "250 g" },
      { label: "Masse", value: "12.6 × 10 × 10 cm" },
    ],
    rating: 4.9,
    reviews: 41,
  },
  {
    slug: "lachsoel",
    name: "Lachsöl für Haut & Fell",
    brand: "Nature's Protection",
    tagline: "Ergänzungsfutter für erwachsene Hunde und Katzen",
    price: 21,
    size: "300 ml",
    species: "beide",
    needs: ["pflege", "ernaehrung"],
    image: lachs1.url,
    images: [lachs1.url, lachs2.url, lachs3.url, lachs4.url, lachs5.url],
    benefits: [
      "Natürliche Omega-3-Fettsäuren",
      "Für gesunde Haut und glänzendes Fell",
      "Unterstützt Beweglichkeit und Herz",
      "Praktische Pumpdosierung",
    ],
    description:
      "Reines Lachsöl als tägliche Ergänzung für Hunde und Katzen. Die enthaltenen Omega-3-Fettsäuren gehören zu den bestuntersuchten Nährstoffen für Haut und Fell und unterstützen zugleich Beweglichkeit und Herzfunktion. Der Pumpspender macht die Dosierung sauber und exakt – und die Akzeptanz ist bei den meisten Tieren hervorragend.",
    usage: "Täglich über das Futter geben, 1–4 Pumpstösse je nach Körpergewicht. Nach dem Öffnen kühl lagern.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-complementary-feed-salmon-oil-for-adult-dogs-and-cats-to-sup--CAN63555",
    sku: "CAN63555",
    barcode: "4779051635559",
    specs: [
      { label: "Form", value: "Öl mit Pumpspender" },
      { label: "Format", value: "300 ml" },
    ],
    rating: 4.7,
    reviews: 58,
  },
  {
    slug: "mobility-snacks",
    name: "Superior Care Mobility & Joint Health Snacks mit Lamm",
    brand: "Nature's Protection",
    tagline: "Getreidefreie Snacks für Beweglichkeit und Gelenke – White Dogs",
    price: 5,
    size: "150 g",
    species: "hund",
    needs: ["mobilitaet"],
    image: mob1.url,
    images: [mob1.url, mob2.url, mob3.url, mob4.url, mob5.url],
    benefits: [
      "Getreidefrei, mit Lamm als Hauptprotein",
      "Für Beweglichkeit und Gelenkgesundheit",
      "Mit Microzeogen-Mineralkomplex",
      "Weich und saftig – auch für ältere Zähne",
    ],
    description:
      "Snacks, die mehr sind als eine Belohnung: Die getreidefreie Rezeptur der Superior-Care-Linie für Hunde mit weissem Fell setzt auf Lamm als hochverträgliche Proteinquelle und unterstützt Gelenke und Beweglichkeit. Die weiche, saftige Konsistenz macht sie auch für Senioren mit empfindlichen Zähnen angenehm – für alle Rassen geeignet.",
    usage: "Als Belohnung zwischendurch, je nach Grösse des Hundes bis zu 5 Stück täglich.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-superior-care-white-dogs-grain-free-mobility-and-joint-healt--KIKNPSC47655",
    sku: "KIKNPSC47655",
    barcode: "4771317476555",
    specs: [
      { label: "Hauptzutat", value: "Lamm" },
      { label: "Format", value: "150 g" },
      { label: "Masse", value: "19 × 16 × 2.5 cm" },
    ],
    rating: 4.6,
    reviews: 22,
  },
  {
    slug: "sensitive-skin-stomach-lamm",
    name: "Superior Care Sensitive Skin & Stomach Lamm",
    brand: "Nature's Protection",
    tagline: "Trockenfutter für erwachsene Hunde aller Rassen mit sensibler Haut und Magen",
    price: 22,
    size: "1.5 kg",
    species: "hund",
    needs: ["verdauung", "ernaehrung"],
    image: sens1.url,
    images: [sens1.url, sens2.url, sens3.url, sens4.url, sens5.url],
    benefits: [
      "Lamm als hochverträgliche Proteinquelle",
      "Für empfindliche Haut und Verdauung",
      "Mit Vitamin B, Eisen und Zink",
      "Für alle Rassen, auch mit weissem Fell",
    ],
    description:
      "Ein mildes Alleinfutter für erwachsene Hunde, die auf ihr Futter empfindlich reagieren. Lamm ist hochverdaulich, sehr schmackhaft und liefert Vitamin B, Eisen und Zink; die Rezeptur wurde für sensible Haut und einen ruhigen Magen entwickelt und ist damit eine verlässliche Grundlage im Napf – gerade in der zweiten Lebenshälfte.",
    usage: "Als Alleinfutter gemäss Fütterungstabelle. Frisches Wasser stets bereitstellen.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-superior-care-sensitive-skin-and-stomach-lamb-adult-all-bree--89efb7ec-fdab-41ba-876e-f4e32c3ce99a",
    sku: "NPSC45792",
    barcode: "4771317457929",
    specs: [
      { label: "Hauptzutat", value: "Lamm" },
      { label: "Format", value: "1.5 kg" },
      { label: "Futtertyp", value: "Trockenfutter, Alleinfutter" },
    ],
    rating: 4.8,
    reviews: 63,
  },
  {
    slug: "faugis-wellness-formel",
    name: "Faugis Wellness-Formel 5-in-1",
    brand: "Nature's Protection",
    tagline: "Ergänzungsfutter für erwachsene Hunde und Katzen",
    price: 29,
    size: "30 ml",
    species: "beide",
    needs: ["verdauung", "vitalitaet"],
    image: faug1.url,
    images: [faug1.url, faug2.url, faug3.url, faug4.url, faug5.url],
    benefits: [
      "Wellness-Formel 5-in-1",
      "Für Hund und Katze",
      "Flüssig und exakt dosierbar",
      "Sehr sparsam im Verbrauch",
    ],
    description:
      "Die Faugis Wellness-Formel bündelt fünf Wirkbereiche in einem hochkonzentrierten Tropfen-Konzentrat: Wohlbefinden, Verdauung, Haut und Fell, Abwehrkräfte und Vitalität. Durch die kleine Dosierung genügen wenige Tropfen täglich, was die Formel gerade bei Katzen und kleinen Hunden angenehm unauffällig macht.",
    usage: "Täglich unter das Futter mischen, Dosierung gemäss Packungsangabe.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-faugis-complementary-feed-for-adult-dogs-and-cats-wellness-f--FAU63554",
    sku: "FAU63554",
    barcode: "4779051635542",
    specs: [
      { label: "Form", value: "Flüssigkonzentrat" },
      { label: "Format", value: "30 ml" },
      { label: "Masse", value: "9 × 3 × 3 cm" },
    ],
    rating: 4.5,
    reviews: 18,
  },
  {
    slug: "intestinal-care-snacks",
    name: "Superior Care Intestinal Care Snacks mit Weissfisch & Reis",
    brand: "Nature's Protection",
    tagline: "Snacks für die Darmpflege – White Dogs, alle Rassen",
    price: 5,
    size: "150 g",
    species: "hund",
    needs: ["verdauung"],
    image: intest1.url,
    images: [intest1.url, intest2.url, intest3.url, intest4.url, intest5.url],
    benefits: [
      "Weissfisch als hypoallergene Proteinquelle",
      "Mit Präbiotika für eine ausgeglichene Darmflora",
      "Mineralstoffe für Knochen und Zähne",
      "Leicht verdaulich, ideal für leichte Kost",
    ],
    description:
      "Kleine Snacks für Hunde mit sensibler Verdauung. Weissfisch ist besonders leicht verdaulich und hypoallergen, Präbiotika unterstützen das Gleichgewicht der Darmbakterien und Reis macht die Rezeptur bekömmlich. Zusätzliche Mineralstoffe tragen zur Bildung starker Knochen und Zähne bei – und verbessern nebenbei Haut- und Fellzustand.",
    usage: "Als Belohnung zwischendurch, je nach Grösse des Hundes bis zu 5 Stück täglich.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-superior-care-white-dogs-intestinal-care-with-white-fish-and--KIKNPSC47656",
    sku: "KIKNPSC47656",
    barcode: "4771317476562",
    specs: [
      { label: "Hauptzutat", value: "Weissfisch & Reis" },
      { label: "Format", value: "150 g" },
      { label: "Masse", value: "19 × 16 × 2.5 cm" },
    ],
    rating: 4.6,
    reviews: 19,
  },
  {
    slug: "ultra-sensitive-shampoo",
    name: "Pure Nature Ultra Sensitive Fellshampoo",
    brand: "Tauro Pro Line",
    tagline: "Für Hunde und Katzen mit empfindlicher Haut",
    price: 22,
    size: "400 ml",
    species: "beide",
    needs: ["pflege"],
    image: sham1.url,
    images: [sham1.url, sham2.url, sham3.url, sham4.url, sham5.url],
    benefits: [
      "Mit Kokosöl, Ringelblume und Lavendel",
      "Beruhigt gereizte, empfindliche Haut",
      "Ohne aggressive Reinigungsstoffe",
      "Sehr sparsam in der Anwendung",
    ],
    description:
      "Ein besonders mildes Shampoo für ältere Tiere mit dünner werdender, empfindlicher Haut. Kokosöl schützt das Protein im Fell, Safran und Immortelle beruhigen die Haut, Bergamotte und ägyptische Geranie regulieren die Talgproduktion und Ringelblume unterstützt die Regeneration. Lavendel wirkt beruhigend – für ein Bad, das kein Stress ist.",
    usage: "Verdünnt anwenden, sanft einmassieren und gut ausspülen. Meist genügt 1× pro Monat.",
    sourceUrl:
      "https://petly-groom.shop/it/product/tauro-pro-line-pure-nature-ultra-sensitive-coat-shampoo-for-dogs-and-cats-with-s--TPL63797",
    sku: "TPL63797",
    barcode: "4779051637973",
    specs: [
      { label: "Format", value: "400 ml" },
      { label: "Masse", value: "19 × 6.5 × 6.5 cm" },
    ],
    rating: 4.7,
    reviews: 37,
  },
  {
    slug: "zahnpasta-2-in-1",
    name: "Pure Nature Zahnpasta 2-in-1 mit weisser Tonerde",
    brand: "Tauro Pro Line",
    tagline: "Mit Kaolin, Zeolith und Grüntee-Extrakt – für Hund und Katze",
    price: 7,
    size: "100 ml",
    species: "beide",
    needs: ["zahnpflege"],
    image: paste1.url,
    images: [paste1.url, paste2.url, paste3.url, paste4.url, paste5.url],
    benefits: [
      "Weisse Tonerde (Kaolin) reinigt sanft",
      "Zeolith bindet Belag und Gerüche",
      "Grüntee-Extrakt für frischen Atem",
      "2-in-1: reinigt und pflegt in einem Schritt",
    ],
    description:
      "Zahnpflege muss im Alter kein Kampf sein. Diese 2-in-1 Paste kombiniert weisse Tonerde (Kaolin) als sanftes Poliermittel mit Zeolith, das Belag und Geruchsstoffe bindet, und Grüntee-Extrakt für einen frischen Atem. Sie reinigt ohne Abrasion des empfindlichen Zahnhalses und muss nicht ausgespült werden – für Hunde und Katzen.",
    usage: "2–3× pro Woche mit Zahnbürste oder Fingerbürste auftragen. Nicht ausspülen nötig.",
    sourceUrl:
      "https://petly-groom.shop/it/product/tauro-pro-line-pure-nature-toothpaste-with-white-clay-kaolin-zeolite-and-green-t--TPLPN63382",
    sku: "TPLPN63382",
    barcode: "4779051633821",
    specs: [
      { label: "Format", value: "100 ml" },
      { label: "Masse", value: "17.2 × 4 × 4 cm" },
    ],
    rating: 4.8,
    reviews: 44,
  },
  {
    slug: "zahnbuerste",
    name: "Pure Nature Zahnbürste für Haustiere",
    brand: "Tauro Pro Line",
    tagline: "Weiche Zahnbürste für Hund und Katze, 1 Stück",
    price: 4,
    size: "1 Stück",
    species: "beide",
    needs: ["zahnpflege"],
    image: brush1.url,
    images: [brush1.url, brush2.url, brush3.url, brush4.url, brush5.url],
    benefits: [
      "Weiche Borsten für empfindliches Zahnfleisch",
      "Zwei Bürstenköpfe für vorne und hinten",
      "Schlanker Griff mit guter Kontrolle",
      "Passend zur Pure Nature Zahnpasta",
    ],
    description:
      "Eine schlanke Bürste mit weichen Borsten, entwickelt für die empfindlichen Zahnhälse älterer Tiere. Zwei unterschiedlich grosse Bürstenköpfe erreichen sowohl die Schneidezähne als auch die hinteren Backenzähne, der lange Griff gibt Halt und Übersicht.",
    usage: "Mit der Pure Nature Zahnpasta 2–3× pro Woche in kreisenden Bewegungen verwenden.",
    sourceUrl: "https://petly-groom.shop/it/product/tauro-pro-line-pure-nature-pet-toothbrush-1-pc--TPL63639",
    sku: "TPL63639",
    barcode: "4779051636396",
    specs: [
      { label: "Inhalt", value: "1 Stück" },
      { label: "Masse", value: "20 × 5 × 3 cm" },
    ],
    rating: 4.4,
    reviews: 12,
  },
  {
    slug: "fingerbuersten-set",
    name: "Fingerbürsten-Set für Haustiere, 2 Stück",
    brand: "Tauro Pro Line",
    tagline: "Zwei Fingerbürsten für sanfte Mundpflege",
    price: 3,
    size: "2 Stück",
    species: "beide",
    needs: ["zahnpflege"],
    image: finger1.url,
    images: [finger1.url, finger2.url, finger3.url, finger4.url, finger5.url],
    benefits: [
      "Ideal für ängstliche oder ältere Tiere",
      "Viel Gefühl und Kontrolle beim Putzen",
      "Zwei Bürsten im Set",
      "Leicht zu reinigen",
    ],
    description:
      "Für Tiere, die keine Bürste im Maul akzeptieren: Die weichen Silikon-Fingerbürsten werden über den Finger gezogen und geben Ihnen unmittelbares Gefühl und Kontrolle. Das macht den Einstieg in die Zahnpflege deutlich ruhiger – zwei Stück pro Set, ideal für den Wechsel.",
    usage: "Über den Finger ziehen, mit Zahnpasta in kreisenden Bewegungen putzen. Danach ausspülen.",
    sourceUrl: "https://petly-groom.shop/it/product/tauro-pro-line-pet-finger-brushes-set-2-pcs--TPL63640",
    sku: "TPL63640",
    barcode: "4779051636402",
    specs: [
      { label: "Inhalt", value: "2 Stück" },
      { label: "Masse", value: "26.5 × 5 × 2.5 cm" },
    ],
    rating: 4.5,
    reviews: 15,
  },
  {
    slug: "daily-oral-care-snacks",
    name: "Superior Care Daily Oral Care Snacks mit Insektenprotein",
    brand: "Nature's Protection",
    tagline: "Getreidefreie Snacks für die Mundhygiene – White Dogs",
    price: 5,
    size: "150 g",
    species: "hund",
    needs: ["zahnpflege"],
    image: oral1.url,
    images: [oral1.url, oral2.url, oral3.url, oral4.url, oral5.url],
    benefits: [
      "Insektenprotein: hypoallergen und nachhaltig",
      "Für die tägliche Mundhygiene und weisse Zähne",
      "Mit Seealgen gegen Zahnbelag und Verfärbungen",
      "Getreidefrei, weich und saftig",
    ],
    description:
      "Die einfachste Form der Zahnpflege: ein Snack, der beim Kauen mechanisch reinigt und die Mundflora unterstützt. Insektenprotein als Hauptproteinquelle ist hypoallergen, reich an essenziellen Aminosäuren und besonders nachhaltig; Seealgen helfen, Zahnbelag und Verfärbungen zu reduzieren und den Atem frisch zu halten. Getreidefrei und in Zusammenarbeit mit der TAURO Kennel entwickelt.",
    usage: "Täglich 1–3 Stück, je nach Grösse des Hundes – ideal an den Tagen zwischen dem Zähneputzen.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-superior-care-complementary-grain-free-feed-snacks-for-oral---KIKNPSC47652",
    sku: "KIKNPSC47652",
    barcode: "4771317476524",
    specs: [
      { label: "Hauptzutat", value: "Insektenprotein" },
      { label: "Format", value: "150 g" },
      { label: "Masse", value: "19 × 16 × 2.5 cm" },
    ],
    rating: 4.7,
    reviews: 26,
  },
];

export type Bundle = {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  intro: string;
  forWhom: string;
  productSlugs: string[];
  needs: NeedId[];
};

export const bundles: Bundle[] = [
  {
    slug: "senior-mobility",
    name: "SENIVIA Senior Mobility",
    subtitle: "Premium Box für Beweglichkeit und Vitalität",
    price: 71,
    image: boxMobility,
    intro:
      "Vier aufeinander abgestimmte Produkte für Tiere, die langsamer werden: Gelenkbausteine, eine Senior-Formel, reines Lachsöl und Snacks mit Funktion.",
    forWhom: "Für Hunde ab etwa sieben Jahren, die beim Aufstehen oder Treppensteigen zögern.",
    productSlugs: ["gelenk-gewebe-formel", "healthy-ageing", "lachsoel", "mobility-snacks"],
    needs: ["mobilitaet", "vitalitaet"],
  },
  {
    slug: "darm-sensitiv",
    name: "SENIVIA Darm & Sensitiv",
    subtitle: "Premium Box für empfindliche Haut und Verdauung",
    price: 70,
    image: boxDarm,
    intro:
      "Ein mildes Grundfutter, eine flüssige Wellness-Formel, Snacks zur Darmpflege und ein besonders sanftes Shampoo – abgestimmt auf sensible Tiere.",
    forWhom: "Für Tiere mit empfindlichem Magen, Juckreiz oder wechselhafter Verdauung.",
    productSlugs: [
      "sensitive-skin-stomach-lamm",
      "faugis-wellness-formel",
      "intestinal-care-snacks",
      "ultra-sensitive-shampoo",
    ],
    needs: ["verdauung", "pflege"],
  },
  {
    slug: "zahn-atem",
    name: "SENIVIA Zahn & Atem",
    subtitle: "Premium Box für Mundpflege ohne Stress",
    price: 17,
    image: boxZahn,
    intro:
      "Alles für eine ruhige Zahnpflege-Routine: 2-in-1 Zahnpasta, eine weiche Zahnbürste, zwei Fingerbürsten und Snacks für die täglichen Zwischentage.",
    forWhom: "Für Tiere mit Zahnstein, Mundgeruch oder empfindlichem Zahnfleisch.",
    productSlugs: ["zahnpasta-2-in-1", "zahnbuerste", "fingerbuersten-set", "daily-oral-care-snacks"],
    needs: ["zahnpflege"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getBundle = (slug: string) => bundles.find((b) => b.slug === slug);
export const bundleProducts = (bundle: Bundle) =>
  bundle.productSlugs.map((s) => getProduct(s)!).filter(Boolean);
export const bundleValue = (bundle: Bundle) =>
  bundleProducts(bundle).reduce((sum, p) => sum + p.price, 0);

export const formatCHF = (value: number) =>
  new Intl.NumberFormat("de-CH", { style: "currency", currency: "CHF" }).format(value);