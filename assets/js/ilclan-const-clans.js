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
    1: ["light", "light", "light", "light", "light"],
    2: ["light", "light", "light", "light", "medium"],
    3: ["light", "light", "light", "light", "medium"],
    4: ["light", "light", "light", "medium", "medium"],
    5: ["light", "light", "light", "medium", "medium"],
    6: ["light", "light", "medium", "medium", "heavy"]
  },
  medium: {
    1: ["light", "medium", "medium", "medium", "medium"],
    2: ["medium", "medium", "medium", "medium", "medium"],
    3: ["medium", "medium", "medium", "medium", "medium"],
    4: ["medium", "medium", "medium", "medium", "heavy"],
    5: ["medium", "medium", "medium", "medium", "heavy"],
    6: ["medium", "medium", "medium", "heavy", "heavy"]
  },
  heavy: {
    1: ["medium", "medium", "heavy", "heavy", "heavy"],
    2: ["medium", "heavy", "heavy", "heavy", "heavy"],
    3: ["medium", "heavy", "heavy", "heavy", "heavy"],
    4: ["heavy", "heavy", "heavy", "heavy", "heavy"],
    5: ["heavy", "heavy", "heavy", "heavy", "heavy"],
    6: ["medium", "heavy", "heavy", "heavy", "assault"]
  },
  assault: {
    1: ["medium", "heavy", "heavy", "assault", "assault"],
    2: ["heavy", "heavy", "heavy", "heavy", "assault"],
    3: ["heavy", "heavy", "heavy", "heavy", "assault"],
    4: ["heavy", "heavy", "heavy", "assault", "assault"],
    5: ["heavy", "heavy", "heavy", "assault", "assault"],
    6: ["heavy", "heavy", "assault", "assault", "assault"]
  },
}
