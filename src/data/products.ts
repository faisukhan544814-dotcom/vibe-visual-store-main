// Product data structure with categories and subcategories
export interface Product {
  id: number;
  image: string;
  title: string;
  features: string[];
  price: number;
  category: string;
  subcategory: string;
}

// Import product images from assets
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

// Product images using local assets for reliability
const productImages = {
  // Infant Formula - Using local product images
  infantFormula: {
    newborn: [product1, product2, product3, product4, product5, product6],
    infant: [product2, product3, product4, product5, product6, product1],
    followOn: [product3, product4, product5, product6, product1, product2],
    toddler: [product4, product5, product6, product1, product2, product3],
    cowMilk: [product5, product6, product1, product2, product3, product4],
    goatMilk: [product6, product1, product2, product3, product4, product5],
    soy: [product1, product3, product5, product2, product4, product6],
    specialty: [product2, product4, product6, product1, product3, product5],
    brands: [product3, product5, product1, product4, product6, product2],
    formats: [product4, product6, product2, product5, product1, product3]
  },
  
  // Diapers - Using local product images
  diapers: {
    newborn: [product1, product2, product3, product4, product5, product6],
    disposable: [product2, product3, product4, product5, product6, product1],
    pampers: [product3, product4, product5, product6, product1, product2],
    huggies: [product4, product5, product6, product1, product2, product3],
    features: [product5, product6, product1, product2, product3, product4],
    essentials: [product6, product1, product2, product3, product4, product5]
  },

  // Feeding & Nursery - Using local product images
  feedingNursery: {
    breastPumps: [product1, product2, product3, product4, product5, product6],
    supplements: [product2, product3, product4, product5, product6, product1],
    bottles: [product3, product4, product5, product6, product1, product2],
    features: [product4, product5, product6, product1, product2, product3],
    essentials: [product5, product6, product1, product2, product3, product4]
  },

  // Baby Gear - Using local product images
  babyGear: {
    strollers: [product1, product2, product3, product4, product5, product6],
    playpen: [product2, product3, product4, product5, product6, product1],
    skincare: [product3, product4, product5, product6, product1, product2],
    clothing: [product4, product5, product6, product1, product2, product3],
    bathCare: [product5, product6, product1, product2, product3, product4],
    essentials: [product6, product1, product2, product3, product4, product5]
  }
};

// ===== INFANT FORMULA PRODUCTS =====
export const infantFormulaProducts: Product[] = [
  // DEFAULT PRODUCTS (shown when no filter is selected)
  {
    id: 1001,
    image: productImages.infantFormula.newborn[0],
    title: "Organic Gentle Milk",
    features: ["Gentle on tummy", "DHA enriched", "Easy to digest"],
    price: 89.99,
    category: "default",
    subcategory: "All Infant Formulas"
  },
  {
    id: 1002,
    image: productImages.infantFormula.newborn[1],
    title: "Goat Milk",
    features: ["Natural goat milk", "Hypoallergenic", "Rich in nutrients"],
    price: 89.99,
    category: "default",
    subcategory: "All Infant Formulas"
  },
  {
    id: 1003,
    image: productImages.infantFormula.infant[0],
    title: "Baby Food Maker",
    features: ["Steam & blend", "BPA free", "Easy to clean"],
    price: 89.99,
    category: "default",
    subcategory: "All Infant Formulas"
  },
  {
    id: 1004,
    image: productImages.infantFormula.infant[1],
    title: "Healthy Milk",
    features: ["Vitamin enriched", "Immune support", "Growth formula"],
    price: 89.99,
    category: "default",
    subcategory: "All Infant Formulas"
  },
  {
    id: 1005,
    image: productImages.infantFormula.followOn[0],
    title: "Healthy Milk",
    features: ["Follow-on formula", "Brain development", "Calcium rich"],
    price: 89.99,
    category: "default",
    subcategory: "All Infant Formulas"
  },
  {
    id: 1006,
    image: productImages.infantFormula.followOn[1],
    title: "Organic Gentle Milk",
    features: ["100% organic", "No preservatives", "Natural taste"],
    price: 89.99,
    category: "default",
    subcategory: "All Infant Formulas"
  },
  {
    id: 1007,
    image: productImages.infantFormula.toddler[0],
    title: "Organic Babies Milk - Gentle Care",
    features: ["Toddler formula", "Growth support", "Immune boost"],
    price: 34.99,
    category: "default",
    subcategory: "All Infant Formulas"
  },
  {
    id: 1008,
    image: productImages.infantFormula.toddler[1],
    title: "Natural Milk",
    features: ["Natural ingredients", "Easy mixing", "Great taste"],
    price: 24.99,
    category: "default",
    subcategory: "All Infant Formulas"
  },
  {
    id: 1009,
    image: productImages.infantFormula.newborn[2],
    title: "Goat Milk",
    features: ["Premium goat milk", "Gentle formula", "Nutrient dense"],
    price: 59.99,
    category: "default",
    subcategory: "All Infant Formulas"
  },

  // BY AGE - Newborn (0-3 months)
  {
    id: 1010,
    image: productImages.infantFormula.newborn[0],
    title: "Newborn Gentle Start",
    features: ["0-3 months", "Ultra gentle", "Easy digestion"],
    price: 32.99,
    category: "age",
    subcategory: "Newborn (0-3 months)"
  },
  {
    id: 1011,
    image: productImages.infantFormula.newborn[1],
    title: "First Days Formula",
    features: ["Newborn specific", "Prebiotics", "DHA & ARA"],
    price: 35.99,
    category: "age",
    subcategory: "Newborn (0-3 months)"
  },
  {
    id: 1012,
    image: productImages.infantFormula.newborn[2],
    title: "Tender Care Newborn",
    features: ["Soft on tummy", "Iron fortified", "Vitamin D"],
    price: 29.99,
    category: "age",
    subcategory: "Newborn (0-3 months)"
  },
  {
    id: 1013,
    image: productImages.infantFormula.newborn[3],
    title: "Pure Start Formula",
    features: ["Natural ingredients", "No artificial colors", "Gentle proteins"],
    price: 38.99,
    category: "age",
    subcategory: "Newborn (0-3 months)"
  },
  {
    id: 1014,
    image: productImages.infantFormula.newborn[4],
    title: "Baby's First Milk",
    features: ["Closest to breast milk", "Immune support", "Brain development"],
    price: 42.99,
    category: "age",
    subcategory: "Newborn (0-3 months)"
  },
  {
    id: 1015,
    image: productImages.infantFormula.newborn[5],
    title: "Newborn Complete",
    features: ["Complete nutrition", "Easy mixing", "Gentle formula"],
    price: 36.99,
    category: "age",
    subcategory: "Newborn (0-3 months)"
  },

  // BY AGE - Infant (0-6 months)
  {
    id: 1016,
    image: productImages.infantFormula.infant[0],
    title: "Growing Baby Formula",
    features: ["0-6 months", "Growth support", "Calcium enriched"],
    price: 34.99,
    category: "age",
    subcategory: "Infant (0-6 months)"
  },
  {
    id: 1017,
    image: productImages.infantFormula.infant[1],
    title: "Infant Development Milk",
    features: ["Brain development", "Eye health", "Immune boost"],
    price: 37.99,
    category: "age",
    subcategory: "Infant (0-6 months)"
  },
  {
    id: 1018,
    image: productImages.infantFormula.infant[2],
    title: "Smart Baby Formula",
    features: ["Cognitive support", "DHA & Choline", "Prebiotics"],
    price: 41.99,
    category: "age",
    subcategory: "Infant (0-6 months)"
  },
  {
    id: 1019,
    image: productImages.infantFormula.infant[3],
    title: "Healthy Growth Milk",
    features: ["Balanced nutrition", "Digestive health", "Natural taste"],
    price: 33.99,
    category: "age",
    subcategory: "Infant (0-6 months)"
  },
  {
    id: 1020,
    image: productImages.infantFormula.infant[4],
    title: "Premium Infant Care",
    features: ["Premium quality", "Organic ingredients", "Gentle on stomach"],
    price: 45.99,
    category: "age",
    subcategory: "Infant (0-6 months)"
  },
  {
    id: 1021,
    image: productImages.infantFormula.infant[5],
    title: "Active Baby Formula",
    features: ["Energy support", "Muscle development", "Bone strength"],
    price: 39.99,
    category: "age",
    subcategory: "Infant (0-6 months)"
  },

  // BY AGE - Follow on (6-12 months)
  {
    id: 1022,
    image: productImages.infantFormula.followOn[0],
    title: "Follow-On Advanced",
    features: ["6-12 months", "Advanced nutrition", "Iron rich"],
    price: 36.99,
    category: "age",
    subcategory: "Follow on (6-12 months)"
  },
  {
    id: 1023,
    image: productImages.infantFormula.followOn[1],
    title: "Growing Up Milk",
    features: ["Transition formula", "Solid food support", "Vitamin enriched"],
    price: 40.99,
    category: "age",
    subcategory: "Follow on (6-12 months)"
  },
  {
    id: 1024,
    image: productImages.infantFormula.followOn[2],
    title: "Second Stage Formula",
    features: ["Stage 2 nutrition", "Digestive comfort", "Growth support"],
    price: 38.99,
    category: "age",
    subcategory: "Follow on (6-12 months)"
  },
  {
    id: 1025,
    image: productImages.infantFormula.followOn[3],
    title: "Explorer's Milk",
    features: ["Active babies", "Energy boost", "Immune protection"],
    price: 43.99,
    category: "age",
    subcategory: "Follow on (6-12 months)"
  },
  {
    id: 1026,
    image: productImages.infantFormula.followOn[4],
    title: "Development Plus",
    features: ["Cognitive development", "Motor skills", "Social growth"],
    price: 41.99,
    category: "age",
    subcategory: "Follow on (6-12 months)"
  },
  {
    id: 1027,
    image: productImages.infantFormula.followOn[5],
    title: "Balanced Growth",
    features: ["Balanced formula", "Natural flavors", "Easy transition"],
    price: 37.99,
    category: "age",
    subcategory: "Follow on (6-12 months)"
  },

  // BY AGE - Toddler (12+ months)
  {
    id: 1028,
    image: productImages.infantFormula.toddler[0],
    title: "Toddler Power Milk",
    features: ["12+ months", "Active toddlers", "Brain boost"],
    price: 39.99,
    category: "age",
    subcategory: "Toddler (12+ months)"
  },
  {
    id: 1029,
    image: productImages.infantFormula.toddler[1],
    title: "Growing Strong Formula",
    features: ["Muscle development", "Bone health", "Immune support"],
    price: 42.99,
    category: "age",
    subcategory: "Toddler (12+ months)"
  },
  {
    id: 1030,
    image: productImages.infantFormula.toddler[2],
    title: "Smart Toddler Milk",
    features: ["Learning support", "Memory boost", "Focus enhancement"],
    price: 46.99,
    category: "age",
    subcategory: "Toddler (12+ months)"
  },
  {
    id: 1031,
    image: productImages.infantFormula.toddler[3],
    title: "Adventure Milk",
    features: ["Energy for play", "Growth nutrients", "Tasty flavor"],
    price: 38.99,
    category: "age",
    subcategory: "Toddler (12+ months)"
  },
  {
    id: 1032,
    image: productImages.infantFormula.toddler[4],
    title: "Little Explorer Formula",
    features: ["Curiosity support", "Healthy growth", "Natural ingredients"],
    price: 44.99,
    category: "age",
    subcategory: "Toddler (12+ months)"
  },
  {
    id: 1033,
    image: productImages.infantFormula.toddler[5],
    title: "Big Kid Nutrition",
    features: ["Transition to solids", "Balanced diet", "Vitamin complete"],
    price: 40.99,
    category: "age",
    subcategory: "Toddler (12+ months)"
  },

  // BY BASE INGREDIENT - Cow's milk based
  {
    id: 1034,
    image: productImages.infantFormula.cowMilk[0],
    title: "Pure Cow's Milk Formula",
    features: ["100% cow's milk", "Natural proteins", "Rich in calcium"],
    price: 31.99,
    category: "baseIngredient",
    subcategory: "Cow's milk based"
  },
  {
    id: 1035,
    image: productImages.infantFormula.cowMilk[1],
    title: "Traditional Milk Formula",
    features: ["Classic cow's milk", "Time-tested", "Nutritious"],
    price: 29.99,
    category: "baseIngredient",
    subcategory: "Cow's milk based"
  },
  {
    id: 1036,
    image: productImages.infantFormula.cowMilk[2],
    title: "Farm Fresh Formula",
    features: ["Farm sourced", "Quality assured", "Natural goodness"],
    price: 35.99,
    category: "baseIngredient",
    subcategory: "Cow's milk based"
  },
  {
    id: 1052,
    image: productImages.infantFormula.cowMilk[3],
    title: "Premium Cow's Milk",
    features: ["High quality", "Rich taste", "Complete nutrition"],
    price: 33.99,
    category: "baseIngredient",
    subcategory: "Cow's milk based"
  },
  {
    id: 1053,
    image: productImages.infantFormula.cowMilk[4],
    title: "Classic Cow Formula",
    features: ["Traditional recipe", "Trusted quality", "Easy digest"],
    price: 32.99,
    category: "baseIngredient",
    subcategory: "Cow's milk based"
  },
  {
    id: 1054,
    image: productImages.infantFormula.cowMilk[5],
    title: "Natural Cow's Milk",
    features: ["No additives", "Pure milk", "Healthy choice"],
    price: 34.99,
    category: "baseIngredient",
    subcategory: "Cow's milk based"
  },

  // BY BASE INGREDIENT - Goat's milk based
  {
    id: 1037,
    image: productImages.infantFormula.goatMilk[0],
    title: "Gentle Goat Formula",
    features: ["Easy to digest", "Naturally gentle", "Rich nutrients"],
    price: 45.99,
    category: "baseIngredient",
    subcategory: "Goat's milk based"
  },
  {
    id: 1038,
    image: productImages.infantFormula.goatMilk[1],
    title: "Premium Goat Milk",
    features: ["Premium quality", "Sensitive tummies", "Natural proteins"],
    price: 48.99,
    category: "baseIngredient",
    subcategory: "Goat's milk based"
  },
  {
    id: 1039,
    image: productImages.infantFormula.goatMilk[2],
    title: "Pure Goat Nutrition",
    features: ["100% goat milk", "Hypoallergenic", "Digestive comfort"],
    price: 52.99,
    category: "baseIngredient",
    subcategory: "Goat's milk based"
  },
  {
    id: 1055,
    image: productImages.infantFormula.goatMilk[3],
    title: "Organic Goat Formula",
    features: ["Certified organic", "Natural goodness", "Gentle care"],
    price: 49.99,
    category: "baseIngredient",
    subcategory: "Goat's milk based"
  },
  {
    id: 1056,
    image: productImages.infantFormula.goatMilk[4],
    title: "Goat Milk Complete",
    features: ["Complete nutrition", "Easy absorption", "Gentle formula"],
    price: 47.99,
    category: "baseIngredient",
    subcategory: "Goat's milk based"
  },
  {
    id: 1057,
    image: productImages.infantFormula.goatMilk[5],
    title: "Natural Goat Blend",
    features: ["Natural blend", "Smooth texture", "Nutritious"],
    price: 46.99,
    category: "baseIngredient",
    subcategory: "Goat's milk based"
  },

  // BY BASE INGREDIENT - Soy based
  {
    id: 1040,
    image: productImages.infantFormula.soy[0],
    title: "Soy Complete Formula",
    features: ["Plant-based protein", "Lactose free", "Gentle formula"],
    price: 33.99,
    category: "baseIngredient",
    subcategory: "Soy based"
  },
  {
    id: 1041,
    image: productImages.infantFormula.soy[1],
    title: "Natural Soy Milk",
    features: ["Non-GMO soy", "Easy digestion", "Nutritionally complete"],
    price: 36.99,
    category: "baseIngredient",
    subcategory: "Soy based"
  },
  {
    id: 1042,
    image: productImages.infantFormula.soy[2],
    title: "Soy Growth Formula",
    features: ["Growth support", "Plant proteins", "Vitamin enriched"],
    price: 39.99,
    category: "baseIngredient",
    subcategory: "Soy based"
  },
  {
    id: 1058,
    image: productImages.infantFormula.soy[3],
    title: "Organic Soy Formula",
    features: ["100% organic soy", "No chemicals", "Pure nutrition"],
    price: 38.99,
    category: "baseIngredient",
    subcategory: "Soy based"
  },
  {
    id: 1059,
    image: productImages.infantFormula.soy[4],
    title: "Premium Soy Blend",
    features: ["Premium quality", "Smooth mixing", "Great taste"],
    price: 35.99,
    category: "baseIngredient",
    subcategory: "Soy based"
  },
  {
    id: 1060,
    image: productImages.infantFormula.soy[5],
    title: "Soy Nutrition Plus",
    features: ["Enhanced nutrition", "Added vitamins", "Healthy choice"],
    price: 37.99,
    category: "baseIngredient",
    subcategory: "Soy based"
  },

  // BY BASE INGREDIENT - Plant based / Vegan
  {
    id: 1061,
    image: productImages.infantFormula.soy[0],
    title: "Plant-Based Formula",
    features: ["100% plant-based", "Vegan friendly", "Complete nutrition"],
    price: 41.99,
    category: "baseIngredient",
    subcategory: "Plant based / Vegan"
  },
  {
    id: 1062,
    image: productImages.infantFormula.soy[1],
    title: "Vegan Baby Formula",
    features: ["No animal products", "Ethical choice", "Nutritious"],
    price: 43.99,
    category: "baseIngredient",
    subcategory: "Plant based / Vegan"
  },
  {
    id: 1063,
    image: productImages.infantFormula.soy[2],
    title: "Organic Plant Formula",
    features: ["Organic plants", "Natural ingredients", "Gentle care"],
    price: 45.99,
    category: "baseIngredient",
    subcategory: "Plant based / Vegan"
  },

  // BY BASE INGREDIENT - Speciality Hydrolyzed
  {
    id: 1064,
    image: productImages.infantFormula.specialty[0],
    title: "Hydrolyzed Protein Formula",
    features: ["Pre-digested proteins", "Easy absorption", "Gentle on tummy"],
    price: 49.99,
    category: "baseIngredient",
    subcategory: "Speciality Hydrolyzed"
  },
  {
    id: 1065,
    image: productImages.infantFormula.specialty[1],
    title: "Partially Hydrolyzed",
    features: ["Partially broken down", "Easier digestion", "Comfort formula"],
    price: 47.99,
    category: "baseIngredient",
    subcategory: "Speciality Hydrolyzed"
  },
  {
    id: 1066,
    image: productImages.infantFormula.specialty[2],
    title: "Extensively Hydrolyzed",
    features: ["Fully hydrolyzed", "Allergy management", "Medical grade"],
    price: 52.99,
    category: "baseIngredient",
    subcategory: "Speciality Hydrolyzed"
  },

  // BY SPECIALTY NEEDS - Easy to Digest
  {
    id: 1043,
    image: productImages.infantFormula.specialty[0],
    title: "Gentle Digest Formula",
    features: ["Pre-digested proteins", "Sensitive stomachs", "Comfort blend"],
    price: 41.99,
    category: "specialtyNeeds",
    subcategory: "Easy to Digest"
  },
  {
    id: 1044,
    image: productImages.infantFormula.specialty[1],
    title: "Comfort Care Milk",
    features: ["Reduced lactose", "Easy absorption", "Tummy friendly"],
    price: 38.99,
    category: "specialtyNeeds",
    subcategory: "Easy to Digest"
  },
  {
    id: 1045,
    image: productImages.infantFormula.specialty[2],
    title: "Digestive Comfort Plus",
    features: ["Probiotics added", "Gentle on system", "Smooth digestion"],
    price: 44.99,
    category: "specialtyNeeds",
    subcategory: "Easy to Digest"
  },
  {
    id: 1067,
    image: productImages.infantFormula.specialty[3],
    title: "Sensitive Tummy Formula",
    features: ["Extra gentle", "Reduced gas", "Comfort feeding"],
    price: 42.99,
    category: "specialtyNeeds",
    subcategory: "Easy to Digest"
  },
  {
    id: 1068,
    image: productImages.infantFormula.specialty[4],
    title: "Digest Ease Formula",
    features: ["Easy breakdown", "Quick absorption", "Gentle care"],
    price: 40.99,
    category: "specialtyNeeds",
    subcategory: "Easy to Digest"
  },
  {
    id: 1069,
    image: productImages.infantFormula.specialty[5],
    title: "Comfort Plus Formula",
    features: ["Maximum comfort", "Gentle ingredients", "Happy tummy"],
    price: 43.99,
    category: "specialtyNeeds",
    subcategory: "Easy to Digest"
  },

  // BY SPECIALTY NEEDS - Lactose Free
  {
    id: 1070,
    image: productImages.infantFormula.specialty[0],
    title: "Lactose-Free Formula",
    features: ["No lactose", "Easy digestion", "Complete nutrition"],
    price: 39.99,
    category: "specialtyNeeds",
    subcategory: "Lactose Free"
  },
  {
    id: 1071,
    image: productImages.infantFormula.specialty[1],
    title: "Dairy-Free Complete",
    features: ["No dairy", "Plant-based", "Nutritious"],
    price: 41.99,
    category: "specialtyNeeds",
    subcategory: "Lactose Free"
  },
  {
    id: 1072,
    image: productImages.infantFormula.specialty[2],
    title: "Lactose-Free Plus",
    features: ["Enhanced formula", "Added vitamins", "Gentle care"],
    price: 43.99,
    category: "specialtyNeeds",
    subcategory: "Lactose Free"
  },

  // BY SPECIALTY NEEDS - Hypoallergenic
  {
    id: 1073,
    image: productImages.infantFormula.specialty[3],
    title: "Hypoallergenic Formula",
    features: ["Allergy-friendly", "Tested safe", "Gentle ingredients"],
    price: 46.99,
    category: "specialtyNeeds",
    subcategory: "Hypoallergenic"
  },
  {
    id: 1074,
    image: productImages.infantFormula.specialty[4],
    title: "Allergy Care Formula",
    features: ["Reduced allergens", "Safe choice", "Dermatologist tested"],
    price: 48.99,
    category: "specialtyNeeds",
    subcategory: "Hypoallergenic"
  },
  {
    id: 1075,
    image: productImages.infantFormula.specialty[5],
    title: "Sensitive Formula",
    features: ["Ultra gentle", "No harsh ingredients", "Safe for all"],
    price: 44.99,
    category: "specialtyNeeds",
    subcategory: "Hypoallergenic"
  },

  // BY SPECIALTY NEEDS - Anti-Reflux / Spit up
  {
    id: 1076,
    image: productImages.infantFormula.specialty[0],
    title: "Anti-Reflux Formula",
    features: ["Reduces spit-up", "Thicker consistency", "Comfort feeding"],
    price: 42.99,
    category: "specialtyNeeds",
    subcategory: "Anti-Reflux / Spit up"
  },
  {
    id: 1077,
    image: productImages.infantFormula.specialty[1],
    title: "Reflux Care Plus",
    features: ["Gentle on stomach", "Reduces reflux", "Happy feeding"],
    price: 44.99,
    category: "specialtyNeeds",
    subcategory: "Anti-Reflux / Spit up"
  },
  {
    id: 1078,
    image: productImages.infantFormula.specialty[2],
    title: "Comfort Reflux Formula",
    features: ["Anti-reflux blend", "Easy digestion", "Peaceful feeding"],
    price: 46.99,
    category: "specialtyNeeds",
    subcategory: "Anti-Reflux / Spit up"
  },

  // BY SPECIALTY NEEDS - Pre-mature medical needs
  {
    id: 1079,
    image: productImages.infantFormula.specialty[3],
    title: "Preemie Formula",
    features: ["For premature babies", "Extra nutrients", "Medical grade"],
    price: 52.99,
    category: "specialtyNeeds",
    subcategory: "Pre-mature medical needs"
  },
  {
    id: 1080,
    image: productImages.infantFormula.specialty[4],
    title: "NICU Formula",
    features: ["Hospital grade", "Intensive care", "Specialized nutrition"],
    price: 54.99,
    category: "specialtyNeeds",
    subcategory: "Pre-mature medical needs"
  },
  {
    id: 1081,
    image: productImages.infantFormula.specialty[5],
    title: "Premature Care",
    features: ["Specialized care", "Enhanced nutrition", "Medical support"],
    price: 56.99,
    category: "specialtyNeeds",
    subcategory: "Pre-mature medical needs"
  },

  // BY BRAND - Enfamil
  {
    id: 1046,
    image: productImages.infantFormula.brands[0],
    title: "Enfamil Newborn",
    features: ["Trusted brand", "Clinically proven", "Complete nutrition"],
    price: 37.99,
    category: "brand",
    subcategory: "Enfamil"
  },
  {
    id: 1047,
    image: productImages.infantFormula.brands[1],
    title: "Enfamil Infant",
    features: ["Brain building", "Immune support", "Easy to prepare"],
    price: 35.99,
    category: "brand",
    subcategory: "Enfamil"
  },
  {
    id: 1048,
    image: productImages.infantFormula.brands[2],
    title: "Enfamil Toddler",
    features: ["Toddler nutrition", "DHA & Choline", "Growth support"],
    price: 39.99,
    category: "brand",
    subcategory: "Enfamil"
  },
  {
    id: 1082,
    image: productImages.infantFormula.brands[3],
    title: "Enfamil Gentlease",
    features: ["Gentle formula", "Easy digestion", "Reduced fussiness"],
    price: 38.99,
    category: "brand",
    subcategory: "Enfamil"
  },
  {
    id: 1083,
    image: productImages.infantFormula.brands[4],
    title: "Enfamil Premium",
    features: ["Premium quality", "Advanced nutrition", "Best choice"],
    price: 41.99,
    category: "brand",
    subcategory: "Enfamil"
  },
  {
    id: 1084,
    image: productImages.infantFormula.brands[5],
    title: "Enfamil Sensitive",
    features: ["For sensitive tummies", "Gentle care", "Trusted formula"],
    price: 36.99,
    category: "brand",
    subcategory: "Enfamil"
  },

  // BY BRAND - Similac
  {
    id: 1085,
    image: productImages.infantFormula.brands[0],
    title: "Similac Advance",
    features: ["Advanced formula", "Brain development", "Immune support"],
    price: 36.99,
    category: "brand",
    subcategory: "Similac"
  },
  {
    id: 1086,
    image: productImages.infantFormula.brands[1],
    title: "Similac Sensitive",
    features: ["Gentle on tummy", "Easy digestion", "Complete nutrition"],
    price: 37.99,
    category: "brand",
    subcategory: "Similac"
  },
  {
    id: 1087,
    image: productImages.infantFormula.brands[2],
    title: "Similac Pro-Advance",
    features: ["Pro formula", "2'-FL HMO", "Immune support"],
    price: 42.99,
    category: "brand",
    subcategory: "Similac"
  },

  // BY BRAND - Gerber
  {
    id: 1088,
    image: productImages.infantFormula.brands[3],
    title: "Gerber Good Start",
    features: ["Gentle start", "Easy digestion", "Comfort proteins"],
    price: 34.99,
    category: "brand",
    subcategory: "Gerber"
  },
  {
    id: 1089,
    image: productImages.infantFormula.brands[4],
    title: "Gerber Extensive HA",
    features: ["Hypoallergenic", "Protein hydrolysate", "Allergy management"],
    price: 48.99,
    category: "brand",
    subcategory: "Gerber"
  },
  {
    id: 1090,
    image: productImages.infantFormula.brands[5],
    title: "Gerber Soy",
    features: ["Soy-based", "Lactose-free", "Plant protein"],
    price: 36.99,
    category: "brand",
    subcategory: "Gerber"
  },

  // BY BRAND - Kendamil
  {
    id: 1091,
    image: productImages.infantFormula.brands[0],
    title: "Kendamil First Infant",
    features: ["British made", "Whole milk", "Natural ingredients"],
    price: 39.99,
    category: "brand",
    subcategory: "Kendamil"
  },
  {
    id: 1092,
    image: productImages.infantFormula.brands[1],
    title: "Kendamil Follow On",
    features: ["6+ months", "Natural nutrition", "Premium quality"],
    price: 41.99,
    category: "brand",
    subcategory: "Kendamil"
  },
  {
    id: 1093,
    image: productImages.infantFormula.brands[2],
    title: "Kendamil Goat",
    features: ["Goat milk based", "Gentle alternative", "Natural choice"],
    price: 49.99,
    category: "brand",
    subcategory: "Kendamil"
  },

  // BY BRAND - Holie
  {
    id: 1094,
    image: productImages.infantFormula.brands[3],
    title: "Holie Goat Stage 1",
    features: ["Pure goat milk", "Stage 1 formula", "Gentle nutrition"],
    price: 45.99,
    category: "brand",
    subcategory: "Holie"
  },
  {
    id: 1095,
    image: productImages.infantFormula.brands[4],
    title: "Holie Goat Stage 2",
    features: ["Follow-on formula", "6+ months", "Continued nutrition"],
    price: 47.99,
    category: "brand",
    subcategory: "Holie"
  },
  {
    id: 1096,
    image: productImages.infantFormula.brands[5],
    title: "Holie Goat Stage 3",
    features: ["Toddler formula", "12+ months", "Growing nutrition"],
    price: 49.99,
    category: "brand",
    subcategory: "Holie"
  },

  // BY FORMAT - Powder
  {
    id: 1049,
    image: productImages.infantFormula.formats[0],
    title: "Premium Powder Formula",
    features: ["Easy mixing", "Long shelf life", "Economical"],
    price: 28.99,
    category: "format",
    subcategory: "Powder"
  },
  {
    id: 1050,
    image: productImages.infantFormula.formats[1],
    title: "Instant Mix Powder",
    features: ["Quick dissolving", "Smooth texture", "No lumps"],
    price: 32.99,
    category: "format",
    subcategory: "Powder"
  },
  {
    id: 1051,
    image: productImages.infantFormula.formats[2],
    title: "Family Size Powder",
    features: ["Large container", "Value pack", "Fresh sealed"],
    price: 45.99,
    category: "format",
    subcategory: "Powder"
  },
  {
    id: 1097,
    image: productImages.infantFormula.formats[3],
    title: "Travel Size Powder",
    features: ["Convenient size", "Perfect for travel", "Easy to carry"],
    price: 24.99,
    category: "format",
    subcategory: "Powder"
  },
  {
    id: 1098,
    image: productImages.infantFormula.formats[4],
    title: "Organic Powder Formula",
    features: ["100% organic", "Natural powder", "Pure ingredients"],
    price: 38.99,
    category: "format",
    subcategory: "Powder"
  },
  {
    id: 1099,
    image: productImages.infantFormula.formats[5],
    title: "Ultra Fine Powder",
    features: ["Ultra fine texture", "Smooth mixing", "No clumps"],
    price: 35.99,
    category: "format",
    subcategory: "Powder"
  },

  // BY FORMAT - Ready to Feed Liquid
  {
    id: 1100,
    image: productImages.infantFormula.formats[0],
    title: "Ready-to-Feed Bottles",
    features: ["No mixing needed", "Convenient", "Sterile"],
    price: 42.99,
    category: "format",
    subcategory: "Ready to Feed Liquid"
  },
  {
    id: 1101,
    image: productImages.infantFormula.formats[1],
    title: "Liquid Formula Pack",
    features: ["Ready to use", "No preparation", "Perfect temperature"],
    price: 39.99,
    category: "format",
    subcategory: "Ready to Feed Liquid"
  },
  {
    id: 1102,
    image: productImages.infantFormula.formats[2],
    title: "Travel Liquid Formula",
    features: ["Travel friendly", "No mixing", "Convenient feeding"],
    price: 44.99,
    category: "format",
    subcategory: "Ready to Feed Liquid"
  },

  // BY FORMAT - Concentrated Liquid
  {
    id: 1103,
    image: productImages.infantFormula.formats[3],
    title: "Concentrated Formula",
    features: ["Mix with water", "Economical", "Easy preparation"],
    price: 34.99,
    category: "format",
    subcategory: "Concentrated Liquid"
  },
  {
    id: 1104,
    image: productImages.infantFormula.formats[4],
    title: "Liquid Concentrate",
    features: ["1:1 water ratio", "Simple mixing", "Fresh taste"],
    price: 36.99,
    category: "format",
    subcategory: "Concentrated Liquid"
  },
  {
    id: 1105,
    image: productImages.infantFormula.formats[5],
    title: "Premium Concentrate",
    features: ["High quality", "Easy mixing", "Great value"],
    price: 38.99,
    category: "format",
    subcategory: "Concentrated Liquid"
  },

  // BY FORMAT - Bulk / Value Pack
  {
    id: 1106,
    image: productImages.infantFormula.formats[0],
    title: "Bulk Formula Pack",
    features: ["Family size", "Great value", "Long lasting"],
    price: 89.99,
    category: "format",
    subcategory: "Bulk / Value Pack"
  },
  {
    id: 1107,
    image: productImages.infantFormula.formats[1],
    title: "Value Pack Formula",
    features: ["Multiple cans", "Save money", "Stock up"],
    price: 79.99,
    category: "format",
    subcategory: "Bulk / Value Pack"
  },
  {
    id: 1108,
    image: productImages.infantFormula.formats[2],
    title: "Economy Size",
    features: ["Large quantity", "Best value", "Family friendly"],
    price: 94.99,
    category: "format",
    subcategory: "Bulk / Value Pack"
  },

  // BY FORMAT - On the Go Pack
  {
    id: 1109,
    image: productImages.infantFormula.formats[3],
    title: "Travel Formula Pack",
    features: ["Portable", "Individual servings", "Convenient"],
    price: 29.99,
    category: "format",
    subcategory: "On the Go Pack"
  },
  {
    id: 1110,
    image: productImages.infantFormula.formats[4],
    title: "Single Serve Packets",
    features: ["Pre-measured", "No waste", "Perfect portions"],
    price: 32.99,
    category: "format",
    subcategory: "On the Go Pack"
  },
  {
    id: 1111,
    image: productImages.infantFormula.formats[5],
    title: "Portable Formula Kit",
    features: ["Complete kit", "Travel ready", "All-in-one"],
    price: 34.99,
    category: "format",
    subcategory: "On the Go Pack"
  },

  // ESSENTIALS - Bottles and Nipples
  {
    id: 1112,
    image: productImages.infantFormula.formats[0],
    title: "Anti-Colic Bottles",
    features: ["Reduces colic", "Natural flow", "BPA free"],
    price: 24.99,
    category: "essentials",
    subcategory: "Bottles and Nipples"
  },
  {
    id: 1113,
    image: productImages.infantFormula.formats[1],
    title: "Wide Neck Bottles",
    features: ["Easy cleaning", "Natural latch", "Dishwasher safe"],
    price: 22.99,
    category: "essentials",
    subcategory: "Bottles and Nipples"
  },
  {
    id: 1114,
    image: productImages.infantFormula.formats[2],
    title: "Glass Baby Bottles",
    features: ["Pure glass", "No chemicals", "Long lasting"],
    price: 29.99,
    category: "essentials",
    subcategory: "Bottles and Nipples"
  },

  // ESSENTIALS - Sterilizers
  {
    id: 1115,
    image: productImages.infantFormula.formats[3],
    title: "Steam Sterilizer",
    features: ["Kills 99.9% germs", "Quick sterilization", "Large capacity"],
    price: 79.99,
    category: "essentials",
    subcategory: "Sterilizers"
  },
  {
    id: 1116,
    image: productImages.infantFormula.formats[4],
    title: "UV Sterilizer",
    features: ["Chemical-free", "UV-C technology", "Auto shut-off"],
    price: 89.99,
    category: "essentials",
    subcategory: "Sterilizers"
  },
  {
    id: 1117,
    image: productImages.infantFormula.formats[5],
    title: "Microwave Sterilizer",
    features: ["Microwave safe", "Quick & easy", "Compact design"],
    price: 24.99,
    category: "essentials",
    subcategory: "Sterilizers"
  }
];

// ===== DIAPERS PRODUCTS =====
export const diapersProducts: Product[] = [
  // DEFAULT PRODUCTS (shown when no filter is selected)
  {
    id: 2001,
    image: productImages.diapers.newborn[0],
    title: "Organic Diaper Bundle",
    features: ["Ultra absorbent", "Hypoallergenic materials", "Eco-friendly packaging"],
    price: 89.99,
    category: "default",
    subcategory: "All Diapers"
  },
  {
    id: 2002,
    image: productImages.diapers.newborn[1],
    title: "Comfortable Diapers",
    features: ["Soft cotton feel", "Flexible fit", "Leak protection"],
    price: 89.99,
    category: "default",
    subcategory: "All Diapers"
  },
  {
    id: 2003,
    image: productImages.diapers.disposable[0],
    title: "0 size diapers",
    features: ["Newborn size", "Gentle on skin", "Wetness indicator"],
    price: 89.99,
    category: "default",
    subcategory: "All Diapers"
  },
  {
    id: 2004,
    image: productImages.diapers.disposable[1],
    title: "Diaper Bundles",
    features: ["Value pack", "Monthly supply", "Premium quality"],
    price: 89.99,
    category: "default",
    subcategory: "All Diapers"
  },
  {
    id: 2005,
    image: productImages.diapers.pampers[0],
    title: "Safety Diapers",
    features: ["Secure fit", "Rash protection", "All-day comfort"],
    price: 89.99,
    category: "default",
    subcategory: "All Diapers"
  },
  {
    id: 2006,
    image: productImages.diapers.pampers[1],
    title: "Safety Diapers",
    features: ["Advanced protection", "Soft materials", "Easy change"],
    price: 89.99,
    category: "default",
    subcategory: "All Diapers"
  },
  {
    id: 2007,
    image: productImages.diapers.newborn[2],
    title: "Organic Baby Formula - Gentle Care",
    features: ["Pure natural ingredients", "Gentle digestion support", "Hypoallergenic & safe"],
    price: 29.99,
    category: "default",
    subcategory: "All Diapers"
  },
  {
    id: 2008,
    image: productImages.diapers.newborn[3],
    title: "Organic Diaper Bundle",
    features: ["Gentle natural formulas", "Hypoallergenic protection", "Soothing moisturizing care"],
    price: 24.99,
    category: "default",
    subcategory: "All Diapers"
  },
  {
    id: 2009,
    image: productImages.diapers.disposable[2],
    title: "Toddlers Diaper",
    features: ["Toddler size", "Active fit", "Long-lasting protection"],
    price: 49.99,
    category: "default",
    subcategory: "All Diapers"
  },

  // BY BABY'S AGE/SIZE - Newborn (up to 10 lbs / 4.5 kg)
  {
    id: 2010,
    image: productImages.diapers.newborn[0],
    title: "Newborn Ultra Soft",
    features: ["Up to 10 lbs", "Umbilical cord cutout", "Extra gentle"],
    price: 24.99,
    category: "ageSize",
    subcategory: "Newborn (up to 10 lbs / 4.5 kg)"
  },
  {
    id: 2011,
    image: productImages.diapers.newborn[1],
    title: "Tiny Baby Diapers",
    features: ["Preemie friendly", "Soft elastic", "Wetness indicator"],
    price: 26.99,
    category: "ageSize",
    subcategory: "Newborn (up to 10 lbs / 4.5 kg)"
  },
  {
    id: 2012,
    image: productImages.diapers.newborn[2],
    title: "First Days Protection",
    features: ["Hospital grade", "Hypoallergenic", "Breathable"],
    price: 28.99,
    category: "ageSize",
    subcategory: "Newborn (up to 10 lbs / 4.5 kg)"
  },
  {
    id: 2013,
    image: productImages.diapers.newborn[3],
    title: "Gentle Start Diapers",
    features: ["Sensitive skin", "Natural materials", "Comfort fit"],
    price: 25.99,
    category: "ageSize",
    subcategory: "Newborn (up to 10 lbs / 4.5 kg)"
  },
  {
    id: 2014,
    image: productImages.diapers.newborn[4],
    title: "Baby's First Diaper",
    features: ["Ultra absorption", "Leak guards", "Soft waistband"],
    price: 27.99,
    category: "ageSize",
    subcategory: "Newborn (up to 10 lbs / 4.5 kg)"
  },
  {
    id: 2015,
    image: productImages.diapers.newborn[5],
    title: "Newborn Complete Care",
    features: ["24/7 protection", "Rash prevention", "Easy tabs"],
    price: 29.99,
    category: "ageSize",
    subcategory: "Newborn (up to 10 lbs / 4.5 kg)"
  },

  // BY BABY'S AGE/SIZE - Infant (size 1-2)
  {
    id: 2016,
    image: productImages.diapers.disposable[0],
    title: "Growing Baby Diapers",
    features: ["Size 1-2", "Growth friendly", "Flexible sides"],
    price: 22.99,
    category: "ageSize",
    subcategory: "Infant (size 1-2)"
  },
  {
    id: 2017,
    image: productImages.diapers.disposable[1],
    title: "Active Infant Protection",
    features: ["Movement freedom", "Secure fit", "All-day dry"],
    price: 24.99,
    category: "ageSize",
    subcategory: "Infant (size 1-2)"
  },
  {
    id: 2018,
    image: productImages.diapers.disposable[2],
    title: "Comfort Fit Diapers",
    features: ["Stretchy waistband", "Soft materials", "Leak protection"],
    price: 23.99,
    category: "ageSize",
    subcategory: "Infant (size 1-2)"
  },

  // BY TYPE - Disposable
  {
    id: 2019,
    image: productImages.diapers.disposable[0],
    title: "Premium Disposable",
    features: ["Convenient use", "Super absorbent", "Easy disposal"],
    price: 21.99,
    category: "type",
    subcategory: "Disposable"
  },
  {
    id: 2020,
    image: productImages.diapers.disposable[1],
    title: "Ultra Disposable",
    features: ["12-hour protection", "Odor control", "Soft touch"],
    price: 25.99,
    category: "type",
    subcategory: "Disposable"
  },
  {
    id: 2021,
    image: productImages.diapers.disposable[2],
    title: "Everyday Disposable",
    features: ["Daily comfort", "Reliable protection", "Value pack"],
    price: 19.99,
    category: "type",
    subcategory: "Disposable"
  },
  {
    id: 2022,
    image: productImages.diapers.disposable[3],
    title: "Advanced Disposable",
    features: ["Technology enhanced", "Maximum absorption", "Skin friendly"],
    price: 27.99,
    category: "type",
    subcategory: "Disposable"
  },
  {
    id: 2023,
    image: productImages.diapers.disposable[4],
    title: "Comfort Disposable",
    features: ["Extra soft", "Breathable layers", "Gentle elastic"],
    price: 23.99,
    category: "type",
    subcategory: "Disposable"
  },
  {
    id: 2024,
    image: productImages.diapers.disposable[5],
    title: "Night Disposable",
    features: ["Overnight protection", "Extra absorption", "Sleep comfort"],
    price: 26.99,
    category: "type",
    subcategory: "Disposable"
  },

  // BY TYPE - Overnight
  {
    id: 2025,
    image: productImages.diapers.newborn[0],
    title: "Night Guard Diapers",
    features: ["12-hour protection", "Extra thick core", "Sleep through night"],
    price: 28.99,
    category: "type",
    subcategory: "Overnight"
  },
  {
    id: 2026,
    image: productImages.diapers.newborn[1],
    title: "Overnight Plus",
    features: ["Maximum absorption", "Leak barriers", "Comfort fit"],
    price: 31.99,
    category: "type",
    subcategory: "Overnight"
  },
  {
    id: 2027,
    image: productImages.diapers.newborn[2],
    title: "Sleep Tight Diapers",
    features: ["All-night dry", "Soft materials", "Quiet tabs"],
    price: 29.99,
    category: "type",
    subcategory: "Overnight"
  },

  // BY BRAND - Pampers
  {
    id: 2028,
    image: productImages.diapers.pampers[0],
    title: "Pampers Baby Dry",
    features: ["Trusted brand", "3 Extra Absorb Channels", "12-hour protection"],
    price: 24.99,
    category: "brand",
    subcategory: "Pampers"
  },
  {
    id: 2029,
    image: productImages.diapers.pampers[1],
    title: "Pampers Cruisers",
    features: ["360° Fit", "Extra Absorb Core", "Soft & stretchy"],
    price: 27.99,
    category: "brand",
    subcategory: "Pampers"
  },
  {
    id: 2030,
    image: productImages.diapers.pampers[2],
    title: "Pampers Swaddlers",
    features: ["Heart Quilts", "Wetness Indicator", "Umbilical cord notch"],
    price: 26.99,
    category: "brand",
    subcategory: "Pampers"
  },
  {
    id: 2031,
    image: productImages.diapers.pampers[3],
    title: "Pampers Pure",
    features: ["Plant-based materials", "Hypoallergenic", "Fragrance-free"],
    price: 29.99,
    category: "brand",
    subcategory: "Pampers"
  },
  {
    id: 2032,
    image: productImages.diapers.pampers[4],
    title: "Pampers Overnights",
    features: ["12-hour protection", "Extra Absorb Core", "OverNight Lock"],
    price: 31.99,
    category: "brand",
    subcategory: "Pampers"
  },
  {
    id: 2033,
    image: productImages.diapers.pampers[5],
    title: "Pampers Sensitive",
    features: ["Gentle on skin", "Dermatologist tested", "Soft materials"],
    price: 28.99,
    category: "brand",
    subcategory: "Pampers"
  },

  // BY BRAND - Huggies
  {
    id: 2034,
    image: productImages.diapers.disposable[0],
    title: "Huggies Little Snugglers",
    features: ["GentleAbsorb Core", "Soft Grip Strips", "Wetness Indicator"],
    price: 25.99,
    category: "brand",
    subcategory: "Huggies"
  },
  {
    id: 2035,
    image: productImages.diapers.disposable[1],
    title: "Huggies Little Movers",
    features: ["Double Grip Strips", "Contoured Core", "Active fit"],
    price: 26.99,
    category: "brand",
    subcategory: "Huggies"
  },
  {
    id: 2036,
    image: productImages.diapers.disposable[2],
    title: "Huggies Overnites",
    features: ["12-hour protection", "Double Grip Strips", "Extra Absorb Core"],
    price: 30.99,
    category: "brand",
    subcategory: "Huggies"
  },

  // BY FEATURES - Hypo allergenic
  {
    id: 2037,
    image: productImages.diapers.newborn[3],
    title: "Gentle Care Hypoallergenic",
    features: ["Dermatologist tested", "Fragrance free", "Sensitive skin safe"],
    price: 27.99,
    category: "features",
    subcategory: "Hypo allergenic"
  },
  {
    id: 2038,
    image: productImages.diapers.newborn[4],
    title: "Allergy Safe Diapers",
    features: ["No harsh chemicals", "Natural materials", "Tested for allergies"],
    price: 29.99,
    category: "features",
    subcategory: "Hypo allergenic"
  },
  {
    id: 2039,
    image: productImages.diapers.newborn[5],
    title: "Pure Gentle Diapers",
    features: ["Chemical free", "Organic cotton", "Sensitive formula"],
    price: 32.99,
    category: "features",
    subcategory: "Hypo allergenic"
  },

  // ESSENTIALS - Baby Wipes
  {
    id: 2040,
    image: productImages.diapers.disposable[3],
    title: "Gentle Baby Wipes",
    features: ["99% water", "Fragrance free", "Extra soft"],
    price: 12.99,
    category: "essentials",
    subcategory: "Baby Wipes"
  },
  {
    id: 2041,
    image: productImages.diapers.disposable[4],
    title: "Sensitive Skin Wipes",
    features: ["Hypoallergenic", "Alcohol free", "Dermatologist tested"],
    price: 14.99,
    category: "essentials",
    subcategory: "Baby Wipes"
  },
  {
    id: 2042,
    image: productImages.diapers.disposable[5],
    title: "Organic Baby Wipes",
    features: ["100% organic", "Biodegradable", "Natural ingredients"],
    price: 16.99,
    category: "essentials",
    subcategory: "Baby Wipes"
  }
];

// ===== FEEDING & NURSERY PRODUCTS =====
export const feedingNurseryProducts: Product[] = [
  // DEFAULT PRODUCTS (shown when no filter is selected)
  {
    id: 3001,
    image: productImages.feedingNursery.breastPumps[0],
    title: "Electric pump",
    features: ["Double pumping", "Adjustable suction", "BPA free"],
    price: 89.99,
    category: "default",
    subcategory: "All Feeding & Nursery"
  },
  {
    id: 3002,
    image: productImages.feedingNursery.breastPumps[1],
    title: "Breast Pump",
    features: ["Portable design", "Quiet operation", "Easy to clean"],
    price: 89.99,
    category: "default",
    subcategory: "All Feeding & Nursery"
  },
  {
    id: 3003,
    image: productImages.feedingNursery.breastPumps[2],
    title: "Manual Pump",
    features: ["Hand operated", "Gentle suction", "Travel friendly"],
    price: 89.99,
    category: "default",
    subcategory: "All Feeding & Nursery"
  },
  {
    id: 3004,
    image: productImages.feedingNursery.breastPumps[3],
    title: "Breast Pump",
    features: ["Hospital grade", "Professional quality", "Efficient pumping"],
    price: 89.99,
    category: "default",
    subcategory: "All Feeding & Nursery"
  },
  {
    id: 3005,
    image: productImages.feedingNursery.supplements[0],
    title: "Manual Pump",
    features: ["Ergonomic handle", "Soft silicone", "Easy assembly"],
    price: 89.99,
    category: "default",
    subcategory: "All Feeding & Nursery"
  },
  {
    id: 3006,
    image: productImages.feedingNursery.supplements[1],
    title: "Electric pump",
    features: ["Smart technology", "App connected", "Memory settings"],
    price: 89.99,
    category: "default",
    subcategory: "All Feeding & Nursery"
  },
  {
    id: 3007,
    image: productImages.feedingNursery.bottles[0],
    title: "Breast Pump",
    features: ["Wearable design", "Hands-free", "Discreet pumping"],
    price: 29.99,
    category: "default",
    subcategory: "All Feeding & Nursery"
  },
  {
    id: 3008,
    image: productImages.feedingNursery.bottles[1],
    title: "Electric pump",
    features: ["Closed system", "Hygienic", "Safe pumping"],
    price: 24.99,
    category: "default",
    subcategory: "All Feeding & Nursery"
  },
  {
    id: 3009,
    image: productImages.feedingNursery.bottles[2],
    title: "Breast Pump",
    features: ["Rechargeable battery", "Cordless", "Long lasting"],
    price: 49.99,
    category: "default",
    subcategory: "All Feeding & Nursery"
  },

  // BREAST FEEDING - Breast pumps
  {
    id: 3010,
    image: productImages.feedingNursery.breastPumps[0],
    title: "Premium Electric Pump",
    features: ["Hospital strength", "Dual pumping", "Adjustable speed"],
    price: 149.99,
    category: "breastFeeding",
    subcategory: "Breast pumps"
  },
  {
    id: 3011,
    image: productImages.feedingNursery.breastPumps[1],
    title: "Portable Breast Pump",
    features: ["Compact design", "USB rechargeable", "Quiet motor"],
    price: 89.99,
    category: "breastFeeding",
    subcategory: "Breast pumps"
  },
  {
    id: 3012,
    image: productImages.feedingNursery.breastPumps[2],
    title: "Manual Comfort Pump",
    features: ["Ergonomic grip", "Gentle suction", "Easy to use"],
    price: 29.99,
    category: "breastFeeding",
    subcategory: "Breast pumps"
  },
  {
    id: 3013,
    image: productImages.feedingNursery.breastPumps[3],
    title: "Smart Breast Pump",
    features: ["App control", "Tracking features", "Personalized settings"],
    price: 199.99,
    category: "breastFeeding",
    subcategory: "Breast pumps"
  },
  {
    id: 3014,
    image: productImages.feedingNursery.breastPumps[4],
    title: "Wearable Pump",
    features: ["Hands-free", "Discreet", "All-day comfort"],
    price: 179.99,
    category: "breastFeeding",
    subcategory: "Breast pumps"
  },
  {
    id: 3015,
    image: productImages.feedingNursery.breastPumps[5],
    title: "Travel Breast Pump",
    features: ["Lightweight", "Carry case included", "Battery operated"],
    price: 119.99,
    category: "breastFeeding",
    subcategory: "Breast pumps"
  },

  // BREAST FEEDING - Nursing pads
  {
    id: 3016,
    image: productImages.feedingNursery.supplements[0],
    title: "Ultra Soft Nursing Pads",
    features: ["Super absorbent", "Leak-proof", "Comfortable fit"],
    price: 12.99,
    category: "breastFeeding",
    subcategory: "Nursing pads"
  },
  {
    id: 3017,
    image: productImages.feedingNursery.supplements[1],
    title: "Organic Nursing Pads",
    features: ["100% organic cotton", "Breathable", "Hypoallergenic"],
    price: 15.99,
    category: "breastFeeding",
    subcategory: "Nursing pads"
  },
  {
    id: 3018,
    image: productImages.feedingNursery.supplements[2],
    title: "Disposable Nursing Pads",
    features: ["Convenient", "Individual wrapped", "Adhesive strips"],
    price: 9.99,
    category: "breastFeeding",
    subcategory: "Nursing pads"
  },

  // BREAST FEEDING - Sterilizers
  {
    id: 3019,
    image: productImages.feedingNursery.bottles[0],
    title: "Steam Sterilizer",
    features: ["Kills 99.9% germs", "Quick sterilization", "Large capacity"],
    price: 79.99,
    category: "breastFeeding",
    subcategory: "Sterilizers"
  },
  {
    id: 3020,
    image: productImages.feedingNursery.bottles[1],
    title: "UV Sterilizer",
    features: ["Chemical-free", "UV-C technology", "Auto shut-off"],
    price: 89.99,
    category: "breastFeeding",
    subcategory: "Sterilizers"
  },
  {
    id: 3021,
    image: productImages.feedingNursery.bottles[2],
    title: "Microwave Sterilizer",
    features: ["Microwave safe", "Quick & easy", "Compact design"],
    price: 24.99,
    category: "breastFeeding",
    subcategory: "Sterilizers"
  },

  // SUPPLEMENTS FOR MOM - Tablets
  {
    id: 3022,
    image: productImages.feedingNursery.supplements[0],
    title: "Prenatal Vitamins",
    features: ["Folic acid", "Iron", "DHA included"],
    price: 24.99,
    category: "supplementsMom",
    subcategory: "Tablets"
  },
  {
    id: 3023,
    image: productImages.feedingNursery.supplements[1],
    title: "Breastfeeding Support",
    features: ["Milk production", "Natural herbs", "Energy boost"],
    price: 19.99,
    category: "supplementsMom",
    subcategory: "Tablets"
  },
  {
    id: 3024,
    image: productImages.feedingNursery.supplements[2],
    title: "Postnatal Vitamins",
    features: ["Recovery support", "Immune boost", "Essential nutrients"],
    price: 22.99,
    category: "supplementsMom",
    subcategory: "Tablets"
  },
  {
    id: 3025,
    image: productImages.feedingNursery.supplements[3],
    title: "Iron Supplement",
    features: ["Gentle on stomach", "High absorption", "Energy support"],
    price: 16.99,
    category: "supplementsMom",
    subcategory: "Tablets"
  },
  {
    id: 3026,
    image: productImages.feedingNursery.supplements[4],
    title: "Calcium Plus",
    features: ["Bone health", "Vitamin D3", "Magnesium added"],
    price: 18.99,
    category: "supplementsMom",
    subcategory: "Tablets"
  },
  {
    id: 3027,
    image: productImages.feedingNursery.supplements[5],
    title: "Omega-3 DHA",
    features: ["Brain health", "Heart support", "Pure fish oil"],
    price: 26.99,
    category: "supplementsMom",
    subcategory: "Tablets"
  },

  // SUPPLEMENTS FOR MOM - Cookies
  {
    id: 3028,
    image: productImages.feedingNursery.bottles[0],
    title: "Lactation Cookies",
    features: ["Oats & flaxseed", "Milk boosting", "Delicious taste"],
    price: 14.99,
    category: "supplementsMom",
    subcategory: "Cookies"
  },
  {
    id: 3029,
    image: productImages.feedingNursery.bottles[1],
    title: "Brewer's Yeast Cookies",
    features: ["Natural ingredients", "Energy boost", "Chocolate chip"],
    price: 16.99,
    category: "supplementsMom",
    subcategory: "Cookies"
  },
  {
    id: 3030,
    image: productImages.feedingNursery.bottles[2],
    title: "Organic Lactation Bites",
    features: ["100% organic", "No preservatives", "Convenient snack"],
    price: 18.99,
    category: "supplementsMom",
    subcategory: "Cookies"
  },

  // SUPPLEMENTS FOR BABY - Vitamins
  {
    id: 3031,
    image: productImages.feedingNursery.supplements[0],
    title: "Baby Vitamin D Drops",
    features: ["Essential for bones", "Easy dosing", "Tasteless"],
    price: 12.99,
    category: "supplementsBaby",
    subcategory: "Vitamins"
  },
  {
    id: 3032,
    image: productImages.feedingNursery.supplements[1],
    title: "Infant Probiotics",
    features: ["Digestive health", "Immune support", "Gentle formula"],
    price: 19.99,
    category: "supplementsBaby",
    subcategory: "Vitamins"
  },
  {
    id: 3033,
    image: productImages.feedingNursery.supplements[2],
    title: "Baby Iron Drops",
    features: ["Prevents anemia", "Easy absorption", "Gentle on tummy"],
    price: 14.99,
    category: "supplementsBaby",
    subcategory: "Vitamins"
  },
  {
    id: 3034,
    image: productImages.feedingNursery.supplements[3],
    title: "Multivitamin Drops",
    features: ["Complete nutrition", "All essential vitamins", "Great taste"],
    price: 17.99,
    category: "supplementsBaby",
    subcategory: "Vitamins"
  },
  {
    id: 3035,
    image: productImages.feedingNursery.supplements[4],
    title: "Omega-3 for Babies",
    features: ["Brain development", "Eye health", "Pure & safe"],
    price: 21.99,
    category: "supplementsBaby",
    subcategory: "Vitamins"
  },
  {
    id: 3036,
    image: productImages.feedingNursery.supplements[5],
    title: "Calcium Drops",
    features: ["Strong bones", "Teeth development", "Easy to give"],
    price: 15.99,
    category: "supplementsBaby",
    subcategory: "Vitamins"
  },

  // BY FEATURES - BPA Free
  {
    id: 3037,
    image: productImages.feedingNursery.bottles[0],
    title: "BPA-Free Baby Bottles",
    features: ["Safe materials", "Anti-colic", "Easy grip"],
    price: 24.99,
    category: "features",
    subcategory: "BPA Free"
  },
  {
    id: 3038,
    image: productImages.feedingNursery.bottles[1],
    title: "Safe Feeding Set",
    features: ["Non-toxic", "Dishwasher safe", "Complete set"],
    price: 34.99,
    category: "features",
    subcategory: "BPA Free"
  },
  {
    id: 3039,
    image: productImages.feedingNursery.bottles[2],
    title: "Natural Bottles",
    features: ["Glass material", "Chemical free", "Heat resistant"],
    price: 29.99,
    category: "features",
    subcategory: "BPA Free"
  },

  // ESSENTIALS - Bottles
  {
    id: 3040,
    image: productImages.feedingNursery.bottles[0],
    title: "Anti-Colic Bottles",
    features: ["Reduces gas", "Natural flow", "Easy to clean"],
    price: 19.99,
    category: "essentials",
    subcategory: "Bottles"
  },
  {
    id: 3041,
    image: productImages.feedingNursery.bottles[1],
    title: "Wide Neck Bottles",
    features: ["Easy filling", "Natural latch", "Dishwasher safe"],
    price: 22.99,
    category: "essentials",
    subcategory: "Bottles"
  },
  {
    id: 3042,
    image: productImages.feedingNursery.bottles[2],
    title: "Glass Baby Bottles",
    features: ["Pure glass", "No chemicals", "Long lasting"],
    price: 27.99,
    category: "essentials",
    subcategory: "Bottles"
  }
];

// ===== BABY GEAR PRODUCTS =====
export const babyGearProducts: Product[] = [
  // DEFAULT PRODUCTS (shown when no filter is selected)
  {
    id: 4001,
    image: productImages.babyGear.strollers[0],
    title: "2 in 1 Stroller",
    features: ["Convertible design", "All terrain wheels", "Large storage"],
    price: 89.99,
    category: "default",
    subcategory: "All Baby Gear"
  },
  {
    id: 4002,
    image: productImages.babyGear.strollers[1],
    title: "3 wheeler stroller",
    features: ["Jogging stroller", "Shock absorbers", "Hand brake"],
    price: 89.99,
    category: "default",
    subcategory: "All Baby Gear"
  },
  {
    id: 4003,
    image: productImages.babyGear.strollers[2],
    title: "Compact Stroller",
    features: ["Lightweight", "One-hand fold", "Travel friendly"],
    price: 89.99,
    category: "default",
    subcategory: "All Baby Gear"
  },
  {
    id: 4004,
    image: productImages.babyGear.strollers[3],
    title: "2 in 1 Stroller",
    features: ["Car seat compatible", "Reversible seat", "Adjustable handle"],
    price: 89.99,
    category: "default",
    subcategory: "All Baby Gear"
  },
  {
    id: 4005,
    image: productImages.babyGear.playpen[0],
    title: "3 wheeler stroller",
    features: ["Premium wheels", "Smooth ride", "Safety first"],
    price: 89.99,
    category: "default",
    subcategory: "All Baby Gear"
  },
  {
    id: 4006,
    image: productImages.babyGear.playpen[1],
    title: "2 in 1 Stroller",
    features: ["Multi-position", "Weather shield", "Cup holder"],
    price: 89.99,
    category: "default",
    subcategory: "All Baby Gear"
  },
  {
    id: 4007,
    image: productImages.babyGear.skincare[0],
    title: "Organic Baby Formula - Gentle Care",
    features: ["Pure natural ingredients", "Gentle digestion support", "Hypoallergenic & safe"],
    price: 29.99,
    category: "default",
    subcategory: "All Baby Gear"
  },
  {
    id: 4008,
    image: productImages.babyGear.skincare[1],
    title: "3 wheeler stroller",
    features: ["Gentle natural formulas", "Hypoallergenic protection", "Soothing moisturizing care"],
    price: 24.99,
    category: "default",
    subcategory: "All Baby Gear"
  },
  {
    id: 4009,
    image: productImages.babyGear.skincare[2],
    title: "2 in 1 Stroller",
    features: ["Full body support", "Comfort sleep", "Pregnancy relief"],
    price: 49.99,
    category: "default",
    subcategory: "All Baby Gear"
  },

  // ON THE GO - Strollers
  {
    id: 4010,
    image: productImages.babyGear.strollers[0],
    title: "All-Terrain Stroller",
    features: ["Rugged wheels", "Suspension system", "Off-road ready"],
    price: 299.99,
    category: "onTheGo",
    subcategory: "Strollers"
  },
  {
    id: 4011,
    image: productImages.babyGear.strollers[1],
    title: "Jogging Stroller Pro",
    features: ["Fixed front wheel", "Hand brake", "Safety tether"],
    price: 249.99,
    category: "onTheGo",
    subcategory: "Strollers"
  },
  {
    id: 4012,
    image: productImages.babyGear.strollers[2],
    title: "Travel System Stroller",
    features: ["Car seat included", "Base station", "Click & go"],
    price: 399.99,
    category: "onTheGo",
    subcategory: "Strollers"
  },
  {
    id: 4013,
    image: productImages.babyGear.strollers[3],
    title: "Lightweight Stroller",
    features: ["Under 15 lbs", "Compact fold", "Airplane approved"],
    price: 149.99,
    category: "onTheGo",
    subcategory: "Strollers"
  },
  {
    id: 4014,
    image: productImages.babyGear.strollers[4],
    title: "Double Stroller",
    features: ["Side by side", "Independent recline", "Large canopies"],
    price: 449.99,
    category: "onTheGo",
    subcategory: "Strollers"
  },
  {
    id: 4015,
    image: productImages.babyGear.strollers[5],
    title: "Convertible Stroller",
    features: ["Bassinet mode", "Toddler seat", "Grows with baby"],
    price: 349.99,
    category: "onTheGo",
    subcategory: "Strollers"
  },

  // ON THE GO - Car seats
  {
    id: 4016,
    image: productImages.babyGear.strollers[0],
    title: "Infant Car Seat",
    features: ["Rear-facing", "5-point harness", "Easy installation"],
    price: 179.99,
    category: "onTheGo",
    subcategory: "Car seats"
  },
  {
    id: 4017,
    image: productImages.babyGear.strollers[1],
    title: "Convertible Car Seat",
    features: ["Rear & forward facing", "Extended use", "Side impact protection"],
    price: 229.99,
    category: "onTheGo",
    subcategory: "Car seats"
  },
  {
    id: 4018,
    image: productImages.babyGear.strollers[2],
    title: "Booster Car Seat",
    features: ["High back", "Belt positioning", "Cup holders"],
    price: 89.99,
    category: "onTheGo",
    subcategory: "Car seats"
  },

  // STAY HOME - Play pen
  {
    id: 4019,
    image: productImages.babyGear.playpen[0],
    title: "Deluxe Playpen",
    features: ["Large play area", "Mesh sides", "Easy setup"],
    price: 129.99,
    category: "stayHome",
    subcategory: "Play pen"
  },
  {
    id: 4020,
    image: productImages.babyGear.playpen[1],
    title: "Portable Playpen",
    features: ["Foldable design", "Carry bag", "Indoor/outdoor"],
    price: 89.99,
    category: "stayHome",
    subcategory: "Play pen"
  },
  {
    id: 4021,
    image: productImages.babyGear.playpen[2],
    title: "Activity Playpen",
    features: ["Built-in toys", "Music & lights", "Interactive panels"],
    price: 159.99,
    category: "stayHome",
    subcategory: "Play pen"
  },
  {
    id: 4022,
    image: productImages.babyGear.playpen[3],
    title: "Wooden Playpen",
    features: ["Natural wood", "Eco-friendly", "Stylish design"],
    price: 199.99,
    category: "stayHome",
    subcategory: "Play pen"
  },
  {
    id: 4023,
    image: productImages.babyGear.playpen[4],
    title: "Travel Playpen",
    features: ["Ultra portable", "Quick assembly", "Lightweight"],
    price: 79.99,
    category: "stayHome",
    subcategory: "Play pen"
  },
  {
    id: 4024,
    image: productImages.babyGear.playpen[5],
    title: "Luxury Playpen",
    features: ["Premium materials", "Extra large", "Comfort padding"],
    price: 249.99,
    category: "stayHome",
    subcategory: "Play pen"
  },

  // STAY HOME - High chairs
  {
    id: 4025,
    image: productImages.babyGear.playpen[0],
    title: "Adjustable High Chair",
    features: ["Height adjustable", "Removable tray", "Easy to clean"],
    price: 119.99,
    category: "stayHome",
    subcategory: "High chairs"
  },
  {
    id: 4026,
    image: productImages.babyGear.playpen[1],
    title: "Wooden High Chair",
    features: ["Solid wood", "Classic design", "Grows with child"],
    price: 149.99,
    category: "stayHome",
    subcategory: "High chairs"
  },
  {
    id: 4027,
    image: productImages.babyGear.playpen[2],
    title: "Portable High Chair",
    features: ["Foldable", "Travel friendly", "Compact storage"],
    price: 69.99,
    category: "stayHome",
    subcategory: "High chairs"
  },

  // BATH CARE - Baby Lotion
  {
    id: 4028,
    image: productImages.babyGear.skincare[0],
    title: "Gentle Baby Lotion",
    features: ["Hypoallergenic", "Moisturizing", "Fragrance free"],
    price: 12.99,
    category: "bathCare",
    subcategory: "Baby Lotion"
  },
  {
    id: 4029,
    image: productImages.babyGear.skincare[1],
    title: "Organic Baby Lotion",
    features: ["100% organic", "Natural ingredients", "Sensitive skin"],
    price: 16.99,
    category: "bathCare",
    subcategory: "Baby Lotion"
  },
  {
    id: 4030,
    image: productImages.babyGear.skincare[2],
    title: "Moisturizing Lotion",
    features: ["24-hour moisture", "Vitamin E", "Soft skin"],
    price: 14.99,
    category: "bathCare",
    subcategory: "Baby Lotion"
  },
  {
    id: 4031,
    image: productImages.babyGear.skincare[3],
    title: "Calming Baby Lotion",
    features: ["Lavender scent", "Bedtime routine", "Relaxing"],
    price: 15.99,
    category: "bathCare",
    subcategory: "Baby Lotion"
  },
  {
    id: 4032,
    image: productImages.babyGear.skincare[4],
    title: "Eczema Relief Lotion",
    features: ["Dermatologist recommended", "Gentle formula", "Healing"],
    price: 18.99,
    category: "bathCare",
    subcategory: "Baby Lotion"
  },
  {
    id: 4033,
    image: productImages.babyGear.skincare[5],
    title: "Daily Baby Lotion",
    features: ["Everyday use", "Quick absorbing", "Non-greasy"],
    price: 11.99,
    category: "bathCare",
    subcategory: "Baby Lotion"
  },

  // ESSENTIALS - Baby Monitor
  {
    id: 4034,
    image: productImages.babyGear.playpen[0],
    title: "Video Baby Monitor",
    features: ["HD camera", "Night vision", "Two-way audio"],
    price: 149.99,
    category: "essentials",
    subcategory: "Baby Monitor"
  },
  {
    id: 4035,
    image: productImages.babyGear.playpen[1],
    title: "Smart Baby Monitor",
    features: ["WiFi enabled", "App control", "Sleep tracking"],
    price: 199.99,
    category: "essentials",
    subcategory: "Baby Monitor"
  },
  {
    id: 4036,
    image: productImages.babyGear.playpen[2],
    title: "Audio Baby Monitor",
    features: ["Crystal clear sound", "Long range", "Rechargeable"],
    price: 79.99,
    category: "essentials",
    subcategory: "Baby Monitor"
  }
];

// Helper function to get products by category and subcategory
export const getProductsByCategory = (category: string, subcategory: string, productType: 'infantFormula' | 'diapers' | 'feedingNursery' | 'babyGear'): Product[] => {
  let products: Product[] = [];
  
  switch (productType) {
    case 'infantFormula':
      products = infantFormulaProducts;
      break;
    case 'diapers':
      products = diapersProducts;
      break;
    case 'feedingNursery':
      products = feedingNurseryProducts;
      break;
    case 'babyGear':
      products = babyGearProducts;
      break;
  }
  
  return products.filter(product => 
    product.category === category && product.subcategory === subcategory
  );
};

// Helper function to get all products for a specific type
export const getAllProducts = (productType: 'infantFormula' | 'diapers' | 'feedingNursery' | 'babyGear'): Product[] => {
  let products: Product[] = [];
  
  switch (productType) {
    case 'infantFormula':
      products = infantFormulaProducts;
      break;
    case 'diapers':
      products = diapersProducts;
      break;
    case 'feedingNursery':
      products = feedingNurseryProducts;
      break;
    case 'babyGear':
      products = babyGearProducts;
      break;
    default:
      return [];
  }
  
  // Return default products (the ones shown in Figma design) when no category is selected
  return products.filter(product => product.category === 'default');
};