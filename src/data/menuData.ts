import { MenuItem, MenuCategory } from "../types/menu";

export const categories: MenuCategory[] = [
  {
    id: "starters",
    name: {
      en: "Appetizers",
      ar: "المقبلات",
      ckb: "مقەبیلات",
    },
  },
  {
    id: "pizza",
    name: {
      en: "Pizza",
      ar: "بيتزا",
      ckb: "پیتزا",
    },
  },
  {
    id: "sandwich",
    name: {
      en: "Sandwich",
      ar: "ساندویج",
      ckb: "ساندویچ",
    },
  },
  {
    id: "burger",
    name: {
      en: "Burger",
      ar: "برجر",
      ckb: "بەرگەر",
    },
  },
  {
    id: "rizo",
    name: {
      en: "Rizo",
      ar: "ريزو",
      ckb: "ڕیزۆ",
    },
  },
  {
    id: "shawrma",
    name: {
      en: "Shawrma",
      ar: "شاورما",
      ckb: "شاورمە",
    },
  },
  {
    id: "kentucky",
    name: {
      en: "Kentucky",
      ar: "كنتاكي",
      ckb: "کینتاکی",
    },
  },
  {
    id: "spaghetti",
    name: {
      en: "Spaghetti",
      ar: "سباغيتي",
      ckb: "سپاگێتی",
    },
  },
  {
    id: "sandwichfries",
    name: {
      en: "Sandwich / Fries",
      ar: "ساندويتج / بطاطس",
      ckb: "ساندویچ / پەتاتە",
    },
  },
  {
    id: "drinks",
    name: {
      en: "Drinks",
      ar: "المشروبات",
      ckb: "خواردنەوەکان",
    },
  },
];

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: "large-appetizers",
    name: {
      en: "Large Appetizers",
      ar: "مقبیلات كبیرة",
      ckb: "مقەبیلاتی گەورە",
    },
    price: 3000,
    image: "https://i.ibb.co/n28p6Rb/appetizers.jpg",
    category: "starters",
    tags: ["Salad"],
    description: {
      en: "Fresh mixed salad with seasonal vegetables and house dressing",
      ar: "سلطة مشكلة طازجة مع خضروات موسمية وصلصة البيت",
      ckb: "زەڵاتەی تێكەڵی تازە لەگەڵ سەوزەی وەرزی و سۆسی ماڵەوە",
    },
  },
  {
    id: "small-appetizers",
    name: {
      en: "Small Appetizers",
      ar: "مقبیلات صغیرة",
      ckb: "مقەبیلاتی بچووك",
    },
    price: 2000,
    image: "https://i.ibb.co/n28p6Rb/appetizers.jpg",
    category: "starters",
    tags: ["Salad"],
    description: {
      en: "Fresh mixed salad with seasonal vegetables and house dressing",
      ar: "سلطة مشكلة طازجة مع خضروات موسمية وصلصة البيت",
      ckb: "زەڵاتەی تێكەڵی تازە لەگەڵ سەوزەی وەرزی و سۆسی ماڵەوە",
    },
  },

  // Pizza
  {
    id: "crispy-pizza",
    name: {
      en: "Crispy Pizza",
      ar: "بيتزا مقرمشة",
      ckb: "پیتزای کریسپی",
    },
    // smallPrice: 5000,
    largePrice: 7000,
    image: "https://i.ibb.co/wNfG2cX9/pizza-crispy.jpg",
    category: "pizza",
    description: {
      en: "Perfectly crispy, loaded with flavor, and totally irresistible",
      ar: "مقرمشة تمامًا، مليئة بالنكهة، ولا تقاوم تمامًا",
      ckb: "بە تەواوی کریسپی، بارگاوی بە تام، و بە بێگومان بەرگەی ناگیرێت",
    },
  },
  {
    id: "local-meat-pizza",
    name: {
      en: "Local Meat Pizza",
      ar: "بيتزا اللحوم المحلیة",
      ckb: "پیتزای گۆشتی خۆماڵی",
    },
    smallPrice: 5000,
    largePrice: 7000,
    image: "https://i.ibb.co/9HkBJ4KT/meat-pizza.jpg",
    category: "pizza",
    description: {
      en: "Delicious pizza topped with premium local meat and fresh vegetables",
      ar: "بيتزا لذيذة مغطاة باللحوم المحلية الممتازة والخضروات الطازجة",
      ckb: "پیتزایەکی خۆشتام بە گۆشتی خۆماڵی باش و سەوزەی تازە",
    },
  },
  {
    id: "chicken-pizza",
    name: {
      en: "Chicken Pizza",
      ar: "بيتزا الدجاج",
      ckb: "پیتزای مریشك",
    },
    smallPrice: 5000,
    largePrice: 7000,
    image: "https://i.ibb.co/Tq4MhbFB/chicken-pizza.jpg",
    category: "pizza",
    description: {
      en: "Tender chicken pieces with herbs and spices on crispy pizza base",
      ar: "قطع دجاج طرية مع الأعشاب والتوابل على قاعدة بيتزا مقرمشة",
      ckb: "پارچەی مریشكی نەرم لەگەڵ گیا و بەهارات لەسەر بنکەی پیتزای تر",
    },
  },
  {
    id: "mix-pizza",
    name: {
      en: "Mix Pizza",
      ar: "بيتزا مشكل",
      ckb: "پیتزای تێكەڵ",
    },
    smallPrice: 5000,
    largePrice: 7000,
    image: "https://i.ibb.co/KpBSHbGr/mix.jpg",
    category: "pizza",
    description: {
      en: "Perfect combination of meat, chicken, and vegetables",
      ar: "مزيج مثالي من اللحوم والدجاج والخضروات",
      ckb: "تێكەڵەیەکی تەواوی گۆشت و مریشك و سەوزەوات",
    },
  },
  {
    id: "vegetarian-pizza",
    name: {
      en: "Vegetarian Pizza",
      ar: "بيتزا خضروات",
      ckb: "پیتزای سەوزەوات",
    },
    smallPrice: 4000,
    largePrice: 5000,
    image: "https://i.ibb.co/1t4xHjgr/veg.jpg",
    category: "pizza",
    description: {
      en: "Fresh vegetables and herbs on our signature pizza base",
      ar: "خضروات طازجة وأعشاب على قاعدة البيتزا المميزة",
      ckb: "سەوزە و گیای تازە لەسەر بنەمای پیتزای تایبەتمان",
    },
  },
  {
    id: "four-seasons-pizza",
    name: {
      en: "Four Seasons Pizza",
      ar: "بیتزا الفصول الأربعة",
      ckb: "پیتزای چوار وەرزی",
    },
    largePrice: 7000,
    image: "https://i.ibb.co/PGqCmY7D/four-seasons.jpg",
    category: "pizza",
    description: {
      en: "Four different toppings representing each season",
      ar: "أربع إضافات مختلفة تمثل كل فصل",
      ckb: "چوار جۆری جیاواز کە هەر وەرزێك دەردەخەن",
    },
  },
  {
    id: "tuna-fish-pizza",
    name: {
      en: "Tuna Fish Pizza",
      ar: "بیتزا سمك التونة",
      ckb: "پیتزای ماسی توونە",
    },
    smallPrice: 5000,
    largePrice: 6000,
    image: "https://i.ibb.co/rfyg2vf3/tuna-fish.jpg",
    category: "pizza",
    description: {
      en: "Premium tuna with onions and Mediterranean herbs",
      ar: "تونة ممتازة مع البصل والأعشاب المتوسطية",
      ckb: "توونەی باش لەگەڵ پیاز و گیای دەریای ناوەڕاست",
    },
  },
  {
    id: "pepperoni-pizza",
    name: {
      en: "Pepperoni Pizza",
      ar: "بیتزا بیبیرونی",
      ckb: "پیتزای پەپەڕۆنی",
    },
    smallPrice: 5000,
    largePrice: 6000,
    image: "https://i.ibb.co/prKkT0YT/pepperoni-pizza.jpg",
    category: "pizza",
    description: {
      en: "Classic pepperoni with mozzarella cheese",
      ar: "بيبيروني كلاسيكي مع جبنة الموزاريلا",
      ckb: "پەپەڕۆنی کلاسیکی لەگەڵ پەنیری مۆزارێلا",
    },
  },
  {
    id: "margherita-pizza",
    name: {
      en: "Margherita Pizza",
      ar: "بیتزا ماركریتا",
      ckb: "پیتزای مارگەریتا",
    },
    smallPrice: 5000,
    largePrice: 7000,
    image: "https://i.ibb.co/hxLsgx47/margareta.jpg",
    category: "pizza",
    description: {
      en: "Traditional Italian pizza with tomato, mozzarella, and basil",
      ar: "بيتزا إيطالية تقليدية مع الطماطم والموزاريلا والريحان",
      ckb: "پیتزای ئیتالی دێرین لەگەڵ تەماتە و مۆزارێلا و ڕێحان",
    },
  },

  // Sandwiches
  {
    id: "beef-sandwich",
    name: {
      en: "Beef Sandwich",
      ar: "ساندویج لحم",
      ckb: "ساندویچی گۆشت",
    },
    price: 2000,
    image: "https://i.ibb.co/4RBSyjrS/beef-sandwich.jpg",
    category: "sandwich",
    description: {
      en: "Grilled beef with fresh vegetables in toasted bread",
      ar: "لحم مشوي مع خضروات طازجة في خبز محمص",
      ckb: "گۆشتی برژاو لەگەڵ سەوزەی تازە لە نانی برژاو",
    },
  },
  {
    id: "chicken-sandwich",
    name: {
      en: "Chicken Sandwich",
      ar: "ساندويتش دجاج",
      ckb: "ساندویچی مریشك",
    },
    price: 1500,
    image: "https://i.ibb.co/d035tCGv/istockphoto-1147164476-612x612.jpg",
    category: "sandwich",
    description: {
      en: "Tender grilled chicken with lettuce and special sauce",
      ar: "دجاج مشوي طري مع الخس والصلصة الخاصة",
      ckb: "مریشكی برژاوی نەرم لەگەڵ کاهو و سۆسی تایبەت",
    },
  },
  {
    id: "crispy-sandwich",
    name: {
      en: "Crispy Sandwich",
      ar: "ساندويتش مقرمش",
      ckb: "ساندویچی کریسپی",
    },
    price: 2000,
    image: "https://i.ibb.co/xSQf26nm/Supreme-sandwich.jpg",
    category: "sandwich",
    description: {
      en: "A sandwich that’s all about that satisfying crisp.",
      ar: "ساندويتش يتميز بالطعم المقرمش الممتع.",
      ckb: "ساندویچێک کە هەمووی لەسەر کریسپی شازە.",
    },
  },

  // Burgers
  {
    id: "beef-burger",
    name: {
      en: "Beef Burger",
      ar: "برجر اللحم",
      ckb: "بەرگەری گۆشت",
    },
    price: 3000,
    image: "https://i.ibb.co/Q7ycbp5C/beef-burger.jpg",
    category: "burger",
    description: {
      en: "Juicy beef patty with cheese, lettuce, and tomato",
      ar: "قرص لحم عصير مع الجبن والخس والطماطم",
      ckb: "پارچەی گۆشتی ئاودەر لەگەڵ پەنیر و کاهو و تەماتە",
    },
  },
  {
    id: "chicken-burger",
    name: {
      en: "Chicken Burger",
      ar: "برجر دجاج",
      ckb: "بەرگەری مریشك",
    },
    price: 3000,
    image: "https://i.ibb.co/pvWh1ZMc/Chicken-Burger.jpg",
    category: "burger",
    description: {
      en: "Crispy chicken breast with fresh vegetables",
      ar: "صدر دجاج مقرمش مع خضروات طازجة",
      ckb: "سنگی مریشكی کریسپی لەگەڵ سەوزەی تازە",
    },
  },
  {
    id: "crispy-burger",
    name: {
      en: "Crispy Burger",
      ar: "برجر كرسبی",
      ckb: "بەرگەری كریسپی",
    },
    price: 3000,
    image: "https://i.ibb.co/KxprGtmz/Crispy-Burger.jpg",
    category: "burger",
    description: {
      en: "Extra crispy chicken with special seasoning",
      ar: "دجاج مقرمش إضافي مع التتبيل الخاص",
      ckb: "مریشكی زیادە کریسپی لەگەڵ بەهاراتی تایبەت",
    },
  },
  {
    id: "double-burger",
    name: {
      en: "Double Burger",
      ar: "برجر مزدوج",
      ckb: "بەرگەری دەبڵ",
    },
    price: 5500,
    image: "https://i.ibb.co/RTS80XMV/big-burger.jpg",
    category: "burger",
    description: {
      en: "Double beef patties with double cheese and vegetables",
      ar: "قرصان لحم مع جبن مضاعف وخضروات",
      ckb: "دوو پەرچەی گۆشت لەگەڵ پەنیری دووقات و سەوزەوات",
    },
  },
  {
    id: "cheese-burger",
    name: {
      en: "Cheese Burger",
      ar: "برجر جبنة",
      ckb: "بەرگەری پەنیر",
    },
    price: 3500,
    image: "https://i.ibb.co/CpLbvyzf/cheese-burger-2.jpg",
    category: "burger",
    description: {
      en: "Beef patty with melted cheese and fresh toppings",
      ar: "قرص لحم مع جبن ذائب وإضافات طازجة",
      ckb: "پەرچەی گۆشت لەگەڵ پەنیری تواوە و زیادکراوی تازە",
    },
  },

  // Rizo
  {
    id: "normal-rizo",
    name: {
      en: "Normal Rizo",
      ar: "ریزو سادە",
      ckb: "ڕیزۆ سادە",
    },
    price: 2000,
    image: "https://i.ibb.co/rGQNyzF3/mexican-rice.jpg",
    category: "rizo",
    description: {
      en: "Traditional rice dish with aromatic spices",
      ar: "طبق أرز تقليدي مع التوابل العطرة",
      ckb: "خواردنی برنجی دێرین لەگەڵ بەهاراتی بۆنخۆش",
    },
  },
  {
    id: "crispy-rizo",
    name: {
      en: "Crispy Rizo",
      ar: "ریزو كریسبی",
      ckb: "ڕیزۆ كریسپی",
    },
    price: 5000,
    image: "https://i.ibb.co/Ld8CVCM7/rizo.jpg",
    category: "rizo",
    description: {
      en: "Rice with chicken and special sauce",
      ar: "أرز مع الدجاج والصلصة الخاصة",
      ckb: "برنجی لەگەڵ مریشك و سۆسی تایبەت",
    },
  },
  {
    id: "crispy-cheese-rizo",
    name: {
      en: "Crispy Cheese Rizo",
      ar: "ریزو كریسبی بالجبن",
      ckb: "ڕیزۆ كریسپی بە پەنیر",
    },
    price: 7500,
    image: "https://i.ibb.co/Ld8CVCM7/rizo.jpg",
    category: "rizo",
    description: {
      en: "Rice with melted cheese and premium toppings",
      ar: "أرز مع جبن ذائب وإضافات ممتازة",
      ckb: "برنج لەگەڵ پەنیری تواوە و زیادکراوی باش",
    },
  },

  // Shawrma
  {
    id: "meat-shawrma",
    name: {
      en: "Meat Shawrma",
      ar: "شاورمة لحم",
      ckb: "شاورمەی گۆشت",
    },
    price: 2000,
    image: "https://i.ibb.co/0ph5FW4q/Meat-Shawrma.jpg",
    category: "shawrma",
    description: {
      en: "Tender meat wrapped in fresh bread with vegetables",
      ar: "لحم طري ملفوف في خبز طازج مع الخضروات",
      ckb: "گۆشتی نەرمی پێچراوە لە نانی تازە لەگەڵ سەوزەوات",
    },
  },
  {
    id: "chicken-shawrma",
    name: {
      en: "Chicken Shawrma",
      ar: "شاورمة دجاج",
      ckb: "شاورمەی مریشك",
    },
    price: 1500,
    image: "https://i.ibb.co/208k5738/chiken-Shawrma-copy.jpg",
    category: "shawrma",
    description: {
      en: "Grilled chicken with garlic sauce and pickles",
      ar: "دجاج مشوي مع صلصة الثوم والمخللات",
      ckb: "مریشكی برژاو لەگەڵ سۆسی سیر و تورشی",
    },
  },
  {
    id: "crispy-shawrma",
    name: {
      en: "Crispy Shawrma",
      ar: "شاورمة كریسبی",
      ckb: "شاورمەی كریسپی",
    },
    price: 2000,
    image: "https://i.ibb.co/0RT8Jzk8/crispy-shawrma-copy.jpg",
    category: "shawrma",
    description: {
      en: "Extra crispy chicken with special spices",
      ar: "دجاج مقرمش إضافي مع التوابل الخاصة",
      ckb: "مریشكی زیادە کریسپی لەگەڵ بەهاراتی تایبەت",
    },
  },

  // Kentucky (New Category)
  {
    id: "kentucky-chicken",
    name: {
      en: "Kentucky 4 pieces",
      ar: "٤ قطع كنتاكي",
      ckb: "٤ پارچە کینتاکی",
    },
    price: 6000,
    image:
      "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg",
    category: "kentucky",
    description: {
      en: "Crispy fried chicken with secret blend of herbs and spices",
      ar: "دجاج مقلي مقرمش مع خلطة سرية من الأعشاب والتوابل",
      ckb: "مریشكی سورکراوەی کریسپی لەگەڵ تێكەڵەی نهێنی گیا و بەهارات",
    },
  },
  {
    id: "kentucky-wings",
    name: {
      en: "Kentucky 6 pieces",
      ar: "٦ قطع كنتاكي",
      ckb: "٦ پارچە کینتاکی",
    },
    price: 8000,
    image: "https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg",
    category: "kentucky",
    description: {
      en: "Crispy fried chicken with secret blend of herbs and spices",
      ar: "دجاج مقلي مقرمش مع خلطة سرية من الأعشاب والتوابل",
      ckb: "مریشكی سورکراوەی کریسپی لەگەڵ تێكەڵەی نهێنی گیا و بەهارات",
    },
  },

  // Spaghetti (New Category)
  {
    id: "spaghetti-bolognese",
    name: {
      en: "Red Spaghetti",
      ar: "سباغيتي احمر",
      ckb: "سپاگێتی سۆر",
    },
    price: 5000,
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    category: "spaghetti",
    description: {
      en: "Classic Italian pasta with rich meat sauce",
      ar: "معكرونة إيطالية كلاسيكية مع صلصة اللحم الغنية",
      ckb: "پاستای ئیتالی کلاسیکی لەگەڵ سۆسی گۆشتی تایبەت",
    },
  },
  {
    id: "spaghetti-carbonara",
    name: {
      en: " White Spaghetti",
      ar: "سباغيتي بيضاء",
      ckb: "سپاگێتی سپی",
    },
    price: 5000,
    image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg",
    category: "spaghetti",
    description: {
      en: "Creamy pasta with bacon, eggs, and parmesan cheese",
      ar: "معكرونة كريمية مع اللحم المقدد والبيض وجبن البارميزان",
      ckb: "پاستای کرێمی لەگەڵ بەیکۆن و هێلکە و پەنیری پارمیزان",
    },
  },

  // Sandwich/Fries
  {
    id: "fries",
    name: {
      en: "Fries",
      ar: "بطاطة فرایس",
      ckb: "فینگەری سادە",
    },
    smallPrice: 1500,
    largePrice: 2000,
    image: "https://i.ibb.co/Gv0HjHyN/fries.jpg",
    category: "sandwichfries",
    description: {
      en: "Golden crispy french fries",
      ar: "بطاطس مقلية ذهبية مقرمشة",
      ckb: "پەتاتەی سورکراوەی زەڕین و تر",
    },
  },
  {
    id: "sandwich-fries",
    name: {
      en: "Sandwich Fries",
      ar: "بطاطس ساندويتش",
      ckb: "ساندویچی فینگەر",
    },
    price: 1500,
    image: "https://i.ibb.co/tTQgLWFN/sdvgsdv.png",
    category: "sandwichfries",
    description: {
      en: "Fries served in sandwich style",
      ar: "بطاطس مقدمة بطريقة الساندويتش",
      ckb: "پەتاتە بە شێوەی ساندویچ",
    },
  },
  {
    id: "cheese-fries",
    name: {
      en: "Cheese Fries",
      ar: "بطاطة بلجبنة",
      ckb: "پەتاتە بە پەنیر",
    },
    price: 4000,
    image: "https://i.ibb.co/FkXf5vWK/cheese-fries.jpg",
    category: "sandwichfries",
    description: {
      en: "Fries topped with melted cheese",
      ar: "بطاطس مغطاة بالجبن الذائب",
      ckb: "پەتاتەی بە پەنیری تواوە لە بەشی سەرەوە",
    },
  },

  // Drinks
  {
    id: "water",
    name: {
      en: "Water",
      ar: "ماء",
      ckb: "ئاو",
    },
    price: 250,
    image: "https://i.ibb.co/mVN9rZtb/water.jpg",
    category: "drinks",
    description: {
      en: "Fresh bottled water",
      ar: "مياه معبأة طازجة",
      ckb: "ئاوی بتڵکراوی تازە",
    },
  },

  {
    id: "pepsi-fresh",
    name: {
      en: "Fresh Pepsi",
      ar: "بيبسي طازج",
      ckb: "پێپسی فرێش",
    },
    price: 1500,
    image: "https://i.ibb.co/wFSGfbgM/ibd00103-B-a.jpg",
    category: "drinks",
    description: {
      en: "Taste the fresh Pepsi",
      ar: "تذوق البيبسي الطازج",
      ckb: "تامی پێپسی تازە بکە",
    },
  },
  {
    id: "pepsi",
    name: {
      en: "Pepsi",
      ar: "بیبسی",
      ckb: "پێپسی",
    },
    price: 500,
    image: "https://i.ibb.co/Kp2p3pPK/pepsi.jpg",
    category: "drinks",
    description: {
      en: "Refreshing pepsi drink",
      ar: "مشروب پیپسی منعش",
      ckb: "خواردنەوەی پێپسی",
    },
  },
  {
    id: "ayran",
    name: {
      en: "Ayran",
      ar: "عيران",
      ckb: "ماستاو",
    },
    price: 500,
    image: "https://i.ibb.co/ymzQjXmp/ayran.jpg",
    category: "drinks",
    description: {
      en: "Traditional yogurt drink",
      ar: "مشروب اللبن التقليدي",
      ckb: "خواردنەوەی ماستی خۆماڵی",
    },
  },
  // {
  //  id: 'tea',
  //   name: {
  //    en: 'Tea',
  //    ar: 'شاي',
  //    ckb: 'چا'
  //  },
  //  price: 500,
  //  image: 'https://i.ibb.co/CpR4ffxd/image.jpg',
  //  category: 'drinks',
  //  description: {
  //    en: 'Hot traditional tea',
  //    ar: 'شاي تقليدي ساخن',
  //    ckb: 'چای ئاسایی گەرم'
  //  }
  // },
];
