// ===== COMPLETE PERFUME CATALOG WITH ENHANCED SEARCH =====
// Save this as: assets/perfume-catalog.js

window.PerfumeCatalog = {
  // ===== DIOR - COMPLETE COLLECTION =====
  dior: [
    {
      id: "dior_sauvage",
      name: "Sauvage",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/sauvage.jpg",
      top_notes: ["Calabrian Bergamot", "Pepper"],
      heart_notes: ["Lavender", "Sichuan Pepper", "Geranium"],
      base_notes: ["Ambroxan", "Cedar", "Labdanum"],
      description: "A bold act of creation inspired by wide-open spaces. An ozone blue sky sprawled above a rocky landscape, white-hot beneath the desert sun. Natural ingredients, selected with extreme care, prevail in excessive doses. Radiant top notes burst with the juicy freshness of Reggio Di Calabria Bergamot. This fragrance features Ambroxan, derived from precious Ambergris, that unleashes a powerfully woody trail. Raw and noble all at once, it's a composition that is both powerful and refined.",
      year: "2015",
      gender: "Male"
    },
    {
      id: "dior_homme_cologne",
      name: "Dior Homme Cologne",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/dior_homme_cologne.jpg",
      top_notes: ["Calabrian Bergamot"],
      heart_notes: ["Grapefruit Blossom"],
      base_notes: ["White Musks"],
      description: "Pure and demanding, Dior Homme Cologne reflects a quest for fine, quality ingredients. Its enveloping trail has all the casual charm of a timeless white shirt. A cologne that is both simple and elegant, with the freshness of bergamot, the softness of grapefruit blossom and the powdery character of white musk coming together to fill you with energy and positivity. Perfect for everyday life and for any occasion.",
      year: "2013",
      gender: "Male"
    },
    {
      id: "dior_homme_intense_2011",
      name: "Dior Homme Intense",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/dior_homme_intense_2011.jpg",
      top_notes: ["Lavender"],
      heart_notes: ["Tuscan Iris", "Ambrette Seed", "Pear"],
      base_notes: ["Virginia Cedar", "Vetiver"],
      description: "An intense and sensual fragrance that enhances masculinity. The iris is at the heart, creating an incredibly smooth and powdery character that evolves throughout the day. This iconic scent has become a reference in the world of perfumery, loved for its unique blend of floral and woody notes. The opening is a burst of fresh lavender that quickly gives way to the heart of iris, a note that Dior has mastered like no other. The ambrette and pear add a subtle fruity sweetness that balances the composition perfectly.",
      year: "2011",
      gender: "Male"
    },
    {
      id: "diorissimo",
      name: "Diorissimo",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/diorissimo.jpg",
      top_notes: ["Lily-of-the-Valley", "Bergamot", "Bitter Orange"],
      heart_notes: ["Lily-of-the-Valley", "Jasmine", "Ylang-Ylang"],
      base_notes: ["Cedar", "Ambergris", "Musk"],
      description: "A timeless ode to the lily of the valley, Diorissimo is the very essence of spring in a bottle. Created in 1956 by Edmond Roudnitska, this fragrance captures the fresh, green, and subtly sweet scent of lily of the valley as if freshly picked. The composition is built around a heart of lily of the valley, enhanced by jasmine and ylang-ylang for depth. The base of cedar and musk provides a gentle, lasting foundation. It's a classic, elegant, and eternally fresh floral fragrance.",
      year: "1956",
      gender: "Female"
    },
    {
      id: "dior_homme_version_2020",
      name: "Dior Homme",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/dior_homme_version_2020.jpg",
      top_notes: ["Lavender", "Sage", "Bergamot"],
      heart_notes: ["Iris", "Cacao", "Pear"],
      base_notes: ["Leather", "Cedar", "Vetiver"],
      description: "A refined, elegant fragrance with iris at its heart. The 2020 version of Dior Homme is a modern classic that balances freshness with sensuality. It opens with aromatic lavender and sage, leading to a heart of precious iris and subtle cacao that gives it a uniquely sophisticated character. The base of leather and cedar provides a woody, masculine foundation. It's a fragrance for the modern man who appreciates timeless elegance with a contemporary edge.",
      year: "2020",
      gender: "Male"
    },
    {
      id: "dior_homme_parfum_2025",
      name: "Dior Homme Parfum",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/dior_homme_parfum_2025.jpg",
      top_notes: ["Lavender", "Bergamot", "Sage"],
      heart_notes: ["Iris Pallida", "Musk", "Ambrette", "Pear"],
      base_notes: ["Virginia Cedar", "Vetiver", "Leather", "Amber Accord"],
      description: "The most concentrated and luxurious version of Dior Homme. Dior Homme Parfum is the story of a meeting: that of the suave and fleshy notes of iris with the powerful accords of amber woods. A trail where the flower expresses itself in a masculine way, with an iris note played in overdose for an addictive, sensual and elegant composition. Rich, powerful and incredibly sophisticated, this is the ultimate expression of the Dior Homme line, designed for those who seek the finest in perfumery.",
      year: "2025",
      gender: "Male"
    },
    {
      id: "dior_jadore",
      name: "J'adore",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/j_adore.jpg",
      top_notes: ["Pear", "Melon", "Peach", "Magnolia"],
      heart_notes: ["Jasmine", "Rose", "Lily-of-the-Valley", "Ylang-Ylang"],
      base_notes: ["Vanilla", "Musk", "Cedar"],
      description: "A floral bouquet of exceptional richness. J'adore is more than a perfume; it's an ode to women everywhere. The opening is a fresh, fruity burst of pear, melon, and peach that instantly lifts your spirits. Magnolia adds a creamy floral touch that bridges the top and heart notes seamlessly. The heart is a magnificent bouquet of jasmine, rose, and lily-of-the-valley that captures the essence of a blooming garden. These flowers were carefully selected from the finest growing regions around the world. The base of vanilla, musk, and cedar provides a warm, comforting foundation that makes the fragrance last all day.",
      year: "1999",
      gender: "Female"
    },
    {
      id: "dior_vanilla_diorama",
      name: "Vanilla Diorama",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/vanilla_diorama.jpg",
      top_notes: ["Mandarin", "Bergamot", "Rum"],
      heart_notes: ["Vanilla", "Cacao", "Cardamom", "Sandalwood"],
      base_notes: ["Benzoin", "Musk", "Cedar"],
      description: "A gourmand journey in a bottle. Vanilla Diorama captures the spirit of travel and exotic destinations. It opens with a sparkling burst of mandarin, bergamot, and a hint of rum that immediately transports you to a tropical paradise. The heart is a rich, creamy blend of vanilla and cacao, spiced with cardamom and supported by sandalwood. The base of benzoin and cedar adds a warm, resinous depth. It's a comforting, delicious, and utterly sophisticated fragrance that wraps you in a warm, vanilla-infused embrace.",
      year: "2019",
      gender: "Unisex"
    },
    {
      id: "dior_miss_dior_cherie",
      name: "Miss Dior Chérie",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/miss_dior_ch%C3%A9rie.jpg",
      top_notes: ["Strawberry", "Mandarin", "Pink Pepper"],
      heart_notes: ["Jasmine", "Rose", "Caramel", "Popcorn"],
      base_notes: ["Patchouli", "Musk", "Cedar"],
      description: "A playful and romantic fragrance that captures the spirit of a young woman in love. Miss Dior Chérie opens with a burst of juicy strawberry and mandarin, with a hint of pink pepper for sparkle. The heart is a delicious surprise: floral notes of jasmine and rose are intertwined with the unexpected sweetness of caramel and popcorn, creating a gourmand twist. The base of patchouli and musk provides a sophisticated foundation. It's a fragrance that is both fun and elegant, perfect for a romantic date or a joyful day out.",
      year: "2005",
      gender: "Female"
    },
    {
      id: "dior_miss_dior_2021",
      name: "Miss Dior",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/miss_dior_2021.jpg",
      top_notes: ["Italian Mandarin", "Calabrian Bergamot"],
      heart_notes: ["Damascus Rose", "Jasmine"],
      base_notes: ["Patchouli", "Musk"],
      description: "A romantic, floral fragrance that captures the spirit of love. The 2021 version of Miss Dior is fresh, elegant and utterly charming. It opens with bright Italian mandarin and bergamot, leading to a heart of luxurious damascus rose and jasmine from Grasse. The base of patchouli and musk adds depth and sensuality. It's a modern interpretation of the classic Miss Dior, designed for the woman of today who values tradition but lives in the present.",
      year: "2021",
      gender: "Female"
    },
    {
      id: "dior_miss_dior_2024",
      name: "Miss Dior",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/miss_dior_2024.jpg",
      top_notes: ["Sicilian Mandarin", "Bergamot"],
      heart_notes: ["Rose", "Jasmine", "Iris"],
      base_notes: ["Patchouli", "Vanilla", "Cedar"],
      description: "A reinvented classic for a new generation. The 2024 version of Miss Dior takes the iconic fragrance and gives it a fresh, contemporary twist. It opens with sparkling Sicilian mandarin and bergamot, leading to a heart that is more floral and powdery than ever before, with rose, jasmine, and iris taking center stage. The base of patchouli, vanilla, and cedar is warm and comforting, yet modern. It's a fragrance that honors the past while looking firmly towards the future.",
      year: "2024",
      gender: "Female"
    },
    {
      id: "dior_miss_dior_blooming_bouquet",
      name: "Miss Dior Blooming Bouquet",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/miss_dior_blooming_bouquet.jpg",
      top_notes: ["Peach", "Mandarin", "Bergamot"],
      heart_notes: ["Peony", "Rose", "Jasmine"],
      base_notes: ["White Musk", "Sandalwood"],
      description: "A fresh and delicate floral fragrance, like a bouquet of just-picked flowers. Miss Dior Blooming Bouquet is lighter and airier than the original Miss Dior, making it perfect for daytime wear. It opens with a burst of juicy peach and citrus, leading to a heart of peony, rose, and jasmine that is incredibly fresh and vibrant. The base of white musk and sandalwood is soft and clean. It's a fragrance that captures the joy and freshness of a spring garden in full bloom.",
      year: "2013",
      gender: "Female"
    },
    {
      id: "dior_addict",
      name: "Addict",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/addict.jpg",
      top_notes: ["Sicilian Mandarin", "Violet Leaf"],
      heart_notes: ["Jasmine Sambac", "Tunisian Neroli"],
      base_notes: ["Sandalwood", "Vanilla"],
      description: "Instantly appealing, Addict is a fragrance in harmony with its time, intuitively beautiful and freely seductive. The sophisticated freshness of a woody floral. It opens with Sicilian mandarin and violet leaf, creating a fresh, slightly green start. The heart is a rich, white floral blend of jasmine sambac and neroli that is both intoxicating and elegant. The base of sandalwood and vanilla is warm, creamy, and addictive. It's a fragrance for the woman who is confident, seductive, and lives life on her own terms.",
      year: "2002",
      gender: "Female"
    },
    {
      id: "dior_hypnotic_poison_edp",
      name: "Hypnotic Poison",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/hypnotic_poison_edp.jpg",
      top_notes: ["Apricot", "Plum", "Coconut", "Bitter Almond"],
      heart_notes: ["Rose", "Jasmine Sambac", "Lily-of-the-Valley"],
      base_notes: ["Vanilla", "Almond", "Musk"],
      description: "A mysterious and sensual fragrance that weaves a spell of seduction. Hypnotic Poison is the object of all desires. The trail highlights the power of the ambery fragrance, blending contrasting facets. It opens with a unique combination of bitter almond, apricot, plum, and coconut that is immediately recognizable. The heart is a floral bouquet of rose, jasmine, and lily-of-the-valley that softens the composition. The base of vanilla, almond, and musk is warm, intoxicating, and utterly addictive. It's a fragrance that leaves a lasting impression.",
      year: "1998",
      gender: "Female"
    },
    {
      id: "dior_jadore_l_or",
      name: "J'adore L'Or",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/j_adore_l_or.jpg",
      top_notes: ["Jasmine Sambac", "Rose", "Ylang-Ylang"],
      heart_notes: ["Orange Blossom", "Tuberose"],
      base_notes: ["Vanilla", "Musk"],
      description: "The most precious interpretation of J'adore. J'adore L'Or is a richer, more concentrated version of the iconic floral. It opens with a magnificent bouquet of the finest flowers: jasmine sambac, rose, and ylang-ylana, all at their most intense. The heart reveals orange blossom and tuberose, adding a creamy, sun-drenched quality. The base of vanilla and musk is warm and enveloping. It's a fragrance of pure luxury, designed for those who want the ultimate expression of J'adore.",
      year: "2011",
      gender: "Female"
    },
    {
      id: "dior_homme",
      name: "Dior Homme",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/homme.jpg",
      top_notes: ["Lavender", "Bergamot", "Sage"],
      heart_notes: ["Iris", "Cocoa", "Pear"],
      base_notes: ["Cedar", "Vetiver", "Leather"],
      description: "A refined, elegant fragrance with iris at its heart. Dior Homme is a modern classic that has redefined masculine perfumery. It opens with fresh lavender and bergamot, leading to a heart that is uniquely centered around iris, a note usually found in women's fragrances. Here, it's used in a way that is both sophisticated and masculine. The cocoa and pear add a subtle sweetness and depth. The base of cedar, vetiver, and leather is woody and sensual. It's a fragrance for the man who is confident in his own skin and appreciates the finer things in life.",
      year: "2005",
      gender: "Male"
    },
    {
      id: "dior_fahrenheit",
      name: "Fahrenheit",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/fahrenheit.jpg",
      top_notes: ["Hawthorn", "Cedar", "Mugwort", "Nutmeg", "Sicilian Mandarin"],
      heart_notes: ["Leather", "Violet", "Honeysuckle"],
      base_notes: ["Leather", "Vetiver", "Amber"],
      description: "A revolutionary fragrance combining floral, woody and leather notes. An icon representing freedom and individuality since 1988. Fahrenheit broke all the rules when it was launched, and it continues to defy conventions today. The opening is a unique blend of hawthorn, cedar, and nutmeg that is immediately recognizable to those who know it. The heart reveals a surprising combination of leather and violet, a pairing that shouldn't work but somehow creates magic. Honeysuckle adds a touch of sweetness that softens the leather's intensity. The base is a warm, comforting blend of leather, vetiver, and amber that stays with you throughout the day.",
      year: "1988",
      gender: "Male"
    },
    {
      id: "dior_sauvage_elixir",
      name: "Sauvage Elixir",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/sauvage_elixir.jpg",
      top_notes: ["Grapefruit", "Nutmeg", "Cinnamon"],
      heart_notes: ["Lavender", "Star Anise", "Coriander"],
      base_notes: ["Liquorice", "Patchouli", "Sandalwood"],
      description: "A bold and intense reinterpretation of Sauvage. Spicy and woody notes create an unexpected, powerful and elegant elixir. This is not just a perfume; it's a statement. The opening is an explosion of spicy grapefruit, nutmeg, and cinnamon that immediately grabs your attention. As it settles, a heart of lavender and star anise emerges, adding an aromatic complexity that is both familiar and surprising. The base of liquorice, patchouli, and sandalwood provides a deep, dark foundation that lasts for hours on the skin. Sauvage Elixir is for the man who dares to be different.",
      year: "2021",
      gender: "Male"
    },
    {
      id: "dior_eau_sauvage",
      name: "Eau Sauvage",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/eau_sauvage.jpg",
      top_notes: ["Bergamot", "Lemon", "Petitgrain"],
      heart_notes: ["Lavender", "Rosemary", "Coriander", "Jasmine"],
      base_notes: ["Oakmoss", "Vetiver", "Musk", "Ambergris"],
      description: "A timeless masterpiece of perfumery, Eau Sauvage by Dior is the quintessential fresh aromatic fragrance for men. Launched in 1966, it revolutionized the fragrance world with its use of Hedione. It opens with a sparkling, citrus burst of Sicilian bergamot and lemon, instantly fresh and invigorating. The heart reveals a sophisticated aromatic blend of lavender, rosemary, and coriander, underpinned by a touch of jasmine. The base is a clean, lasting trail of oakmoss, vetiver, and musk. Eau Sauvage is not just a fragrance; it's a statement of timeless elegance and modern masculinity.",
      year: "1966",
      gender: "Male"
    }
  ],
  
  // ===== CREED =====
  creed: [
    {
      id: "creed_aventus",
      name: "Aventus",
      brand: "Creed",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/aventus.jpg",
      top_notes: ["Pineapple", "Bergamot", "Black Currant", "Apple"],
      heart_notes: ["Birch", "Jasmine", "Rose", "Patchouli"],
      base_notes: ["Musk", "Oakmoss", "Amber", "Vanilla"],
      description: "A legendary fragrance inspired by the life of an emperor. Fruity, smoky and powerful – a true icon that defines modern perfumery.",
      year: "2010",
      gender: "Male"
    }
  ],
  
  // ===== CHANEL =====
  chanel: [
      {
    id: "chanel_bleu",
    name: "Bleu de Chanel",
    brand: "Chanel",
    image: "https://d3mcqtyhv5hy6w.cloudfront.net/perfumes/67b90220a68ec07c46f57e69_clipped.webp",
    top_notes: ["Grapefruit", "Lemon", "Mint", "Pink Pepper"],
    heart_notes: ["Ginger", "Nutmeg", "Jasmine"],
    base_notes: ["Incense", "Vetiver", "Cedar", "Sandalwood"],
    description: "A timeless and sophisticated fragrance for men that embodies the spirit of freedom. Bleu de Chanel opens with a fresh and vibrant burst of citrus and mint, leading to a spicy heart of ginger and nutmeg. The base is deep and sensual with incense and woody notes, creating a scent that is both classic and contemporary. It's a fragrance for the man who is confident, elegant, and unafraid to chart his own course.",
    year: "2010",
    gender: "Male"
  },
  
  {
    id: "chanel_no5_edp",
    name: "Chanel No 5 Eau de Parfum",
    brand: "Chanel",
    image: "https://d3mcqtyhv5hy6w.cloudfront.net/perfumes/67b902c7a68ec07c46f5824e_clipped.webp",
    top_notes: ["Aldehydes", "Ylang-Ylang", "Neroli", "Bergamot"],
    heart_notes: ["Iris", "Jasmine", "Rose", "Lily of the Valley"],
    base_notes: ["Vanilla", "Amber", "Sandalwood", "Vetiver", "Musk"],
    description: "The most legendary fragrance in the world, Chanel No 5 is an abstract floral aldehyde that revolutionized perfumery. Created in 1921 by Ernest Beaux, it opens with a burst of sparkling aldehydes that give way to a rich bouquet of jasmine and rose. The base is warm and sensual with vanilla and amber, creating a scent that is both timeless and modern. It's a fragrance for the woman who is confident, elegant, and unforgettable.",
    year: "1921",
    gender: "Female"
  },
    {
      id: "chanel_no19_edp",
      name: "Chanel No 19 Eau de Parfum",
      brand: "Chanel",
      image: "https://fimgs.net/mdimg/perfume-thumbs/dark-375x500.11488.2x.avif",
      top_notes: ["Galbanum", "Hyacinth", "Neroli", "Bergamot"],
      heart_notes: ["Iris", "Rose", "Jasmine", "Ylang-Ylang"],
      base_notes: ["Sandalwood", "Cedar", "Vetiver", "Leather"],
      description: "A timeless green floral fragrance with a sophisticated character. Chanel No 19 opens with crisp galbanum and hyacinth, leading to a floral heart of iris and rose. The base is woody and elegant with sandalwood and vetiver. It's a fragrance for the confident, independent woman.",
      year: "1971",
      gender: "Female"
    }
  ],
  
  // ===== TOM FORD =====
  tomFord: [
    {
      id: "tomford_noir",
      name: "Noir",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/noir.jpg",
      top_notes: ["Caraway", "Black Pepper", "Bergamot"],
      heart_notes: ["Orange Flower", "Iris", "Peony"],
      base_notes: ["Vanilla", "Tonka Bean", "Cedar", "Amber"],
      description: "A sophisticated and sensual fragrance that captures the essence of a man of mystery. Noir opens with spicy caraway and black pepper, leading to a floral heart of orange flower and iris. The base is warm and seductive with vanilla, tonka bean, and amber. It's a fragrance for the man who is confident, elegant, and always in control.",
      year: "2012",
      gender: "Male"
    },
    {
      id: "tomford_metallique",
      name: "Métallique",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/m%C3%A9tallique.jpg",
      top_notes: ["Aldehydes", "Pink Pepper", "Bergamot"],
      heart_notes: ["Jasmine", "Orange Flower", "Magnolia"],
      base_notes: ["Vanilla", "Benzoin", "Musk", "Sandalwood"],
      description: "A luminous and modern fragrance that captures the shimmering essence of metal. Métallique opens with sparkling aldehydes and pink pepper, leading to a radiant floral heart of jasmine and orange flower. The base is warm and sensual with vanilla, benzoin, and sandalwood. It's a fragrance for the woman who is bold, modern, and unapologetically feminine.",
      year: "2019",
      gender: "Female"
    },
    {
      id: "tomford_tobacco_oud",
      name: "Tobacco Oud",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/tobacco_oud.jpg",
      top_notes: ["Tobacco Leaf", "Rum", "Spices"],
      heart_notes: ["Oud", "Cypriol", "Sandalwood"],
      base_notes: ["Benzoin", "Vanilla", "Amber", "Musk"],
      description: "A powerful and opulent fragrance that combines the richness of tobacco with the depth of oud. Tobacco Oud opens with smoky tobacco leaf and rum, leading to a heart of precious oud and cypriol. The base is warm and resinous with benzoin, vanilla, and amber. It's a fragrance for those who appreciate the finest and most luxurious ingredients.",
      year: "2013",
      gender: "Unisex"
    },
    {
      id: "tomford_oud_wood",
      name: "Oud Wood",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/oud_wood.jpg",
      top_notes: ["Rosewood", "Cardamom", "Chinese Pepper"],
      heart_notes: ["Sandalwood", "Vetiver", "Oud"],
      base_notes: ["Tonka", "Amber", "Vanilla"],
      description: "A mysterious and exotic blend of rare oud wood with smoky notes. Oud Wood opens with rosewood and cardamom, leading to a heart of sandalwood, vetiver, and oud. The base is warm and sensual with tonka, amber, and vanilla. It's a fragrance for the man who is confident, sophisticated, and not afraid to stand out.",
      year: "2007",
      gender: "Male"
    },
    {
      id: "tomford_black_orchid",
      name: "Black Orchid",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/black_orchid.jpg",
      top_notes: ["Truffle", "Black Currant", "Ylang-Ylang"],
      heart_notes: ["Orchid", "Lotus", "Fruity Notes"],
      base_notes: ["Patchouli", "Incense", "Myrrh", "Vanilla"],
      description: "A luxurious, dark and sensual fragrance that redefined modern perfumery. Black Orchid opens with truffle and black currant, leading to a heart of exotic orchid and lotus. The base is rich and intoxicating with patchouli, incense, and vanilla. It's a fragrance for those who dare to be different and embrace their dark side.",
      year: "2006",
      gender: "Unisex"
    },
    {
      id: "tomford_orchid_soleil",
      name: "Orchid Soleil",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/orchid_soleil.jpg",
      top_notes: ["Bitter Orange", "Mandarin", "Pink Pepper"],
      heart_notes: ["Orchid", "Ylang-Ylang", "Tiare Flower"],
      base_notes: ["Vanilla", "Amber", "Sandalwood", "Musk"],
      description: "A radiant and sunny fragrance that captures the warmth of the Mediterranean sun. Orchid Soleil opens with bitter orange and mandarin, leading to a heart of exotic orchid and tiare flower. The base is warm and comforting with vanilla, amber, and sandalwood. It's a fragrance for the woman who loves life and radiates joy.",
      year: "2016",
      gender: "Female"
    },
    {
      id: "tomford_oud_mine_rale",
      name: "Oud Minérale",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/oud_min%C3%A9rale.jpg",
      top_notes: ["Sea Salt", "Seaweed", "Lemon"],
      heart_notes: ["Oud", "Cypriol", "Saffron"],
      base_notes: ["Amber", "Musk", "Sandalwood"],
      description: "A unique aquatic-woody fragrance that combines the depth of oud with the freshness of the sea. Oud Minérale opens with sea salt and seaweed, leading to a heart of oud and cypriol. The base is warm and mineral with amber and musk. It's a fragrance for those who are drawn to the power and mystery of the ocean.",
      year: "2017",
      gender: "Unisex"
    },
    {
      id: "tomford_neroli_portofino",
      name: "Neroli Portofino",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/neroli_portofino.jpg",
      top_notes: ["Bergamot", "Mandarin", "Lemon"],
      heart_notes: ["Neroli", "Orange Blossom", "Jasmine"],
      base_notes: ["Amber", "Musk", "Sandalwood"],
      description: "A fresh and vibrant fragrance inspired by the Italian Riviera. Neroli Portofino opens with sparkling bergamot and lemon, leading to a heart of luxurious neroli and orange blossom. The base is warm and sensual with amber and musk. It's a fragrance that captures the essence of a Mediterranean summer.",
      year: "2011",
      gender: "Unisex"
    },
    {
      id: "tomford_velvet_orchid",
      name: "Velvet Orchid",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/velvet_orchid.jpg",
      top_notes: ["Bergamot", "Mandarin", "Honey"],
      heart_notes: ["Orchid", "Jasmine", "Rose"],
      base_notes: ["Vanilla", "Myrrh", "Sandalwood", "Musk"],
      description: "A rich and opulent floral fragrance that is both glamorous and sensual. Velvet Orchid opens with bergamot and honey, leading to a heart of exotic orchid and jasmine. The base is warm and luxurious with vanilla, myrrh, and sandalwood. It's a fragrance for the woman who is confident, sophisticated, and utterly captivating.",
      year: "2014",
      gender: "Female"
    },
    {
      id: "tomford_extreme_for_men",
      name: "Extreme For Men",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/extreme_for_men.jpg",
      top_notes: ["Ginger", "Cardamom", "Bergamot"],
      heart_notes: ["Sage", "Lavender", "Geranium"],
      base_notes: ["Leather", "Vetiver", "Amber", "Musk"],
      description: "A powerful and intense fragrance for the modern man. Extreme For Men opens with spicy ginger and cardamom, leading to an aromatic heart of sage and lavender. The base is deep and sensual with leather, vetiver, and amber. It's a fragrance for the man who lives life to the extreme.",
      year: "2015",
      gender: "Male"
    },
    {
      id: "tomford_mandarino_di_amalfi",
      name: "Mandarino di Amalfi",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/mandarino_di_amalfi.jpg",
      top_notes: ["Mandarin", "Bergamot", "Lemon"],
      heart_notes: ["Orange Blossom", "Jasmine", "Pitahaya"],
      base_notes: ["Amber", "Musk", "Sandalwood"],
      description: "A fresh and juicy fragrance inspired by the Amalfi Coast. Mandarino di Amalfi opens with sparkling mandarin and lemon, leading to a heart of orange blossom and jasmine. The base is warm and sensual with amber and sandalwood. It's a fragrance that captures the joy and vibrancy of an Italian summer.",
      year: "2014",
      gender: "Unisex"
    },
    {
      id: "tomford_oud_wood_intense",
      name: "Oud Wood Intense",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/oud_wood_intense.jpg",
      top_notes: ["Cardamom", "Rose", "Saffron"],
      heart_notes: ["Oud", "Sandalwood", "Cedar"],
      base_notes: ["Amber", "Vanilla", "Musk", "Tonka"],
      description: "A deeper, more intense interpretation of the iconic Oud Wood. Oud Wood Intense opens with cardamom and saffron, leading to a heart of precious oud and sandalwood. The base is rich and sensual with amber, vanilla, and tonka. It's a fragrance for those who want to experience oud in its most powerful form.",
      year: "2017",
      gender: "Male"
    },
    {
      id: "tomford_tobacco_vanille",
      name: "Tobacco Vanille",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/tobacco_vanille.jpg",
      top_notes: ["Tobacco Leaf", "Spicy Notes"],
      heart_notes: ["Vanilla", "Cocoa", "Tonka", "Tobacco Blossom"],
      base_notes: ["Dried Fruits", "Woody Notes"],
      description: "A warm and spicy fragrance with tobacco and vanilla notes. Rich, opulent and sophisticated, this is a signature scent for those who appreciate the finer things in life. Tobacco Vanille opens with a rich, opulent blend of tobacco leaf and spicy notes. The heart is a decadent combination of vanilla, cocoa, and tonka. The base of dried fruits and woody notes adds depth and complexity.",
      year: "2007",
      gender: "Unisex"
    },
    {
      id: "tomford_soleil_blanc",
      name: "Soleil Blanc",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/soleil_blanc.jpg",
      top_notes: ["Pistachio", "Bergamot", "Pink Pepper"],
      heart_notes: ["Tiare Flower", "Ylang-Ylang", "Jasmine"],
      base_notes: ["Coconut", "Vanilla", "Amber", "Tonka"],
      description: "A warm and creamy fragrance that captures the essence of a luxurious tropical escape. Soleil Blanc opens with pistachio and bergamot, leading to a heart of exotic tiare flower and ylang-ylang. The base is rich and comforting with coconut, vanilla, and amber. It's a fragrance that transports you to a sun-drenched paradise.",
      year: "2016",
      gender: "Unisex"
    },
    {
      id: "tomford_fucking_fabulous",
      name: "Fucking Fabulous",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/fucking_fabulous.jpg",
      top_notes: ["Sage", "Lavender"],
      heart_notes: ["Leather", "Almond", "Vanilla"],
      base_notes: ["Tonka", "Amber", "Woody Notes"],
      description: "A bold, provocative fragrance with leather and almond notes. Daring, unique and incredibly fabulous, this fragrance is not for the faint of heart. It opens with sage and lavender, leading to a heart of rich leather and sweet almond. The base is warm and sensual with tonka, amber, and woody notes. It's a statement fragrance for those who dare to be different.",
      year: "2017",
      gender: "Unisex"
    },
    {
      id: "tomford_white_suede",
      name: "White Suede",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/white_suede.jpg",
      top_notes: ["Saffron", "Thyme", "Lychee"],
      heart_notes: ["Suede", "Jasmine", "Rose"],
      base_notes: ["Musk", "Amber", "Sandalwood"],
      description: "A soft and sensual fragrance that evokes the luxurious feel of white suede. White Suede opens with saffron and lychee, leading to a heart of soft suede and delicate florals. The base is warm and intimate with musk, amber, and sandalwood. It's a fragrance that wraps you in a comforting, sensual embrace.",
      year: "2009",
      gender: "Unisex"
    },
    {
      id: "tomford_tubereuse_nue",
      name: "Tubéreuse Nue",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/tub%C3%A9reuse_nue.jpg",
      top_notes: ["Mandarin", "Bergamot", "Pink Pepper"],
      heart_notes: ["Tuberose", "Jasmine", "Ylang-Ylang"],
      base_notes: ["Vanilla", "Musk", "Sandalwood", "Amber"],
      description: "A bold and sensual interpretation of tuberose, stripped bare to its most essential form. Tubéreuse Nue opens with citrus and pink pepper, leading to a heart of pure, intoxicating tuberose. The base is warm and sensual with vanilla, musk, and sandalwood. It's a fragrance for those who appreciate the raw beauty of nature's most seductive flower.",
      year: "2017",
      gender: "Female"
    },
    {
      id: "tomford_cafe_rose",
      name: "Café Rose",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/roses_coffee.jpg",
      top_notes: ["Coffee", "Saffron", "Pink Pepper"],
      heart_notes: ["Rose", "Jasmine", "Ylang-Ylang"],
      base_notes: ["Patchouli", "Amber", "Musk", "Cedar"],
      description: "A dark and intoxicating blend of rich coffee and deep, velvety roses. Café Rose opens with the aroma of freshly brewed coffee and saffron, leading to a heart of the most exquisite roses. The base is warm and sensual with patchouli, amber, and musk. It's a fragrance for those who are drawn to the darker, more mysterious side of life.",
      year: "2013",
      gender: "Unisex"
    },
    {
      id: "tomford_cherry_smoke",
      name: "Cherry Smoke",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/cherry_smoke.jpg",
      top_notes: ["Cherry", "Saffron", "Pink Pepper"],
      heart_notes: ["Rose", "Jasmine", "Smoke"],
      base_notes: ["Vanilla", "Amber", "Musk", "Sandalwood"],
      description: "A seductive and mysterious blend of sweet cherry and smoky notes. Cherry Smoke opens with juicy cherry and saffron, leading to a heart of rose and jasmine infused with a wisp of smoke. The base is warm and sensual with vanilla, amber, and sandalwood. It's a fragrance that is both sweet and dark, playful and serious.",
      year: "2020",
      gender: "Unisex"
    },
    {
      id: "tomford_noir_extreme",
      name: "Noir Extrême",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/noir_extr%C3%AAme.jpg",
      top_notes: ["Cardamom", "Rose", "Neroli"],
      heart_notes: ["Kulfi", "Cinnamon", "Orange Blossom"],
      base_notes: ["Sandalwood", "Musk", "Vanilla", "Amber"],
      description: "A gourmand oriental fragrance that is both spicy and sweet. Noir Extrême opens with cardamom and rose, leading to a heart of kulfi, an Indian dessert, with cinnamon and orange blossom. The base is warm and creamy with sandalwood, musk, vanilla, and amber. It's a fragrance for the man who is confident, sensual, and not afraid to show his softer side.",
      year: "2015",
      gender: "Male"
    },
    {
      id: "tomford_grey_vetiver_edt",
      name: "Grey Vetiver EDT",
      brand: "Tom Ford",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/grey_vetiver_edt.jpg",
      top_notes: ["Grapefruit", "Orange Blossom", "Sage"],
      heart_notes: ["Vetiver", "Pimento", "Pepper"],
      base_notes: ["Amber", "Musk", "Oakmoss"],
      description: "A modern and elegant interpretation of vetiver. Grey Vetiver opens with fresh grapefruit and orange blossom, leading to a heart of the finest vetiver with pimento and pepper. The base is clean and sophisticated with amber, musk, and oakmoss. It's a fragrance for the man who appreciates classic elegance with a contemporary edge.",
      year: "2009",
      gender: "Male"
    }
  ],
  
  // ===== PERFUMES STARTING WITH A =====
  a: [
    {
      id: "amouage_gold_woman",
      name: "Gold Woman",
      brand: "Amouage",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/amouage_gold.jpg",
      top_notes: ["Rose", "Jasmine", "Lily of the Valley"],
      heart_notes: ["Incense", "Myrrh", "Opoponax"],
      base_notes: ["Amber", "Musk", "Civet", "Sandalwood"],
      description: "A legendary oriental floral fragrance that epitomizes luxury. Gold Woman opens with a rich bouquet of rose and jasmine, leading to a heart of precious resins and incense. The base is warm and sensual with amber and musk. It's a fragrance of timeless elegance and sophistication.",
      year: "1983",
      gender: "Female"
    },
    {
      id: "acqua_di_parma_colonia",
      name: "Acqua di Parma Colonia",
      brand: "Acqua di Parma",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/acqua_di_parma.jpg",
      top_notes: ["Sicilian Citron", "Lemon", "Sweet Orange", "Bergamot"],
      heart_notes: ["Lavender", "Rose", "Verbena", "Rosemary"],
      base_notes: ["Vetiver", "Sandalwood", "Cedar"],
      description: "A timeless Italian classic since 1916. This iconic fragrance opens with sparkling citrus notes, leading to an aromatic heart of lavender and rose. The base is warm and woody with vetiver and sandalwood. It's the essence of Italian elegance and sophistication.",
      year: "1916",
      gender: "Unisex"
    },
    {
      id: "adolfo_dominguez_agua_fresca_rosas",
      name: "Agua Fresca de Rosas",
      brand: "Adolfo Dominguez",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/agua_fresca_de_rosas.jpg",
      top_notes: ["Lemon", "Bergamot", "Orange"],
      heart_notes: ["Rose", "Jasmine", "Freesia"],
      base_notes: ["Musk", "Cedar", "Amber"],
      description: "A fresh and feminine fragrance that captures the essence of a garden in bloom. The sparkling citrus top notes give way to a heart of delicate rose and jasmine, while the musky base adds a soft, sensual touch. Perfect for everyday wear.",
      year: "1990",
      gender: "Female"
    },
    {
      id: "angel_schlesser_femme",
      name: "Femme",
      brand: "Angel Schlesser",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/angel_schlesser_femme.jpg",
      top_notes: ["Mandarin", "Bergamot", "Red Fruits"],
      heart_notes: ["Jasmine", "Rose", "Violet"],
      base_notes: ["Sandalwood", "Musk", "Vanilla"],
      description: "A sophisticated and elegant feminine fragrance. It opens with a burst of citrus and red fruits, leading to a floral heart of jasmine and rose. The woody and vanilla base provides warmth and sensuality.",
      year: "2000",
      gender: "Female"
    },
    {
      id: "adolfo_dominguez_agua_fresca",
      name: "Agua Fresca",
      brand: "Adolfo Dominguez",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/agua_fresca.jpg",
      top_notes: ["Bergamot", "Lemon", "Mandarin"],
      heart_notes: ["Rose", "Jasmine", "Lily of the Valley"],
      base_notes: ["Musk", "Cedar", "Oakmoss"],
      description: "A fresh and clean fragrance that evokes the feeling of fresh laundry and spring mornings. The citrus opening is bright and invigorating, while the floral heart adds a touch of femininity. The musky base is soft and comforting.",
      year: "1985",
      gender: "Unisex"
    },
    {
      id: "adolfo_dominguez_rosas_blancas",
      name: "Agua Fresca de Rosas Blancas",
      brand: "Adolfo Dominguez",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/agua_fresca_de_rosas_blancas.jpg",
      top_notes: ["Lemon", "Bergamot", "Orange"],
      heart_notes: ["White Rose", "Jasmine", "Freesia"],
      base_notes: ["Musk", "White Musk", "Cedar"],
      description: "A delicate and fresh interpretation of the classic rose. The white rose at the heart is soft and ethereal, supported by citrus top notes and a clean white musk base. It's a fragrance of pure simplicity and elegance.",
      year: "1995",
      gender: "Female"
    },
    {
      id: "azzaro_wanted",
      name: "Wanted",
      brand: "Azzaro",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/azzaro_wanted.jpg",
      top_notes: ["Ginger", "Lemon", "Cardamom"],
      heart_notes: ["Juniper Berries", "Cedar"],
      base_notes: ["Tonka Bean", "Vetiver", "Amber"],
      description: "A bold and seductive fragrance for the man who knows what he wants. The spicy ginger opening leads to a woody heart, while the base of tonka and vetiver adds warmth and sensuality. It's a fragrance that commands attention.",
      year: "2016",
      gender: "Male"
    },
    {
      id: "azzaro_chrome",
      name: "Chrome",
      brand: "Azzaro",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/azzaro_chrome.jpg",
      top_notes: ["Bergamot", "Neroli", "Pineapple"],
      heart_notes: ["Jasmine", "Water Notes", "Cardamom"],
      base_notes: ["Sandalwood", "Musk", "Amber"],
      description: "A fresh and aquatic fragrance that captures the clean, metallic sensation of chrome. The citrus and aquatic notes create a refreshing opening, while the woody base provides depth. It's a modern classic for the contemporary man.",
      year: "1996",
      gender: "Male"
    },
    {
      id: "azzaro_azzaro",
      name: "Azzaro",
      brand: "Azzaro",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/azzaro.jpg",
      top_notes: ["Lavender", "Bergamot", "Geranium"],
      heart_notes: ["Sandalwood", "Juniper", "Patchouli"],
      base_notes: ["Leather", "Musk", "Tonka Bean"],
      description: "The original classic from Azzaro, a sophisticated fougère fragrance that has stood the test of time. The lavender opening is fresh and aromatic, while the woody and leather base is warm and sensual. A timeless scent for the elegant man.",
      year: "1978",
      gender: "Male"
    },
    {
      id: "bvlgari_aqua_pour_homme",
      name: "Aqua Pour Homme",
      brand: "Bvlgari",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/aqua_pour_homme.jpg",
      top_notes: ["Mandarin", "Neroli", "Petitgrain"],
      heart_notes: ["Water Notes", "Sage", "Lavender"],
      base_notes: ["Musk", "Amber", "Cedar"],
      description: "A fresh and aquatic fragrance inspired by the Mediterranean Sea. The citrus opening is bright and invigorating, while the heart of water notes and sage creates a refreshing aquatic feel. The musky base adds depth and sensuality.",
      year: "2005",
      gender: "Male"
    },
    {
      id: "cacharel_amor_pour_homme",
      name: "Amor Pour Homme Cacharel",
      brand: "Cacharel",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/amor_pour_home.jpg",
      top_notes: ["Grapefruit", "Mandarin", "Mint"],
      heart_notes: ["Cedar", "Geranium", "Lavender"],
      base_notes: ["Tonka Bean", "Musk", "Amber"],
      description: "A fresh and sensual fragrance for the man in love. The citrus and mint opening is invigorating, while the woody heart adds depth. The base of tonka and musk is warm and comforting, like a loving embrace.",
      year: "2003",
      gender: "Male"
    },
    {
      id: "kilian_apple_brandy",
      name: "Apple Brandy on the Rocks",
      brand: "By Kilian",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/apple_brandy_on_the_rocks.jpg",
      top_notes: ["Apple", "Rum", "Calvados"],
      heart_notes: ["Juniper Berries", "Cardamom", "Oak"],
      base_notes: ["Sandalwood", "Benzoin", "Musk"],
      description: "A boozy and sophisticated fragrance that captures the spirit of a fine apple brandy. The opening is a crisp blend of apple and rum, leading to a spicy heart of juniper and cardamom. The woody base adds warmth and depth, like sipping brandy by a fireplace.",
      year: "2017",
      gender: "Unisex"
    },
    {
      id: "cacharel_amor_amor_tentation",
      name: "Amor Amor Tentation",
      brand: "Cacharel",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/amor_amor_tentation.jpg",
      top_notes: ["Mandarin", "Black Currant", "Pink Pepper"],
      heart_notes: ["Rose", "Jasmine", "Orange Blossom"],
      base_notes: ["Vanilla", "Musk", "Patchouli"],
      description: "A seductive and playful twist on the classic Amor Amor. The fruity opening is irresistible, while the floral heart is romantic and feminine. The vanilla base adds a sweet and sensual touch that lingers on the skin.",
      year: "2005",
      gender: "Female"
    },
    {
      id: "kilian_angels_share",
      name: "Angels' Share",
      brand: "By Kilian",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/angels_share.jpg",
      top_notes: ["Cognac", "Oak"],
      heart_notes: ["Cinnamon", "Tonka", "Oak"],
      base_notes: ["Sandalwood", "Praline", "Vanilla"],
      description: "A gourmand masterpiece inspired by the angels' share of cognac left to evaporate. The opening is a warm, boozy blend of cognac and oak, leading to a spicy heart of cinnamon. The base is rich and sweet with praline and vanilla, creating an intoxicating and irresistible scent.",
      year: "2020",
      gender: "Unisex"
    },
    {
      id: "cacharel_amor_amor",
      name: "Amor Amor",
      brand: "Cacharel",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/amor_amor.jpg",
      top_notes: ["Grapefruit", "Mandarin", "Black Currant"],
      heart_notes: ["Rose", "Jasmine", "Lily of the Valley"],
      base_notes: ["Vanilla", "Musk", "Patchouli"],
      description: "A vibrant and romantic fragrance that captures the feeling of falling in love. The fruity opening is fresh and energetic, while the floral heart is passionate and feminine. The vanilla and musk base is warm and comforting, like a lover's embrace.",
      year: "1999",
      gender: "Female"
    },
    {
      id: "cacharel_anais_anais",
      name: "Anaïs Anaïs",
      brand: "Cacharel",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/ana%C3%AFs_ana%C3%AFs.jpg",
      top_notes: ["Orange Blossom", "Hyacinth", "Bergamot"],
      heart_notes: ["Rose", "Jasmine", "Lily of the Valley"],
      base_notes: ["Sandalwood", "Musk", "Cedar"],
      description: "A legendary floral fragrance that has captured hearts since 1978. The opening is a fresh burst of orange blossom and hyacinth, leading to a heart of white flowers. The woody base is soft and feminine. It's a fragrance of innocence and romance.",
      year: "1978",
      gender: "Female"
    },
    {
      id: "cacharel_amor_amor_forbidden_kiss",
      name: "Amor Amor Forbidden Kiss",
      brand: "Cacharel",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/amor_amor_forbidden_kiss.jpg",
      top_notes: ["Raspberry", "Mandarin", "Pink Pepper"],
      heart_notes: ["Rose", "Jasmine", "Orange Blossom"],
      base_notes: ["Vanilla", "Musk", "Patchouli"],
      description: "A daring and seductive interpretation of the classic Amor Amor. The raspberry opening is juicy and tempting, while the floral heart is passionate. The vanilla base is warm and sensual, like a forbidden kiss that leaves you wanting more.",
      year: "2010",
      gender: "Female"
    },
    {
      id: "clinique_aromatics_elixir",
      name: "Aromatics Elixir",
      brand: "Clinique",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/aromatics_elixir.jpg",
      top_notes: ["Aldehydes", "Chamomile", "Rose"],
      heart_notes: ["Iris", "Jasmine", "Ylang-Ylang"],
      base_notes: ["Patchouli", "Oakmoss", "Musk"],
      description: "An iconic chypre floral fragrance that is both complex and captivating. The aromatic opening leads to a rich floral heart, while the patchouli and oakmoss base is deep and earthy. It's a fragrance for the confident and sophisticated woman.",
      year: "1971",
      gender: "Female"
    },
    {
      id: "creed_aventus_intense",
      name: "Aventus Intense",
      brand: "Creed",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/aventus.jpg",
      top_notes: ["Pineapple", "Black Currant", "Apple"],
      heart_notes: ["Birch", "Jasmine", "Rose"],
      base_notes: ["Musk", "Oakmoss", "Amber", "Vanilla"],
      description: "A richer, more intense version of the legendary Aventus. The same iconic fruity and smoky notes are amplified for greater impact. It opens with pineapple and black currant, leading to a heart of birch and jasmine. The base is deep and powerful with musk and amber.",
      year: "2020",
      gender: "Male"
    },
    {
      id: "creed_aventus_for_her",
      name: "Aventus For Her",
      brand: "Creed",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/aventus_for_her.jpg",
      top_notes: ["Green Apple", "Bergamot", "Currant", "Pink Pepper"],
      heart_notes: ["Rose", "Jasmine", "Lily of the Valley", "Magnolia"],
      base_notes: ["Musk", "Sandalwood", "Amber", "Vanilla"],
      description: "A feminine interpretation of the iconic Aventus. The fruity opening is fresh and vibrant, while the floral heart is elegant and sophisticated. The base is warm and sensual with musk and vanilla. It's a fragrance for the modern, confident woman.",
      year: "2016",
      gender: "Female"
    },
    {
      id: "creed_absolu_aventus",
      name: "Absolu Aventus",
      brand: "Creed",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/absolu_aventus.jpg",
      top_notes: ["Pineapple", "Apple", "Lemon", "Pink Pepper"],
      heart_notes: ["Rose", "Jasmine", "Birch"],
      base_notes: ["Vanilla", "Musk", "Amber", "Oakmoss"],
      description: "The most concentrated and luxurious version of Aventus. Absolu Aventus takes the iconic DNA to new heights with enhanced fruity and woody notes. The pineapple and apple top notes are more intense, while the vanilla and amber base is richer and longer-lasting.",
      year: "2021",
      gender: "Male"
    },
    {
      id: "dior_ambre_nuit",
      name: "Ambre Nuit",
      brand: "Dior",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/ambre_nuit.jpg",
      top_notes: ["Bergamot", "Grapefruit"],
      heart_notes: ["Turkish Rose", "Sicilian Mandarin"],
      base_notes: ["Amber", "Cedar", "Benzoin"],
      description: "A romantic and sensual fragrance from Dior's exclusive collection. The name means 'amber night', and it perfectly captures the warm, amber glow of a night under the stars. The rose heart adds a touch of romance, while the amber base is warm and enveloping.",
      year: "2010",
      gender: "Unisex"
    },
    {
      id: "armani_acqua_di_gio_man",
      name: "Acqua Di Gio for Man",
      brand: "Giorgio Armani",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/acqua_di_gio_man.jpg",
      top_notes: ["Bergamot", "Neroli", "Green Tangerine"],
      heart_notes: ["Jasmine", "Rosemary", "Sage"],
      base_notes: ["Cedar", "Patchouli", "Musk"],
      description: "A timeless aquatic classic that captures the essence of the Mediterranean Sea. The citrus opening is fresh and invigorating, while the aromatic heart adds depth. The woody base is clean and masculine. It's a fragrance that never goes out of style.",
      year: "1996",
      gender: "Male"
    },
    {
      id: "armani_aqua_di_gioia_edp",
      name: "Aqua Di Gioia EDP",
      brand: "Giorgio Armani",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/aqua_di_gioia_edp.jpg",
      top_notes: ["Mint", "Lemon", "Bergamot"],
      heart_notes: ["Jasmine", "Peony", "Water Notes"],
      base_notes: ["Cedar", "Brown Sugar", "Musk"],
      description: "A fresh and joyful aquatic floral fragrance for women. The mint and lemon opening is crisp and invigorating, while the floral heart is delicate and feminine. The base of cedar and brown sugar adds a touch of sweetness and warmth.",
      year: "2010",
      gender: "Female"
    },
    {
      id: "armani_code_for_women",
      name: "Armani Code for Women",
      brand: "Giorgio Armani",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/armani_code_for_women.jpg",
      top_notes: ["Orange Blossom", "Jasmine", "Bergamot"],
      heart_notes: ["Honey", "Almond", "Ginger"],
      base_notes: ["Vanilla", "Sandalwood", "Musk"],
      description: "A seductive and elegant oriental floral fragrance. The orange blossom opening is bright and feminine, while the heart of honey and almond adds a gourmand twist. The vanilla base is warm and sensual, like a secret code waiting to be deciphered.",
      year: "2006",
      gender: "Female"
    },
    {
      id: "armani_acqua_di_gio_parfum",
      name: "Acqua di Giò Parfum",
      brand: "Giorgio Armani",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/acqua_di_gi%C3%B2_parfum.jpg",
      top_notes: ["Bergamot", "Sea Notes"],
      heart_notes: ["Sage", "Rosemary", "Geranium"],
      base_notes: ["Patchouli", "Cedar", "Incense"],
      description: "A deeper, more intense interpretation of the iconic Acqua di Giò. The parfum concentration adds richness and longevity, while the incense and patchouli base adds a mysterious, sensual depth. It's Acqua di Giò for the evening.",
      year: "2015",
      gender: "Male"
    },
    {
      id: "armani_acqua_di_gio_woman",
      name: "Acqua Di Gio for Woman",
      brand: "Giorgio Armani",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/acqua_di_gio_woman.jpg",
      top_notes: ["Bergamot", "Neroli", "Green Tangerine"],
      heart_notes: ["Jasmine", "Ylang-Ylang", "Peony"],
      base_notes: ["Cedar", "Musk", "Brown Sugar"],
      description: "The feminine counterpart to the iconic Acqua Di Gio. It captures the same Mediterranean freshness with a softer, more floral heart. The citrus opening is bright and uplifting, while the floral heart is romantic and feminine. The base is warm and comforting.",
      year: "1995",
      gender: "Female"
    },
    {
      id: "givenchy_ange_ou_demon",
      name: "Ange ou Demon",
      brand: "Givenchy",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/ange_ou_demon.jpg",
      top_notes: ["Saffron", "Thyme", "Italian Mandarin"],
      heart_notes: ["Lily", "Ylang-Ylang", "Orchid"],
      base_notes: ["Vanilla", "Oakmoss", "Brazilian Rosewood"],
      description: "A mysterious and seductive fragrance that plays on the duality of angel and demon. The spicy saffron opening is intriguing, while the floral heart is both angelic and sensual. The vanilla and oakmoss base is dark and addictive.",
      year: "2006",
      gender: "Female"
    },
    {
      id: "louis_vuitton_afternoon_swim",
      name: "Afternoon Swim",
      brand: "Louis Vuitton",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/afternoon_swim.jpg",
      top_notes: ["Mandarin", "Orange", "Bergamot"],
      heart_notes: ["Jasmine", "Neroli"],
      base_notes: ["Cedar", "Musk"],
      description: "A refreshing and invigorating fragrance that captures the feeling of a carefree afternoon swim. The citrus opening is bright and sparkling, like sunshine on water. The floral heart adds a touch of freshness, while the woody base provides a clean finish.",
      year: "2017",
      gender: "Unisex"
    },
    {
      id: "louis_vuitton_apogee",
      name: "Apogée",
      brand: "Louis Vuitton",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/apog%C3%A9e.jpg",
      top_notes: ["Lily of the Valley", "Jasmine", "Rose"],
      heart_notes: ["Magnolia", "Peony", "Lily"],
      base_notes: ["Sandalwood", "Musk", "Cedar"],
      description: "A luminous and radiant floral bouquet that reaches the peak of elegance. Apogée opens with a magnificent blend of lily of the valley, jasmine, and rose, creating a fresh and sophisticated floral harmony. The heart reveals magnolia and peony, adding depth and complexity. The sandalwood and musk base provides a soft, creamy finish that lingers beautifully.",
      year: "2017",
      gender: "Female"
    }
  ],
  
  // ===== PERFUMES STARTING WITH B =====
  b: [
    {
      id: "adolfo_dominguez_bambu_man",
      name: "Bambú for Man",
      brand: "Adolfo Dominguez",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bamb%C3%BA_man.jpg",
      top_notes: ["Bergamot", "Mandarin", "Lemon"],
      heart_notes: ["Bamboo", "Jasmine", "Geranium"],
      base_notes: ["Cedar", "Musk", "Vetiver"],
      description: "A fresh and woody fragrance inspired by the serenity of a bamboo forest. Bambú for Man opens with sparkling citrus notes of bergamot and mandarin, leading to a heart of green bamboo and delicate jasmine. The base is anchored by warm cedar and clean musk, creating a scent that is both refreshing and sophisticated. Perfect for the modern man who appreciates nature and elegance.",
      year: "2015",
      gender: "Male"
    },
    {
      id: "burberry_women",
      name: "Burberry Women",
      brand: "Burberry",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/burberry_women.jpg",
      top_notes: ["Gardenia", "Mimosa", "Sicilian Mandarin"],
      heart_notes: ["Jasmine", "Rose", "Peony"],
      base_notes: ["Sandalwood", "Musk", "Oakmoss"],
      description: "A timeless and elegant fragrance that captures the spirit of British sophistication. Burberry Women opens with fresh gardenia and mimosa, leading to a heart of romantic jasmine and rose. The base is warm and sensual with sandalwood and musk. It's a classic scent for the confident, elegant woman.",
      year: "1995",
      gender: "Female"
    },
    {
      id: "burberry_baby_touch",
      name: "Baby Touch",
      brand: "Burberry",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/baby_touch.jpg",
      top_notes: ["Orange", "Lemon", "Mandarin"],
      heart_notes: ["Chamomile", "Lavender", "Jasmine"],
      base_notes: ["Vanilla", "Musk", "Cedar"],
      description: "A gentle and soothing alcohol-free fragrance designed for babies and young children. Baby Touch opens with soft citrus notes of orange and lemon, leading to a calming heart of chamomile and lavender. The base is warm and comforting with vanilla and musk. It's a tender, delicate scent that wraps your little one in a gentle embrace.",
      year: "2002",
      gender: "Unisex"
    },
    {
      id: "bond_9_bleecker_street",
      name: "Bleecker Street",
      brand: "Bond No 9",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bleecker_street.jpg",
      top_notes: ["Blueberry", "Cranberry", "Rhubarb"],
      heart_notes: ["Sage", "Lavender", "Violet Leaf"],
      base_notes: ["Suede", "Patchouli", "Amber"],
      description: "A vibrant and sophisticated fragrance inspired by the charm of Bleecker Street in New York's West Village. It opens with a burst of juicy blueberry and cranberry, leading to an aromatic heart of sage and lavender. The base is warm and sensual with suede and patchouli. It's a unique scent that captures the bohemian spirit of the city.",
      year: "2007",
      gender: "Unisex"
    },
    {
      id: "burberry_her_edt",
      name: "Burberry Her EDT",
      brand: "Burberry",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/burberry_her_edt.jpg",
      top_notes: ["Green Pear", "Strawberry", "Mandarin"],
      heart_notes: ["Peony", "Jasmine", "Violet"],
      base_notes: ["Musk", "Amber", "Cedar"],
      description: "A fresh and fruity interpretation of the iconic Burberry Her. The EDT version opens with sparkling green pear and strawberry, leading to a floral heart of peony and jasmine. The base is light and airy with musk and amber. It's a joyful, energetic fragrance for the young and young at heart.",
      year: "2018",
      gender: "Female"
    },
    {
      id: "boadicea_blue_sapphire",
      name: "Blue Sapphire",
      brand: "Boadicea The Victorious",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/blue_sapphire.jpg",
      top_notes: ["Bergamot", "Lemon", "Pink Pepper"],
      heart_notes: ["Rose", "Jasmine", "Saffron"],
      base_notes: ["Oud", "Amber", "Sandalwood", "Musk"],
      description: "A luxurious and opulent fragrance inspired by the precious blue sapphire. It opens with bright bergamot and pink pepper, leading to a heart of exotic rose and saffron. The base is rich and deep with precious oud, amber, and sandalwood. It's a scent for those who appreciate the finest things in life.",
      year: "2015",
      gender: "Unisex"
    },
    {
      id: "burberry_body",
      name: "Body",
      brand: "Burberry",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/body.jpg",
      top_notes: ["Peach", "Freesia", "Bergamot"],
      heart_notes: ["Rose", "Sandalwood", "Iris"],
      base_notes: ["Musk", "Amber", "Vanilla"],
      description: "A sensual and sophisticated fragrance that celebrates the feminine form. Body opens with fresh peach and freesia, leading to a heart of rose and iris. The base is warm and intimate with musk, amber, and vanilla. It's a scent that wraps you in elegance and grace.",
      year: "2012",
      gender: "Female"
    },
    {
      id: "acqua_di_parma_mirto",
      name: "Blue Mediterraneo Mirto di Panarea",
      brand: "Acqua di Parma",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/blue_mediterraneo_mirto_di_panarea.jpg",
      top_notes: ["Myrtle", "Juniper", "Bergamot", "Lemon"],
      heart_notes: ["Jasmine", "Rose", "Sea Notes"],
      base_notes: ["Cedar", "Musk", "Amber"],
      description: "A fresh and aromatic fragrance inspired by the island of Panarea. It captures the essence of the Mediterranean with its opening of myrtle and juniper, leading to a floral heart of jasmine and rose. The base is warm and woody with cedar and musk. It's like a breath of fresh sea air in a bottle.",
      year: "2008",
      gender: "Unisex"
    },
    {
      id: "amouage_boundless",
      name: "Boundless",
      brand: "Amouage",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/boundless.jpg",
      top_notes: ["Bergamot", "Pink Pepper", "Cardamom"],
      heart_notes: ["Tobacco", "Cypriol", "Saffron"],
      base_notes: ["Amber", "Cedar", "Musk", "Vanilla"],
      description: "A rich and opulent fragrance that knows no boundaries. Boundless opens with spicy bergamot and cardamom, leading to a heart of smoky tobacco and cypriol. The base is warm and enveloping with amber, cedar, and vanilla. It's a scent for those who refuse to be confined by convention.",
      year: "2019",
      gender: "Male"
    },
    {
      id: "amouage_blossom_love",
      name: "Blossom Love",
      brand: "Amouage",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/blossom_love.jpg",
      top_notes: ["Cherry", "Almond", "Bergamot"],
      heart_notes: ["Rose", "Jasmine", "Ylang-Ylang"],
      base_notes: ["Vanilla", "Musk", "Sandalwood"],
      description: "A romantic and delicate fragrance that captures the feeling of spring blossoms. Blossom Love opens with sweet cherry and almond, leading to a heart of romantic rose and jasmine. The base is soft and comforting with vanilla and sandalwood. It's a scent that embodies the joy and tenderness of love.",
      year: "2017",
      gender: "Female"
    },
    {
      id: "bottega_veneta",
      name: "Bottega Veneta",
      brand: "Bottega Veneta",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bottega_veneta.jpg",
      top_notes: ["Bergamot", "Jasmine", "Pink Pepper"],
      heart_notes: ["Leather", "Patchouli", "Oakmoss"],
      base_notes: ["Musk", "Amber", "Cedar"],
      description: "An elegant and sophisticated fragrance that embodies the luxury of Bottega Veneta leather goods. It opens with fresh bergamot and jasmine, leading to a heart of rich leather and patchouli. The base is warm and sensual with musk and amber. It's a scent of understated luxury and timeless style.",
      year: "2011",
      gender: "Unisex"
    },
    {
      id: "kilian_back_to_black",
      name: "Back to Black",
      brand: "By Kilian",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/back_to_black.jpg",
      top_notes: ["Bergamot", "Cherry", "Raspberry"],
      heart_notes: ["Honey", "Rose", "Jasmine"],
      base_notes: ["Tobacco", "Vanilla", "Musk", "Cedar"],
      description: "A sensual and addictive fragrance from the Aphrodisiac collection. Back to Black opens with fruity bergamot and cherry, leading to a heart of rich honey and rose. The base is warm and intoxicating with tobacco, vanilla, and musk. It's a scent that is both seductive and sophisticated.",
      year: "2009",
      gender: "Unisex"
    },
    {
      id: "kilian_bamboo_harmony",
      name: "Bamboo Harmony",
      brand: "By Kilian",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bamboo_harmony.jpg",
      top_notes: ["Bergamot", "Bitter Orange", "Galbanum"],
      heart_notes: ["Tea", "Jasmine", "Fig"],
      base_notes: ["Musk", "Cedar", "Sandalwood"],
      description: "A fresh and serene fragrance inspired by the tranquility of a bamboo forest. Bamboo Harmony opens with sparkling bergamot and galbanum, leading to a heart of green tea and jasmine. The base is clean and calming with musk and cedar. It's a moment of peace and harmony in a bottle.",
      year: "2012",
      gender: "Unisex"
    },
    {
      id: "byredo_blanche",
      name: "Blanche",
      brand: "Byredo",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/blanche.jpg",
      top_notes: ["Aldehydes", "Rose", "Pink Pepper"],
      heart_notes: ["Violet", "Peony", "Jasmine"],
      base_notes: ["Musk", "Woody Notes", "Amber"],
      description: "A clean and minimalist fragrance that captures the essence of freshly washed skin. Blanche opens with sparkling aldehydes and rose, leading to a heart of violet and peony. The base is soft and comforting with musk and woody notes. It's a scent of purity and simplicity.",
      year: "2009",
      gender: "Unisex"
    },
    {
      id: "cartier_baiser_vole",
      name: "Baiser Vole",
      brand: "Cartier",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/baiser_vole.jpg",
      top_notes: ["Lily", "Green Notes", "Citrus"],
      heart_notes: ["Lily", "Jasmine", "Ylang-Ylang"],
      base_notes: ["Musk", "Sandalwood", "Cedar"],
      description: "A delicate and romantic fragrance centered around the queen of flowers: the lily. Baiser Vole (Stolen Kiss) opens with fresh green notes and citrus, revealing a heart of pure, intoxicating lily. The base is soft and sensual with musk and sandalwood. It's a fragrance of secret romance and stolen moments.",
      year: "2011",
      gender: "Female"
    },
    {
      id: "byredo_bal_d_afrique",
      name: "Bal D'Afrique",
      brand: "Byredo",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bal_d_afrique.jpg",
      top_notes: ["Bergamot", "Lemon", "Marigold"],
      heart_notes: ["Violet", "Jasmine", "Cyclamen"],
      base_notes: ["Vetiver", "Musk", "Amber"],
      description: "A vibrant and optimistic fragrance inspired by the cultural explosion of 1920s Paris and African rhythms. Bal D'Afrique opens with bright bergamot and marigold, leading to a floral heart of violet and jasmine. The base is warm and earthy with vetiver and amber. It's a celebration of life, art, and joy.",
      year: "2009",
      gender: "Unisex"
    },
    {
      id: "carolina_herrera_bad_boy",
      name: "Bad Boy",
      brand: "Carolina Herrera",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bad_boy.jpg",
      top_notes: ["White Pepper", "Black Pepper", "Bergamot"],
      heart_notes: ["Sage", "Geranium", "Cedar"],
      base_notes: ["Cacao", "Tonka", "Amber"],
      description: "A bold and rebellious fragrance for the man who dances on the edge. Bad Boy opens with a spicy explosion of white and black pepper, leading to an aromatic heart of sage and geranium. The base is dark and addictive with cacao, tonka, and amber. It's a scent that defies convention and embraces individuality.",
      year: "2019",
      gender: "Male"
    },
    {
      id: "bvlgari_man_rain_essence",
      name: "Bvlgari Man Rain Essence",
      brand: "Bvlgari",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bvlgari_man_rain_essence.jpg",
      top_notes: ["Grapefruit", "Bergamot", "Aquatic Notes"],
      heart_notes: ["Iris", "Lavender", "Sage"],
      base_notes: ["Musk", "Amber", "Cedar"],
      description: "A fresh and invigorating fragrance that captures the essence of a rain shower. Man Rain Essence opens with sparkling grapefruit and aquatic notes, leading to a heart of iris and lavender. The base is clean and sensual with musk and amber. It's a refreshing scent for the modern man.",
      year: "2013",
      gender: "Male"
    },
    {
      id: "kilian_black_phantom",
      name: "Black Phantom",
      brand: "By Kilian",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/black_phantom.jpg",
      top_notes: ["Rum", "Sugar Cane"],
      heart_notes: ["Almond", "Caramel", "Coffee"],
      base_notes: ["Sandalwood", "Vanilla", "Amber"],
      description: "A dark and mysterious fragrance inspired by the pirates of the Caribbean. Black Phantom opens with boozy rum and sugar cane, leading to a heart of sweet almond and caramel. The base is warm and dangerous with sandalwood and amber. It's a scent for those who are not afraid of the dark.",
      year: "2013",
      gender: "Unisex"
    },
    {
      id: "byredo_bibliotheque",
      name: "Bibliothèque",
      brand: "Byredo",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/biblioth%C3%A8que.jpg",
      top_notes: ["Peach", "Plum", "Bergamot"],
      heart_notes: ["Rose", "Jasmine", "Violet"],
      base_notes: ["Leather", "Vanilla", "Musk", "Patchouli"],
      description: "A nostalgic fragrance that evokes the scent of old books and leather-bound libraries. Bibliothèque opens with juicy peach and plum, leading to a floral heart of rose and violet. The base is warm and woody with leather, vanilla, and patchouli. It's a scent of memories and quiet contemplation.",
      year: "2016",
      gender: "Unisex"
    },
    {
      id: "diesel_bad",
      name: "Bad Diesel",
      brand: "Diesel",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bad_diesel.jpg",
      top_notes: ["Lemon", "Bergamot", "Grapefruit"],
      heart_notes: ["Leather", "Cedar", "Geranium"],
      base_notes: ["Musk", "Amber", "Patchouli"],
      description: "An edgy and rebellious fragrance for the free spirit. Bad Diesel opens with fresh citrus notes, leading to a heart of leather and cedar. The base is warm and sensual with musk and patchouli. It's a scent for those who dare to be different.",
      year: "2013",
      gender: "Male"
    },
    {
      id: "estee_lauder_beautiful",
      name: "Beautiful",
      brand: "Estée Lauder",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/beautiful.jpg",
      top_notes: ["Rose", "Lily", "Mandarin"],
      heart_notes: ["Jasmine", "Ylang-Ylang", "Marigold"],
      base_notes: ["Sandalwood", "Vanilla", "Musk"],
      description: "A romantic and timeless floral bouquet that celebrates love and beauty. Beautiful opens with a symphony of rose and lily, leading to a heart of jasmine and ylang-ylang. The base is warm and comforting with sandalwood and vanilla. It's a fragrance that captures the joy of life's most beautiful moments.",
      year: "1985",
      gender: "Female"
    },
    {
      id: "giorgio_beberly_hills",
      name: "Beberly Hills",
      brand: "Giorgio",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/beberly_hills.jpg",
      top_notes: ["Mandarin", "Bergamot", "Orange"],
      heart_notes: ["Rose", "Jasmine", "Ylang-Ylang"],
      base_notes: ["Sandalwood", "Musk", "Amber"],
      description: "A glamorous and vibrant fragrance that captures the spirit of Beverly Hills. It opens with sparkling citrus notes, leading to a heart of luxurious florals. The base is warm and sophisticated with sandalwood and amber. It's a scent for those who love the spotlight.",
      year: "1981",
      gender: "Female"
    },
    {
      id: "escada_born_in_paradise",
      name: "Born In Paradise",
      brand: "Escada",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/born_in_paradise.jpg",
      top_notes: ["Passion Fruit", "Pineapple", "Mandarin"],
      heart_notes: ["Peony", "Jasmine", "Lily"],
      base_notes: ["Vanilla", "Musk", "Sandalwood"],
      description: "A tropical and joyful fragrance that transports you to paradise. Born In Paradise opens with juicy passion fruit and pineapple, leading to a floral heart of peony and jasmine. The base is warm and sweet with vanilla and sandalwood. It's a summer vacation in a bottle.",
      year: "2019",
      gender: "Female"
    },
    {
      id: "ex_nihilo_blue_talisman",
      name: "Blue Talisman",
      brand: "Ex Nihilo",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/blue_talisman.jpg",
      top_notes: ["Bergamot", "Mandarin", "Black Currant"],
      heart_notes: ["Rose", "Jasmine", "Iris"],
      base_notes: ["Vanilla", "Musk", "Amber", "Cedar"],
      description: "A mystical and enchanting fragrance that feels like a lucky charm. Blue Talisman opens with sparkling citrus and black currant, leading to a floral heart of rose and iris. The base is warm and protective with vanilla, amber, and musk. It's a scent that brings magic to everyday life.",
      year: "2020",
      gender: "Unisex"
    },
    {
      id: "giardini_di_toscana_bianco_latte",
      name: "Bianco Latte",
      brand: "Giardini Di Toscana",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bianco_latte.jpg",
      top_notes: ["Milk", "Honey", "Vanilla"],
      heart_notes: ["Caramel", "Tonka", "Benzoin"],
      base_notes: ["Musk", "Sandalwood", "Amber"],
      description: "A creamy and comforting gourmand fragrance that smells like warm milk and honey. Bianco Latte opens with sweet milk and honey, leading to a heart of rich caramel and tonka. The base is soft and enveloping with musk and sandalwood. It's a hug in a bottle, pure comfort and warmth.",
      year: "2019",
      gender: "Unisex"
    },
    {
      id: "armani_because_its_you",
      name: "Because It's You",
      brand: "Giorgio Armani",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/because_its_you.jpg",
      top_notes: ["Raspberry", "Mandarin", "Bergamot"],
      heart_notes: ["Rose", "Jasmine", "Lily of the Valley"],
      base_notes: ["Vanilla", "Musk", "Cedar"],
      description: "A romantic and joyful fragrance that celebrates love. Because It's You opens with juicy raspberry and mandarin, leading to a floral heart of rose and jasmine. The base is warm and sensual with vanilla and musk. It's a scent that says 'I love you' without words.",
      year: "2017",
      gender: "Female"
    },
    {
      id: "gucci_bloom",
      name: "Bloom",
      brand: "Gucci",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bloom.jpg",
      top_notes: ["Jasmine", "Tuberose", "Rangoon Creeper"],
      heart_notes: ["Jasmine", "Lily", "Iris"],
      base_notes: ["Musk", "Sandalwood", "Vanilla"],
      description: "A lush and intoxicating white floral that captures the essence of a flourishing garden. Bloom opens with a burst of jasmine and tuberose, leading to a heart of rare Rangoon creeper. The base is soft and sensual with musk and sandalwood. It's a fragrance of pure, radiant femininity.",
      year: "2017",
      gender: "Female"
    },
    {
      id: "hugo_boss_boss_bottled",
      name: "Boss Bottled",
      brand: "Hugo Boss",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/boss_bottled.jpg",
      top_notes: ["Apple", "Citrus", "Geranium"],
      heart_notes: ["Cedar", "Sandalwood", "Patchouli"],
      base_notes: ["Vanilla", "Musk", "Amber"],
      description: "A classic and sophisticated fragrance for the successful modern man. Boss Bottled opens with fresh apple and citrus, leading to a woody heart of cedar and sandalwood. The base is warm and elegant with vanilla and musk. It's a scent of confidence and achievement.",
      year: "1998",
      gender: "Male"
    },
    {
      id: "hugo_boss_boss_orange_man",
      name: "Boss Orange Man",
      brand: "Hugo Boss",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/boss_orange_man.jpg",
      top_notes: ["Apple", "Mandarin", "Grapefruit"],
      heart_notes: ["Geranium", "Sage", "Cedar"],
      base_notes: ["Musk", "Amber", "Sandalwood"],
      description: "A fresh and energetic fragrance for the free-spirited man. Boss Orange Man opens with juicy apple and mandarin, leading to an aromatic heart of geranium and sage. The base is warm and inviting with musk and sandalwood. It's a scent of creativity and individuality.",
      year: "2010",
      gender: "Male"
    },
    {
      id: "gucci_bloom_eau_de_toilette",
      name: "Bloom Eau de Toilette",
      brand: "Gucci",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bloom_eau_de_toilette.jpg",
      top_notes: ["Green Notes", "Citrus", "Ginger"],
      heart_notes: ["Jasmine", "Tuberose", "Rangoon Creeper"],
      base_notes: ["Musk", "Sandalwood", "Vanilla"],
      description: "A fresher, lighter interpretation of the iconic Bloom. The EDT opens with green notes and ginger, leading to a heart of the same beautiful white florals. The base is clean and airy with musk and sandalwood. It's Bloom in a more casual, everyday mood.",
      year: "2018",
      gender: "Female"
    },
    {
      id: "hugo_boss_boss_bottled_night",
      name: "Boss Bottled Night",
      brand: "Hugo Boss",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/boss_bottled_night.jpg",
      top_notes: ["Lavender", "Birch Leaf", "Cardamom"],
      heart_notes: ["Violet Leaf", "Musk", "Ebony Wood"],
      base_notes: ["Sandalwood", "Musk", "Amber"],
      description: "A mysterious and seductive fragrance for evening wear. Boss Bottled Night opens with aromatic lavender and cardamom, leading to a heart of violet leaf and ebony wood. The base is warm and sensual with sandalwood and musk. It's a scent for the man of mystery.",
      year: "2010",
      gender: "Male"
    },
    {
      id: "gucci_bamboo",
      name: "Bamboo",
      brand: "Gucci",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bamboo.jpg",
      top_notes: ["Bergamot", "Orange", "Pear"],
      heart_notes: ["Ylang-Ylang", "Lily", "Tuberose"],
      base_notes: ["Sandalwood", "Musk", "Vanilla"],
      description: "An elegant and sophisticated floral fragrance for the modern woman. Bamboo opens with fresh bergamot and pear, leading to a heart of exotic ylang-ylang and lily. The base is warm and creamy with sandalwood and vanilla. It's a scent of strength and femininity, like bamboo itself.",
      year: "2015",
      gender: "Female"
    },
    {
      id: "hugo_boss_boss_orange",
      name: "Boss Orange",
      brand: "Hugo Boss",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/boss_orange.jpg",
      top_notes: ["Apple", "Orange", "Bergamot"],
      heart_notes: ["Flowers", "Freesia", "Jasmine"],
      base_notes: ["Sandalwood", "Musk", "Vanilla"],
      description: "A warm and comforting fragrance for the free-spirited woman. Boss Orange opens with juicy apple and orange, leading to a floral heart of freesia and jasmine. The base is soft and cozy with sandalwood and vanilla. It's a scent of sunny days and happy moments.",
      year: "2009",
      gender: "Female"
    },
    {
      id: "hugo_boss_boss_alive",
      name: "Boss Alive",
      brand: "Hugo Boss",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/boss_alive.jpg",
      top_notes: ["Apple", "Black Currant", "Plum"],
      heart_notes: ["Rose", "Jasmine", "Cinnamon"],
      base_notes: ["Vanilla", "Musk", "Cedar"],
      description: "A vibrant and energetic fragrance that celebrates the joy of being alive. Boss Alive opens with juicy apple and black currant, leading to a spicy floral heart of rose and cinnamon. The base is warm and sensual with vanilla and musk. It's a scent that energizes and inspires.",
      year: "2019",
      gender: "Female"
    },
    {
      id: "hugo_boss_boss_bottled_elixir",
      name: "Boss Bottled Elixir",
      brand: "Hugo Boss",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/boss_bottled_elixir.jpg",
      top_notes: ["Apple", "Cinnamon", "Clove"],
      heart_notes: ["Leather", "Cedar", "Patchouli"],
      base_notes: ["Vanilla", "Amber", "Musk"],
      description: "A rich and powerful elixir that intensifies the iconic Boss Bottled DNA. Elixir opens with spicy apple and cinnamon, leading to a heart of rich leather and cedar. The base is deep and sensual with vanilla and amber. It's Boss Bottled amplified for maximum impact.",
      year: "2022",
      gender: "Male"
    },
    {
      id: "hugo_boss_boss_woman",
      name: "Boss Woman",
      brand: "Hugo Boss",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/boss_woman.jpg",
      top_notes: ["Mandarin", "Apple", "Peach"],
      heart_notes: ["Rose", "Jasmine", "Lily"],
      base_notes: ["Sandalwood", "Musk", "Vanilla"],
      description: "A classic and elegant fragrance for the successful modern woman. Boss Woman opens with fresh mandarin and apple, leading to a floral heart of rose and jasmine. The base is warm and sophisticated with sandalwood and vanilla. It's a scent of power and grace.",
      year: "2000",
      gender: "Female"
    },
    {
      id: "jo_malone_blackberry_bay",
      name: "Blackberry & Bay",
      brand: "Jo Malone",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/blackberry_bay.jpg",
      top_notes: ["Blackberry", "Bay", "Lemon"],
      heart_notes: ["Jasmine", "Rose", "Vetiver"],
      base_notes: ["Cedar", "Musk", "Amber"],
      description: "A fresh and vibrant fragrance that captures the essence of a blackberry bush in full fruit. It opens with juicy blackberry and aromatic bay, leading to a floral heart of jasmine and rose. The base is woody and grounding with cedar and vetiver. It's a scent of nature's abundance.",
      year: "2012",
      gender: "Unisex"
    },
    {
      id: "bvlgari_man_in_black",
      name: "Bvlgari Man in Black",
      brand: "Bvlgari",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bvlgari_man_in_black.jpg",
      top_notes: ["Rum", "Spices", "Leather"],
      heart_notes: ["Iris", "Tuberose", "Leather"],
      base_notes: ["Benzoin", "Tonka", "Cedar"],
      description: "A warm and sensual oriental fragrance for the modern gentleman. Man in Black opens with boozy rum and spices, leading to a heart of iris and leather. The base is warm and addictive with benzoin and tonka. It's a scent of mystery and sophistication.",
      year: "2014",
      gender: "Male"
    },
    {
      id: "lattafa_bade_e_al_oud_for_glory",
      name: "Bade'e Al Oud Oud For Glory",
      brand: "Lattafa",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bade_%CC%81e_al_oud_oud_for_glory.jpg",
      top_notes: ["Saffron", "Nutmeg", "Bergamot"],
      heart_notes: ["Oud", "Rose", "Jasmine"],
      base_notes: ["Amber", "Musk", "Cedar"],
      description: "A bold and majestic oud fragrance fit for royalty. Oud For Glory opens with precious saffron and nutmeg, leading to a heart of rich oud and rose. The base is warm and powerful with amber and musk. It's a scent that commands attention and respect.",
      year: "2020",
      gender: "Unisex"
    },
    {
      id: "lattafa_bade_e_al_oud_sublime",
      name: "Bade'e Al Oud Sublime",
      brand: "Lattafa",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bade_%CC%81e_al_oud_sublime.jpg",
      top_notes: ["Bergamot", "Saffron", "Pink Pepper"],
      heart_notes: ["Oud", "Rose", "Jasmine"],
      base_notes: ["Vanilla", "Amber", "Musk", "Sandalwood"],
      description: "A sublime and sophisticated oud fragrance with a sweeter, more approachable character. Sublime opens with bergamot and saffron, leading to a heart of oud and rose. The base is warm and creamy with vanilla and amber. It's a scent of refined luxury.",
      year: "2021",
      gender: "Unisex"
    },
    {
      id: "lattafa_bade_e_al_oud_amethyst",
      name: "Bade'e Al Oud Amethyst",
      brand: "Lattafa",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/bade_e_al_oud_amethyst.jpg",
      top_notes: ["Plum", "Saffron", "Bergamot"],
      heart_notes: ["Oud", "Rose", "Jasmine", "Violet"],
      base_notes: ["Vanilla", "Amber", "Musk", "Cedar"],
      description: "A rich and opulent oud fragrance with a fruity and floral heart. Amethyst opens with juicy plum and saffron, leading to a heart of oud, rose, and violet. The base is warm and luxurious with vanilla and amber. It's a scent as precious as the gemstone itself.",
      year: "2021",
      gender: "Unisex"
    },
    {
      id: "valentino_born_in_roma_uomo_green_stravaganza",
      name: "Born in Roma Uomo Green Stravaganza",
      brand: "Valentino",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/born_in_roma_uomo_green_stravaganza.jpg",
      top_notes: ["Calabrian Bergamot", "Green Apple", "Mint"],
      heart_notes: ["Coffee", "Clary Sage", "Lavender"],
      base_notes: ["Vetiver from Haiti", "Musk", "Cedar"],
      description: "A fresh and invigorating take on the iconic Born in Roma. Green Stravaganza opens with sparkling bergamot and green apple, leading to a heart of coffee and lavender. The base is earthy and sophisticated with vetiver and musk. It's a fragrance of modern masculinity and natural elegance.",
      year: "2024",
      gender: "Male"
    },
    {
      id: "valentino_born_in_roma_donna_green_stravaganza",
      name: "Born in Roma Donna Green Stravaganza",
      brand: "Valentino",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/born_in_roma_donna_green_stravaganza.jpg",
      top_notes: ["Green Mandarin", "Jasmine", "Bergamot"],
      heart_notes: ["Coffee", "Rose", "Ylang-Ylang"],
      base_notes: ["Vanilla", "Musk", "Cedar"],
      description: "A vibrant and energetic floral fragrance for the modern woman. Donna Green Stravaganza opens with fresh green mandarin and jasmine, leading to a heart of coffee and rose. The base is warm and sensual with vanilla and musk. It's a scent of bold femininity and contemporary style.",
      year: "2024",
      gender: "Female"
    }
  ],
  
  // ===== ADDITIONAL PERFUMES (Club de Nuit, Cloud, etc) =====
  additional: [
      {
    id: "inspired_chance",
    name: "Inspired by Chance",
    brand: "Our Version",
    image: "https://magicperfume.co.uk/cdn/shop/files/chance.png?v=1772096656",
    top_notes: ["Pineapple", "Quince", "Citrus"],
    heart_notes: ["Hyacinth", "Jasmine", "Iris"],
    base_notes: ["Musk", "Patchouli", "Vetiver", "Cedar"],
    description: "A fresh and vibrant interpretation of the iconic Chance fragrance. This inspired version captures the sparkling, youthful energy of the original with a blend of juicy pineapple and quince, leading to a floral heart of hyacinth and jasmine. The base is warm and sensual with musk and patchouli, creating a scent that is both playful and sophisticated. Perfect for everyday wear.",
    year: "2024",
    gender: "Female"
  },
  
  {
    id: "inspired_mademoiselle",
    name: "Inspired by Mademoiselle",
    brand: "Our Version",
    image: "https://magicperfume.co.uk/cdn/shop/files/Mademoiselle.jpg?v=1772038151",
    top_notes: ["Orange", "Bergamot", "Grapefruit"],
    heart_notes: ["Rose", "Jasmine", "Lychee"],
    base_notes: ["Patchouli", "Vanilla", "Musk", "Vetiver"],
    description: "A chic and modern interpretation of the classic Mademoiselle fragrance. This inspired version opens with bright citrus notes, leading to a romantic floral heart of rose and jasmine. The base is warm and sophisticated with patchouli and vanilla, creating a scent that is both elegant and contemporary. It's a fragrance for the modern woman who is confident, stylish, and always in fashion.",
    year: "2024",
    gender: "Female"
  },
  
  {
    id: "inspired_allure_sport",
    name: "Inspired by Allure Homme Sport",
    brand: "Our Version",
    image: "https://magicperfume.co.uk/cdn/shop/files/Allure_Homme_Sport.png?v=1772099956",
    top_notes: ["Mandarin", "Orange", "Sea Notes"],
    heart_notes: ["Cedar", "Tonka Bean", "Musk"],
    base_notes: ["Vanilla", "Amber", "Vetiver"],
    description: "A fresh and energetic interpretation of the iconic Allure Homme Sport. This inspired version captures the invigorating spirit of the original with sparkling citrus and aquatic notes, leading to a warm and sensual heart of cedar and tonka. The base is smooth and addictive with vanilla and amber, creating a scent that is both fresh and sophisticated. Perfect for the active, modern man.",
    year: "2024",
    gender: "Male"
  },
    {
      id: "club_de_nuit_intense_man",
      name: "Club de Nuit Intense Man",
      brand: "Armaf",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/club_de_nuit_intense_man.jpg",
      top_notes: ["Lemon", "Pineapple", "Bergamot", "Black Currant"],
      heart_notes: ["Rose", "Jasmine", "Birch"],
      base_notes: ["Amber", "Vanilla", "Musk", "Oakmoss"],
      description: "A powerful and iconic men's fragrance, renowned for its incredible performance and value. It opens with a bright, zesty burst of citrus, primarily lemon and pineapple, which dries down to a smoky, woody base of birch and rich amber. Often compared to much more expensive niche fragrances, it projects confidence and leaves a lasting trail.",
      year: "2015",
      gender: "Male"
    },
    {
      id: "cloud",
      name: "Cloud",
      brand: "Ariana Grande",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/cloud.jpg",
      top_notes: ["Lavender", "Pear", "Bergamot"],
      heart_notes: ["Coconut", "Praline", "Vanilla Orchid"],
      base_notes: ["Musk", "Woody Notes", "Cream"],
      description: "A warm, sweet, and airy gourmand that has become a modern classic. Cloud opens with a surprising hint of lavender before diving into a fluffy, creamy heart of coconut and praline. The dry-down is a soft, musky, and comforting blend that feels both playful and sophisticated, evoking a sense of carefree happiness.",
      year: "2018",
      gender: "Female"
    },
    {
      id: "complex",
      name: "Complex",
      brand: "Boadicea The Victorious",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/complex.jpg",
      top_notes: ["Saffron", "Fruit Notes", "Bergamot"],
      heart_notes: ["Rose", "Jasmine", "Cinnamon", "Honey"],
      base_notes: ["Oud", "Leather", "Amber", "Sandalwood", "Musk"],
      description: "A deeply layered and luxurious unisex fragrance from the esteemed British house. As the name suggests, it is a rich tapestry of opulent notes. Sweet saffron and honey intertwine with the smokiness of oud and the sensuality of leather. It's a powerful, assertive scent that evolves beautifully on the skin, revealing new facets over time.",
      year: "2016",
      gender: "Unisex"
    },
    {
      id: "ck2",
      name: "CK2",
      brand: "Calvin Klein",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/ck2.jpg",
      top_notes: ["Wasabi", "Mandarin Orange", "Violet"],
      heart_notes: ["Rose", "Nepalese Pepper", "Resins"],
      base_notes: ["Sandalwood", "Musk", "Wet Stone"],
      description: "A fresh and modern unisex fragrance that captures the energy of connection. Its unique opening features a surprising burst of wasabi, paired with crisp mandarin and delicate violet. The heart is warm and spicy, while the base of sandalwood and a distinctive 'wet stone' accord creates an urban, mineral freshness. It's designed to be shared.",
      year: "2016",
      gender: "Unisex"
    },
    {
      id: "ck_everyone",
      name: "CK Everyone",
      brand: "Calvin Klein",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/ck_everyone.jpg",
      top_notes: ["Orange Peel", "Ginger"],
      heart_notes: ["Blue Tea", "Patchouli"],
      base_notes: ["Cedarwood", "Musk"],
      description: "A clean, fresh, and consciously created fragrance for a new generation. This scent champions sustainability with its use of ethically sourced orange peel and a signature heart of 'blue tea' accord, inspired by the butterfly pea flower. It's a light, invigorating, and woody citrus that is simple, honest, and designed for anyone to wear.",
      year: "2020",
      gender: "Unisex"
    },
    {
      id: "ch_men",
      name: "CH Men",
      brand: "Carolina Herrera",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/ch_men.jpg",
      top_notes: ["Grapefruit", "Ginger", "Bergamot"],
      heart_notes: ["Cedar", "Suede", "Violet Leaf"],
      base_notes: ["Leather", "Benzoin", "Amber"],
      description: "A sophisticated and modern leather fragrance for the confident man. It opens with a vibrant sparkle of grapefruit and ginger, which settles into a smooth and elegant heart of suede and violet leaf. The dry-down reveals a rich, warm leather accented by sweet benzoin, creating a scent that is both classic and contemporary, perfect for evening wear.",
      year: "2004",
      gender: "Male"
    },
    {
      id: "carolina_herrera",
      name: "Carolina Herrera",
      brand: "Carolina Herrera",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/carolina_herrera.jpg",
      top_notes: ["Bergamot", "Neroli", "Tuberose"],
      heart_notes: ["Jasmine", "Lily of the Valley", "Rose", "Orange Blossom"],
      base_notes: ["Sandalwood", "Musk", "Cedar"],
      description: "The timeless, elegant fragrance that launched the brand. A classic floral aldehyde from the 80s, it is a grand and opulent bouquet. The heart is a rich tapestry of white flowers, supported by a warm, woody base. It is a powerful, sophisticated, and unmistakably feminine scent that exudes glamour and grace.",
      year: "1988",
      gender: "Female"
    },
    {
      id: "ch_africa_men",
      name: "CH Africa Men",
      brand: "Carolina Herrera",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/ch_africa_men.jpg",
      top_notes: ["Grapefruit", "Black Currant", "Mandarin Orange"],
      heart_notes: ["Ginger", "Cypress", "Fig"],
      base_notes: ["Cedar", "Benzoin", "Musk"],
      description: "A vibrant and spicy-woody fragrance inspired by the energy and warmth of the African continent. It opens with a lively burst of citrus, leading to a heart of spicy ginger and the green, slightly milky scent of fig. The base is a warm and comforting blend of cedar and benzoin. It's a refreshing yet sensual scent for the adventurous spirit.",
      year: "2008",
      gender: "Male"
    },
    {
      id: "casablanca_lily",
      name: "Casablanca Lily",
      brand: "Byredo",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/casablanca_lily.jpg",
      top_notes: ["Gardenia", "Jasmine"],
      heart_notes: ["Lily", "Spices"],
      base_notes: ["Amber", "Vanilla", "Musk"],
      description: "A lush, photorealistic interpretation of the intoxicating Casablanca lily. This scent plunges you into a hothouse filled with the creamy, heady scent of lilies in full bloom. The floral notes are enhanced by a subtle warmth of spices and a soft, comforting base of amber and vanilla, creating a fragrance that is both intensely floral and deeply sensual.",
      year: "2016",
      gender: "Unisex"
    },
    {
      id: "ch",
      name: "CH",
      brand: "Carolina Herrera",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/ch.jpg",
      top_notes: ["Bergamot", "Lemon", "Orange"],
      heart_notes: ["Rose", "Jasmine", "Peach"],
      base_notes: ["Sandalwood", "Musk", "Vanilla"],
      description: "A vibrant and glamorous fruity-floral that embodies the spirit of the modern CH woman. The scent opens with a sparkling citrus cocktail, which gives way to a lush, feminine heart of rose, jasmine, and peach. The dry-down is warm and creamy with sandalwood and vanilla, resulting in a cheerful, confident, and utterly charming fragrance.",
      year: "2008",
      gender: "Female"
    },
    {
      id: "catch_me",
      name: "Catch Me",
      brand: "Cacharel",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/catch_me.jpg",
      top_notes: ["Raspberry", "Pink Pepper", "Mandarin Orange"],
      heart_notes: ["Jasmine", "Freesia", "Violet"],
      base_notes: ["Musk", "Sandalwood", "Cashmeran"],
      description: "A playful and feminine fruity-floral designed for the free-spirited and daring woman. It opens with a sweet and tangy burst of raspberry and mandarin, spiced up with pink pepper. The heart is a delicate bouquet of white flowers, all resting on a soft, sensual base of musk and woods. It's a lighthearted and captivating scent.",
      year: "2012",
      gender: "Female"
    },
    {
      id: "ck_one",
      name: "CK One",
      brand: "Calvin Klein",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/ck_one.jpg",
      top_notes: ["Bergamot", "Cardamom", "Lemon", "Pineapple"],
      heart_notes: ["Jasmine", "Rose", "Violet", "Nutmeg"],
      base_notes: ["Cedar", "Musk", "Oakmoss", "Amber"],
      description: "The revolutionary fragrance that broke down all barriers. A clean, fresh, and universally appealing citrus aromatic. It opens with a bright, invigorating mix of citrus and green notes, leading to a soft floral and spicy heart. The base is clean and woody. It was the first great 'shared' scent and remains a timeless symbol of unity and simplicity.",
      year: "1994",
      gender: "Unisex"
    },
    {
      id: "calvin_klein_man",
      name: "Calvin Klein Man",
      brand: "Calvin Klein",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/calvin_klein_man.jpg",
      top_notes: ["Artemisia", "Bergamot", "Blue Lavender", "Mandarin Orange"],
      heart_notes: ["Geranium", "Sage", "Cardamom", "Coriander"],
      base_notes: ["Cedar", "Leather", "Sandalwood", "Amber"],
      description: "A confident and sophisticated fougère for the modern man. It opens with a classic aromatic blend of lavender and citrus, given a contemporary twist with artemisia. The heart is a complex and spicy mix of herbs, leading to a powerful base of warm woods, leather, and amber. It's a refined and masculine scent suitable for any occasion.",
      year: "2007",
      gender: "Male"
    },
    {
      id: "ch_sport",
      name: "CH Sport",
      brand: "Carolina Herrera",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/ch_sport.jpg",
      top_notes: ["Grapefruit", "Mandarin Orange", "Tarragon"],
      heart_notes: ["Cedar", "Juniper", "Pepper"],
      base_notes: ["Benzoin", "Amber", "Musk"],
      description: "An energetic and fresh interpretation of the classic CH Men. As the name suggests, it's designed for the active, dynamic man. It features a crisp, juicy citrus opening of grapefruit and mandarin, which is complemented by an aromatic heart of juniper and pepper. The base is warm and clean, making it a perfect choice for daytime wear and an instant boost of freshness.",
      year: "2008",
      gender: "Male"
    },
    {
      id: "cerruti_1881",
      name: "1881 Pour Femme",
      brand: "Cerruti",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/cerruti_1881.jpg",
      top_notes: ["Neroli", "Gardenia", "Mandarin Orange"],
      heart_notes: ["Jasmine", "Ylang-Ylang", "Rose", "Freesia"],
      base_notes: ["Sandalwood", "Musk", "Amber"],
      description: "A luminous and elegant floral fragrance that captures the essence of femininity. Inspired by the purity of water and light, it opens with sparkling neroli and gardenia. The heart is a beautiful and complex bouquet of white flowers, while the base provides a soft, sensual warmth. It's a classic, clean, and sophisticated scent for the modern woman.",
      year: "1990",
      gender: "Female"
    },
    {
      id: "carmina",
      name: "Carmina",
      brand: "Creed",
      image: "https://fragrancecode.com/perfume-widget/dist//mocked-images/carmina.jpg",
      top_notes: ["Cherry", "Saffron", "Pink Pepper"],
      heart_notes: ["Rose", "Geranium", "Peony"],
      base_notes: ["Leather", "Amyris", "Vanilla", "Musk"],
      description: "A bold and passionate fruity-floral from the legendary house of Creed. Carmina opens with a stunning, luscious cherry note, immediately setting a tone of vibrant intensity. This is wrapped in a bouquet of Bulgarian rose and peony, sitting on a luxurious base of soft leather and warm vanilla. It's a modern, daring, and utterly feminine fragrance with a rock-and-roll edge.",
      year: "2021",
      gender: "Female"
    }
  ] ,

  // ===== ENHANCED SEARCH FUNCTION =====
  search: function(query) {
    if (!query || query.length < 2) return [];
    
    const results = [];
    const queryLower = query.toLowerCase().trim();
    const queryWords = queryLower.split(/\s+/).filter(word => word.length > 1);
    
    // Search through all brands
    for (let brandKey in this) {
      if (Array.isArray(this[brandKey])) {
        this[brandKey].forEach(perfume => {
          // Create searchable text (name + brand + year)
          const searchableText = `${perfume.name} ${perfume.brand} ${perfume.year}`.toLowerCase();
          
          // Check if ALL query words are in the searchable text (for multi-word queries)
          const allWordsMatch = queryWords.every(word => searchableText.includes(word));
          
          // Check if the full query is in the name or brand
          const fullMatch = searchableText.includes(queryLower);
          
          // Check if it's a brand match (for queries like "dior")
          const brandMatch = perfume.brand.toLowerCase().includes(queryLower);
          
          // Check if it's a name match with partial words
          const nameWords = perfume.name.toLowerCase().split(/\s+/);
          const wordMatch = nameWords.some(word => 
            word.includes(queryLower) || queryWords.some(q => word.includes(q))
          );
          
          // Prioritize results
          if (fullMatch || brandMatch || allWordsMatch || wordMatch) {
            // Calculate a relevance score for sorting
            let score = 0;
            if (fullMatch) score += 100;
            if (brandMatch && queryLower === perfume.brand.toLowerCase()) score += 80;
            if (brandMatch) score += 50;
            if (allWordsMatch) score += 40;
            if (wordMatch) score += 20;
            
            results.push({
              ...perfume,
              matchScore: score
            });
          }
        });
      }
    }
    
    // Sort by relevance score (higher first)
    return results.sort((a, b) => b.matchScore - a.matchScore);
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

console.log('✓ PerfumeCatalog loaded with enhanced search');
console.log('Brands available:', Object.keys(window.PerfumeCatalog).filter(key => Array.isArray(window.PerfumeCatalog[key])));
