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

const CLAN_FORMATION_TYPE = {
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
    6: "Fire"
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

const CLAN_COMPOSITION = {
  light: {
    1: [
      {
        quantity: 5,
        weight_class: "light"
      }
    ],
    2: [
      {
        quantity: 4,
        weight_class: "light"
      },
      {
        quantity: 1,
        weight_class: "medium"
      }
    ],
    3: [
      {
        quantity: 4,
        weight_class: "light"
      },
      {
        quantity: 1,
        weight_class: "medium"
      }
    ],
    4: [
      {
        quantity: 3,
        weight_class: "light"
      },
      {
        quantity: 2,
        weight_class: "medium"
      }
    ],
    5: [
      {
        quantity: 3,
        weight_class: "light"
      },
      {
        quantity: 2,
        weight_class: "medium"
      }
    ],
    6: [
      {
        quantity: 2,
        weight_class: "light"
      },
      {
        quantity: 2,
        weight_class: "medium"
      },
      {
        quantity: 1,
        weight_class: "heavy"
      }
    ]
  },
  medium: {
    1: [
      {
        quantity: 1,
        weight_class: "light"
      },
      {
        quantity: 4,
        weight_class: "medium"
      }
    ],
    2: [
      {
        quantity: 5,
        weight_class: "medium"
      }
    ],
    3: [
      {
        quantity: 5,
        weight_class: "medium"
      }
    ],
    4: [
      {
        quantity: 4,
        weight_class: "medium"
      },
      {
        quantity: 1,
        weight_class: "heavy"
      }
    ],
    5: [
      {
        quantity: 4,
        weight_class: "medium"
      },
      {
        quantity: 1,
        weight_class: "heavy"
      }
    ],
    6: [
      {
        quantity: 3,
        weight_class: "medium"
      },
      {
        quantity: 2,
        weight_class: "heavy"
      }
    ]
  },
  heavy: {
    1: [
      {
        quantity: 2,
        weight_class: "medium"
      },
      {
        quantity: 4,
        weight_class: "heavy"
      }
    ],
    2: [
      {
        quantity: 1,
        weight_class: "medium"
      },
      {
        quantity: 4,
        weight_class: "heavy"
      }

    ],
    3: [
      {
        quantity: 1,
        weight_class: "medium"
      },
      {
        quantity: 4,
        weight_class: "heavy"
      }

    ],
    4: [
      {
        quantity: 5,
        weight_class: "heavy"
      }
    ],
    5: [
      {
        quantity: 5,
        weight_class: "heavy"
      }
    ],
    6: [
      {
        quantity: 1,
        weight_class: "medium"
      },
      {
        quantity: 3,
        weight_class: "heavy"
      },
      {
        quantity: 1,
        weight_class: "assault"
      }
    ]
  },
  assault: {
    1: [
      {
        quantity: 1,
        weight_class: "medium"
      },
      {
        quantity: 2,
        weight_class: "heavy"
      },
      {
        quantity: 2,
        weight_class: "assault"
      }
    ],
    2: [
      {
        quantity: 4,
        weight_class: "heavy"
      },
      {
        quantity: 1,
        weight_class: "assault"
      }

    ],
    3: [
      {
        quantity: 4,
        weight_class: "heavy"
      },
      {
        quantity: 1,
        weight_class: "assault"
      }

    ],
    4: [
      {
        quantity: 3,
        weight_class: "heavy"
      },
      {
        quantity: 2,
        weight_class: "assault"
      }
    ],
    5: [
      {
        quantity: 3,
        weight_class: "heavy"
      },
      {
        quantity: 2,
        weight_class: "assault"
      }
    ],
    6: [
      {
        quantity: 2,
        weight_class: "heavy"
      },
      {
        quantity: 3,
        weight_class: "assault"
      }
    ]
  },
}
