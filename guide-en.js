/* Farmer's guide — English content. Block types: h, p, list, steps, cards, acc, table, warn, prod */
window.GUIDE = window.GUIDE || {};
window.GUIDE.en = {
  eyebrow: "Farmer’s guide",
  title: "What every poultry farmer needs, in one place",
  intro: "A reviewed summary of poultry diseases in Egypt, husbandry and disinfection, vaccination, antibiotics and withdrawal periods, herbal additives, feed formulation and the most used medicines. Tap any heading to open its details.",
  disclaimer: "This information is for guidance only and does not replace a veterinarian. The binding dose and withdrawal period are those on the leaflet of the product registered in Egypt, and the final vaccination programme should be set by a vet based on region, maternal immunity and laboratory results.",
  open: "Tap for details", close: "Close", all: "All",
  filters: [["broiler", "Broilers"], ["layer", "Layers"], ["breeder", "Breeders"]],
  sourcesT: "References & sources",
  imgT: "Image credits (Wikimedia Commons)",
  search: {
    ph: "Search a disease, drug, vaccine, herb or product…",
    hint: "Type in English or Arabic – small spelling mistakes are fine",
    popularT: "Popular searches:",
    popular: ["Newcastle", "Gumboro", "Coccidiosis", "Withdrawal period", "Enrofloxacin", "Disinfection", "Black seed", "Mycotoxins", "Layer vaccination"],
    none: "No results. Try a simpler word or the active ingredient name.",
    count: "results", fuzzy: "No exact match – closest results:", clear: "Clear",
    products: "Products"
  },
  tabs: [

  { id: "diseases", img: "b-diseases", icon: "virus", title: "Poultry diseases in Egypt", sub: "Broilers · Layers · Breeders",
    intro: "The biggest problem on Egyptian farms is the respiratory disease complex: H9N2 influenza together with infectious bronchitis (the Egyptian Variant 2), Newcastle disease (genotype VII) and mycoplasma, with secondary E. coli. Mixed infections raise mortality and weaken vaccine responses. Use the filter to show each production type.",
    blocks: [
      { t: "cards", items: [
        ["Broilers", "Most important: the respiratory complex, Gumboro, inclusion body hepatitis (adenovirus), coccidiosis, necrotic enteritis, E. coli and heat stress."],
        ["Layers", "Most important: H5 and H9 influenza, Newcastle, infectious bronchitis (egg drop and shell defects), coryza, mycoplasma, EDS, fowl pox, red mite and mycotoxins."],
        ["Breeders", "Everything that affects layers, plus egg-transmitted diseases: mycoplasma, salmonella, chicken anaemia, reovirus and avian encephalomyelitis (AE)."]
      ]},
      { t: "h", x: "Viral diseases" },
      { t: "acc", items: [
        { img: "d-hpai", h: "Highly pathogenic avian influenza (H5N1 / H5N8)", tags: ["broiler", "layer", "breeder"], rows: [
          ["Cause", "Influenza A, subtype H5. Endemic in Egypt since 2006; H5N8 clade 2.3.4.4b viruses since 2016–2017, with several genotypes."],
          ["Signs", "Sudden, very high mortality, cyanotic comb and wattles, swollen head, haemorrhages on the shanks, sharp egg drop, sometimes nervous signs."],
          ["Prevention & control", "No treatment. Strict biosecurity, killed H5 vaccine per programme, and immediate reporting to the veterinary authority (GOVS). Current vaccines reduce mortality but do not fully stop virus shedding."]]},
        { img: "d-h9", h: "Low pathogenic avian influenza (H9N2)", tags: ["broiler", "layer", "breeder"], rows: [
          ["Cause", "H9N2, endemic in Egypt since 2011, often found together with H5 on the same farm."],
          ["Signs", "Respiratory signs (sneezing, rales, swollen sinuses), depression, egg drop. Mortality rises sharply with IB, mycoplasma or E. coli co-infection."],
          ["Prevention", "Killed H9 vaccine, good ventilation, low ammonia, and control of secondary bacteria."]]},
        { img: "d-nd", h: "Newcastle disease (genotype VII)", tags: ["broiler", "layer", "breeder"], rows: [
          ["Cause", "Virulent Newcastle disease virus; genotype VII dominates in Egypt despite intensive vaccination."],
          ["Signs", "Respiratory signs, green diarrhoea, nervous signs (twisted neck, paralysis), haemorrhages in the proventriculus; in layers a sharp drop and misshapen or shell-less eggs."],
          ["Prevention", "Programmes combining live and killed vaccines, titre monitoring by HI or ELISA, and revaccination of layers about every 6–8 weeks based on serology."]]},
        { img: "d-ib", h: "Infectious bronchitis (classic and Egyptian Variant 2)", tags: ["broiler", "layer", "breeder"], rows: [
          ["Cause", "Avian coronavirus. Classic strains and the EGY/Variant II lineage circulate; a classic vaccine alone does not protect well enough against the variant."],
          ["Signs", "Rales and sneezing; some strains cause nephritis (white urates and deaths). In layers: egg drop, thin or misshapen shells, watery albumen. Infection of very young chicks can cause ‘false layers’."],
          ["Prevention", "A classic vaccine (e.g. H120) combined with a suitable variant vaccine, correct spacing of live vaccines, and a killed vaccine before lay in layers and breeders."]]},
        { img: "d-ibd", h: "Gumboro / infectious bursal disease (very virulent IBD)", tags: ["broiler", "layer"], rows: [
          ["Cause", "A virus that destroys the bursa of Fabricius (the immune organ); very common in Egypt."],
          ["Signs", "Usually 3–6 weeks of age: depression, ruffled feathers, white watery diarrhoea, haemorrhages in thigh and breast muscle, swollen then atrophied bursa. The worst effect is immunosuppression and failure of other vaccines."],
          ["Prevention", "Good maternal immunity from breeders, timing vaccination by ELISA, and using intermediate-plus, immune-complex or vector (HVT-IBD) vaccines at the hatchery."]]},
        { img: "d-marek", h: "Marek’s disease", tags: ["layer", "breeder"], rows: [
          ["Cause", "A tumour-causing herpesvirus, most serious in long-lived birds."],
          ["Signs", "Paralysis of a leg or wing (‘split legs’), grey eye, internal tumours, ongoing mortality."],
          ["Prevention", "Day-old vaccination at the hatchery (HVT + Rispens) and strict hygiene during brooding, because early exposure before immunity develops is the danger."]]},
        { h: "Inclusion body hepatitis & hydropericardium (fowl adenovirus)", tags: ["broiler", "breeder"], rows: [
          ["Cause", "Fowl adenoviruses. Serotypes 8a and 2/11 are widespread in Egypt, with emerging 1, 3 and 8b; highest in Delta governorates and in broilers."],
          ["Signs", "Sudden mortality at 3–6 weeks, pale or yellow friable liver with haemorrhages, fluid around the heart in hydropericardium syndrome."],
          ["Prevention", "Breeder vaccination (with a matching serotype where available) and control of immunosuppression – Gumboro, chicken anaemia and mycotoxins – plus biosecurity."]]},
        { img: "d-cav", h: "Chicken infectious anaemia (CAV)", tags: ["broiler", "breeder"], rows: [
          ["Cause", "A virus transmitted vertically from breeders to chicks."],
          ["Signs", "Anaemia and paleness, ‘blue wing’ (skin haemorrhages), immunosuppression that opens the door to adenovirus and E. coli."],
          ["Prevention", "Vaccinate breeders well before the start of lay."]]},
        { img: "d-ilt", h: "Infectious laryngotracheitis (ILT)", tags: ["layer", "breeder", "broiler"], rows: [
          ["Signs", "Severe gasping with extended neck, coughing up bloody mucus, conjunctivitis, egg drop."],
          ["Prevention", "Vaccine only in endemic areas and under veterinary supervision (live or vector vaccine), with biosecurity and no mixing of ages."]]},
        { h: "Avian metapneumovirus (swollen head syndrome)", tags: ["broiler", "layer", "breeder"], rows: [
          ["Signs", "Swollen head and sinuses, watery eyes, mild nervous signs, usually with secondary E. coli; egg drop and shell defects in layers."],
          ["Prevention", "Vaccination of layers and breeders (live then killed), good ventilation and ammonia control."]]},
        { img: "d-eds", h: "Egg drop syndrome (EDS-76)", tags: ["layer", "breeder"], rows: [
          ["Signs", "Birds look healthy but lay thin-shelled, shell-less or pale eggs, with a production drop."],
          ["Prevention", "Killed vaccine (usually combined with ND and IB) before lay."]]},
        { img: "d-pox", h: "Fowl pox", tags: ["layer", "breeder"], rows: [
          ["Signs", "Dry form: scabs on comb and wattles. Wet form: yellow membranes in the mouth and throat that can suffocate the bird."],
          ["Prevention", "Wing-web vaccination and mosquito control."]]},
        { img: "d-ae", h: "Avian encephalomyelitis (AE)", tags: ["layer", "breeder"], rows: [
          ["Signs", "Head and neck tremors and incoordination in chicks of 1–3 weeks; a temporary egg drop in layers."],
          ["Prevention", "Vaccinate pullets at 10–14 weeks, before lay; essential in breeders to protect the chicks."]]},
        { h: "Reovirus (tenosynovitis & malabsorption)", tags: ["broiler", "breeder"], rows: [
          ["Signs", "Lameness, swollen hocks, ruptured tendons, uneven growth and malabsorption in broilers."],
          ["Prevention", "Breeder vaccination (live then killed) to pass immunity to the chick."]]}
      ]},
      { t: "h", x: "Bacterial diseases" },
      { t: "acc", items: [
        { img: "d-ecoli", h: "Colibacillosis (E. coli)", tags: ["broiler", "layer", "breeder"], rows: [
          ["Why it matters", "The most common bacterial disease, usually secondary to respiratory viruses, mycoplasma or high ammonia."],
          ["Signs", "Airsacculitis, white fibrin on heart and liver, navel infection in chicks, salpingitis and peritonitis in layers."],
          ["Control", "Hatchery and water hygiene, good ventilation, control of the primary cause, live E. coli vaccines in layers and breeders. Antibiotics only after sensitivity testing, as resistance in Egypt is very high."]]},
        { img: "d-mg", h: "Mycoplasma (MG and MS)", tags: ["broiler", "layer", "breeder"], rows: [
          ["Signs", "MG: chronic respiratory disease (rales, swollen sinuses, egg drop). MS: lameness, synovitis and eggshell apex abnormalities."],
          ["Note", "Transmitted vertically from breeders, so mycoplasma-free breeder flocks are the foundation."],
          ["Control", "Monitored free breeders, live or killed vaccines in layers, and effective drugs such as tylosin, tilmicosin, tiamulin and tylvalosin."]]},
        { img: "d-salmonella", h: "Salmonella (pullorum, typhoid, SE and ST)", tags: ["breeder", "layer", "broiler"], rows: [
          ["Signs", "Pullorum: chick deaths with white diarrhoea and pasted vents. Typhoid: deaths in adults with bronze liver. SE and ST: a human health risk through eggs and meat."],
          ["Control", "Testing breeders and removing positives, salmonella vaccines, rodent control, and heat- or acid-treated clean feed."]]},
        { h: "Infectious coryza", tags: ["layer", "breeder"], rows: [
          ["Signs", "Facial swelling, foul-smelling nasal discharge, watery eyes and a clear egg drop."],
          ["Control", "Two doses of killed vaccine before lay, all-in/all-out, and treatment based on sensitivity (e.g. trimethoprim-sulfa or erythromycin)."]]},
        { h: "ORT (Ornithobacterium)", tags: ["broiler", "breeder"], rows: [
          ["Signs", "Pneumonia and airsacculitis, worse with ND, IB and metapneumovirus."],
          ["Control", "Breeder vaccination; many strains are resistant, so sensitivity testing is needed."]]},
        { img: "d-cholera", h: "Fowl cholera", tags: ["layer", "breeder"], rows: [
          ["Signs", "Sudden deaths in adult birds, swollen wattles, green diarrhoea."],
          ["Control", "Rodent and wildlife control, vaccination in endemic areas, treatment based on sensitivity."]]},
        { img: "d-ne", h: "Necrotic enteritis", tags: ["broiler"], rows: [
          ["Cause", "Clostridium perfringens, usually after coccidiosis or with high-protein feed or wheat/barley diets without enzymes."],
          ["Signs", "Sudden deaths at 2–6 weeks, dark diarrhoea, distended intestine with an ulcerated lining. The subclinical form ruins FCR."],
          ["Prevention", "Coccidiosis control, gut-health products (probiotics, organic acids, phytogenics) and dry litter."]]}
      ]},
      { t: "h", x: "Parasitic, fungal, nutritional and environmental" },
      { t: "acc", items: [
        { img: "d-cocci", h: "Coccidiosis", tags: ["broiler", "layer", "breeder"], rows: [
          ["Signs", "Bloody droppings (especially caecal E. tenella), poor growth and worse FCR even without visible signs."],
          ["Prevention", "In-feed anticoccidials in shuttle or rotation programmes, or coccidiosis vaccine, plus dry litter. Treatment with amprolium, toltrazuril or sulfonamides under veterinary supervision."],
          ["Our products", "Emistop Premix Vet (diclazuril) and Madumix Vet (maduramycin)."]]},
        { img: "d-worms", h: "Internal worms", tags: ["layer", "breeder"], rows: [
          ["Types", "Ascaridia, Heterakis, Capillaria and tapeworms, especially on floor systems."],
          ["Control", "Regular deworming with a product registered for layers, and control of beetles and insects that act as intermediate hosts."]]},
        { img: "d-mite", h: "Red mite and external parasites", tags: ["layer", "breeder"], rows: [
          ["Signs", "Anaemia, night-time restlessness, egg drop and blood spots on eggs."],
          ["Control", "Cleaning between flocks and acaricides registered for use in layers only."]]},
        { img: "d-asper", h: "Aspergillosis (fungal pneumonia)", tags: ["broiler", "layer", "breeder"], rows: [
          ["Signs", "Open-mouth breathing in young chicks, yellow nodules in lungs and air sacs."],
          ["Prevention", "Dry, mould-free litter and hatchery hygiene. No economically effective treatment."]]},
        { img: "d-myco", h: "Mycotoxins", tags: ["broiler", "layer", "breeder"], rows: [
          ["Types", "Aflatoxin, ochratoxin, fumonisin, DON and T-2, mostly from poorly stored maize and raw materials."],
          ["Effect", "Immunosuppression and vaccine failure, liver and kidney damage, oral lesions, poorer growth and egg production."],
          ["Prevention", "Maize below 14% moisture, good storage, mould inhibitor in feed, and toxin binders (clays, zeolite, yeast cell wall)."],
          ["Our products", "Imerys BZF (clinoptilolite) and Echomos (yeast cell wall)."]]},
        { h: "Ascites and sudden death syndrome", tags: ["broiler"], rows: [
          ["Cause", "Fast growth with low oxygen, especially in winter with poor ventilation."],
          ["Prevention", "Adequate minimum ventilation even in cold weather, a lighting programme with darkness, and avoiding excessive energy early on."]]},
        { h: "Heat stress", tags: ["broiler", "layer", "breeder"], rows: [
          ["Signs", "Panting and spread wings, low feed intake, high mortality in heavy birds, egg drop and weak shells."],
          ["Control", "Tunnel ventilation and cooling pads, cool water, electrolytes and vitamin C, feeding in cooler hours, and lower stocking density in summer."]]}
      ]}
    ]},

  { id: "care", img: "b-care", icon: "shield", title: "Husbandry & disinfection", sub: "Brooding · Ventilation · Biosecurity",
    intro: "Prevention is cheaper than treatment. Most farm problems start with a mistake in brooding, ventilation or house hygiene between flocks.",
    blocks: [
      { t: "h", x: "Preparing for chick placement" },
      { t: "list", items: [
        "House cleaned, disinfected and rested for at least 14 days after disinfection.",
        "Pre-heat 24–48 hours before arrival (longer in winter) until floor and litter are warm.",
        "Clean, dry, mould-free litter 5–10 cm deep (shavings or chopped straw).",
        "Flush and fill water lines with clean water; feed and water within reach of chicks from the first hour.",
        "Check chicks on arrival: closed navels, activity, even weight, vent temperature about 40–40.6 °C."
      ]},
      { t: "table", cap: "Guide brooding temperatures for broilers (at chick level)", head: ["Age", "Temperature", "Notes"], rows: [
        ["Days 1–3", "32–33 °C", "Humidity 60–70%"],
        ["Week 1", "30–32 °C", "Watch chick spread: huddling = cold, avoiding the heater = hot"],
        ["Week 2", "28–29 °C", ""],
        ["Week 3", "25–26 °C", ""],
        ["Week 4", "22–24 °C", ""],
        ["After", "19–21 °C", "Perceived temperature depends on humidity and air speed"]
      ]},
      { t: "gallery", items: [["g-chicks", "Broiler chicks on clean, dry litter in the first days of brooding"], ["g-layers", "A caged layer house: hygiene and ventilation underpin production"], ["g-eggs", "Table eggs: shell quality reflects health and nutrition"]] },
      { t: "h", x: "Daily husbandry essentials" },
      { t: "cards", items: [
        ["Ventilation", "Ammonia below 10 ppm and never above 20–25 ppm; CO2 below 3,000 ppm. Minimum ventilation is needed even in cold weather."],
        ["Water", "Birds drink about 1.8–2 times their feed weight (more in heat). Clean, cool water, pH 6–7.5, 2–3 ppm free chlorine at the end of the line, free of bacteria."],
        ["Lighting – broilers", "23 hours of light in week 1, then at least 4–6 hours of darkness until 3 days before sale. This reduces sudden death and leg problems."],
        ["Lighting – layers", "Gradual reduction during rearing to a constant 10–12 hours, then stimulation at target weight (16–18 weeks) by 30–60 minutes a week up to 16 hours. Never reduce light in lay."],
        ["Stocking density", "Broilers in open houses: about 10 birds/m². Controlled houses: 14–16 birds/m² (about 34–38 kg/m²). Reduce density in summer."],
        ["Feeders & drinkers", "Nipples: 10–12 broilers per nipple. Bell drinkers: one per 80–100 birds. Pan feeders: one per 50–70 birds. Raise them as birds grow."],
        ["Litter", "20–30% moisture. Wet litter is a main cause of coccidiosis, ammonia, leg problems and breast burns."],
        ["Monitoring", "Record mortality, feed, water and weights daily. First-week mortality should stay below 1%; falling water intake is the first sign of disease."]
      ]},
      { t: "h", x: "Layers and breeders" },
      { t: "list", items: [
        "Weigh weekly and aim for uniformity above 80–85%.",
        "Breeders: restrict feed according to the breed guide, and feed males separately from females.",
        "Collect eggs at least 4 times a day; sanitise hatching eggs and store them at 16–18 °C.",
        "Control red mite and rodents regularly."
      ]},
      { t: "h", x: "The pillars of biosecurity" },
      { t: "cards", items: [
        ["Isolation", "A fence around the farm, enough distance from other farms, all-in/all-out and no mixing of ages."],
        ["Access control", "One entrance, shower and change of clothes and boots, no unnecessary visits. Workers do not work on other farms."],
        ["Footbaths & disinfection", "A footbath at every house, changed daily, and wheel spraying at the gate."],
        ["Rodents & wild birds", "Mesh on openings, rodent bait stations, and no weeds or spilled feed around houses."],
        ["Dead birds", "Daily disposal by incineration or a sanitary pit away from the houses; never sold or thrown into canals."],
        ["Records", "Log visitors, vaccinations, medicines and batch numbers."]
      ]},
      { t: "h", x: "Cleaning & disinfection after depopulation" },
      { t: "steps", items: [
        "Spray insecticide while the house is still warm, before removing litter.",
        "Remove leftover feed and litter away from the farm.",
        "Dry clean: sweep, remove dust and cobwebs from roof and fans.",
        "Soak and wash with detergent at high pressure from roof to floor. Disinfectant does not work on dirty surfaces.",
        "Rinse and dry completely.",
        "Apply disinfectant at the label concentration, covering all surfaces and equipment.",
        "Clean water lines internally with a suitable product (e.g. hydrogen peroxide), then flush.",
        "Lime-wash walls and floors and repair cracks.",
        "Fumigation (where used and permitted): warm house (at least 21 °C), humidity above 65%, sealed for 24 hours, no entry until ventilated. Done by trained staff only – formaldehyde is hazardous to people.",
        "Rest the house at least 14 days; ideally take swabs to confirm disinfection worked."
      ]},
      { t: "table", cap: "Common disinfectants and their uses", head: ["Group", "Strengths", "Weaknesses", "Use"], rows: [
        ["Quaternary ammonium", "Safe, non-irritant, cheap", "Weak with organic matter and hard water", "Clean surfaces, footbaths, equipment"],
        ["Glutaraldehyde (often with quats)", "Broad activity on viruses and bacteria", "Irritant", "House disinfection between flocks"],
        ["Phenolics", "Work in presence of organic matter", "Strong odour, relatively toxic", "Footbaths and floors"],
        ["Iodophors", "Fast, broad spectrum", "Inactivated by organic matter, stains", "Footbaths, hands, equipment"],
        ["Peroxygens (e.g. potassium monopersulfate)", "Strong against viruses including influenza", "Corrode metals", "Houses and outbreak spraying"],
        ["Chlorine", "Cheap, suitable for water", "Inactivated by organic matter, corrodes metal", "Water treatment and clean surfaces"],
        ["Quicklime / hydrated lime", "Cheap, raises pH", "Needs a clean surface", "Floors, walls, walkways"],
        ["Formaldehyde (fumigation)", "Reaches cracks", "Very hazardous to people", "Empty sealed houses and hatcheries"]
      ]},
      { t: "warn", x: "Never mix two disinfectants (e.g. chlorine with acids or ammonia), and respect the label concentration and contact time." }
    ]},

  { id: "vaccines", img: "b-vaccines", icon: "syringe", title: "Vaccination programmes", sub: "Broilers · Layers · Breeders",
    intro: "The programmes below are example programmes commonly used in Egypt. The right programme for your farm depends on maternal immunity (breeder certificate or chick testing), the diseases in your area and serology results (HI or ELISA).",
    blocks: [
      { t: "gallery", items: [["g-vacc3", "Subcutaneous injection with clean, sterile equipment"], ["g-vacc2", "Vaccinating bird by bird ensures every bird gets its dose"], ["g-syringe", "Keep vaccine at 2–8 °C and prepare it just before use"]] },
      { t: "table", cap: "Example broiler programme", head: ["Age", "Vaccine", "Route", "Notes"], rows: [
        ["Day 1 (hatchery)", "ND + classic IB (live)", "Spray", "Sometimes a vector vaccine (HVT-ND or HVT-IBD) by injection or in ovo"],
        ["Days 7–10", "Killed H5 influenza (± H9 ± ND)", "Subcutaneous, neck", "Dose per leaflet (usually 0.3–0.5 ml)"],
        ["Days 7–8", "Live ND + IB variant", "Eye drop or drinking water", "Important in Egypt because of the Variant 2 strain"],
        ["Days 12–14", "Intermediate-plus Gumboro", "Drinking water", "Best timed by ELISA. Not given if a vector or immune-complex vaccine was used"],
        ["Days 17–18", "Live ND (LaSota or Clone)", "Drinking water or spray", "Booster"],
        ["Days 21–24", "Second Gumboro / ND booster", "Drinking water", "Only in high-risk areas or long cycles"]
      ]},
      { t: "table", cap: "Example commercial layer programme", head: ["Age", "Vaccine", "Route"], rows: [
        ["Day 1 (hatchery)", "Marek’s (HVT + Rispens) + live ND and IB (coccidiosis vaccine optional)", "Injection + spray"],
        ["Days 7–10", "Live ND and IB (classic + variant) + killed H5 and H9 influenza", "Eye drop + injection"],
        ["Day 14", "Gumboro (1st dose)", "Drinking water"],
        ["Days 18–21", "Live ND and IB (booster)", "Water or spray"],
        ["Days 24–28", "Gumboro (2nd dose)", "Drinking water"],
        ["Weeks 5–6", "ND LaSota + IB, and repeat killed influenza per programme", "Water + injection"],
        ["Weeks 6–8", "Fowl pox, ILT (endemic areas only), live mycoplasma (if in programme)", "Wing web + eye drop"],
        ["Weeks 8–10", "Killed coryza (1st), live metapneumovirus, live ND and IB", "Injection + water"],
        ["Weeks 10–12", "AE (encephalomyelitis), often with pox", "Wing web or water"],
        ["Weeks 12–14", "Killed coryza (2nd), killed H5 and H9 booster, live ND and IB", "Injection + water"],
        ["Weeks 16–18", "Final killed vaccine: ND + IB + EDS (± metapneumovirus), and killed H5 and H9", "Intramuscular or subcutaneous"],
        ["In lay", "Live ND every 6–8 weeks, IB per serology, influenza booster around weeks 35–45 per titres", "Water or spray + injection"]
      ]},
      { t: "table", cap: "Additions for breeders (on top of the layer programme)", head: ["Vaccine", "Approximate timing", "Purpose"], rows: [
        ["Reovirus", "Live weeks 1–2 and 6–8, killed weeks 16–18", "Chick immunity against tenosynovitis"],
        ["Chicken anaemia (CAV)", "Live weeks 8–14 (at least 4–6 weeks before lay)", "Prevent vertical transmission"],
        ["Killed Gumboro", "Weeks 16–18", "Strong maternal immunity for chicks"],
        ["Fowl adenovirus (killed)", "Weeks 10–16 depending on local serotype", "Protect chicks against hepatitis"],
        ["Salmonella (SE and ST)", "Live day 1 and weeks 6–8, killed weeks 12–16", "Breeder protection and public health"],
        ["E. coli and ORT", "According to farm problems", "Reduce secondary infections"]
      ]},
      { t: "h", x: "Rules for successful vaccination" },
      { t: "list", items: [
        "Cold chain: store vaccines at 2–8 °C, never frozen or in sunlight.",
        "Stop chlorine and disinfectants in water 48 hours before and 24 hours after vaccination.",
        "Withhold water 1–2 hours (depending on weather), add skimmed milk powder 2.5 g/L or a vaccine stabiliser, and give a volume consumed within 1.5–2 hours.",
        "Eye drop: a full drop in one eye of every bird. Spray: droplet size suited to age.",
        "Injection: clean sterile syringes, change needles regularly, killed vaccine at room temperature.",
        "Do not vaccinate sick or stressed birds; record vaccine name, batch number and date.",
        "Check immunity by serology 3–4 weeks after key vaccines, especially in layers and breeders."
      ]},
      { t: "warn", x: "Too many or too closely spaced live respiratory vaccines cause reactions and respiratory stress that open the door to E. coli. A balanced programme matters more than the number of vaccines." }
    ]},

  { id: "antibiotics", img: "b-antibiotics", icon: "pill", title: "Antibiotics & withdrawal periods", sub: "Responsible use",
    intro: "The withdrawal period is the time between the last dose and slaughter or egg use, so that no drug residues reach consumers. Values in the table are the ranges commonly seen on product labels internationally; the binding value is the one on the leaflet of the product in your hand.",
    blocks: [
      { t: "h", x: "Rules for responsible use" },
      { t: "list", items: [
        "Antibiotics do not treat viruses. Use them only for a diagnosed bacterial infection, ideally after sensitivity testing.",
        "Calculate the dose in mg per kg body weight, not only ‘ml per litre’, because water intake changes with temperature and age.",
        "Complete the course (usually 3–5 days) and do not mix incompatible drugs in the same water.",
        "Most antibiotics are not allowed in layers producing eggs for consumption unless the label explicitly permits it.",
        "Colistin and fluoroquinolones (e.g. enrofloxacin) are critically important for human medicine – use them as a last resort, never for prevention.",
        "Record the drug, dose, last dose date and withdrawal period for every flock."
      ]},
      { t: "table", cap: "Common antibiotics in poultry", head: ["Active ingredient", "Group", "Main uses", "Meat withdrawal (typical range)", "Layers"], rows: [
        ["Amoxicillin", "Penicillins", "E. coli, clostridia, secondary infections", "1–5 days", "Usually not allowed"],
        ["Ampicillin", "Penicillins", "E. coli, salmonella", "1–5 days", "Usually not allowed"],
        ["Doxycycline", "Tetracyclines", "Mycoplasma, E. coli, coryza", "5–12 days", "Not allowed"],
        ["Oxytetracycline", "Tetracyclines", "Broad spectrum", "5–7 days", "Per label"],
        ["Tylosin", "Macrolides", "Mycoplasma, necrotic enteritis", "1–5 days", "Some products 0 days"],
        ["Tilmicosin", "Macrolides", "Mycoplasma, ORT", "About 12 days", "Not allowed"],
        ["Tylvalosin", "Macrolides", "Mycoplasma", "About 2 days", "Some products 0 days"],
        ["Tiamulin", "Pleuromutilins", "Mycoplasma MG and MS", "2–5 days", "Some products 0 days"],
        ["Lincomycin + spectinomycin", "Lincosamides", "Mycoplasma, E. coli, clostridia", "About 5 days", "Usually not allowed"],
        ["Enrofloxacin", "Fluoroquinolones", "E. coli, mycoplasma, salmonella", "7–9 days", "Prohibited in layers"],
        ["Levofloxacin", "Fluoroquinolones (3rd generation)", "E. coli, mycoplasma, salmonella, coryza", "Per label", "Prohibited in layers"],
        ["Norfloxacin", "Fluoroquinolones", "E. coli, salmonella, gut infections", "Per label", "Prohibited in layers"],
        ["Fosfomycin", "Phosphonates", "E. coli, salmonella, secondary gut and respiratory infections (sometimes with tylosin)", "Per label", "Usually not allowed"],
        ["Colistin", "Polymyxins", "Gut E. coli and salmonella", "1–7 days", "Some products 0 days"],
        ["Florfenicol", "Phenicols", "E. coli, ORT, coryza", "About 5 days (where licensed)", "Not allowed"],
        ["Sulfonamide + trimethoprim", "Sulfonamides", "Coryza, cholera, E. coli, coccidiosis", "5–12 days", "Usually not allowed"],
        ["Neomycin", "Aminoglycosides", "Gut infections (not absorbed)", "Per label", "Per label"],
        ["Gentamicin", "Aminoglycosides", "Hatchery injection only", "Per label", "—"]
      ]},
      { t: "warn", x: "Enrofloxacin, levofloxacin and norfloxacin belong to the same group and share resistance: if one fails, the others usually fail too, so don’t try them one after another. Levofloxacin is primarily a human medicine and is not licensed for animals in many countries, and fosfomycin is also classed by the WHO as critically important for human medicine. Use all four only after sensitivity testing." },
      { t: "warn", x: "Important: tiamulin must not be used with monensin, salinomycin or narasin (in feed) during treatment or for at least 7 days before and after, as it causes a toxicosis like ionophore poisoning (paralysis and death). With maduramycin it can cause temporary growth depression. Tell the feed mill before using it." },
      { t: "h", x: "Substances banned in food-producing animals" },
      { t: "cards", items: [
        ["Chloramphenicol", "Banned internationally in food animals because even trace residues can cause fatal bone-marrow failure in people."],
        ["Nitrofurans", "Such as furazolidone and nitrofurazone: banned because they are carcinogenic with no safe residue level."],
        ["Nitroimidazoles", "Such as metronidazole and dimetridazole: banned in poultry."],
        ["Amantadine", "A human antiviral. Its use in poultry is prohibited and creates resistant influenza viruses."]
      ]}
    ]},

  { id: "herbs", img: "b-herbs", icon: "leaf", title: "Herbs & plant extracts", sub: "Prevention and support",
    intro: "Phytogenic additives are a promising alternative to growth promoters, with antibacterial, antioxidant and immune-supporting effects. But study results are inconsistent, doses are not standardised and product quality varies. They complement biosecurity and vaccination; they do not replace treatment.",
    blocks: [
      { t: "table", view: "cards", imgs: ["h-thyme", "h-garlic", "h-nigella", "h-turmeric", "h-cinnamon", "h-ginger", "h-yucca", "h-quillaja", "h-artemisia", "h-milkthistle", "h-eucalyptus", "h-anise", "h-rosemary", "h-greentea", "h-moringa", "h-paprika", "h-licorice", "h-echinacea"], cap: "Commonly used herbs and extracts", head: ["Herb / extract", "Active compound", "Uses", "Strength of evidence"], rows: [
        ["Thyme & oregano", "Thymol, carvacrol", "Antibacterial (clostridia, E. coli), coccidiosis support, gut barrier", "Good"],
        ["Garlic", "Allicin", "Antibacterial, immune support, resistance to E. acervulina", "Moderate"],
        ["Black seed (Nigella sativa)", "Thymoquinone", "Immune support, antioxidant, liver protection", "Moderate"],
        ["Turmeric", "Curcumin", "Antioxidant and anti-inflammatory, liver protection against aflatoxin, inhibits coccidia", "Moderate"],
        ["Cinnamon", "Cinnamaldehyde", "Antibacterial, gut health and growth", "Moderate"],
        ["Ginger", "Gingerols", "Digestion, antioxidant, heat-stress relief", "Limited to moderate"],
        ["Yucca schidigera", "Saponins", "Lower ammonia in house and droppings", "Good"],
        ["Quillaja", "Saponins", "Coccidiosis support, immune support", "Moderate"],
        ["Sweet wormwood (Artemisia annua)", "Artemisinin", "Anticoccidial", "Moderate (experimental)"],
        ["Milk thistle", "Silymarin", "Liver protection against mycotoxins", "Moderate"],
        ["Eucalyptus & mint", "Cineole, menthol", "Expectorant, soothes the airways", "Limited (widely used)"],
        ["Anise & fennel", "Anethole", "Appetite and digestion", "Limited"],
        ["Rosemary", "Carnosic acid", "Antioxidant", "Limited to moderate"],
        ["Green tea", "Catechins", "Antioxidant", "Limited"],
        ["Moringa", "Protein, vitamins, flavonoids", "Antioxidant and nutritional value", "Limited"],
        ["Red pepper & paprika", "Capsaicin, carotenoids", "Appetite, yolk colour", "Good (for colour)"],
        ["Liquorice", "Glycyrrhizin", "Liver and respiratory support", "Limited"],
        ["Echinacea", "Polysaccharides", "Immune support", "Limited"]
      ]},
      { t: "h", x: "Tips for use" },
      { t: "list", items: [
        "Use registered products with a known concentration of active compound – essential oils evaporate and oxidise.",
        "High doses of essential oils can irritate the gut and reduce drinking; stick to the manufacturer’s dose.",
        "Some oils react with plastic lines and drinkers; flush lines after use.",
        "The best results come from continuous preventive use, not after disease appears.",
        "Do not use them instead of antibiotics in a diagnosed acute bacterial infection."
      ]}
    ]},

  { id: "feed", img: "b-feed", icon: "grain", title: "Feed formulation & additives", sub: "Requirements · Ingredients · Additives",
    intro: "Feed is 60–70% of production cost. A correct ration is calculated from actual ingredient analysis and the breed’s requirements, ideally with formulation software and a nutritionist.",
    blocks: [
      { t: "table", cap: "Guide requirements for broilers (corn–soy)", head: ["Nutrient", "Starter (0–10 d)", "Grower (11–24 d)", "Finisher (25 d – sale)"], rows: [
        ["Metabolisable energy (kcal/kg)", "2950–3000", "3050–3100", "3150–3200"],
        ["Crude protein %", "22–23", "20–21", "18.5–19.5"],
        ["Digestible lysine %", "1.28–1.32", "1.15–1.18", "1.03–1.08"],
        ["Digestible Met + Cys %", "0.95–0.98", "0.87–0.90", "0.80–0.84"],
        ["Calcium %", "0.90–0.96", "0.80–0.87", "0.70–0.78"],
        ["Available phosphorus %", "0.45–0.50", "0.40–0.44", "0.35–0.40"],
        ["Sodium %", "0.16–0.23", "0.16–0.23", "0.16–0.23"],
        ["Feed form", "Crumbles or mini-pellets", "Pellets", "Pellets"]
      ]},
      { t: "table", cap: "Guide requirements for layers and breeders", head: ["Nutrient", "Layers – peak", "Layers – late lay", "Breeders – in lay"], rows: [
        ["Energy (kcal/kg)", "2750–2850", "2700–2800", "2750–2850"],
        ["Crude protein %", "16.5–17.5", "15.5–16.5", "15–16"],
        ["Digestible lysine %", "0.78–0.85", "0.70–0.76", "0.62–0.68"],
        ["Calcium %", "3.8–4.1", "4.2–4.4", "3.0–3.3"],
        ["Available phosphorus %", "0.40–0.45", "0.32–0.36", "0.35–0.40"],
        ["Note", "Half the limestone as coarse particles (2–4 mm) for stronger shells", "Phosphorus down, calcium up with age", "Feed restricted per breed guide"]
      ]},
      { t: "table", cap: "Illustrative formula per tonne (adjust to ingredient analysis)", head: ["Ingredient (kg/t)", "Broiler starter", "Broiler finisher", "Layer peak"], rows: [
        ["Yellow maize", "540", "618", "600"],
        ["Soybean meal 46%", "350", "280", "230"],
        ["Corn gluten meal 60%", "40", "25", "—"],
        ["Wheat bran", "—", "—", "34"],
        ["Soybean oil", "25", "40", "15"],
        ["Limestone (calcium carbonate)", "12", "10", "95"],
        ["Dicalcium phosphate", "17", "13", "16"],
        ["Salt", "3", "3", "3"],
        ["Sodium bicarbonate", "1.5", "1.5", "1"],
        ["DL-methionine", "3.5", "2.8", "2.2"],
        ["L-lysine", "2.5", "2", "0.3"],
        ["L-threonine", "1", "0.7", "—"],
        ["Vitamin-mineral premix", "3", "2.5", "3"],
        ["Choline chloride 60%", "0.5", "0.5", "0.5"],
        ["Additives (enzymes, anticoccidial, binder…)", "1", "1", "—"],
        ["Total", "1000", "1000", "1000"],
        ["Approx. protein / energy", "22.8% / 3030", "19.3% / 3200", "16% / 2750"]
      ]},
      { t: "h", x: "Main ingredients" },
      { t: "cards", items: [
        ["Energy sources", "Yellow maize (the base), wheat and sorghum (with enzymes), and vegetable oils to raise energy in finisher and summer diets."],
        ["Protein sources", "Soybean meal 44% or 46%, corn gluten meal, sunflower meal, DDGS, and limited fish meal (affects taste and salmonella risk)."],
        ["Minerals", "Limestone for calcium, dicalcium or monocalcium phosphate for phosphorus, salt and bicarbonate for sodium."],
        ["Synthetic amino acids", "Methionine, lysine, threonine and sometimes valine and arginine, to lower total protein without losing performance."]
      ]},
      { t: "gallery", items: [["f-corn", "Yellow maize: the main energy source"], ["f-soy", "Soybean meal: the main protein source"], ["f-bran", "Wheat bran: fibre and lower energy, used in layer diets"], ["g-feedmill", "A feed mill: even mixing and good storage"]] },
      { t: "h", x: "Types of feed additives" },
      { t: "table", head: ["Additive", "Function", "Examples"], rows: [
        ["Premix", "Essential vitamins and trace minerals", "Vitamins A, D3, E, K and B group; zinc, manganese, iron, copper, selenium, iodine"],
        ["Enzymes", "Better digestion and lower cost", "Phytase (releases phosphorus), xylanase (for wheat), protease"],
        ["Anticoccidials", "Prevent coccidiosis in broilers and pullets", "Ionophores (maduramycin, salinomycin…) or chemicals (diclazuril, nicarbazin…)"],
        ["Mycotoxin binders", "Bind toxins and prevent absorption", "Bentonite clay, zeolite (clinoptilolite), yeast cell wall"],
        ["Probiotics", "Beneficial bacteria for gut balance", "Bacillus subtilis, Bacillus licheniformis, Lactobacillus"],
        ["Prebiotics & yeast", "Feed beneficial bacteria and bind pathogens", "Mannan-oligosaccharides (MOS), beta-glucans, inactive yeast"],
        ["Organic acids", "Lower pH, fight salmonella and E. coli", "Formic, propionic, lactic, butyrate"],
        ["Phytogenics", "Gut and immune support", "Thyme, oregano and cinnamon oils"],
        ["Antioxidants & mould inhibitors", "Protect fats and vitamins, stop mould growth", "BHT, ethoxyquin, propionic acid"],
        ["Pigments", "Yolk colour", "Canthaxanthin, paprika extract, carotenoids"],
        ["Electrolytes & anti-stress", "Heat and stress", "Betaine, bicarbonate, potassium chloride, vitamin C"]
      ]},
      { t: "prod", x: "Lions Med products among these additives:", items: [["emistop", "Emistop Premix Vet"], ["madumix", "Madumix Vet"], ["echomos", "Echomos"], ["imerys", "Imerys BZF"], ["pgb", "PGB Premix"], ["yeast", "Extra Yeast"]] },
      { t: "h", x: "Feed quality" },
      { t: "list", items: [
        "Maize below 14% moisture, stored in a dry ventilated place to prevent mould.",
        "Analyse ingredients regularly (protein, moisture, mycotoxins), as real values vary between shipments.",
        "Mix evenly: pre-mix micro-ingredients with a small amount of feed first.",
        "Change rations between phases gradually, and do not store finished feed more than 3–4 weeks."
      ]}
    ]},

  { id: "drugs", img: "b-drugs", icon: "list", title: "Common medicines", sub: "By active ingredient",
    intro: "Trade names are many and change often, so the active ingredient is what matters. This list groups the most used medicine classes on Egyptian poultry farms and what they are for. Use any medicine under veterinary supervision and according to its leaflet.",
    blocks: [
      { t: "acc", items: [
        { h: "Antibiotics", rows: [
          ["Most used", "Amoxicillin, doxycycline, tylosin, tilmicosin, tiamulin, enrofloxacin, levofloxacin, norfloxacin, fosfomycin, colistin, florfenicol, trimethoprim-sulfa, lincomycin-spectinomycin."],
          ["Details", "See the ‘Antibiotics & withdrawal periods’ tab."]]},
        { h: "Anticoccidials", rows: [
          ["In feed (prevention) – ionophores", "Monensin, salinomycin, narasin, maduramycin, lasalocid, semduramicin."],
          ["In feed (prevention) – chemicals", "Diclazuril, nicarbazin, robenidine, clopidol, decoquinate, halofuginone."],
          ["In water (treatment)", "Amprolium, toltrazuril, diclazuril solution, sulfaquinoxaline, sulfaclozine."],
          ["Warning", "Maduramycin has a narrow safety margin – never overdose; ionophores must not be combined with tiamulin. Most anticoccidials are not allowed in laying hens."],
          ["Our products", "Emistop Premix Vet and Madumix Vet."]]},
        { h: "Dewormers", rows: [
          ["Substances", "Piperazine (Ascaridia), levamisole (Ascaridia and Heterakis), flubendazole and fenbendazole (broad, including Capillaria), praziquantel and niclosamide (tapeworms)."],
          ["Note", "Choose a product registered for layers if birds produce table eggs."]]},
        { h: "External parasites and red mite", rows: [
          ["Substances", "Permethrin and cypermethrin for environmental spraying, and fluralaner (in drinking water for layers, where registered) for red mite."],
          ["Note", "Spraying birds directly with unregistered products is prohibited and leaves residues in eggs."]]},
        { h: "Vitamins and minerals", rows: [
          ["Substances", "AD3E, B complex, vitamin C (heat and stress), vitamin K (with coccidiosis and bleeding), vitamin E with selenium (immunity, crazy chick disease), zinc and biotin (legs and skin), calcium and phosphorus (shell and bone)."]]},
        { h: "Electrolytes", rows: [
          ["Substances", "Sodium and potassium bicarbonate, potassium chloride and simple sugars."],
          ["Use", "Heat stress, dehydration, after transport and vaccination."]]},
        { h: "Liver tonics", rows: [
          ["Substances", "Silymarin, choline, sorbitol, methionine, betaine, carnitine, artichoke."],
          ["Use", "After drug treatment, with mycotoxins, and fatty liver in layers."]]},
        { h: "Kidney support", rows: [
          ["Substances", "Acidifiers (such as ammonium chloride) and citrate salts."],
          ["Use", "With nephropathogenic IB and urate build-up; use carefully and as directed."]]},
        { h: "Expectorants and respiratory support", rows: [
          ["Substances", "Bromhexine, and eucalyptus, menthol and thymol oils."],
          ["Use", "Help clear secretions; they do not replace treating the cause."]]},
        { h: "Immune and gut-health support", rows: [
          ["Substances", "Beta-glucans, yeast cell wall (MOS), probiotics, organic acids and plant extracts."],
          ["Our products", "Echomos, PGB Premix and Extra Yeast."]]},
        { h: "Mycotoxin binders", rows: [
          ["Substances", "Bentonite and hydrated sodium calcium aluminosilicate (HSCAS), zeolite (clinoptilolite), yeast cell wall, and toxin-degrading enzymes."],
          ["Our products", "Imerys BZF and Echomos."]]},
        { h: "Antivirals", rows: [
          ["The facts", "No antiviral is authorised for poultry. Prevention is through vaccination and biosecurity; treatment targets secondary bacterial infection and general support."]]}
      ]},
      { t: "warn", x: "Never use human medicines in poultry, and never buy medicines without a registration number from the Egyptian Ministry of Agriculture." }
    ]}
  ],
  sources: [
    "Hassan, Harder & Hafez – review of H5 and H9 avian influenza in Egypt",
    "Etiology of respiratory diseases on north-coast farms (IBV Variant II)",
    "Newcastle disease genotype VII in Egypt – Open Veterinary Journal",
    "Fowl adenoviruses in Egypt – Heliyon 2021",
    "FAdV serotype 2/11 in Egypt – Microorganisms 2025",
    "Gumboro disease in Egypt – Engormix",
    "Broiler vaccination guidelines – MSD Animal Health",
    "Layer vaccination programme – Hy-Line",
    "Antimicrobial use on Egyptian animal farms – 2024",
    "QS veterinary drug catalogue for poultry and withdrawal periods – 2026",
    "Tiamulin–ionophore interaction – product leaflet (VMD)",
    "Phytogenic feed additives in poultry – Animals 2021",
    "Plant compounds against coccidiosis – Parasite 2021",
    "Ross broiler nutrition specifications 2022 – Aviagen",
    "Biosecurity, cleaning and disinfection – Aviagen",
    "Disinfection of breeder houses – Cobb"
  ]
};
