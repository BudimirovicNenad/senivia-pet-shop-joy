import mobilityFormula from "@/assets/products/p-mobility-formula.jpg";
import healthyAgeing from "@/assets/products/p-healthy-ageing.jpg";
import salmonOil from "@/assets/products/p-salmon-oil.jpg";
import mobilitySnacks from "@/assets/products/p-mobility-snacks.jpg";
import sensitiveFood from "@/assets/products/p-sensitive-food.jpg";
import faugis from "@/assets/products/p-faugis.jpg";
import intestinalSnacks from "@/assets/products/p-intestinal-snacks.jpg";
import shampoo from "@/assets/products/p-shampoo.jpg";
import toothpaste from "@/assets/products/p-toothpaste.jpg";
import toothbrush from "@/assets/products/p-toothbrush.jpg";
import fingerbrushes from "@/assets/products/p-fingerbrushes.jpg";
import oralSnacks from "@/assets/products/p-oral-snacks.jpg";
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
  benefits: string[];
  description: string;
  usage: string;
  sourceUrl: string;
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
    name: "Gelenk- & Gewebeformel",
    brand: "Nature's Protection",
    tagline: "Ergänzungsfutter für Gelenke und Bindegewebe",
    price: 34,
    size: "60 Tabletten",
    species: "hund",
    needs: ["mobilitaet"],
    image: mobilityFormula,
    benefits: [
      "Mit Glucosamin, Chondroitin und MSM",
      "Für Hunde mit nachlassender Beweglichkeit",
      "Tägliche Gabe, einfach zu dosieren",
    ],
    description:
      "Eine sorgfältig zusammengestellte Formel für Hunde, deren Gelenke im Alter mehr Aufmerksamkeit brauchen. Die Kombination aus Gelenkbausteinen und Pflanzenextrakten unterstützt Knorpel und Bindegewebe im täglichen Bewegungsablauf.",
    usage: "Täglich mit dem Futter geben. Dosierung nach Gewicht gemäss Packungsangabe.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-complementary-feed-for-adult-dogs-for-joint-and-tissues-supp--CAN63297",
    rating: 4.8,
    reviews: 34,
  },
  {
    slug: "healthy-ageing",
    name: "Healthy Ageing",
    brand: "Nature's Protection",
    tagline: "Ergänzungsfutter für ältere Hunde und Katzen",
    price: 39,
    size: "150 g Pulver",
    species: "beide",
    needs: ["vitalitaet", "ernaehrung"],
    image: healthyAgeing,
    benefits: [
      "Speziell für die Senior-Lebensphase",
      "Für Hund und Katze geeignet",
      "Fein dosierbares Pulver",
    ],
    description:
      "Ein Ergänzungsfutter, das die typischen Themen des Älterwerdens begleitet: Vitalität, Zellschutz und ein ruhiger, stabiler Alltag. Die feine Pulverform lässt sich unauffällig unter das gewohnte Futter mischen.",
    usage: "Einmal täglich unter das Futter mischen. Menge nach Körpergewicht.",
    sourceUrl:
      "https://petly-groom.shop/it/product/healthy-ageing-nature-s-protection-complementary-feed-for-senior-dogs-and-cats-f--CAN451425",
    rating: 4.9,
    reviews: 41,
  },
  {
    slug: "lachsoel",
    name: "Lachsöl",
    brand: "Nature's Protection",
    tagline: "Reines Lachsöl für Haut, Fell und Wohlbefinden",
    price: 24,
    size: "300 ml",
    species: "beide",
    needs: ["pflege", "ernaehrung"],
    image: salmonOil,
    benefits: [
      "Natürliche Omega-3-Fettsäuren",
      "Für glänzendes Fell und geschmeidige Haut",
      "Sehr gute Akzeptanz",
    ],
    description:
      "Kaltgewonnenes Lachsöl als tägliche Ergänzung. Die enthaltenen Omega-3-Fettsäuren gehören zu den bestuntersuchten Nährstoffen für Haut, Fell und allgemeines Wohlbefinden – und werden von den meisten Tieren gerne angenommen.",
    usage: "Täglich über das Futter geben, 1–4 Pumpstösse je nach Gewicht.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-complementary-feed-salmon-oil-for-adult-dogs-and-cats-to-sup--CAN63555",
    rating: 4.7,
    reviews: 58,
  },
  {
    slug: "mobility-snacks",
    name: "Superior Care Mobility Snacks",
    brand: "Nature's Protection",
    tagline: "Getreidefreie Snacks für Gelenkgesundheit",
    price: 12,
    size: "110 g",
    species: "hund",
    needs: ["mobilitaet"],
    image: mobilitySnacks,
    benefits: [
      "Getreidefrei",
      "Für weisses Fell entwickelt",
      "Belohnung mit Funktion",
    ],
    description:
      "Snacks, die mehr sind als eine Belohnung: Die getreidefreie Rezeptur der Superior Care Linie für weisse Hunde unterstützt Gelenke und Beweglichkeit und passt in jeden Spaziergang.",
    usage: "Als Belohnung zwischendurch, bis zu 5 Stück täglich.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-superior-care-white-dogs-grain-free-mobility-and-joint-healt--KIKNPSC47655",
    rating: 4.6,
    reviews: 22,
  },
  {
    slug: "sensitive-skin-stomach-lamm",
    name: "Superior Care Sensitive Skin & Stomach, Lamm",
    brand: "Nature's Protection",
    tagline: "Alleinfutter für sensible Hunde aller Rassen",
    price: 29,
    size: "1.5 kg",
    species: "hund",
    needs: ["verdauung", "ernaehrung"],
    image: sensitiveFood,
    benefits: [
      "Eine einzige Proteinquelle: Lamm",
      "Für empfindliche Haut und Magen",
      "Mit natürlichem Kokosöl",
    ],
    description:
      "Ein mildes Alleinfutter für Hunde, die auf ihr Futter empfindlich reagieren. Lamm als einzige Proteinquelle, hochwertige Fette und eine gut verträgliche Zusammensetzung machen es zur ruhigen Grundlage im Napf.",
    usage: "Als Alleinfutter gemäss Fütterungstabelle. Wasser stets bereitstellen.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-superior-care-sensitive-skin-and-stomach-lamb-adult-all-bree--89efb7ec-fdab-41ba-876e-f4e32c3ce99a",
    rating: 4.8,
    reviews: 63,
  },
  {
    slug: "faugis-wellness-formel",
    name: "Faugis Wellness-Formel",
    brand: "Nature's Protection",
    tagline: "Ergänzungsfutter für innere Balance",
    price: 27,
    size: "100 ml",
    species: "beide",
    needs: ["verdauung", "vitalitaet"],
    image: faugis,
    benefits: [
      "Für Hund und Katze",
      "Unterstützt das Wohlbefinden im Alltag",
      "Flüssig, exakt dosierbar",
    ],
    description:
      "Die Faugis Wellness-Formel begleitet Tiere, die zu Unruhe im Verdauungssystem neigen. Flüssig, mild und einfach in die tägliche Routine einzubauen.",
    usage: "Täglich unter das Futter mischen, Dosierung gemäss Packung.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-faugis-complementary-feed-for-adult-dogs-and-cats-wellness-f--FAU63554",
    rating: 4.5,
    reviews: 18,
  },
  {
    slug: "intestinal-care-snacks",
    name: "Superior Care Intestinal Care Snacks",
    brand: "Nature's Protection",
    tagline: "Snacks mit Weissfisch für die Darmpflege",
    price: 12,
    size: "110 g",
    species: "hund",
    needs: ["verdauung"],
    image: intestinalSnacks,
    benefits: [
      "Mit Weissfisch und Ballaststoffen",
      "Getreidefrei",
      "Für empfindliche Verdauung",
    ],
    description:
      "Kleine Snacks für Hunde mit sensibler Verdauung. Weissfisch und ausgewählte Ballaststoffe unterstützen eine ruhige Darmtätigkeit – ohne Getreide.",
    usage: "Als Belohnung zwischendurch, bis zu 5 Stück täglich.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-superior-care-white-dogs-intestinal-care-with-white-fish-and--KIKNPSC47656",
    rating: 4.6,
    reviews: 19,
  },
  {
    slug: "ultra-sensitive-shampoo",
    name: "Pure Nature Ultra Sensitive Shampoo",
    brand: "Tauro Pro Line",
    tagline: "Mildes Fellshampoo für Hund und Katze",
    price: 26,
    size: "400 ml",
    species: "beide",
    needs: ["pflege"],
    image: shampoo,
    benefits: [
      "Ohne Duft- und Farbstoffe",
      "Für empfindliche Haut im Alter",
      "Sehr sparsam in der Anwendung",
    ],
    description:
      "Ein besonders mildes Shampoo für ältere Tiere mit dünner werdender Haut. Die Rezeptur verzichtet auf Duftstoffe und reinigt sanft, ohne den natürlichen Schutzfilm zu strapazieren.",
    usage: "Verdünnt anwenden, gut ausspülen. 1× pro Monat genügt meist.",
    sourceUrl:
      "https://petly-groom.shop/it/product/tauro-pro-line-pure-nature-ultra-sensitive-coat-shampoo-for-dogs-and-cats-with-s--TPL63797",
    rating: 4.7,
    reviews: 37,
  },
  {
    slug: "zahnpasta-2-in-1",
    name: "Pure Nature Zahnpasta 2-in-1",
    brand: "Tauro Pro Line",
    tagline: "Mit weisser Tonerde, Zeolith und Grüntee",
    price: 19,
    size: "75 ml",
    species: "beide",
    needs: ["zahnpflege"],
    image: toothpaste,
    benefits: [
      "Reinigt und pflegt in einem Schritt",
      "Ohne Spülen anwendbar",
      "Milder Geschmack",
    ],
    description:
      "Zahnpflege muss im Alter kein Kampf sein. Diese 2-in-1 Paste mit Kaolin, Zeolith und Grüntee reinigt sanft und wirkt zwischen den Zähnen weiter – ohne dass gespült werden muss.",
    usage: "2–3× pro Woche mit Zahnbürste oder Fingerbürste auftragen.",
    sourceUrl:
      "https://petly-groom.shop/it/product/tauro-pro-line-pure-nature-toothpaste-with-white-clay-kaolin-zeolite-and-green-t--TPLPN63382",
    rating: 4.8,
    reviews: 44,
  },
  {
    slug: "zahnbuerste",
    name: "Pure Nature Zahnbürste",
    brand: "Tauro Pro Line",
    tagline: "Weiche Zahnbürste für Hund und Katze",
    price: 9,
    size: "1 Stück",
    species: "beide",
    needs: ["zahnpflege"],
    image: toothbrush,
    benefits: ["Weiche Borsten", "Zwei Bürstenköpfe", "Angenehme Griffform"],
    description:
      "Eine schlanke Bürste mit weichen Borsten, entwickelt für die empfindlichen Zahnhälse älterer Tiere. Zwei Kopfgrössen für vordere und hintere Zähne.",
    usage: "Mit der Zahnpasta 2–3× pro Woche verwenden.",
    sourceUrl: "https://petly-groom.shop/it/product/tauro-pro-line-pure-nature-pet-toothbrush-1-pc--TPL63639",
    rating: 4.4,
    reviews: 12,
  },
  {
    slug: "fingerbuersten-set",
    name: "Fingerbürsten-Set",
    brand: "Tauro Pro Line",
    tagline: "2 Fingerbürsten für sanfte Mundpflege",
    price: 8,
    size: "2 Stück",
    species: "beide",
    needs: ["zahnpflege"],
    image: fingerbrushes,
    benefits: [
      "Für ängstliche Tiere geeignet",
      "Viel Kontrolle beim Putzen",
      "Leicht zu reinigen",
    ],
    description:
      "Für Tiere, die keine Bürste im Maul akzeptieren: Fingerbürsten geben Ihnen Gefühl und Kontrolle und machen den Einstieg in die Zahnpflege deutlich ruhiger.",
    usage: "Über den Finger ziehen, mit Zahnpasta in kreisenden Bewegungen putzen.",
    sourceUrl: "https://petly-groom.shop/it/product/tauro-pro-line-pet-finger-brushes-set-2-pcs--TPL63640",
    rating: 4.5,
    reviews: 15,
  },
  {
    slug: "daily-oral-care-snacks",
    name: "Superior Care Daily Oral Care Snacks",
    brand: "Nature's Protection",
    tagline: "Getreidefreie Snacks für Mundhygiene",
    price: 12,
    size: "110 g",
    species: "hund",
    needs: ["zahnpflege"],
    image: oralSnacks,
    benefits: [
      "Unterstützt die tägliche Mundhygiene",
      "Getreidefrei",
      "Angenehmer Atem",
    ],
    description:
      "Die einfachste Form der Zahnpflege: ein Snack, der beim Kauen mechanisch reinigt und die Mundflora unterstützt. Ideal als Ergänzung zwischen den Putztagen.",
    usage: "Täglich 1–3 Stück, je nach Grösse des Hundes.",
    sourceUrl:
      "https://petly-groom.shop/it/product/nature-s-protection-superior-care-complementary-grain-free-feed-snacks-for-oral---KIKNPSC47652",
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
    price: 99,
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
    price: 89,
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
    price: 45,
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