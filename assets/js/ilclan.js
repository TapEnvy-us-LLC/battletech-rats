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
  document.getElementById(pretext + 'FormationType').innerText = data.formationType;
}

function updateStatDisplay(alpha, bravo, charlie) {
  updateData("alpha", alpha);
  updateData("bravo", bravo);
  updateData("charlie", charlie);
}

function updateCalculationsDisplay(calcs) {
  document.getElementById('compositionRoll').innerText = calcs.makeupRoll;
  document.getElementById('alphaFormationRoll').innerText = calcs.formationType.alpha;
  document.getElementById('bravoFormationRoll').innerText = calcs.formationType.bravo;
  document.getElementById('charlieFormationRoll').innerText = calcs.formationType.charlie;
}

function determineFormationType(weightClass, roll, clan) {
  data = (clan ? CLAN_FORMATION_TYPE : REPUBLIC_FORMATION_TYPE);
  return data[weightClass][roll];
}

function calculateFormation() {
  var alphaLance = {};
  var bravoLance = {};
  var charlieLance = {};

  var calculations = {};

  var weightClass = document.getElementById("weight_composition").value;
  var clanOrCompany = document.getElementById("clan_or_company").value;

  var isClan = weightClass.includes("trinary");
  alphaLance["display"] = (isClan ? "Alpha Star" : "Alpha Lance");
  bravoLance["display"] = (isClan ? "Bravo Star" : "Bravo Lance");
  charlieLance["display"] = (isClan ? "Charlie Star" : "Charlie Lance");

  calculations["makeupRoll"] = rollDice(1);

  var unitMakeup = determineUnitMakeup(weightClass, calculations["makeupRoll"]);
  alphaLance["weightClass"] = unitMakeup[0];
  bravoLance["weightClass"] = unitMakeup[1];
  charlieLance["weightClass"] = unitMakeup[2];

  calculations["formationType"] = {
    alpha: rollDice(1),
    bravo: rollDice(1),
    charlie: rollDice(1)
  }

  alphaLance['formationType'] = determineFormationType(alphaLance.weightClass, calculations.formationType.alpha, isClan);
  bravoLance['formationType'] = determineFormationType(bravoLance.weightClass, calculations.formationType.bravo, isClan);
  charlieLance['formationType'] = determineFormationType(charlieLance.weightClass, calculations.formationType.charlie, isClan);

  updateStatDisplay(alphaLance, bravoLance, charlieLance);
  updateCalculationsDisplay(calculations);
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    populateWeightClasses();
  }
};
