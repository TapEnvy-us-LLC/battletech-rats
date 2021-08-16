const REPUBLIC_OF_THE_SPHERE_DISPLAY = {
  "stones_brigade": {
    display: "Stone's Brigade",
    mechs: {
      1: "a",
      2: "a",
      3: "a",
      4: "a",
      5: "a",
      6: "a"
    }
  },
  "triarii_protectors": {
    display: "Triarii Protectors",
    mechs: {
      1: "b",
      2: "b",
      3: "b",
      4: "b",
      5: "b",
      6: "b"
    }
  },
  "terran_militia": {
    display: "Terran Militia",
    mechs: {
      1: "b",
      2: "b",
      3: "b",
      4: "b",
      5: "b",
      6: "b"
    }
  },
  "hastati_sentinels": {
    display: "Hastati Sentinels",
    mechs: {
      1: "b",
      2: "b",
      3: "a",
      4: "a",
      5: "a",
      6: "a"
    }
  },
  "principes_guards": {
    display: "Principes Guards",
    mechs: {
      1: "b",
      2: "b",
      3: "b",
      4: "b",
      5: "a",
      6: "a"
    }
  }
}

const REPUBLIC_OF_THE_SPHERE = {
  "a": {
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

const REPUBLIC_FORMATION_TYPE = {
  light: {
    1: "Battle",
    2: "Command",
    3: "Fire",
    4: "Striker",
    5: "Striker",
    6: "Striker"
  },
  medium: {
    1: "Battle",
    2: "Battle",
    3: "Command",
    4: "Fire",
    5: "Striker",
    6: "Striker"
  },
  heavy: {
    1: "Assault",
    2: "Battle",
    3: "Battle",
    4: "Command",
    5: "Fire",
    6: "Striker"
  },
  assault: {
    1: "Assault",
    2: "Assault",
    3: "Battle",
    4: "Battle",
    5: "Command",
    6: "Fire"
  },
}

const REPUBLIC_COMPOSITION = {
  light: {
    1: ["light", "light", "light", "light"],
    2: ["light", "light", "light", "medium"],
    3: ["light", "light", "light", "medium"],
    4: ["light", "light", "medium", "medium"],
    5: ["light", "light", "medium", "medium"],
    6: ["light", "light", "medium", "heavy"]
  },
  medium: {
    1: ["light", "medium", "medium", "heavy"],
    2: ["medium", "medium", "medium", "medium"],
    3: ["medium", "medium", "medium", "medium"],
    4: ["medium", "medium", "medium", "heavy"],
    5: ["medium", "medium", "medium", "heavy"],
    6: ["medium", "medium", "heavy", "heavy"]
  },
  heavy: {
    1: ["medium", "heavy", "heavy", "heavy"],
    2: ["heavy", "heavy", "heavy", "heavy"],
    3: ["heavy", "heavy", "heavy", "heavy"],
    4: ["medium", "heavy", "heavy", "assault"],
    5: ["medium", "heavy", "heavy", "assault"],
    6: ["heavy", "heavy", "heavy", "assault"]
  },
  assault: {
    1: ["medium", "heavy", "assault", "assault"],
    2: ["heavy", "heavy", "assault", "assault"],
    3: ["heavy", "heavy", "assault", "assault"],
    4: ["heavy", "assault", "assault", "assault"],
    5: ["heavy", "assault", "assault", "assault"],
    6: ["assault", "assault", "assault", "assault"]
  }
}
