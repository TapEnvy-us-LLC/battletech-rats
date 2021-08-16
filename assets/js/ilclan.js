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
    calculateFormation();
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
      for (var sphere in REPUBLIC_OF_THE_SPHERE_DISPLAY) {
        var select = document.createElement("option");
        select.value = sphere;
        select.innerText = REPUBLIC_OF_THE_SPHERE_DISPLAY[sphere].display;
        clanOrCompany.appendChild(select);
      }

      break;
  }

  clanOrCompany.addEventListener('change', function () {
    calculateFormation();
  });

}

function rollDice(number) {
  var total = 0;

  for (var current = 0; current < number; current++) {
    total += Math.floor(Math.random() * 6) + 1;
  }

  return total;
}

function determineUnitMakeup(weightClass, roll) {
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

function updateData(pretext, data) {
  document.getElementById(pretext + 'Display').innerText = data.display;
  document.getElementById(pretext + 'WeightClass').innerText = data.weightClass;

  var listing = document.getElementById(pretext + "List");

  while (listing.firstChild) {
    listing.removeChild(listing.lastChild);
  }

  for (var index in data.units) {
    var mech = document.createElement("li");
    mech.innerText = data.units[index];
    listing.appendChild(mech);
  }
}

function updateStatDisplay(alpha, bravo, charlie) {
  updateData("alpha", alpha);
  updateData("bravo", bravo);
  updateData("charlie", charlie);
}

function factionUnitList(faction) {
  var listRoll = rollDice(1);
  var factionList = REPUBLIC_OF_THE_SPHERE_DISPLAY[faction].mechs[listRoll];
  return REPUBLIC_OF_THE_SPHERE[factionList].mechs;
}

function determineUnits(weightClass, isClan, faction) {
  console.log(weightClass);
  console.log(isClan);
  console.log(faction);

  var compositionRoll = rollDice(1);
  var composition = (isClan) ? CLAN_COMPOSITION[weightClass][compositionRoll] : REPUBLIC_COMPOSITION[weightClass][compositionRoll];

  console.log(compositionRoll);
  console.log(composition);

  var results = [];

  for (var weight in composition) {
    var currentWeight = composition[weight];
    var unitList = (isClan) ? CLANS[faction].mechs[currentWeight] : factionUnitList(faction)[currentWeight];
    results.push(unitList[rollDice(2)]);
  }

  return results;
}

function calculateFormation() {
  var alphaLance = {};
  var bravoLance = {};
  var charlieLance = {};

  var weightClass = document.getElementById("weight_composition").value;
  var clanOrCompany = document.getElementById("clan_or_company").value;

  var isClan = weightClass.includes("trinary");
  alphaLance["display"] = (isClan ? "Alpha Star" : "Alpha Lance");
  bravoLance["display"] = (isClan ? "Bravo Star" : "Bravo Lance");
  charlieLance["display"] = (isClan ? "Charlie Star" : "Charlie Lance");

  var unitMakeup = determineUnitMakeup(weightClass, rollDice(1));
  alphaLance["weightClass"] = unitMakeup[0];
  bravoLance["weightClass"] = unitMakeup[1];
  charlieLance["weightClass"] = unitMakeup[2];

  alphaLance['units'] = determineUnits(alphaLance.weightClass, isClan, clanOrCompany);
  bravoLance['units'] = determineUnits(bravoLance.weightClass, isClan, clanOrCompany);
  charlieLance['units'] = determineUnits(charlieLance.weightClass, isClan, clanOrCompany);
  updateStatDisplay(alphaLance, bravoLance, charlieLance);
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    populateWeightClasses();
  }
};
