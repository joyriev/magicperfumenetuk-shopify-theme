// ===== COMPLETE PERFUME CATALOG - WITH SHOPIFY PRODUCT MAPPINGS =====
// Save this as: assets/perfume-catalog-minimal.js

window.PerfumeCatalog = {
  // ===== NARCISO RODRIGUEZ =====
  narciso: [
    {
      id: "narciso_musc_noir",
      name: "Musc Noir Narciso Rodriguez",
      brand: "Narciso Rodriguez",
      image: "https://magicperfume.co.uk/cdn/shop/files/Musc_Noir_For_Her.png?v=1772103601",
      top_notes: ["Plum", "Bergamot", "Mandarin"],
      heart_notes: ["Tuberose", "Jasmine", "Musk"],
      base_notes: ["Patchouli", "Vanilla", "Cedar"],
      description: "A sensual and mysterious fragrance that celebrates the power of musk. Musc Noir opens with juicy plum, leading to a heart of tuberose and musk. The base is warm and addictive with patchouli and vanilla.",
      year: "2018",
      gender: "Female",
      productNumbers: ["457"],
      // DIRECT PRODUCT MAPPING using Title
      shopifyProduct: {
        title: "No. 457 - Inspired by Musc Noir For Her",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-457w",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/Musc_Noir_For_Her.png?v=1772103601"
      }
    }
  ],
  
  // ===== CHANEL =====
  chanel: [
    {
      id: "chanel_chance",
      name: "Chance Chanel",
      brand: "Chanel",
      image: "https://magicperfume.co.uk/cdn/shop/files/chance.png?v=1772096656",
      top_notes: ["Pink Pepper", "Quince", "Citrus"],
      heart_notes: ["Hyacinth", "Jasmine", "Iris"],
      base_notes: ["Musk", "Patchouli", "Vetiver", "Cedar"],
      description: "A vibrant and unexpected floral fragrance. Chance opens with a burst of pink pepper and quince, leading to a luminous heart of hyacinth and jasmine. The base is warm and sensual with musk and patchouli.",
      year: "2003",
      gender: "Female",
      productNumbers: ["006"],
      shopifyProduct: {
        title: "No. 006 - Inspired by Chance",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-006w",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/chance.png?v=1772096656"
      }
    },
    {
      id: "chanel_coco",
      name: "Coco Chanel",
      brand: "Chanel",
      image: "https://magicperfume.co.uk/cdn/shop/files/coco.png?v=1772097398",
      top_notes: ["Coriander", "Mandarin", "Peach", "Jasmine"],
      heart_notes: ["Rose", "Clove", "Mimosa", "Carnation"],
      base_notes: ["Sandalwood", "Amber", "Opium", "Benzoin"],
      description: "A sumptuous and sensual oriental fragrance that embodies the spirit of Mademoiselle Chanel. Coco opens with spicy coriander and fruity peach, leading to a rich floral heart. The base is deep and opulent with sandalwood and amber.",
      year: "1984",
      gender: "Female",
      productNumbers: ["079"],
      shopifyProduct: {
        title: "No. 079 - Inspired by Coco",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-079w",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/coco.png?v=1772097398"
      }
    },
    {
      id: "chanel_bleu",
      name: "Bleu de Chanel",
      brand: "Chanel",
      image: "https://magicperfume.co.uk/cdn/shop/files/bleu.png?v=1772097197",
      top_notes: ["Grapefruit", "Lemon", "Mint", "Pink Pepper"],
      heart_notes: ["Ginger", "Nutmeg", "Jasmine"],
      base_notes: ["Incense", "Vetiver", "Cedar", "Sandalwood"],
      description: "A timeless and sophisticated fragrance for men that embodies the spirit of freedom. Bleu de Chanel opens with a fresh and vibrant burst of citrus and mint, leading to a spicy heart of ginger and nutmeg. The base is deep and sensual with incense and woody notes.",
      year: "2010",
      gender: "Male",
      productNumbers: ["252"],
      shopifyProduct: {
        title: "No. 252 - Inspired by Bleu de Chanel",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-252m",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/bleu.png?v=1772097197"
      }
    },
    {
      id: "chanel_allure_homme_sport",
      name: "Allure Homme Sport Chanel",
      brand: "Chanel",
      image: "https://magicperfume.co.uk/cdn/shop/files/Allure_Homme_Sport.png?v=1772099956",
      top_notes: ["Mandarin", "Orange", "Sea Notes"],
      heart_notes: ["Cedar", "Tonka Bean", "Musk"],
      base_notes: ["Vanilla", "Amber", "Vetiver"],
      description: "A fresh and energetic fragrance for the active man. Allure Homme Sport captures the invigorating spirit of sport with sparkling citrus and aquatic notes, leading to a warm and sensual heart of cedar and tonka.",
      year: "2004",
      gender: "Male",
      productNumbers: ["222"],
      shopifyProduct: {
        title: "No. 222 - Inspired by Allure Homme Sport",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-222m",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/Allure_Homme_Sport.png?v=1772099956"
      }
    },
    {
      id: "chanel_no5",
      name: "No. 5 Chanel",
      brand: "Chanel",
      image: "https://magicperfume.co.uk/cdn/shop/files/no5_edp.png?v=1772104524",
      top_notes: ["Aldehydes", "Ylang-Ylang", "Neroli", "Bergamot"],
      heart_notes: ["Iris", "Jasmine", "Rose", "Lily of the Valley"],
      base_notes: ["Vanilla", "Amber", "Sandalwood", "Vetiver", "Musk"],
      description: "The most legendary fragrance in the world, Chanel No 5 is an abstract floral aldehyde that revolutionized perfumery. Created in 1921 by Ernest Beaux, it opens with a burst of sparkling aldehydes that give way to a rich bouquet of jasmine and rose.",
      year: "1921",
      gender: "Female",
      productNumbers: ["077"],
      shopifyProduct: {
        title: "No. 077 - Inspired by No. 5",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-077w",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/no5_edp.png?v=1772104524"
      }
    },
    {
      id: "chanel_coco_mademoiselle",
      name: "Coco Mademoiselle Chanel",
      brand: "Chanel",
      image: "https://magicperfume.co.uk/cdn/shop/files/0a78ac2c2769df411731eaba9cb8c230.jpg_720x720q80.jpg?v=1772090593",
      top_notes: ["Orange", "Bergamot", "Grapefruit"],
      heart_notes: ["Rose", "Jasmine", "Lychee"],
      base_notes: ["Patchouli", "Vanilla", "Musk", "Vetiver"],
      description: "A fresh and modern oriental fragrance that captures the spirit of a young, confident woman. Coco Mademoiselle opens with sparkling citrus notes, leading to a romantic floral heart of rose and jasmine.",
      year: "2001",
      gender: "Female",
      productNumbers: ["067", "139"],
      shopifyProduct: {
        title: "No. 067 - Inspired by Coco Mademoiselle",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-067w",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/0a78ac2c2769df411731eaba9cb8c230.jpg_720x720q80.jpg?v=1772090593"
      }
    }
  ],
  
  // ===== TOM FORD =====
  tomFord: [
    {
      id: "tomford_vanille_fatale",
      name: "Vanille Fatale Tom Ford",
      brand: "Tom Ford",
      image: "https://magicperfume.co.uk/cdn/shop/files/vanille_fatale.png?v=1772096768",
      top_notes: ["Saffron", "Neroli", "Bergamot"],
      heart_notes: ["Vanilla", "Coffee", "Leather"],
      base_notes: ["Amber", "Myrrh", "Benzoin"],
      description: "A dark and intoxicating vanilla fragrance. Vanille Fatale opens with precious saffron and neroli, leading to a heart of rich vanilla blended with smoky coffee and leather.",
      year: "2017",
      gender: "Unisex",
      productNumbers: ["053"],
      shopifyProduct: {
        title: "No. 053 - Inspired by Vanille Fatale",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-053",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/vanille_fatale.png?v=1772096768"
      }
    },
    {
      id: "tomford_tobacco_vanille",
      name: "Tobacco Vanille Tom Ford",
      brand: "Tom Ford",
      image: "https://magicperfume.co.uk/cdn/shop/files/tobacco_vanille.png?v=1772097038",
      top_notes: ["Tobacco Leaf", "Spicy Notes"],
      heart_notes: ["Vanilla", "Cocoa", "Tonka", "Tobacco Blossom"],
      base_notes: ["Dried Fruits", "Woody Notes"],
      description: "A warm and spicy fragrance with tobacco and vanilla notes. Rich, opulent and sophisticated, this is a signature scent for those who appreciate the finer things in life.",
      year: "2007",
      gender: "Unisex",
      productNumbers: ["193"],
      shopifyProduct: {
        title: "No. 193 - Inspired by Tobacco Vanille",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-193",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/tobacco_vanille.png?v=1772097038"
      }
    },
    {
      id: "tomford_cherry_smoke",
      name: "Cherry Smoke Tom Ford",
      brand: "Tom Ford",
      image: "https://magicperfume.co.uk/cdn/shop/files/cherry_smoke.png?v=1772102310",
      top_notes: ["Cherry", "Saffron", "Pink Pepper"],
      heart_notes: ["Rose", "Jasmine", "Smoke"],
      base_notes: ["Vanilla", "Amber", "Musk", "Sandalwood"],
      description: "A seductive and mysterious blend of sweet cherry and smoky notes. Cherry Smoke opens with juicy cherry and saffron, leading to a heart of rose and jasmine infused with a wisp of smoke.",
      year: "2020",
      gender: "Unisex",
      productNumbers: ["434"],
      shopifyProduct: {
        title: "No. 434 - Inspired by Cherry Smoke",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-434",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/cherry_smoke.png?v=1772102310"
      }
    },
    {
      id: "tomford_lost_cherry",
      name: "Lost Cherry Tom Ford",
      brand: "Tom Ford",
      image: "https://magicperfume.co.uk/cdn/shop/files/lost_cherry.png?v=1772103231",
      top_notes: ["Cherry", "Almond", "Liqueur"],
      heart_notes: ["Cherry", "Rose", "Jasmine"],
      base_notes: ["Peru Balsam", "Benzoin", "Vanilla", "Cedar"],
      description: "A seductive and playful fragrance that captures the essence of a forbidden fruit. Lost Cherry opens with juicy cherry and almond, leading to a heart of rose and jasmine.",
      year: "2018",
      gender: "Unisex",
      productNumbers: ["438"],
      shopifyProduct: {
        title: "No. 438 - Inspired by Lost Cherry",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-438",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/lost_cherry.png?v=1772103231"
      }
    },
    {
      id: "tomford_oud_wood",
      name: "Oud Wood Tom Ford",
      brand: "Tom Ford",
      image: "https://magicperfume.co.uk/cdn/shop/files/oud_wood.png?v=1772095484",
      top_notes: ["Rosewood", "Cardamom", "Chinese Pepper"],
      heart_notes: ["Sandalwood", "Vetiver", "Oud"],
      base_notes: ["Tonka", "Amber", "Vanilla"],
      description: "A mysterious and exotic blend of rare oud wood with smoky notes. Oud Wood opens with rosewood and cardamom, leading to a heart of sandalwood, vetiver, and precious oud.",
      year: "2007",
      gender: "Unisex",
      productNumbers: ["287"],
      shopifyProduct: {
        title: "No. 287 - Inspired by Oud Wood",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-287",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/oud_wood.png?v=1772095484"
      }
    },
    {
      id: "tomford_fucking_fabulous",
      name: "Fucking Fabulous Tom Ford",
      brand: "Tom Ford",
      image: "https://magicperfume.co.uk/cdn/shop/files/Fucking_Fabulous.webp?v=1772035146",
      top_notes: ["Sage", "Lavender"],
      heart_notes: ["Leather", "Almond", "Vanilla"],
      base_notes: ["Tonka", "Amber", "Woody Notes"],
      description: "A bold, provocative fragrance with leather and almond notes. Daring, unique and incredibly fabulous, this fragrance is not for the faint of heart.",
      year: "2017",
      gender: "Unisex",
      productNumbers: ["232"],
      shopifyProduct: {
        title: "No. 232 - Inspired by Fucking Fabulous",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-232",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/Fucking_Fabulous.webp?v=1772035146"
      }
    }
  ],
  
  // ===== JEAN PAUL GAULTIER =====
  jpg: [
    {
      id: "jpg_la_belle",
      name: "La Belle Jean Paul Gaultier",
      brand: "Jean Paul Gaultier",
      image: "https://magicperfume.co.uk/cdn/shop/files/la_belle.png?v=1772096850",
      top_notes: ["Pear", "Bergamot"],
      heart_notes: ["Jasmine", "Orange Blossom"],
      base_notes: ["Vanilla", "Tonka Bean", "Cedar"],
      description: "A seductive and addictive gourmand fragrance. La Belle opens with juicy pear, leading to a floral heart of jasmine. The base is warm and intoxicating with vanilla and tonka bean.",
      year: "2019",
      gender: "Female",
      productNumbers: ["412"],
      shopifyProduct: {
        title: "No. 412 - Inspired by La Belle",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-412w",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/la_belle.png?v=1772096850"
      }
    },
    {
      id: "jpg_ultra_male",
      name: "Ultra Male Jean Paul Gaultier",
      brand: "Jean Paul Gaultier",
      image: "https://magicperfume.co.uk/cdn/shop/files/ultra_male.png?v=1772098862",
      top_notes: ["Pear", "Mint", "Lavender"],
      heart_notes: ["Cinnamon", "Sage", "Clary Sage"],
      base_notes: ["Vanilla", "Amber", "Woody Notes"],
      description: "A powerful and seductive fragrance that pushes the boundaries of masculinity. Ultra Male opens with juicy pear and fresh mint, leading to a spicy heart of cinnamon.",
      year: "2015",
      gender: "Male",
      productNumbers: ["349"],
      shopifyProduct: {
        title: "No. 349 - Inspired by Ultra Male",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-349m",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/ultra_male.png?v=1772098862"
      }
    },
    {
      id: "jpg_classique_essence",
      name: "Classique Essence de Parfum Jean Paul Gaultier",
      brand: "Jean Paul Gaultier",
      image: "https://magicperfume.co.uk/cdn/shop/files/Classique_Essence_de_Parfum.png?v=1772097516",
      top_notes: ["Rose", "Ginger", "Bergamot"],
      heart_notes: ["Tuberose", "Jasmine", "Orange Blossom"],
      base_notes: ["Vanilla", "Amber", "Musk"],
      description: "A more intense and sensual interpretation of the iconic Classique. This essence opens with spicy ginger and rose, leading to a rich floral heart of tuberose.",
      year: "2013",
      gender: "Female",
      productNumbers: ["442"],
      shopifyProduct: {
        title: "No. 442 - Inspired by Classique Essence de Parfum",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-442w",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/Classique_Essence_de_Parfum.png?v=1772097516"
      }
    },
    {
      id: "jpg_le_male",
      name: "Le Male Jean Paul Gaultier",
      brand: "Jean Paul Gaultier",
      image: "https://magicperfume.co.uk/cdn/shop/files/Le_Male.jpg?v=1772038546",
      top_notes: ["Mint", "Lavender", "Bergamot", "Cardamom"],
      heart_notes: ["Cinnamon", "Orange Blossom", "Caraway"],
      base_notes: ["Vanilla", "Tonka Bean", "Amber", "Cedar"],
      description: "An iconic and seductive fragrance for the modern man. Le Male opens with fresh mint and lavender, creating an aromatic and invigorating start. The heart reveals spicy cinnamon and orange blossom, while the base is warm and sensual with vanilla and tonka bean.",
      year: "1995",
      gender: "Male",
      productNumbers: ["247"],
      shopifyProduct: {
        title: "No. 247 - Inspired by Le Male",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-247m",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/Le_Male.jpg?v=1772038546"
      }
    }
  ],
  
  // ===== GIORGIO ARMANI =====
  armani: [
    {
      id: "armani_stronger_with_you",
      name: "Stronger With You Giorgio Armani",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/Stronger_with_You.webp?v=1772102160",
      top_notes: ["Cardamom", "Pink Pepper", "Violet Leaf"],
      heart_notes: ["Sage", "Lavender", "Cinnamon"],
      base_notes: ["Vanilla", "Chestnut", "Tonka Bean"],
      description: "A warm and sensual fragrance that celebrates the strength of connection. Stronger With You opens with spicy cardamom, leading to an aromatic heart of sage and lavender.",
      year: "2017",
      gender: "Male",
      productNumbers: ["291"],
      shopifyProduct: {
        title: "No. 291 - Inspired by Stronger With You",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-291m",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/Stronger_with_You.webp?v=1772102160"
      }
    },
    {
      id: "armani_stronger_with_you_intensely",
      name: "Stronger With You Intensely Giorgio Armani",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/stronger_with_you_intensely.png?v=1772097116",
      top_notes: ["Pink Pepper", "Cardamom", "Violet Leaf"],
      heart_notes: ["Sage", "Lavender", "Cinnamon"],
      base_notes: ["Vanilla", "Chestnut", "Tonka Bean", "Amber"],
      description: "A more intense and powerful interpretation of Stronger With You. This version opens with even more spice, leading to a deeper, richer heart.",
      year: "2019",
      gender: "Male",
      productNumbers: ["318"],
      shopifyProduct: {
        title: "No. 318 - Inspired by Stronger With You Intensely",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-318m",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/stronger_with_you_intensely.png?v=1772097116"
      }
    },
    {
      id: "armani_code",
      name: "Code Giorgio Armani",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/code.png?v=1772100357",
      top_notes: ["Bergamot", "Lemon", "Green Notes"],
      heart_notes: ["Olive Blossom", "Jasmine", "Orange Blossom"],
      base_notes: ["Leather", "Cedar", "Tonka Bean"],
      description: "A sophisticated and seductive fragrance for the modern man. Code opens with fresh bergamot and lemon, leading to a heart of olive blossom. The base is warm and sensual with leather and tonka bean.",
      year: "2004",
      gender: "Male",
      productNumbers: ["260"],
      shopifyProduct: {
        title: "No. 260 - Inspired by Code",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-260m",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/code.png?v=1772100357"
      }
    },
    {
      id: "armani_acqua_di_gio",
      name: "Acqua Di Gio Giorgio Armani",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/Acqua_Di_Gio.png?v=1772097792",
      top_notes: ["Bergamot", "Neroli", "Green Tangerine"],
      heart_notes: ["Jasmine", "Rosemary", "Sage"],
      base_notes: ["Cedar", "Patchouli", "Musk"],
      description: "A timeless aquatic classic that captures the essence of the Mediterranean Sea. The citrus opening is fresh and invigorating, while the aromatic heart adds depth.",
      year: "1996",
      gender: "Male",
      productNumbers: ["221"],
      shopifyProduct: {
        title: "No. 221 - Inspired by Acqua Di Gio",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-221m",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/Acqua_Di_Gio.png?v=1772097792"
      }
    },
    {
      id: "armani_code_for_women",
      name: "Armani Code for Women Giorgio Armani",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/code_for_woman.png?v=1772098650",
      top_notes: ["Orange Blossom", "Jasmine", "Bergamot"],
      heart_notes: ["Honey", "Almond", "Ginger"],
      base_notes: ["Vanilla", "Sandalwood", "Musk"],
      description: "A seductive and elegant oriental floral fragrance. The orange blossom opening is bright and feminine, while the heart of honey and almond adds a gourmand twist.",
      year: "2006",
      gender: "Female",
      productNumbers: ["135"],
      shopifyProduct: {
        title: "No. 135 - Inspired by Armani Code for Women",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-135w",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/code_for_woman.png?v=1772098650"
      }
    },
    {
      id: "armani_my_way",
      name: "My Way Giorgio Armani",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/my_way.png?v=1772095936",
      top_notes: ["Orange Blossom", "Bergamot"],
      heart_notes: ["Tuberose", "Jasmine"],
      base_notes: ["Vanilla", "Cedar", "White Musk"],
      description: "A radiant and ethical fragrance that celebrates authenticity and connection. My Way opens with bright orange blossom, leading to a heart of tuberose and jasmine.",
      year: "2020",
      gender: "Female",
      productNumbers: ["140"],
      shopifyProduct: {
        title: "No. 140 - Inspired by My Way",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-140w",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/my_way.png?v=1772095936"
      }
    },
    {
      id: "armani_emporio_she",
      name: "Emporio Armani She Giorgio Armani",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/armani-she.webp?v=1772102295",
      top_notes: ["Lemon", "Bergamot", "Rose"],
      heart_notes: ["Jasmine", "Peony", "Lily-of-the-Valley"],
      base_notes: ["Sandalwood", "Musk", "Vanilla"],
      description: "A fresh and feminine fragrance that captures the spirit of modern youth. Emporio Armani She opens with bright lemon and rose, leading to a floral heart of jasmine and peony.",
      year: "1998",
      gender: "Female",
      productNumbers: ["150"],
      shopifyProduct: {
        title: "No. 150 - Inspired by Emporio Armani She",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-150w",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/armani-she.webp?v=1772102295"
      }
    },
    {
      id: "armani_si",
      name: "Si Giorgio Armani",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/si.webp?v=1772102453",
      top_notes: ["Black Currant", "Pear", "Mandarin"],
      heart_notes: ["Rose", "Freesia", "May Rose"],
      base_notes: ["Vanilla", "Patchouli", "Benzoin"],
      description: "A sophisticated and modern chypre fragrance that celebrates feminine strength. Si opens with fruity black currant, leading to a romantic heart of rose.",
      year: "2013",
      gender: "Female",
      productNumbers: ["129"],
      shopifyProduct: {
        title: "No. 129 - Inspired by Si",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-129w",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/si.webp?v=1772102453"
      }
    },
    {
      id: "armani_emporio_he",
      name: "Emporio Armani He Giorgio Armani",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/he.png?v=1772102402",
      top_notes: ["Lemon", "Bergamot", "Grapefruit"],
      heart_notes: ["Cedar", "Sage", "Geranium"],
      base_notes: ["Sandalwood", "Musk", "Amber"],
      description: "A fresh and masculine fragrance for the modern man. Emporio Armani He opens with bright citrus, leading to a woody heart of cedar. The base is warm and sensual with sandalwood and musk.",
      year: "1998",
      gender: "Male",
      productNumbers: ["242"],
      shopifyProduct: {
        title: "No. 242 - Inspired by Emporio Armani He",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-242m",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/he.png?v=1772102402"
      }
    }
  ],
  
  // ===== DIOR =====
  dior: [
    {
      id: "dior_homme_intense",
      name: "Dior Homme Intense Dior",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/homme_intense.png?v=1772099043",
      top_notes: ["Lavender"],
      heart_notes: ["Tuscan Iris", "Ambrette Seed", "Pear"],
      base_notes: ["Virginia Cedar", "Vetiver"],
      description: "An intense and sensual fragrance that enhances masculinity. The iris is at the heart, creating an incredibly smooth and powdery character that evolves throughout the day.",
      year: "2011",
      gender: "Male",
      productNumbers: ["277"],
      shopifyProduct: {
        title: "No. 277 - Inspired by Dior Homme Intense",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-277m",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/homme_intense.png?v=1772099043"
      }
    },
    {
      id: "dior_homme",
      name: "Dior Homme Dior",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/homme_intense.png",
      top_notes: ["Lavender", "Bergamot", "Sage"],
      heart_notes: ["Iris", "Cocoa", "Pear"],
      base_notes: ["Cedar", "Vetiver", "Leather"],
      description: "A refined, elegant fragrance with iris at its heart. Dior Homme is a modern classic that has redefined masculine perfumery. It opens with fresh lavender and bergamot, leading to a heart uniquely centered around iris.",
      year: "2005",
      gender: "Male",
      productNumbers: ["211"],
      shopifyProduct: {
        title: "No. 211 - Inspired by Dior Homme",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-211m",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/homme_intense.png"
      }
    },
    {
      id: "dior_sauvage_parfum",
      name: "Sauvage Parfum Dior",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/sauvage_parfum.png?v=1772100537",
      top_notes: ["Bergamot", "Mandarin"],
      heart_notes: ["Lavender", "Star Anise", "Nutmeg"],
      base_notes: ["Sandalwood", "Vanilla", "Amber"],
      description: "A deeper, more intense interpretation of Sauvage. This parfum version opens with fresh bergamot, leading to a heart of lavender and star anise. The base is warm and sensual with sandalwood and vanilla.",
      year: "2018",
      gender: "Male",
      productNumbers: ["338"],
      shopifyProduct: {
        title: "No. 338 - Inspired by Sauvage Parfum",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-338m",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/sauvage_parfum.png?v=1772100537"
      }
    },
    {
      id: "dior_sauvage_elixir",
      name: "Dior Sauvage Elixir",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/Dior-Sauvage-Elixir-Parfum-for-Men.jpg?v=1772016795",
      top_notes: ["Grapefruit", "Nutmeg", "Cinnamon"],
      heart_notes: ["Lavender", "Star Anise", "Coriander"],
      base_notes: ["Liquorice", "Patchouli", "Sandalwood"],
      description: "A bold and intense reinterpretation of Sauvage. Spicy and woody notes create an unexpected, powerful and elegant elixir. The opening is an explosion of spicy grapefruit and cinnamon, leading to a heart of lavender and star anise.",
      year: "2021",
      gender: "Male",
      productNumbers: ["366"],
      shopifyProduct: {
        title: "No. 366 - Inspired by Sauvage Elixir",
        url: "https://magicperfume.co.uk/products/magic-perfume-no-366m-2",
        price: "£19.99",
        image: "https://magicperfume.co.uk/cdn/shop/files/Dior-Sauvage-Elixir-Parfum-for-Men.jpg?v=1772016795"
      }
    }
    // ... Continue with remaining Dior products
  ]
  
  // ===== CONTINUE WITH ALL OTHER BRANDS =====
  // (YSL, Paco Rabanne, Hugo Boss, Lancome, Hermès, Gucci, etc.)
  // Follow the same pattern for each
};

// ===== HELPER FUNCTION TO FIND SHOPIFY PRODUCT BY CATALOG PERFUME ID =====
window.PerfumeCatalog.getShopifyProductByPerfumeId = function(perfumeId) {
  for (let brandKey in this) {
    if (Array.isArray(this[brandKey])) {
      const perfume = this[brandKey].find(p => p.id === perfumeId);
      if (perfume && perfume.shopifyProduct) {
        return perfume.shopifyProduct;
      }
    }
  }
  return null;
};

// ===== HELPER FUNCTION TO FIND SHOPIFY PRODUCT BY CATALOG PERFUME NAME =====
window.PerfumeCatalog.getShopifyProductByPerfumeName = function(perfumeName) {
  const searchName = perfumeName.toLowerCase().trim();
  
  for (let brandKey in this) {
    if (Array.isArray(this[brandKey])) {
      const perfume = this[brandKey].find(p => 
        p.name.toLowerCase().includes(searchName) || 
        searchName.includes(p.name.toLowerCase())
      );
      if (perfume && perfume.shopifyProduct) {
        return perfume.shopifyProduct;
      }
    }
  }
  return null;
};

// ===== ENHANCED SEARCH FUNCTION =====
window.PerfumeCatalog.search = function(query) {
  if (!query || query.length < 2) return [];
  
  const results = [];
  const queryLower = query.toLowerCase().trim();
  
  for (let brandKey in this) {
    if (Array.isArray(this[brandKey])) {
      this[brandKey].forEach(perfume => {
        // Create comprehensive searchable text
        const searchableText = [
          perfume.name,
          perfume.brand,
          perfume.year,
          ...(perfume.top_notes || []),
          ...(perfume.heart_notes || []),
          ...(perfume.base_notes || []),
          ...(perfume.productNumbers || [])
        ].join(' ').toLowerCase();
        
        // Check if query matches ANY part of the perfume
        if (searchableText.includes(queryLower)) {
          results.push(perfume);
        }
      });
    }
  }
  
  return results.sort((a, b) => a.name.localeCompare(b.name));
};

// ===== FIND BY ID =====
window.PerfumeCatalog.findById = function(id) {
  for (let brandKey in this) {
    if (Array.isArray(this[brandKey])) {
      const found = this[brandKey].find(p => p.id === id);
      if (found) return found;
    }
  }
  return null;
};

console.log('✓ PerfumeCatalog loaded with', 
  Object.keys(window.PerfumeCatalog).filter(key => Array.isArray(window.PerfumeCatalog[key])).length, 
  'brand categories');