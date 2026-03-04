// ===== COMPLETE PERFUME CATALOG - CLEANED & DEDUPLICATED =====
// Save this as: assets/perfume-catalog-minimal.js

window.PerfumeCatalog = {
  // ===== NARCISO RODRIGUEZ =====
  narciso: [
    {
      id: "narciso_musc_noir",
      name: "Musc Noir",
      brand: "Narciso Rodriguez",
      image: "https://magicperfume.co.uk/cdn/shop/files/Musc_Noir_For_Her.png?v=1772103601",
      top_notes: ["Plum", "Bergamot", "Mandarin"],
      heart_notes: ["Tuberose", "Jasmine", "Musk"],
      base_notes: ["Patchouli", "Vanilla", "Cedar"],
      description: "A sensual and mysterious fragrance that celebrates the power of musk. Musc Noir opens with juicy plum, leading to a heart of tuberose and musk. The base is warm and addictive with patchouli and vanilla.",
      year: "2018",
      gender: "Female",
      productNumbers: ["457"] // No. 457 - Inspired by Musc Noir For Her
    }
  ],
  
  // ===== CHANEL =====
  chanel: [
    {
      id: "chanel_chance",
      name: "Chance",
      brand: "Chanel",
      image: "https://magicperfume.co.uk/cdn/shop/files/chance.png?v=1772096656",
      top_notes: ["Pink Pepper", "Quince", "Citrus"],
      heart_notes: ["Hyacinth", "Jasmine", "Iris"],
      base_notes: ["Musk", "Patchouli", "Vetiver", "Cedar"],
      description: "A vibrant and unexpected floral fragrance. Chance opens with a burst of pink pepper and quince, leading to a luminous heart of hyacinth and jasmine. The base is warm and sensual with musk and patchouli.",
      year: "2003",
      gender: "Female",
      productNumbers: ["006"] // No. 006 - Inspired by Chance
    },
    {
      id: "chanel_coco",
      name: "Coco",
      brand: "Chanel",
      image: "https://magicperfume.co.uk/cdn/shop/files/coco.png?v=1772097398",
      top_notes: ["Coriander", "Mandarin", "Peach", "Jasmine"],
      heart_notes: ["Rose", "Clove", "Mimosa", "Carnation"],
      base_notes: ["Sandalwood", "Amber", "Opium", "Benzoin"],
      description: "A sumptuous and sensual oriental fragrance that embodies the spirit of Mademoiselle Chanel. Coco opens with spicy coriander and fruity peach, leading to a rich floral heart. The base is deep and opulent with sandalwood and amber.",
      year: "1984",
      gender: "Female",
      productNumbers: ["079"] // No. 079 - Inspired by Coco
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
      productNumbers: ["252"] // No. 252 - Inspired by Bleu
    },
    {
      id: "chanel_allure_homme_sport",
      name: "Allure Homme Sport",
      brand: "Chanel",
      image: "https://magicperfume.co.uk/cdn/shop/files/Allure_Homme_Sport.png?v=1772099956",
      top_notes: ["Mandarin", "Orange", "Sea Notes"],
      heart_notes: ["Cedar", "Tonka Bean", "Musk"],
      base_notes: ["Vanilla", "Amber", "Vetiver"],
      description: "A fresh and energetic fragrance for the active man. Allure Homme Sport captures the invigorating spirit of sport with sparkling citrus and aquatic notes, leading to a warm and sensual heart of cedar and tonka.",
      year: "2004",
      gender: "Male",
      productNumbers: ["222"] // No. 222 - Inspired by Allure Homme Sport
    },
    {
      id: "chanel_no5",
      name: "No. 5",
      brand: "Chanel",
      image: "https://magicperfume.co.uk/cdn/shop/files/no5_edp.png?v=1772104524",
      top_notes: ["Aldehydes", "Ylang-Ylang", "Neroli", "Bergamot"],
      heart_notes: ["Iris", "Jasmine", "Rose", "Lily of the Valley"],
      base_notes: ["Vanilla", "Amber", "Sandalwood", "Vetiver", "Musk"],
      description: "The most legendary fragrance in the world, Chanel No 5 is an abstract floral aldehyde that revolutionized perfumery. Created in 1921 by Ernest Beaux, it opens with a burst of sparkling aldehydes that give way to a rich bouquet of jasmine and rose.",
      year: "1921",
      gender: "Female",
      productNumbers: ["077"] // No. 077 - Inspired by No. 5
    },
    {
      id: "chanel_coco_mademoiselle",
      name: "Coco Mademoiselle",
      brand: "Chanel",
      image: "https://magicperfume.co.uk/cdn/shop/files/0a78ac2c2769df411731eaba9cb8c230.jpg_720x720q80.jpg?v=1772090593",
      top_notes: ["Orange", "Bergamot", "Grapefruit"],
      heart_notes: ["Rose", "Jasmine", "Lychee"],
      base_notes: ["Patchouli", "Vanilla", "Musk", "Vetiver"],
      description: "A fresh and modern oriental fragrance that captures the spirit of a young, confident woman. Coco Mademoiselle opens with sparkling citrus notes, leading to a romantic floral heart of rose and jasmine.",
      year: "2001",
      gender: "Female",
      productNumbers: ["067", "139"] // No. 067 - Mademoiselle Intense, No. 139 - Mademoiselle
    }
  ],
  
  // ===== TOM FORD =====
  tomFord: [
    {
      id: "tomford_vanille_fatale",
      name: "Vanille Fatale",
      brand: "Tom Ford",
      image: "https://magicperfume.co.uk/cdn/shop/files/vanille_fatale.png?v=1772096768",
      top_notes: ["Saffron", "Neroli", "Bergamot"],
      heart_notes: ["Vanilla", "Coffee", "Leather"],
      base_notes: ["Amber", "Myrrh", "Benzoin"],
      description: "A dark and intoxicating vanilla fragrance. Vanille Fatale opens with precious saffron and neroli, leading to a heart of rich vanilla blended with smoky coffee and leather.",
      year: "2017",
      gender: "Unisex",
      productNumbers: ["053"] // No. 053 - Inspired by Vanille Fatale
    },
    {
      id: "tomford_tobacco_vanille",
      name: "Tobacco Vanille",
      brand: "Tom Ford",
      image: "https://magicperfume.co.uk/cdn/shop/files/tobacco_vanille.png?v=1772097038",
      top_notes: ["Tobacco Leaf", "Spicy Notes"],
      heart_notes: ["Vanilla", "Cocoa", "Tonka", "Tobacco Blossom"],
      base_notes: ["Dried Fruits", "Woody Notes"],
      description: "A warm and spicy fragrance with tobacco and vanilla notes. Rich, opulent and sophisticated, this is a signature scent for those who appreciate the finer things in life.",
      year: "2007",
      gender: "Unisex",
      productNumbers: ["193"] // No. 193 - Inspired by Tobacco Vanille
    },
    {
      id: "tomford_cherry_smoke",
      name: "Cherry Smoke",
      brand: "Tom Ford",
      image: "https://magicperfume.co.uk/cdn/shop/files/cherry_smoke.png?v=1772102310",
      top_notes: ["Cherry", "Saffron", "Pink Pepper"],
      heart_notes: ["Rose", "Jasmine", "Smoke"],
      base_notes: ["Vanilla", "Amber", "Musk", "Sandalwood"],
      description: "A seductive and mysterious blend of sweet cherry and smoky notes. Cherry Smoke opens with juicy cherry and saffron, leading to a heart of rose and jasmine infused with a wisp of smoke.",
      year: "2020",
      gender: "Unisex",
      productNumbers: ["434"] // No. 434 - Inspired by Cherry Smoke
    },
    {
      id: "tomford_lost_cherry",
      name: "Lost Cherry",
      brand: "Tom Ford",
      image: "https://magicperfume.co.uk/cdn/shop/files/lost_cherry.png?v=1772103231",
      top_notes: ["Cherry", "Almond", "Liqueur"],
      heart_notes: ["Cherry", "Rose", "Jasmine"],
      base_notes: ["Peru Balsam", "Benzoin", "Vanilla", "Cedar"],
      description: "A seductive and playful fragrance that captures the essence of a forbidden fruit. Lost Cherry opens with juicy cherry and almond, leading to a heart of rose and jasmine.",
      year: "2018",
      gender: "Unisex",
      productNumbers: ["438"] // No. 438 - Inspired by Lost Cherry
    },
    {
      id: "tomford_oud_wood",
      name: "Oud Wood",
      brand: "Tom Ford",
      image: "https://magicperfume.co.uk/cdn/shop/files/oud_wood.png?v=1772095484",
      top_notes: ["Rosewood", "Cardamom", "Chinese Pepper"],
      heart_notes: ["Sandalwood", "Vetiver", "Oud"],
      base_notes: ["Tonka", "Amber", "Vanilla"],
      description: "A mysterious and exotic blend of rare oud wood with smoky notes. Oud Wood opens with rosewood and cardamom, leading to a heart of sandalwood, vetiver, and precious oud.",
      year: "2007",
      gender: "Unisex",
      productNumbers: ["287"] // No. 287 - Inspired by Oud Wood
    },
    {
      id: "tomford_fucking_fabulous",
      name: "Fucking Fabulous",
      brand: "Tom Ford",
      image: "https://magicperfume.co.uk/cdn/shop/files/Fucking_Fabulous.webp?v=1772035146",
      top_notes: ["Sage", "Lavender"],
      heart_notes: ["Leather", "Almond", "Vanilla"],
      base_notes: ["Tonka", "Amber", "Woody Notes"],
      description: "A bold, provocative fragrance with leather and almond notes. Daring, unique and incredibly fabulous, this fragrance is not for the faint of heart.",
      year: "2017",
      gender: "Unisex",
      productNumbers: ["232"] // No. 232 - Inspired by Fucking Fabulous
    }
  ],
  
  // ===== JEAN PAUL GAULTIER =====
  jpg: [
    {
      id: "jpg_la_belle",
      name: "La Belle",
      brand: "Jean Paul Gaultier",
      image: "https://magicperfume.co.uk/cdn/shop/files/la_belle.png?v=1772096850",
      top_notes: ["Pear", "Bergamot"],
      heart_notes: ["Jasmine", "Orange Blossom"],
      base_notes: ["Vanilla", "Tonka Bean", "Cedar"],
      description: "A seductive and addictive gourmand fragrance. La Belle opens with juicy pear, leading to a floral heart of jasmine. The base is warm and intoxicating with vanilla and tonka bean.",
      year: "2019",
      gender: "Female",
      productNumbers: ["412"] // No. 412 - Inspired by La Belle
    },
    {
      id: "jpg_ultra_male",
      name: "Ultra Male",
      brand: "Jean Paul Gaultier",
      image: "https://magicperfume.co.uk/cdn/shop/files/ultra_male.png?v=1772098862",
      top_notes: ["Pear", "Mint", "Lavender"],
      heart_notes: ["Cinnamon", "Sage", "Clary Sage"],
      base_notes: ["Vanilla", "Amber", "Woody Notes"],
      description: "A powerful and seductive fragrance that pushes the boundaries of masculinity. Ultra Male opens with juicy pear and fresh mint, leading to a spicy heart of cinnamon.",
      year: "2015",
      gender: "Male",
      productNumbers: ["349"] // No. 349 - Inspired by Ultra Male
    },
    {
      id: "jpg_classique_essence",
      name: "Classique Essence de Parfum",
      brand: "Jean Paul Gaultier",
      image: "https://magicperfume.co.uk/cdn/shop/files/Classique_Essence_de_Parfum.png?v=1772097516",
      top_notes: ["Rose", "Ginger", "Bergamot"],
      heart_notes: ["Tuberose", "Jasmine", "Orange Blossom"],
      base_notes: ["Vanilla", "Amber", "Musk"],
      description: "A more intense and sensual interpretation of the iconic Classique. This essence opens with spicy ginger and rose, leading to a rich floral heart of tuberose.",
      year: "2013",
      gender: "Female",
      productNumbers: ["442"] // No. 442 - Inspired by Classique Essence de Parfum
    },
    {
      id: "jpg_le_male",
      name: "Le Male",
      brand: "Jean Paul Gaultier",
      image: "https://magicperfume.co.uk/cdn/shop/files/Le_Male.jpg?v=1772038546",
      top_notes: ["Mint", "Lavender", "Bergamot", "Cardamom"],
      heart_notes: ["Cinnamon", "Orange Blossom", "Caraway"],
      base_notes: ["Vanilla", "Tonka Bean", "Amber", "Cedar"],
      description: "An iconic and seductive fragrance for the modern man. Le Male opens with fresh mint and lavender, creating an aromatic and invigorating start. The heart reveals spicy cinnamon and orange blossom, while the base is warm and sensual with vanilla and tonka bean.",
      year: "1995",
      gender: "Male",
      productNumbers: ["247"] // No. 247 - Inspired by Le Male
    }
  ],
  
  // ===== GIORGIO ARMANI =====
  armani: [
    {
      id: "armani_stronger_with_you",
      name: "Stronger With You",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/Stronger_with_You.webp?v=1772102160",
      top_notes: ["Cardamom", "Pink Pepper", "Violet Leaf"],
      heart_notes: ["Sage", "Lavender", "Cinnamon"],
      base_notes: ["Vanilla", "Chestnut", "Tonka Bean"],
      description: "A warm and sensual fragrance that celebrates the strength of connection. Stronger With You opens with spicy cardamom, leading to an aromatic heart of sage and lavender.",
      year: "2017",
      gender: "Male",
      productNumbers: ["291"] // No. 291 - Inspired by Stronger with You
    },
    {
      id: "armani_stronger_with_you_intensely",
      name: "Stronger With You Intensely",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/stronger_with_you_intensely.png?v=1772097116",
      top_notes: ["Pink Pepper", "Cardamom", "Violet Leaf"],
      heart_notes: ["Sage", "Lavender", "Cinnamon"],
      base_notes: ["Vanilla", "Chestnut", "Tonka Bean", "Amber"],
      description: "A more intense and powerful interpretation of Stronger With You. This version opens with even more spice, leading to a deeper, richer heart.",
      year: "2019",
      gender: "Male",
      productNumbers: ["318"] // No. 318 - Inspired by Stronger With You Intensely
    },
    {
      id: "armani_code",
      name: "Code",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/code.png?v=1772100357",
      top_notes: ["Bergamot", "Lemon", "Green Notes"],
      heart_notes: ["Olive Blossom", "Jasmine", "Orange Blossom"],
      base_notes: ["Leather", "Cedar", "Tonka Bean"],
      description: "A sophisticated and seductive fragrance for the modern man. Code opens with fresh bergamot and lemon, leading to a heart of olive blossom. The base is warm and sensual with leather and tonka bean.",
      year: "2004",
      gender: "Male",
      productNumbers: ["260"] // No. 260 - Inspired by Code (MEN'S VERSION)
    },
    {
      id: "armani_acqua_di_gio",
      name: "Acqua Di Gio",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/Acqua_Di_Gio.png?v=1772097792",
      top_notes: ["Bergamot", "Neroli", "Green Tangerine"],
      heart_notes: ["Jasmine", "Rosemary", "Sage"],
      base_notes: ["Cedar", "Patchouli", "Musk"],
      description: "A timeless aquatic classic that captures the essence of the Mediterranean Sea. The citrus opening is fresh and invigorating, while the aromatic heart adds depth.",
      year: "1996",
      gender: "Male",
      productNumbers: ["221"] // No. 221 - Inspired by Acqua Di Gio
    },
    {
      id: "armani_code_for_women",
      name: "Armani Code for Women",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/code_for_woman.png?v=1772098650",
      top_notes: ["Orange Blossom", "Jasmine", "Bergamot"],
      heart_notes: ["Honey", "Almond", "Ginger"],
      base_notes: ["Vanilla", "Sandalwood", "Musk"],
      description: "A seductive and elegant oriental floral fragrance. The orange blossom opening is bright and feminine, while the heart of honey and almond adds a gourmand twist.",
      year: "2006",
      gender: "Female",
      productNumbers: ["135"] // No. 135 - Inspired by Code for Women
    },
    {
      id: "armani_my_way",
      name: "My Way",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/my_way.png?v=1772095936",
      top_notes: ["Orange Blossom", "Bergamot"],
      heart_notes: ["Tuberose", "Jasmine"],
      base_notes: ["Vanilla", "Cedar", "White Musk"],
      description: "A radiant and ethical fragrance that celebrates authenticity and connection. My Way opens with bright orange blossom, leading to a heart of tuberose and jasmine.",
      year: "2020",
      gender: "Female",
      productNumbers: ["140"] // No. 140 - Inspired by MY WAY
    },
    {
      id: "armani_emporio_she",
      name: "Emporio Armani She",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/armani-she.webp?v=1772102295",
      top_notes: ["Lemon", "Bergamot", "Rose"],
      heart_notes: ["Jasmine", "Peony", "Lily-of-the-Valley"],
      base_notes: ["Sandalwood", "Musk", "Vanilla"],
      description: "A fresh and feminine fragrance that captures the spirit of modern youth. Emporio Armani She opens with bright lemon and rose, leading to a floral heart of jasmine and peony.",
      year: "1998",
      gender: "Female",
      productNumbers: ["150"] // No. 150 - Inspired by Emporio She
    },
    {
      id: "armani_si",
      name: "Si",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/si.webp?v=1772102453",
      top_notes: ["Black Currant", "Pear", "Mandarin"],
      heart_notes: ["Rose", "Freesia", "May Rose"],
      base_notes: ["Vanilla", "Patchouli", "Benzoin"],
      description: "A sophisticated and modern chypre fragrance that celebrates feminine strength. Si opens with fruity black currant, leading to a romantic heart of rose.",
      year: "2013",
      gender: "Female",
      productNumbers: ["129"] // No. 129 - Inspired by Si
    },
    {
      id: "armani_emporio_he",
      name: "Emporio Armani He",
      brand: "Giorgio Armani",
      image: "https://magicperfume.co.uk/cdn/shop/files/he.png?v=1772102402",
      top_notes: ["Lemon", "Bergamot", "Grapefruit"],
      heart_notes: ["Cedar", "Sage", "Geranium"],
      base_notes: ["Sandalwood", "Musk", "Amber"],
      description: "A fresh and masculine fragrance for the modern man. Emporio Armani He opens with bright citrus, leading to a woody heart of cedar. The base is warm and sensual with sandalwood and musk.",
      year: "1998",
      gender: "Male",
      productNumbers: ["242"] // No. 242 - Inspired by He
    }
  ],
  
  // ===== DIOR =====
  dior: [
    {
      id: "dior_homme_intense",
      name: "Dior Homme Intense",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/homme_intense.png?v=1772099043",
      top_notes: ["Lavender"],
      heart_notes: ["Tuscan Iris", "Ambrette Seed", "Pear"],
      base_notes: ["Virginia Cedar", "Vetiver"],
      description: "An intense and sensual fragrance that enhances masculinity. The iris is at the heart, creating an incredibly smooth and powdery character that evolves throughout the day.",
      year: "2011",
      gender: "Male",
      productNumbers: ["277"] // No. 277 - Inspired by Homme Intense
    },
    {
      id: "dior_homme",
      name: "Dior Homme",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/homme_intense.png",
      top_notes: ["Lavender", "Bergamot", "Sage"],
      heart_notes: ["Iris", "Cocoa", "Pear"],
      base_notes: ["Cedar", "Vetiver", "Leather"],
      description: "A refined, elegant fragrance with iris at its heart. Dior Homme is a modern classic that has redefined masculine perfumery. It opens with fresh lavender and bergamot, leading to a heart uniquely centered around iris.",
      year: "2005",
      gender: "Male",
      productNumbers: ["211"] // No. 211 - Inspired by Homme
    },
    {
      id: "dior_sauvage_parfum",
      name: "Sauvage Parfum",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/sauvage_parfum.png?v=1772100537",
      top_notes: ["Bergamot", "Mandarin"],
      heart_notes: ["Lavender", "Star Anise", "Nutmeg"],
      base_notes: ["Sandalwood", "Vanilla", "Amber"],
      description: "A deeper, more intense interpretation of Sauvage. This parfum version opens with fresh bergamot, leading to a heart of lavender and star anise. The base is warm and sensual with sandalwood and vanilla.",
      year: "2018",
      gender: "Male",
      productNumbers: ["338"] // No. 338 - Inspired by Sauvage Parfum
    },
    {
      id: "dior_sauvage_elixir",
      name: "Sauvage Elixir",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/Dior-Sauvage-Elixir-Parfum-for-Men.jpg?v=1772016795",
      top_notes: ["Grapefruit", "Nutmeg", "Cinnamon"],
      heart_notes: ["Lavender", "Star Anise", "Coriander"],
      base_notes: ["Liquorice", "Patchouli", "Sandalwood"],
      description: "A bold and intense reinterpretation of Sauvage. Spicy and woody notes create an unexpected, powerful and elegant elixir. The opening is an explosion of spicy grapefruit and cinnamon, leading to a heart of lavender and star anise.",
      year: "2021",
      gender: "Male",
      productNumbers: ["366"] // No. 366 - Inspired by Sauvage Elixir
    },
    {
      id: "dior_fahrenheit",
      name: "Fahrenheit",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/fahrenheit.png?v=1772096940",
      top_notes: ["Hawthorn", "Cedar", "Mugwort", "Nutmeg", "Mandarin"],
      heart_notes: ["Leather", "Violet", "Honeysuckle"],
      base_notes: ["Leather", "Vetiver", "Amber"],
      description: "A revolutionary fragrance that combines floral, woody and leather notes. Fahrenheit opens with a unique blend of hawthorn and nutmeg, leading to a surprising heart of leather and violet.",
      year: "1988",
      gender: "Male",
      productNumbers: ["206"] // No. 206 - Inspired by Fahrenheit
    },
    {
      id: "dior_fahrenheit_le_parfum",
      name: "Fahrenheit Le Parfum",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/fahrenheit.png?v=1772096940",
      top_notes: ["Violet", "Leather", "Incense"],
      heart_notes: ["Leather", "Violet", "Honeysuckle"],
      base_notes: ["Leather", "Vetiver", "Amber", "Myrrh"],
      description: "A deeper, more intense interpretation of the iconic Fahrenheit. Le Parfum amplifies the leather and violet notes, adding rich incense and myrrh for a darker, more mysterious character.",
      year: "2015",
      gender: "Male",
      productNumbers: ["350"] // No. 350 - Inspired by Fahrenheit Le Parfum
    },
    {
      id: "dior_jadore",
      name: "J'adore",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/images_3.jpg?v=1772089118",
      top_notes: ["Pear", "Melon", "Peach", "Magnolia"],
      heart_notes: ["Jasmine", "Rose", "Lily-of-the-Valley", "Ylang-Ylang"],
      base_notes: ["Vanilla", "Musk", "Cedar"],
      description: "A floral bouquet of exceptional richness. J'adore opens with fresh fruity notes of pear and melon, leading to a magnificent heart of jasmine and rose. The base of vanilla and musk provides a warm, comforting foundation.",
      year: "1999",
      gender: "Female",
      productNumbers: ["159"] // No. 159 - Inspired by J'Adore
    },
    {
      id: "dior_hypnotic_poison",
      name: "Hypnotic Poison",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/hypnotic_poison_edp.png?v=1772095394",
      top_notes: ["Apricot", "Plum", "Coconut", "Bitter Almond"],
      heart_notes: ["Rose", "Jasmine Sambac", "Lily-of-the-Valley"],
      base_notes: ["Vanilla", "Almond", "Musk"],
      description: "A mysterious and sensual fragrance that weaves a spell of seduction. Hypnotic Poison opens with a unique combination of bitter almond and coconut, leading to a floral heart of rose and jasmine.",
      year: "1998",
      gender: "Female",
      productNumbers: ["145"] // No. 145 - Inspired Hypnotic Poison
    },
    {
      id: "dior_homme_parfum",
      name: "Dior Homme Parfum",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/le_parfum.png?v=1772095625",
      top_notes: ["Lavender", "Bergamot", "Sage"],
      heart_notes: ["Iris Pallida", "Musk", "Ambrette", "Pear"],
      base_notes: ["Virginia Cedar", "Vetiver", "Leather", "Amber Accord"],
      description: "The most concentrated and luxurious version of Dior Homme. This fragrance tells the story of a meeting between the suave and fleshy notes of iris with the powerful accords of amber woods.",
      year: "2025",
      gender: "Male",
      productNumbers: ["196"] // No. 196 - Inspired by Le Parfum
    },
    {
      id: "dior_miss_cherie",
      name: "Miss Chérie",
      brand: "Dior",
      image: "https://magicperfume.co.uk/cdn/shop/files/miss_cherie_edp.png?v=1772104486",
      top_notes: ["Strawberry", "Mandarin", "Pink Pepper"],
      heart_notes: ["Jasmine", "Rose", "Caramel", "Popcorn"],
      base_notes: ["Patchouli", "Musk", "Cedar"],
      description: "A playful and romantic fragrance that captures the spirit of a young woman in love. Miss Dior Chérie opens with a burst of juicy strawberry and mandarin, with a hint of pink pepper for sparkle.",
      year: "2005",
      gender: "Female",
      productNumbers: ["082"] // No. 082 - Inspired by Miss Cherie
    }
  ],
  
  // ===== YVES SAINT LAURENT =====
  ysl: [
    {
      id: "ysl_black_opium",
      name: "Black Opium",
      brand: "Yves Saint Laurent",
      image: "https://magicperfume.co.uk/cdn/shop/files/black_opium.png?v=1772103749",
      top_notes: ["Coffee", "Pink Pepper", "Orange Blossom"],
      heart_notes: ["Jasmine", "Bitter Almond", "Licorice"],
      base_notes: ["Vanilla", "Cedar", "Patchouli"],
      description: "A bold and edgy fragrance that captures the spirit of rock culture. Black Opium opens with a burst of coffee and pink pepper, leading to a floral heart of jasmine. The base is warm and addictive with vanilla and patchouli.",
      year: "2014",
      gender: "Female",
      productNumbers: ["132"] // No. 132 - Inspired by Black Opium
    },
    {
      id: "ysl_libre",
      name: "Libre",
      brand: "Yves Saint Laurent",
      image: "https://magicperfume.co.uk/cdn/shop/files/Libre.png?v=1772103069",
      top_notes: ["Lavender", "Mandarin", "Black Currant"],
      heart_notes: ["Orange Blossom", "Jasmine", "Rose"],
      base_notes: ["Vanilla", "Amber", "Cedar"],
      description: "A bold and free-spirited fragrance that combines the freshness of lavender with the sensuality of orange blossom. Libre opens with aromatic lavender, leading to a heart of orange blossom.",
      year: "2019",
      gender: "Female",
      productNumbers: ["034"] // No. 034 - Inspired by Libre
    },
    {
      id: "ysl_opium",
      name: "Opium",
      brand: "Yves Saint Laurent",
      image: "https://magicperfume.co.uk/cdn/shop/files/opium.png?v=1772100276",
      top_notes: ["Mandarin", "Plum", "Clove", "Coriander"],
      heart_notes: ["Carnation", "Rose", "Jasmine", "Lily of the Valley"],
      base_notes: ["Opium", "Myrrh", "Amber", "Sandalwood"],
      description: "A legendary oriental fragrance that is both spicy and sensual. Opium opens with a burst of mandarin and clove, leading to a rich floral heart. The base is deep and intoxicating with opium and myrrh.",
      year: "1977",
      gender: "Female",
      productNumbers: ["083"] // No. 083 - Inspired by Opium
    },
    {
      id: "ysl_la_vie_est_belle",
      name: "La Vie Est Belle",
      brand: "Yves Saint Laurent",
      image: "https://magicperfume.co.uk/cdn/shop/files/La_Vie_Est_Belle.webp?v=1772017452",
      top_notes: ["Black Currant", "Pear", "Orange Blossom"],
      heart_notes: ["Iris", "Jasmine", "Orange Blossom"],
      base_notes: ["Praline", "Vanilla", "Patchouli", "Tonka Bean"],
      description: "A radiant and joyful fragrance that celebrates the beauty of life. La Vie Est Belle opens with fruity black currant and pear, leading to an elegant iris heart. The base is sweet and comforting with praline and vanilla.",
      year: "2012",
      gender: "Female",
      productNumbers: ["101"] // No. 101 - Inspired by La Vie Est Belle
    },
    {
      id: "ysl_la_vie_est_belle_intensement",
      name: "La Vie Est Belle Intensément",
      brand: "Yves Saint Laurent",
      image: "https://magicperfume.co.uk/cdn/shop/files/La_Vie_Est_Belle_Intensement.png?v=1772101772",
      top_notes: ["Mandarin", "Black Currant", "Bergamot"],
      heart_notes: ["Tuberose", "Jasmine", "Orange Blossom"],
      base_notes: ["Praline", "Vanilla", "Patchouli", "Tonka Bean"],
      description: "A more intense and voluptuous interpretation of La Vie Est Belle. This version opens with sparkling mandarin, leading to a rich floral heart of tuberose and jasmine. The base is even more addictive with praline and vanilla.",
      year: "2017",
      gender: "Female",
      productNumbers: ["109"] // No. 109 - Inspired by La Vie Est Belle Intensement
    },
    {
      id: "ysl_manifesto",
      name: "Manifesto",
      brand: "Yves Saint Laurent",
      image: "https://magicperfume.co.uk/cdn/shop/files/manifesto.png?v=1772099152",
      top_notes: ["Green Notes", "Bergamot"],
      heart_notes: ["Jasmine", "Lily-of-the-Valley"],
      base_notes: ["Vanilla", "Tonka Bean", "Cedar"],
      description: "A woody vanilla fragrance that captures the spirit of a free woman. Manifesto opens with fresh green notes, leading to a heart of jasmine. The base is warm and sensual with vanilla and tonka bean.",
      year: "2012",
      gender: "Female",
      productNumbers: ["134"] // No. 134 - Inspired by Manifesto
    },
    {
      id: "ysl_y",
      name: "Y",
      brand: "Yves Saint Laurent",
      image: "https://magicperfume.co.uk/cdn/shop/files/y.png?v=1772101857",
      top_notes: ["Bergamot", "Ginger", "Aldehydes"],
      heart_notes: ["Sage", "Juniper", "Geranium"],
      base_notes: ["Amber", "Cedar", "Musk"],
      description: "A fresh and woody fragrance that represents a new generation. Y opens with sparkling bergamot and ginger, leading to an aromatic heart of sage. The base is warm and sensual with amber and cedar.",
      year: "2017",
      gender: "Male",
      productNumbers: ["283"] // No. 283 - Inspired by Y
    },
    {
      id: "ysl_nuit_blanche",
      name: "Black Opium Nuit Blanche",
      brand: "Yves Saint Laurent",
      image: "https://magicperfume.co.uk/cdn/shop/files/Black_Opium_Nuit_Blanche.png?v=1772102233",
      top_notes: ["Coffee", "Pink Pepper", "Orange Blossom"],
      heart_notes: ["Jasmine", "Bitter Almond", "Licorice"],
      base_notes: ["Vanilla", "Cedar", "Patchouli"],
      description: "A fresh and luminous interpretation of Black Opium. Nuit Blanche captures the magic of a sleepless night with sparkling coffee and orange blossom, leading to a floral heart of jasmine.",
      year: "2017",
      gender: "Female",
      productNumbers: ["197"] // No. 197 - Inspired by Nuit Blanche
    }
  ],
  
  // ===== CHLOE =====
  chloe: [
    {
      id: "chloe_chloe",
      name: "Chloé",
      brand: "Chloé",
      image: "https://magicperfume.co.uk/cdn/shop/files/chloe.png?v=1772097311",
      top_notes: ["Peony", "Lychee", "Freesia"],
      heart_notes: ["Magnolia", "Rose", "Lily of the Valley"],
      base_notes: ["Cedar", "Amber", "Musk"],
      description: "A fresh and elegant rose fragrance that captures the spirit of the modern woman. Chloé opens with sparkling peony and lychee, leading to a heart of romantic rose. The base is soft and sensual with cedar and musk.",
      year: "2008",
      gender: "Female",
      productNumbers: ["024"] // No. 024 - Inspired by Chloe
    },
    {
      id: "chloe_nomade",
      name: "Nomade",
      brand: "Chloé",
      image: "https://magicperfume.co.uk/cdn/shop/files/nomade.webp?v=1772101560",
      top_notes: ["Mirabelle", "Freesia", "Bergamot"],
      heart_notes: ["Rose", "Jasmine", "Oakmoss"],
      base_notes: ["Patchouli", "Amber", "Cedar"],
      description: "A free-spirited and adventurous fragrance for the modern woman. Nomade opens with juicy mirabelle, leading to a floral heart of rose and jasmine. The base is warm and sensual with patchouli and amber.",
      year: "2018",
      gender: "Female",
      productNumbers: ["049"] // No. 049 - Inspired by Nomade
    }
  ],
  
  // ===== PACO RABANNE =====
  pacoRabanne: [
    {
      id: "paco_invictus",
      name: "Invictus",
      brand: "Paco Rabanne",
      image: "https://magicperfume.co.uk/cdn/shop/files/Invictus_EDT.png?v=1772097596",
      top_notes: ["Grapefruit", "Mandarin", "Sea Notes"],
      heart_notes: ["Bay Leaf", "Jasmine", "Cedar"],
      base_notes: ["Oakmoss", "Amber", "Patchouli"],
      description: "A fresh and powerful fragrance for the victorious man. Invictus opens with zesty grapefruit and sea notes, leading to an aromatic heart of bay leaf. The base is warm and sensual with oakmoss and amber.",
      year: "2013",
      gender: "Male",
      productNumbers: ["228"] // No. 228 - Inspired by Invictus
    },
    {
      id: "paco_one_million",
      name: "1 Million",
      brand: "Paco Rabanne",
      image: "https://magicperfume.co.uk/cdn/shop/files/One_Million.webp?v=1772037456",
      top_notes: ["Grapefruit", "Mint", "Mandarin"],
      heart_notes: ["Cinnamon", "Rose", "Spices"],
      base_notes: ["Leather", "Amber", "Patchouli"],
      description: "A bold and seductive fragrance for the man who knows his worth. 1 Million opens with fresh grapefruit and mint, leading to a spicy heart of cinnamon. The base is rich and sensual with leather and amber.",
      year: "2008",
      gender: "Male",
      productNumbers: ["275"] // No. 275 - Inspired by One Million
    },
    {
      id: "paco_one_million_elixir",
      name: "1 Million Elixir",
      brand: "Paco Rabanne",
      image: "https://magicperfume.co.uk/cdn/shop/files/One_Million_Elixir.png?v=1772101088",
      top_notes: ["Grapefruit", "Mandarin", "Mint"],
      heart_notes: ["Cinnamon", "Rose", "Saffron"],
      base_notes: ["Leather", "Amber", "Vanilla", "Patchouli"],
      description: "A more intense and concentrated version of the iconic 1 Million. This elixir opens with even brighter citrus, leading to a spicier heart with saffron.",
      year: "2020",
      gender: "Male",
      productNumbers: ["334"] // No. 334 - Inspired by One Million Elixir
    },
    {
      id: "paco_phantom",
      name: "Phantom",
      brand: "Paco Rabanne",
      image: "https://magicperfume.co.uk/cdn/shop/files/Phantom.png?v=1772100849",
      top_notes: ["Lemon", "Bergamot", "Lavender"],
      heart_notes: ["Sage", "Vetiver", "Patchouli"],
      base_notes: ["Vanilla", "Amber", "Cedar"],
      description: "A futuristic and connected fragrance for a new generation. Phantom opens with fresh lemon and lavender, leading to an aromatic heart of sage. The base is warm and sensual with vanilla and amber.",
      year: "2021",
      gender: "Male",
      productNumbers: ["399"] // No. 399 - Inspired by Phantom
    },
    {
      id: "paco_fame",
      name: "Fame",
      brand: "Paco Rabanne",
      image: "https://magicperfume.co.uk/cdn/shop/files/fame.png?v=1772095718",
      top_notes: ["Mango", "Bergamot", "Mandarin"],
      heart_notes: ["Jasmine", "Rose", "Incense"],
      base_notes: ["Sandalwood", "Vanilla", "Musk"],
      description: "A vibrant and modern fragrance that celebrates self-expression. Fame opens with juicy mango, leading to a floral heart of jasmine. The base is warm and sensual with sandalwood and vanilla.",
      year: "2022",
      gender: "Female",
      productNumbers: ["498"] // No. 498 - Inspired by Fame
    },
    {
      id: "paco_lady_million",
      name: "Lady Million",
      brand: "Paco Rabanne",
      image: "https://magicperfume.co.uk/cdn/shop/files/LADY_MILION.jpg?v=1772103059",
      top_notes: ["Raspberry", "Neroli", "Lemon"],
      heart_notes: ["Orange Blossom", "Jasmine", "Honey"],
      base_notes: ["Patchouli", "Amber", "Cedar"],
      description: "A dazzling and glamorous fragrance for the modern woman. Lady Million opens with juicy raspberry, leading to a floral heart of orange blossom and honey. The base is warm and sensual with patchouli and amber.",
      year: "2010",
      gender: "Female",
      productNumbers: ["023"] // No. 023 - Inspired by Lady Million
    }
  ],
  
  // ===== HUGO BOSS =====
  hugoBoss: [
    {
      id: "boss_bottled",
      name: "Boss Bottled",
      brand: "Hugo Boss",
      image: "https://magicperfume.co.uk/cdn/shop/files/bottled.png?v=1772095809",
      top_notes: ["Apple", "Citrus", "Geranium"],
      heart_notes: ["Cedar", "Sandalwood", "Patchouli"],
      base_notes: ["Vanilla", "Musk", "Amber"],
      description: "A classic and sophisticated fragrance for the successful modern man. Boss Bottled opens with fresh apple and citrus, leading to a woody heart of cedar and sandalwood. The base is warm and elegant with vanilla and musk.",
      year: "1998",
      gender: "Male",
      productNumbers: ["234"] // No. 234 - Inspired by Bottled
    },
    {
      id: "boss_bottled_night",
      name: "Boss Bottled Night",
      brand: "Hugo Boss",
      image: "https://magicperfume.co.uk/cdn/shop/files/bottled_night.png?v=1772102565",
      top_notes: ["Lavender", "Birch Leaf", "Cardamom"],
      heart_notes: ["Violet Leaf", "Musk", "Ebony Wood"],
      base_notes: ["Sandalwood", "Musk", "Amber"],
      description: "A mysterious and seductive fragrance for evening wear. Boss Bottled Night opens with aromatic lavender and cardamom, leading to a heart of violet leaf and ebony wood. The base is warm and sensual with sandalwood and musk.",
      year: "2010",
      gender: "Male",
      productNumbers: ["274"] // No. 274 - Inspired by Bottled Night
    },
    {
      id: "boss_woman",
      name: "Boss Woman",
      brand: "Hugo Boss",
      image: "https://magicperfume.co.uk/cdn/shop/files/boss_woman.png?v=1772097690",
      top_notes: ["Mandarin", "Apple", "Peach"],
      heart_notes: ["Rose", "Jasmine", "Lily"],
      base_notes: ["Sandalwood", "Musk", "Vanilla"],
      description: "A classic and elegant fragrance for the successful modern woman. Boss Woman opens with fresh mandarin and apple, leading to a floral heart of rose and jasmine. The base is warm and sophisticated with sandalwood and vanilla.",
      year: "2000",
      gender: "Female",
      productNumbers: ["060"] // No. 60 - Inspired by Boss Woman
    },
    {
      id: "boss_alive",
      name: "Boss Alive",
      brand: "Hugo Boss",
      image: "https://magicperfume.co.uk/cdn/shop/files/alive.png?v=1772098782",
      top_notes: ["Apple", "Black Currant", "Plum"],
      heart_notes: ["Rose", "Jasmine", "Cinnamon"],
      base_notes: ["Vanilla", "Musk", "Cedar"],
      description: "A vibrant and energetic fragrance that celebrates the joy of being alive. Boss Alive opens with juicy apple and black currant, leading to a spicy floral heart of rose and cinnamon. The base is warm and sensual with vanilla and musk.",
      year: "2019",
      gender: "Female",
      productNumbers: ["098"] // No. 098 - Inspired by ALIVE
    },
    {
      id: "boss_the_scent",
      name: "The Scent",
      brand: "Hugo Boss",
      image: "https://magicperfume.co.uk/cdn/shop/files/the_scent.png?v=1772100442",
      top_notes: ["Ginger", "Bergamot", "Mandarin"],
      heart_notes: ["Lavender", "Maninka", "Fruity Notes"],
      base_notes: ["Leather", "Patchouli", "Cedar"],
      description: "A seductive and magnetic fragrance that captures the essence of attraction. The Scent opens with spicy ginger, leading to a heart of lavender and maninka fruit. The base is warm and sensual with leather and patchouli.",
      year: "2015",
      gender: "Male",
      productNumbers: ["184", "270"] // No. 184 and No. 270 - Inspired by The Scent
    }
  ],
  
  // ===== LANCOME =====
  lancome: [
    {
      id: "lancome_tresor",
      name: "Trésor",
      brand: "Lancôme",
      image: "https://magicperfume.co.uk/cdn/shop/files/tresor.png?v=1772097891",
      top_notes: ["Peach", "Apricot", "Rose"],
      heart_notes: ["Lily of the Valley", "Jasmine", "Iris"],
      base_notes: ["Vanilla", "Sandalwood", "Musk"],
      description: "A romantic and timeless fragrance that captures the essence of love. Trésor opens with juicy peach and apricot, leading to a floral heart of lily of the valley. The base is warm and sensual with vanilla and sandalwood.",
      year: "1990",
      gender: "Female",
      productNumbers: ["141"] // No. 141 - Inspired by Tresor
    },
    {
      id: "lancome_idole",
      name: "Idôle",
      brand: "Lancôme",
      image: "https://magicperfume.co.uk/cdn/shop/files/Idole.webp?v=1772097147",
      top_notes: ["Pear", "Bergamot", "Lemon"],
      heart_notes: ["Rose", "Jasmine", "Magnolia"],
      base_notes: ["Vanilla", "Musk", "Cedar"],
      description: "A modern and elegant fragrance for the new generation of women. Idôle opens with fresh pear and bergamot, leading to a heart of rose and jasmine. The base is clean and sensual with vanilla and musk.",
      year: "2019",
      gender: "Female",
      productNumbers: ["055"] // No. 55 - Inspired by Idole
    },
    {
      id: "lancome_la_vie_est_belle",
      name: "La Vie Est Belle",
      brand: "Lancôme",
      image: "https://magicperfume.co.uk/cdn/shop/files/La_Vie_Est_Belle.webp?v=1772017452",
      top_notes: ["Black Currant", "Pear", "Orange Blossom"],
      heart_notes: ["Iris", "Jasmine", "Orange Blossom"],
      base_notes: ["Praline", "Vanilla", "Patchouli", "Tonka Bean"],
      description: "A radiant and joyful fragrance that celebrates the beauty of life. La Vie Est Belle opens with fruity black currant and pear, leading to an elegant iris heart. The base is sweet and comforting with praline and vanilla.",
      year: "2012",
      gender: "Female",
      productNumbers: ["101"] // No. 101 - Inspired by La Vie Est Belle
    }
  ],
  
  // ===== HERMÈS =====
  hermes: [
    {
      id: "hermes_terre",
      name: "Terre d'Hermès",
      brand: "Hermès",
      image: "https://magicperfume.co.uk/cdn/shop/files/terre.png?v=1772098416",
      top_notes: ["Orange", "Grapefruit", "Flint"],
      heart_notes: ["Pepper", "Geranium", "Cedar"],
      base_notes: ["Vetiver", "Benzoin", "Cedar", "Oakmoss"],
      description: "A powerful and original fragrance that celebrates the connection between man and earth. Terre d'Hermès opens with zesty citrus and flint, leading to a mineral heart of pepper and cedar. The base is deep and earthy with vetiver and oakmoss.",
      year: "2006",
      gender: "Male",
      productNumbers: ["227"] // No. 227 - Inspired by Terre
    }
  ],
  
  // ===== GUCCI =====
  gucci: [
    {
      id: "gucci_rush",
      name: "Rush",
      brand: "Gucci",
      image: "https://magicperfume.co.uk/cdn/shop/files/rush.png?v=1772102652",
      top_notes: ["Freesia", "Water Lily", "Coriander"],
      heart_notes: ["Rose", "Jasmine", "Lily of the Valley"],
      base_notes: ["Sandalwood", "Musk", "Amber"],
      description: "A bold and modern floral fragrance that captures the energy of urban life. Rush opens with bright freesia and water lily, leading to a heart of romantic rose and jasmine. The base is warm and sensual with sandalwood and musk.",
      year: "1999",
      gender: "Female",
      productNumbers: ["167"] // No. 167 - Inspired by Rush
    },
    {
      id: "gucci_rush_2",
      name: "Rush 2",
      brand: "Gucci",
      image: "https://magicperfume.co.uk/cdn/shop/files/rush_2.png?v=1772098494",
      top_notes: ["Freesia", "Water Lily", "Coriander"],
      heart_notes: ["Rose", "Jasmine", "Lily of the Valley"],
      base_notes: ["Sandalwood", "Musk", "Amber"],
      description: "A fresh and vibrant floral fragrance that captures the energy of modern life. Rush 2 opens with bright freesia and water lily, leading to a heart of romantic rose and jasmine.",
      year: "2001",
      gender: "Female",
      productNumbers: ["163"] // No. 163 - Inspired by Rush 2
    },
    {
      id: "gucci_flora",
      name: "Flora by Gucci",
      brand: "Gucci",
      image: "https://magicperfume.co.uk/cdn/shop/files/flora.png?v=1772102480",
      top_notes: ["Citrus", "Peony", "Mandarin"],
      heart_notes: ["Rose", "Osmanthus", "Carnation"],
      base_notes: ["Sandalwood", "Patchouli", "Musk"],
      description: "A fresh and elegant floral fragrance that captures the spirit of a garden in bloom. Flora opens with bright citrus and peony, leading to a heart of rose and osmanthus. The base is warm and sensual with sandalwood and patchouli.",
      year: "2009",
      gender: "Female",
      productNumbers: ["162"] // No. 162 - Inspired by Flora
    }
  ],
  
  // ===== VALENTINO =====
  valentino: [
    {
      id: "valentino_uomo_born_in_roma",
      name: "Uomo Born in Roma",
      brand: "Valentino",
      image: "https://magicperfume.co.uk/cdn/shop/files/Uomo_Born_in_Roma.png?v=1772098564",
      top_notes: ["Mandarin", "Salt", "Mint"],
      heart_notes: ["Lavender", "Sage", "Cedar"],
      base_notes: ["Vanilla", "Tonka Bean", "Musk"],
      description: "A fresh and aromatic fragrance for the modern man. Uomo Born in Roma opens with zesty mandarin and salt, leading to an aromatic heart of lavender. The base is warm and sensual with vanilla and tonka bean.",
      year: "2019",
      gender: "Male",
      productNumbers: ["360"] // No. 360 - Inspired by Uomo Born in Roma
    },
    {
      id: "valentino_born_in_roma",
      name: "Born in Roma",
      brand: "Valentino",
      image: "https://magicperfume.co.uk/cdn/shop/files/born_in_roma.png?v=1772104361",
      top_notes: ["Black Currant", "Bergamot", "Jasmine"],
      heart_notes: ["Rose", "Jasmine", "Cedar"],
      base_notes: ["Vanilla", "Musk", "Cedar"],
      description: "A modern and edgy fragrance that captures the spirit of Rome's youth culture. Born in Roma opens with juicy black currant, leading to a floral heart of rose and jasmine.",
      year: "2019",
      gender: "Female",
      productNumbers: ["469"] // No. 469 - Inspired by Born in Roma
    }
  ],
  
  // ===== CACHAREL =====
  cacharel: [
    {
      id: "cacharel_scandal",
      name: "Scandal",
      brand: "Cacharel",
      image: "https://magicperfume.co.uk/cdn/shop/files/SCANDAL.jpg?v=1772036652",
      top_notes: ["Mandarin", "Gardenia", "Blood Orange"],
      heart_notes: ["Honey", "Jasmine", "Rose"],
      base_notes: ["Patchouli", "Tonka Bean", "Cedar"],
      description: "A bold and playful fragrance with a gourmand heart. Scandal opens with juicy mandarin and gardenia, leading to a heart of rich honey. The base is warm and sensual with patchouli and tonka bean.",
      year: "2017",
      gender: "Female",
      productNumbers: ["192"] // No. 192 - Inspired by SCANDAL
    }
  ],
  
  // ===== KENZO =====
  kenzo: [
    {
      id: "kenzo_flower",
      name: "Flower by Kenzo",
      brand: "Kenzo",
      image: "https://magicperfume.co.uk/cdn/shop/files/flower.png?v=1772098946",
      top_notes: ["Hawthorn", "Black Currant", "Mandarin"],
      heart_notes: ["Rose", "Jasmine", "Violet"],
      base_notes: ["Vanilla", "Musk", "Cedar"],
      description: "A poetic and delicate fragrance that celebrates the beauty of the poppy flower. Flower opens with fresh hawthorn and black currant, leading to a floral heart of rose and jasmine. The base is soft and sensual with vanilla and musk.",
      year: "2000",
      gender: "Female",
      productNumbers: ["074"] // No. 074 - Inspired by Flower
    }
  ],
  
  // ===== PRADA =====
  prada: [
    {
      id: "prada_candy",
      name: "Candy",
      brand: "Prada",
      image: "https://magicperfume.co.uk/cdn/shop/files/candy.png?v=1772099831",
      top_notes: ["Caramel", "Musk", "Vanilla"],
      heart_notes: ["Benzoin", "Musk"],
      base_notes: ["Vanilla", "Musk", "Caramel"],
      description: "A playful and indulgent gourmand fragrance that captures the spirit of fun and femininity. Candy opens with sweet caramel, leading to a heart of warm benzoin. The base is creamy and addictive with vanilla and musk.",
      year: "2011",
      gender: "Female",
      productNumbers: ["182"] // No. 182 - Inspired by Candy
    }
  ],
  
  // ===== JOOP! =====
  joop: [
    {
      id: "joop_homme",
      name: "Joop! Homme",
      brand: "Joop!",
      image: "https://magicperfume.co.uk/cdn/shop/files/joop_homme.png?v=1772099295",
      top_notes: ["Cinnamon", "Bergamot", "Mandarin"],
      heart_notes: ["Lily of the Valley", "Jasmine", "Geranium"],
      base_notes: ["Sandalwood", "Vanilla", "Tonka Bean", "Cedar"],
      description: "A bold and distinctive fragrance that is both sweet and spicy. Joop! Homme opens with cinnamon and citrus, leading to a floral heart. The base is warm and sensual with vanilla and sandalwood.",
      year: "1989",
      gender: "Male",
      productNumbers: ["211"] // No. 211 - Inspired by Homme (JOOP!)
    }
  ],
  
  // ===== GIVENCHY =====
  givenchy: [
    {
      id: "givenchy_ange_ou_demon",
      name: "Ange ou Demon",
      brand: "Givenchy",
      image: "https://magicperfume.co.uk/cdn/shop/files/Ange_Ou_Demon.png?v=1772102015",
      top_notes: ["Saffron", "Thyme", "Italian Mandarin"],
      heart_notes: ["Lily", "Ylang-Ylang", "Orchid"],
      base_notes: ["Vanilla", "Oakmoss", "Brazilian Rosewood"],
      description: "A mysterious and seductive fragrance that plays on the duality of angel and demon. The spicy saffron opening is intriguing, while the floral heart is both angelic and sensual. The vanilla and oakmoss base is dark and addictive.",
      year: "2006",
      gender: "Female",
      productNumbers: ["142"] // No. 142 - Inspired by Ange Ou Demon
    },
    {
      id: "givenchy_paradoxe",
      name: "Paradoxe",
      brand: "Givenchy",
      image: "https://magicperfume.co.uk/cdn/shop/files/paradoxe.png?v=1772103145",
      top_notes: ["Pear", "Bergamot", "Mandarin"],
      heart_notes: ["Orange Blossom", "Jasmine", "Rose"],
      base_notes: ["Vanilla", "Amber", "Cedar"],
      description: "A modern and paradoxical fragrance that plays with contrasts. Paradoxe opens with juicy pear, leading to a floral heart of orange blossom. The base is warm and sensual with vanilla and amber.",
      year: "2022",
      gender: "Female",
      productNumbers: ["437"] // No. 437 - Inspired by Paradoxe
    }
  ],
  
  // ===== DOLCE & GABBANA =====
  dolce: [
    {
      id: "dolce_light_blue",
      name: "Light Blue",
      brand: "Dolce & Gabbana",
      image: "https://magicperfume.co.uk/cdn/shop/files/Dolce_Gabbana.jpg?v=1772018419",
      top_notes: ["Sicilian Lemon", "Apple", "Cedar"],
      heart_notes: ["Jasmine", "White Rose", "Bamboo"],
      base_notes: ["Cedar", "Amber", "Musk"],
      description: "A fresh and sunny fragrance that captures the essence of the Mediterranean. Light Blue opens with sparkling Sicilian lemon and apple, leading to a floral heart of jasmine and white rose. The base is warm and sensual with cedar and musk.",
      year: "2001",
      gender: "Female",
      productNumbers: ["017"] // No. 017 - Inspired by Light Blue
    },
    {
      id: "dolce_the_one",
      name: "The One",
      brand: "Dolce & Gabbana",
      image: "https://magicperfume.co.uk/cdn/shop/files/the_one.png?v=1772103424",
      top_notes: ["Peach", "Lychee", "Mandarin"],
      heart_notes: ["Rose", "Jasmine", "Lily"],
      base_notes: ["Vanilla", "Amber", "Musk"],
      description: "A sophisticated and sensual fragrance that captures the essence of a timeless woman. The One opens with juicy peach and lychee, leading to a floral heart of rose and jasmine. The base is warm and addictive with vanilla and amber.",
      year: "2006",
      gender: "Female",
      productNumbers: ["094"] // No. 094 - Inspired by The One
    }
  ],
  
  // ===== BVLGARI =====
  bvlgari: [
    {
      id: "bvlgari_aqva_pour_homme",
      name: "Aqva Pour Homme",
      brand: "Bvlgari",
      image: "https://magicperfume.co.uk/cdn/shop/files/Aqva_Pour_Homme.png?v=1772101257",
      top_notes: ["Mandarin", "Neroli", "Petitgrain"],
      heart_notes: ["Water Notes", "Sage", "Lavender"],
      base_notes: ["Musk", "Amber", "Cedar"],
      description: "A fresh and aquatic fragrance inspired by the Mediterranean Sea. Aqva opens with bright mandarin and neroli, leading to a heart of water notes and sage. The base is warm and sensual with musk and amber.",
      year: "2005",
      gender: "Male",
      productNumbers: ["305"] // No. 305 - Inspired by Aqva Pour Homme
    }
  ],
  
  // ===== CALVIN KLEIN =====
  calvinKlein: [
    {
      id: "ck_eternity",
      name: "Eternity",
      brand: "Calvin Klein",
      image: "https://magicperfume.co.uk/cdn/shop/files/eternity.png?v=1772101348",
      top_notes: ["Mandarin", "Bergamot", "Lemon"],
      heart_notes: ["Lily of the Valley", "Rose", "Jasmine"],
      base_notes: ["Sandalwood", "Musk", "Amber"],
      description: "A timeless and romantic fragrance that celebrates lasting love. Eternity opens with fresh citrus, leading to a floral heart of lily of the valley and rose. The base is warm and sensual with sandalwood and musk.",
      year: "1988",
      gender: "Female",
      productNumbers: ["106", "215"] // No. 106 and No. 215 - Inspired by Eternity
    },
    {
      id: "ck_one",
      name: "CK One",
      brand: "Calvin Klein",
      image: "https://magicperfume.co.uk/cdn/shop/files/eternity.png",
      top_notes: ["Bergamot", "Cardamom", "Lemon", "Pineapple"],
      heart_notes: ["Jasmine", "Rose", "Violet", "Nutmeg"],
      base_notes: ["Cedar", "Musk", "Oakmoss", "Amber"],
      description: "A revolutionary fragrance that broke down all barriers. A clean, fresh, and universally appealing citrus aromatic. It was the first great 'shared' scent and remains a timeless symbol of unity and simplicity.",
      year: "1994",
      gender: "Unisex",
      productNumbers: [] // No specific product number
    }
  ],
  
  // ===== DAVIDOFF =====
  davidoff: [
    {
      id: "davidoff_cool_water",
      name: "Cool Water",
      brand: "Davidoff",
      image: "https://magicperfume.co.uk/cdn/shop/files/Cool_Water.png?v=1772100943",
      top_notes: ["Sea Water", "Mint", "Lavender", "Rosemary"],
      heart_notes: ["Jasmine", "Geranium", "Sandalwood"],
      base_notes: ["Musk", "Amber", "Cedar"],
      description: "A fresh and aquatic fragrance that captures the power and freshness of the ocean. Cool Water opens with invigorating sea water and mint, leading to a floral heart of jasmine. The base is clean and sensual with musk and amber.",
      year: "1988",
      gender: "Male",
      productNumbers: ["200"] // No. 200 - Inspired by Cool Water
    }
  ],
  
  // ===== CAROLINA HERRERA =====
  carolinaHerrera: [
    {
      id: "carolina_very_good_girl",
      name: "Very Good Girl",
      brand: "Carolina Herrera",
      image: "https://magicperfume.co.uk/cdn/shop/files/Very_Good_Girl.png?v=1772100736",
      top_notes: ["Red Currant", "Litchi", "Bergamot"],
      heart_notes: ["Rose", "Jasmine", "Orange Blossom"],
      base_notes: ["Vanilla", "Tonka Bean", "Cedar", "Patchouli"],
      description: "A bold and glamorous interpretation of Good Girl. Very Good Girl opens with juicy red currant and litchi, leading to a heart of luxurious rose. The base is warm and sensual with vanilla and patchouli.",
      year: "2021",
      gender: "Female",
      productNumbers: ["404"] // No. 404 - Inspired by Very Good Girl
    },
    {
      id: "carolina_good_girl_velvet_fatale",
      name: "Good Girl Velvet Fatale",
      brand: "Carolina Herrera",
      image: "https://magicperfume.co.uk/cdn/shop/files/Good_Girl_Velvet_Fatale.png?v=1772103513",
      top_notes: ["Plum", "Saffron", "Bergamot"],
      heart_notes: ["Tuberose", "Jasmine", "Orange Blossom"],
      base_notes: ["Leather", "Vanilla", "Patchouli", "Tonka Bean"],
      description: "A darker, more mysterious interpretation of Good Girl. Velvet Fatale opens with juicy plum and saffron, leading to a rich floral heart. The base is deep and sensual with leather and vanilla.",
      year: "2022",
      gender: "Female",
      productNumbers: ["461"] // No. 461 - Inspired by Good Girl Velvet Fatale
    }
  ],
  
  // ===== MUGLER =====
  mugler: [
    {
      id: "mugler_angel",
      name: "Angel",
      brand: "Mugler",
      image: "https://magicperfume.co.uk/cdn/shop/files/angel_edp.png?v=1772100649",
      top_notes: ["Cotton Candy", "Bergamot", "Pineapple", "Coconut"],
      heart_notes: ["Honey", "Red Berries", "Peach", "Plum", "Apricot"],
      base_notes: ["Patchouli", "Vanilla", "Chocolate", "Caramel"],
      description: "A revolutionary gourmand fragrance that changed perfumery forever. Angel opens with a unique blend of cotton candy and bergamot, leading to a fruity heart of honey and red berries. The base is rich and intoxicating with patchouli, vanilla, and chocolate.",
      year: "1992",
      gender: "Female",
      productNumbers: ["113"] // No. 113 - Inspired by Angel
    },
    {
      id: "mugler_angel_nova",
      name: "Angel Nova",
      brand: "Mugler",
      image: "https://magicperfume.co.uk/cdn/shop/files/angel_nova.png?v=1772102893",
      top_notes: ["Raspberry", "Lychee", "Bergamot"],
      heart_notes: ["Rose", "Damascus Rose", "Jasmine"],
      base_notes: ["Akigalawood", "Benzoin", "Vanilla"],
      description: "A radiant and fruity interpretation of the iconic Angel. Angel Nova opens with juicy raspberry and lychee, leading to a heart of luxurious rose. The base is modern and woody with akigalawood and vanilla.",
      year: "2020",
      gender: "Female",
      productNumbers: ["166"] // No. 166 - Inspired by Angel Nova
    }
  ],
  
  // ===== EMILIO PUCCI =====
  emilioPucci: [
    {
      id: "pucci_extreme",
      name: "Extreme",
      brand: "Emilio Pucci",
      image: "https://magicperfume.co.uk/cdn/shop/files/extreme.png?v=1772101502",
      top_notes: ["Ginger", "Cardamom", "Bergamot"],
      heart_notes: ["Sage", "Lavender", "Geranium"],
      base_notes: ["Leather", "Vetiver", "Amber", "Musk"],
      description: "A powerful and intense fragrance for the modern man. Extreme opens with spicy ginger and cardamom, leading to an aromatic heart of sage and lavender. The base is deep and sensual with leather, vetiver, and amber.",
      year: "2015",
      gender: "Male",
      productNumbers: ["286"] // No. 286 - Inspired by Extreme
    }
  ],
  
  // ===== DIAMONDS =====
  diamonds: [
    {
      id: "diamonds_diamonds",
      name: "Diamonds",
      brand: "Diamonds",
      image: "https://magicperfume.co.uk/cdn/shop/files/diamonds.png?v=1772101940",
      top_notes: ["Mandarin", "Bergamot", "Orange"],
      heart_notes: ["Rose", "Jasmine", "Ylang-Ylang"],
      base_notes: ["Sandalwood", "Musk", "Amber"],
      description: "A sparkling and elegant fragrance that captures the brilliance of diamonds. Diamonds opens with bright citrus notes, leading to a floral heart of rose and jasmine. The base is warm and sensual with sandalwood and musk.",
      year: "2000",
      gender: "Female",
      productNumbers: ["040"] // No. 040 - Inspired by Diamonds
    }
  ],
  
  // ===== MA VIE =====
  maVie: [
    {
      id: "ma_vie",
      name: "Ma Vie",
      brand: "Ma Vie",
      image: "https://magicperfume.co.uk/cdn/shop/files/Ma_Vie.png?v=1772102804",
      top_notes: ["Citrus", "Fruity Notes", "Bergamot"],
      heart_notes: ["Rose", "Jasmine", "Lily of the Valley"],
      base_notes: ["Vanilla", "Musk", "Cedar"],
      description: "A fresh and elegant fragrance that celebrates the beauty of life. Ma Vie opens with bright citrus, leading to a floral heart of rose and jasmine. The base is warm and sensual with vanilla and musk.",
      year: "2010",
      gender: "Female",
      productNumbers: ["058"] // No. 058 - Inspired by Ma Vie
    }
  ],
  
  // ===== SALVATORE FERRAGAMO =====
  ferragamo: [
    {
      id: "ferragamo_deep_red",
      name: "Deep Red",
      brand: "Salvatore Ferragamo",
      image: "https://magicperfume.co.uk/cdn/shop/files/Deep_Red.png?v=1772102981",
      top_notes: ["Black Currant", "Mandarin", "Pink Pepper"],
      heart_notes: ["Rose", "Jasmine", "Orange Blossom"],
      base_notes: ["Patchouli", "Vanilla", "Cedar"],
      description: "A vibrant and passionate fragrance that captures the intensity of red. Deep Red opens with juicy black currant, leading to a floral heart of rose and jasmine. The base is warm and sensual with patchouli and vanilla.",
      year: "2006",
      gender: "Female",
      productNumbers: ["022"] // No. 022 - Inspired by Deep Red
    }
  ],

  // ===== ENHANCED SEARCH FUNCTION =====
  search: function(query) {
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
            ...(perfume.productNumbers || []) // Also search by product numbers
          ].join(' ').toLowerCase();
          
          // Check if query matches ANY part of the perfume
          if (searchableText.includes(queryLower)) {
            results.push(perfume);
          }
        });
      }
    }
    
    return results.sort((a, b) => a.name.localeCompare(b.name));
  },

  // ===== FIND BY ID =====
  findById: function(id) {
    for (let brandKey in this) {
      if (Array.isArray(this[brandKey])) {
        const found = this[brandKey].find(p => p.id === id);
        if (found) return found;
      }
    }
    return null;
  }
};

console.log('✓ PerfumeCatalog loaded with', 
  Object.keys(window.PerfumeCatalog).filter(key => Array.isArray(window.PerfumeCatalog[key])).length, 
  'brand categories');