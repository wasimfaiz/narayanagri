export type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export const seedProducts: Product[] = [
  {
    name: "GoldenGrow Hybrid Wheat",
    description: "Uniform growth with strong grain quality and high vigour.",
    price: "â‚¹1,250 / 10 kg",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Shakti Hybrid Rice",
    description: "High tillering seed for improved yield and disease tolerance.",
    price: "â‚¹1,480 / 10 kg",
    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "SunRise Maize Pro",
    description: "Early maturing maize with sturdy stalks and bold cobs.",
    price: "â‚¹980 / 5 kg",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "FreshLeaf Vegetable Mix",
    description: "Balanced seasonal pack for kitchen gardens and small plots.",
    price: "â‚¹450 / pack",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "GreenGold Hybrid Bajra",
    description: "Drought-tolerant seed ideal for semi-arid regions.",
    price: "â‚¹720 / 10 kg",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "VitalVeg Tomato Prime",
    description: "Firm fruit, strong yield, and longer shelf life.",
    price: "â‚¹600 / 100 g",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop",
  },
];

export const medicineProducts: Product[] = [
  {
    name: "Nitro King",
    description: "Plant nutrition solution formulated to support stronger growth and healthier crop performance.",
    price: "₹150/Unit",
    image: "/images/product-img/medicine-img/nitro-king.jpeg",
  },
  {
    name: "Bio Super Zyme",
    description: "Bio-enzyme based crop support product designed to improve plant vigor and field response.",
    price: "₹180/KG",
    image: "/images/product-img/medicine-img/bio-super-zyme.jpeg",
  },
  {
    name: "Dr. Agri",
    description: "Crop care formulation created for dependable plant support across different growth stages.",
    price: "₹680 / 1 L",
    image: "/images/product-img/medicine-img/dr-agri.jpeg",
  },
  {
    name: "Rifill Ultra",
    description: "Advanced liquid crop solution aimed at maintaining healthier plants and better field productivity.",
    price: "₹390 / 1 L",
    image: "/images/product-img/medicine-img/refil-ultra.jpeg",
  },
];

export const machineryProducts: Product[] = [
  {
    name: "FieldMaster Power Tiller",
    description: "Compact tiller for quick soil preparation.",
    price: "â‚¹68,000",
    image: "/images/product-img/roster-machine.jpeg",
  },
  {
    name: "AquaJet Irrigation Pump",
    description: "Reliable pump for efficient water delivery.",
    price: "â‚¹18,500",
    image: "/images/product-img/roaster.jpeg",
  },
  {
    name: "Blending Machine 100kg",
    description: "Heavy-duty blending machine designed for efficient 100 kg batch mixing operations.",
    price: "Rs 85,000",
    image: "/images/product-img/Blending Machine 100kg.jpeg",
  },
  {
    name: "ProSpray Boom Sprayer",
    description: "Uniform spray coverage for large plots.",
    price: "â‚¹12,900",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "HarvestMate Mini Harvester",
    description: "Cuts and gathers crops with minimal grain loss.",
    price: "â‚¹1,95,000",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "TorqueDrive Cultivator",
    description: "Multi-purpose cultivator for weeding and aeration.",
    price: "â‚¹24,500",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "SeedPro Planter",
    description: "Consistent seed spacing for even germination.",
    price: "â‚¹32,000",
    image:
      "https://images.unsplash.com/photo-1472220625704-91e1462799b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Agri-Roaster",
    description: "A specialized roaster for various agricultural products.",
    price: "â‚¹45,000",
    image: "/images/product-img/roaster.jpeg",
  },
];

export const toolsProducts: Product[] = [
  {
    name: "Heavy-Duty Shovel",
    description: "Strong steel blade for digging and leveling.",
    price: "â‚¹650",
    image:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Precision Pruning Set",
    description: "Clean cuts for healthy orchard maintenance.",
    price: "â‚¹950",
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "RainMist Sprinkler Kit",
    description: "Easy-install sprinkler set for uniform irrigation.",
    price: "â‚¹1,200",
    image:
      "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "GripMax Hand Trowel",
    description: "Comfortable grip with rust-resistant finish.",
    price: "â‚¹220",
    image:
      "https://images.unsplash.com/photo-1444393907314-689b6cf40d05?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "CropCare Weeding Hoe",
    description: "Lightweight hoe for fast weeding.",
    price: "â‚¹480",
    image:
      "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Harvest Basket Pro",
    description: "Durable basket for easy crop handling.",
    price: "â‚¹320",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1200&auto=format&fit=crop",
  },
];

export const organicFoodProducts: Product[] = [
  {
    name: "Organic Makhana",
    description: "Premium organic makhana selected for clean taste, light texture, and healthy snacking.",
    price: "Rs 240 / kg",
    image: "/images/product-img/organic-img/organic-makhana.jpeg",
  },
  {
    name: "Organic Mushroom",
    description: "Fresh organic mushrooms grown with care for better flavor, texture, and nutrition.",
    price: "Rs 180 / kg",
    image: "/images/product-img/organic-img/organic-mashroom.jpeg",
  },
  {
    name: "Organic Strawberry",
    description: "Naturally grown strawberries with bright color, fresh aroma, and sweet flavor.",
    price: "Rs 260 / kg",
    image: "/images/product-img/organic-img/organic-strawberry.jpeg",
  },
];

export const bonsaiProducts: Product[] = [
  {
    name: "Classic Indoor Bonsai",
    description: "A compact decorative bonsai ideal for homes, desks, and reception spaces.",
    price: "Rs 1,250",
    image: "/images/product-img/bonsai-img/bonsai1.jpeg",
  },
  {
    name: "Premium Garden Bonsai",
    description: "A carefully shaped bonsai with a rich canopy for balconies and garden corners.",
    price: "Rs 1,850",
    image: "/images/product-img/bonsai-img/bonsai2.jpeg",
  },
  {
    name: "Miniature Artistic Bonsai",
    description: "An elegant small-format bonsai grown for visual appeal and easy maintenance.",
    price: "Rs 980",
    image: "/images/product-img/bonsai-img/bonsai3.jpeg",
  },
];
