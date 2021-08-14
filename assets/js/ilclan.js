const WEIGHT_LISTING = [
  {
    "group": "Clans",
    "options": [
      {
        "key": "light_trinary",
        "value": "Light Trinary"
      },
      {
        "key": "medium_trinary",
        "value": "Medium Trinary"
      },
      {
        "key": "heavy_trinary",
        "value": "Heavy Trinary"
      },
      {
        "key": "assault_trinary",
        "value": "Assault Trinary"
      }
    ]
  },
  {
    "group": "Republic of the Sphere",
    "options": [
      {
        "key": "light_company",
        "value": "Light Company"
      },
      {
        "key": "medium_company",
        "value": "Medium Company"
      },
      {
        "key": "heavy_company",
        "value": "Heavy Company"
      },
      {
        "key": "assault_company",
        "value": "Assault Company"
      }
    ]
  }
];

const CLANS = {
  "wolf": {
    display: "Wolf",
    mechs: {
      light: [
        "--",
        "--",
        "Ostscout OTT-12R",
        "Jenner IIC",
        "Cougar T*",
        "Valkyrie C",
        "Stinger C 2",
        "Wulfen Prime*",
        "Kit Fox T*",
        "Mist Lynx T*",
        "Locust IIC 10",
        "Adder T*",
        "Piranha 5"
      ],
      medium: [
        "--",
        "--",
        "Wyvern IIC 2",
        "Lobo",
        "Pouncer Prime*",
        "Griffin IIC 8",
        "Hammerhead",
        "Stormwolf Prime*",
        "Ice Ferret T*",
        "Hellhound 7",
        "Shadow Cat T*",
        "Griffin C",
        "Ryoken III-P Prime*"
      ],
      heavy: [
        "--",
        "--",
        "Woodsman Prime*",
        "Mad Dog Mk IV Prime*",
        "Thresher Mk II",
        "Dominator",
        "Mad Cat Mk IV Prime*",
        "Sojourner Prime*",
        "Warwolf Prime*",
        "Tundra Wolf 4",
        "Orion IIC 2",
        "Linebacker T*",
        "Guillotine IIC 2"
      ],
      assault: [
        "--",
        "--",
        "Woodsman Prime*",
        "Mad Dog Mk IV Prime*",
        "Thresher Mk II",
        "Dominator",
        "Mad Cat Mk IV Prime*",
        "Sojourner Prime*",
        "Warwolf Prime*",
        "Tundra Wolf 4",
        "Orion IIC 2",
        "Linebacker T*",
        "Guillotine IIC 2"
      ]
    }
  },
  "jade_falcon": {
    display: "Jade Falcon",
    mechs: {
      light: [
        "--",
        "--",
        "Stinger C 2",
        "Incubus 8",
        "Kit Fox T*",
        "Mist Lynx T*",
        "Howler 6",
        "Ion Sparrow Prime*",
        "Crimson Hawk 4",
        "Fire Falcon T*",
        "Eyrie",
        "Adder T*",
        "Spirit 2"
      ],
      medium: [
        "--",
        "--",
        "Battle Cobra Prime*",
        "Griffin IIC 8",
        "Grendel T*",
        "Black Lanner Prime*",
        "Gyrfalcon 4",
        "Hierofalcon Prime*",
        "Hunchback IIC 5",
        "Nova T",
        "Shadow Cat T*",
        "Pinion 3",
        "Phoenix Hawk C 2"
      ],
      heavy: [
        "--",
        "--",
        "Mad Dog T*",
        "Hellbringer T*",
        "Jade Hawk 3",
        "Night Gyr Prime*",
        "Rifleman C 3",
        "Loki Mk II (Hel) Prime*",
        "Thunderbolt IIC 2",
        "Flamberge Prime",
        "Summoner T*",
        "Shadow Cat II 2",
        "Crossbow T*"
      ],
      assault: [
        "--",
        "--",
        "Phoenix Hawk IIC 9",
        "Shrike 3",
        "Atlas C",
        "Marauder IIC",
        "Jupiter 4",
        "Turkina T*",
        "Jade Phoenix Prime*",
        "Onager 2",
        "Executioner T*",
        "Bane 7",
        "Battlemaster C 2"
      ]
    }
  },
  "wolfs_dragoons": {
    display: "Wolf's Dragoons",
    mechs: {
      light: [
        "--",
        "--",
        "Wolfhound WLF-6S",
        "Adder T*",
        "Valkyrie C",
        "Kit Fox T*",
        "Koshi 3",
        "Locust LCT-7S",
        "Arctic Fox AF1A*",
        "Arctic Cheetah A*",
        "Mist Lynx Prime*",
        "Wasp WPS-5A",
        "Nyx NX-80"
      ],
      medium: [
        "--",
        "--",
        "Blackjack BJ-5",
        "Griffin C",
        "Ice Ferret T*",
        "Hachetman HCT-7S",
        "Shadow Hawk IIC 8",
        "Black Hawk 3",
        "Mad Cat III",
        "Ghost GST-10",
        "Nova T*",
        "Wolverine WVR-9R",
        "Scorpion SCP-1TB"
      ],
      heavy: [
        "--",
        "--",
        "Gallowglas WD",
        "War Dog WR-DG-03FC",
        "Rifleman C 3",
        "Archer ARC-7C",
        "Mad Dog Mk IV Prime*",
        "Loki Mk II (Hel) Prime*",
        "Thunderbolt TDR-9W",
        "Warhammer C 3",
        "Mad Cat Mk IV Prime*",
        "Thor II (Grand Summoner) Prime*",
        "Guillotine IIC 2"
      ],
      assault: [
        "--",
        "--",
        "Phoenix Hawk IIC 10",
        "Warhammer IIC 11",
        "Cygnus",
        "Zeus ZEU-9WD",
        "Mad Cat Mk II 5",
        "Hellstar",
        "Marauder II C",
        "Annihilator ANH-2A",
        "Marauder IIC",
        "Imp C",
        "Warhammer IIC"
      ]
    }
  }
}

const REPUBLIC_OF_THE_SPHERE = {
  "a": {
    display: "Republic of the Sphere A",
    mechs: {
      light: [
        "--",
        "--",
        "SDR-8R Spider",
        "Jenner IIC 4",
        "OTT-11J Ostscout",
        "UBM-2R Revenant",
        "LCT-6M Locust",
        "Mist Lynx Prime*",
        "HVC-6P Havoc",
        "JLP-BD Jackalope",
        "Pack Hunter II",
        "PXH-11K Phoenix Hawk",
        "Adder Prime*"
      ],
      medium: [
        "--",
        "--",
        "TFT-A9 Thunder Fox",
        "BJ2-0 Blackjack*",
        "Griffin IIC 3",
        "HBK-6N Hunchback",
        "SHD-11CS2 Shadow Hawk",
        "OSP-26 Osprey",
        "Mad Cat III",
        "Shadow Hawk IIC 8",
        "KHP-7R Kheper",
        "Viper Prime*",
        "RPT-5X Raptor II"
      ],
      heavy: [
        "--",
        "--",
        "Vulture Mk IV Primer*",
        "LMT-2R Lament",
        "PRF-1R Prefect",
        "CRD-9R Crusader",
        "TDR-12R Thunderbolt",
        "BL-18-KNT Black Knight",
        "ARC-6R Archer",
        "MAD-9W2 Marauder",
        "UAE-7R Uraeus",
        "Tundra Wolf 4",
        "Mad Cat Mk IV Prime*"
      ],
      assault: [
        "--",
        "--",
        "MAL-XT Malice",
        "PKP-1B Peacekeeper",
        "DLR-O Doloire*",
        "AS7-D-H Atlas II",
        "Warhammer IIC 4",
        "BKW-7R Black Watch",
        "AWS-11H Awesome",
        "KGC-011 King Crab",
        "Mad Cat Mk II-Enhanced",
        "Executioner Prime*",
        "Highlander IIC 3"
      ]
    }
  },
  "b": {
    display: "Republic of the Sphere B",
    mechs: {
      light: [
        "--",
        "--",
        "GRM-01A2 Garm",
        "ALM-10D Fireball",
        "HER-4S Hermes",
        "FHNK-9K Falcon Hawk",
        "JVN-11A Javelin",
        "STG-6R Stinger",
        "BD-XL Blade",
        "CLR-03-O Celerity*",
        "WFT-1LAW/SC Wight",
        "WLF-4W Wolfhound",
        "CLR-03-O Celerity*"
      ],
      medium: [
        "--",
        "--",
        "SCP-10M Scorpion",
        "KW1-LH3 Lineholder",
        "Dasher II",
        "TRG-2N Targe",
        "EFT-7X Eisenfaust",
        "CRB-54 Crab",
        "WVR-10R Wolverine",
        "Stalking Spider II",
        "SKW-2F Shockwave",
        "NH-2 Rock",
        "NSR-K2 Night Stalker"
      ],
      heavy: [
        "--",
        "--",
        "OKD-8P Quickdraw",
        "RLF-7G Rifleman",
        "OSR-4K Ostroc",
        "DRG-7K Grand Dragon",
        "GLT-7-0 Gallant",
        "SCG-WF1 Scourge",
        "Ryoken II",
        "OTL-9R Ostsol",
        "TMP-2m2 Tempest",
        "EXC-B2b Excalibur",
        "WHM-10CT Warhammer"
      ],
      assault: [
        "--",
        "--",
        "EMP-6D Emperor",
        "CGR-KMZ Charger",
        "TR-XB Trebaruna",
        "LGB-12R Longbox",
        "GOL-6M Goliath",
        "Phoenix Hawk IIC 7",
        "BNC-9S Banshee",
        "MAD-6D Maruader II",
        "GUN-1ERD Gunslinger",
        "AWS-10KM Awesome",
        "AS7-K2 Atlas"
      ]
    }
  }
}

const CLAN_WEIGHT_SIZES = {
  light: {
    1: ["light", "light", "light"],
    2: ["light", "light", "light"],
    3: ["light", "light", "light"],
    4: ["light", "light", "medium"],
    5: ["light", "light", "medium"],
    6: ["light", "light", "medium"]
  },
  medium: {
    1: ["medium", "light", "light"],
    2: ["medium", "light", "light"],
    3: ["medium", "medium", "light"],
    4: ["medium", "medium", "light"],
    5: ["heavy", "light", "medium"],
    6: ["heavy", "light", "medium"]
  },
  heavy: {
    1: ["heavy", "medium", "medium"],
    2: ["heavy", "medium", "medium"],
    3: ["heavy", "heavy", "medium"],
    4: ["heavy", "heavy", "medium"],
    5: ["assault", "medium", "heavy"],
    6: ["assault", "medium", "heavy"]
  },
  assault: {
    1: ["assault", "heavy", "heavy"],
    2: ["assault", "heavy", "heavy"],
    3: ["assault", "assault", "heavy"],
    4: ["assault", "assault", "heavy"],
    5: ["assault", "assault", "assault"],
    6: ["assault", "assault", "assault"]
  }
}

const COMPANY_WEIGHT_SIZES = {
  light: {
    1: ["light", "light", "light"],
    2: ["light", "light", "light"],
    3: ["light", "light", "light"],
    4: ["light", "light", "medium"],
    5: ["light", "light", "medium"],
    6: ["light", "light", "medium"]
  },
  medium: {
    1: ["medium", "light", "light"],
    2: ["medium", "light", "light"],
    3: ["medium", "medium", "light"],
    4: ["medium", "medium", "light"],
    5: ["heavy", "light", "medium"],
    6: ["heavy", "light", "medium"]
  },
  heavy: {
    1: ["heavy", "medium", "medium"],
    2: ["heavy", "medium", "medium"],
    3: ["heavy", "heavy", "medium"],
    4: ["heavy", "heavy", "medium"],
    5: ["assault", "medium", "heavy"],
    6: ["assault", "medium", "heavy"]
  },
  assault: {
    1: ["assault", "heavy", "heavy"],
    2: ["assault", "heavy", "heavy"],
    3: ["assault", "assault", "heavy"],
    4: ["assault", "assault", "heavy"],
    5: ["assault", "assault", "assault"],
    6: ["assault", "assault", "assault"]
  }
}

function populateWeightClasses() {
  var weightCompositionSelect = document.getElementById("weight_composition");

  for (var group in WEIGHT_LISTING) {
    var item = WEIGHT_LISTING[group];

    var optionGroup = document.createElement("optgroup");
    optionGroup.label = item["group"];

    for (var weight in item["options"]) {
      var innerItem = item["options"][weight];

      var option = document.createElement("option");
      option.value = innerItem['key'];
      option.textContent = innerItem['value'];
      optionGroup.appendChild(option);
    }

    weightCompositionSelect.appendChild(optionGroup);
  }

  weightCompositionSelect.addEventListener('change', function () {
    updateClanOrCompany();
  });
}

function updateClanOrCompany() {
  var clanOrCompany = document.getElementById("clan_or_company");

  while (clanOrCompany.firstChild) {
    clanOrCompany.removeChild(clanOrCompany.lastChild);
  }

  var weightCompositionSelect = document.getElementById("weight_composition");
  var selectedOption = weightCompositionSelect.value;

  switch (selectedOption) {
    case "light_trinary":
    case "medium_trinary":
    case "heavy_trinary":
    case "assault_trinary":
      for (var clan in CLANS) {
        var select = document.createElement("option");
        select.value = clan;
        select.innerText = CLANS[clan].display;
        clanOrCompany.appendChild(select);
      }
      break;
    case "light_company":
    case "medium_company":
    case "heavy_company":
    case "assault_company":
      for (var sphere in REPUBLIC_OF_THE_SPHERE) {
        var select = document.createElement("option");
        select.value = sphere;
        select.innerText = REPUBLIC_OF_THE_SPHERE[sphere].display;
        clanOrCompany.appendChild(select);
      }

      break;
  }
}

function rollDice(number) {
  var total = 0;

  for (var current = 0; current < number; current++) {
    total += Math.floor(Math.random() * 6) + 1;
  }

  return total;
}

function determineUnitMakeup(weightClass) {
  var roll = rollDice(1);

  switch (weightClass) {
    case "light_trinary":
      return CLAN_WEIGHT_SIZES.light[roll];
    case "medium_trinary":
      return CLAN_WEIGHT_SIZES.medium[roll];
    case "heavy_trinary":
      return CLAN_WEIGHT_SIZES.heavy[roll];
    case "assault_trinary":
      return CLAN_WEIGHT_SIZES.assault[roll];
    case "light_company":
      return COMPANY_WEIGHT_SIZES.light[roll];
    case "medium_company":
      return COMPANY_WEIGHT_SIZES.medium[roll];
    case "heavy_company":
      return COMPANY_WEIGHT_SIZES.heavy[roll];
    case "assault_company":
      return COMPANY_WEIGHT_SIZES.assault[roll];
  }
}

function calculateFormation() {
  var weightClass = document.getElementById("weight_composition").value;
  var clanOrCompany = document.getElementById("clan_or_company").value;

  var alphaText = (weightClass.includes("trinary") ? "Alpha Star" : "Alpha Lance");
  var bravoText = (weightClass.includes("trinary") ? "Bravo Star" : "Bravo Lance");
  var charlieText = (weightClass.includes("trinary") ? "Charlie Star" : "Charlie Lance");

  var unitMakeup = determineUnitMakeup(weightClass);
  var alphaMakeUp = unitMakeup[0];
  var bravoMakeUp = unitMakeup[1];
  var charlieMakeUp = unitMakeup[2];

  console.log(alphaMakeUp);
  console.log(bravoMakeUp);
  console.log(charlieMakeUp);

  switch (weightClass) {
    case "light_trinary":
      break;
    case "medium_trinary":
      break;
    case "heavy_trinary":
      break;
    case "assault_trinary":
      break;
    case "light_company":
      break;
    case "medium_company":
      break;
    case "heavy_company":
      break;
    case "assault_company":
      break;
  }
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    populateWeightClasses();

    var iFeelLucky = document.getElementById("i_feel_lucky");
    iFeelLucky.addEventListener("click", calculateFormation);
  }
};
