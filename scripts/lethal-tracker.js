// Establishing empty variables

let monsterList = '';
let indoorPower = 0;
let outdoorPower = 0;
let thing = '';
let thing2 = '';
let thing3 = '';
let chosenMoon = '';
let daysLeft = 0;
let companyBuy = '';
let quota = 0;
let shipValue = 0;

// Monster List

var values = {

    // INDOOR ENTITIES

    spider_name: 'Bunker Spider',
    spider: 2,
    bracken_name: 'Bracken',
    bracken: 3,
    butler_name: 'Butler',
    butler: 2,
    coilhead_name: 'Coilhead',
    coilhead: 1,
    ghost_name: 'Ghost Girl',
    ghost: 2,
    bug_name: 'Hoarding Bug',
    bug: 1,
    goo_name: 'Goo/Slime',
    goo: 1,
    jester_name: 'Jester',
    jester: 3,
    masked_name: 'Masked',
    masked: 1,
    nutcracker_name: 'Nutcracker',
    nutcracker: 1,
    spore_name: 'Spore Lizard',
    spore: 1,
    snare_name: 'Snare Flea',
    snare: 1,
    thumper_name: 'Thumper',
    thumper: 3,

    // OUTDOOR ENTITIES

    hawk_name: 'Baboon Hawk',
    hawk: 0.5,
    bee_name: 'Circuit Bee',
    bee: 1,
    dog_name: 'Eyeless Dog',
    dog: 2,
    worm_name: 'Earth Leviathan',
    worm: 2,
    giant_name: 'Forest Keeper',
    giant: 3,
    ghost2_name: 'Ghost Girl',
    ghost2: 2,
    manticoil_name: 'Manticoil',
    manticoil: 1,
    masked2_name: 'Masked',
    masked2: 1,
    locusts_name: 'Roaming Locusts',
    locusts: 1,
    tulip_name: 'Tulip Snake',
    tulip: 0.5,
    robot_name: 'Old Bird/Robot',
    robot: 3
};

var moonLevels = {
    indoorExperimentation: '4',
    outdoorExperimentation: '8',

    indoorAssurance: '6',
    outdoorAssurance: '8',

    indoorVow: '7',
    outdoorVow: '6',

    indoorOffense: '12',
    outdoorOffense: '8',

    indoorAdamance: '13',
    outdoorAdamance: '13',

    indoorMarch: '14',
    outdoorMarch: '12',

    indoorRend: '10',
    outdoorRend: '6',

    indoorDine: '16',
    outdoorDine: '6',

    indoorTitan: '18',
    outdoorTitan: '7',
};

// CLEARING THE MONSTER LIST

function jsClearButton() {
    monsterList = '';
    indoorPower = 0;
    outdoorPower = 0;
    console.log(monsterList);
    document.querySelector('.js-monster-list')
        .innerHTML = `${monsterList}`;

    document.querySelector('.js-outdoor-power')
        .innerHTML = `Outdoor Level: ` + `${outdoorPower}` + `/` + `${thing2}`;
    document.querySelector('.js-indoor-power')
        .innerHTML = `Indoor Level: ` + `${indoorPower}` + `/` + `${thing3}`;
}

// SELECTING THE MOON

function selectMoon(moon) {
    jsClearButton();

    const buttonElement = document.querySelector('.js-moon-button');
    chosenMoon = moon;

    thing3 = 'indoor' + chosenMoon;
    thing3 = moonLevels[thing3];

    document.querySelector('.js-indoor-power')
        .innerHTML = `Indoor Level: ` + `${indoorPower}` + `/` + `${thing3}`;

    thing2 = 'outdoor' + chosenMoon;
    thing2 = moonLevels[thing2];

    removeDay();

    document.querySelector('.js-outdoor-power')
        .innerHTML = `Outdoor Level: ` + `${outdoorPower}` + `/` + `${thing2}`;
}

//ADDING ENTITIES TO THE LIST

var monsterName = document.getElementById("monsterStyle");

function addMobButtonClick(clicked) {
    thing = clicked;
    indoorPower = indoorPower + values[thing];
    thing = thing + '_name';
    monsterList = monsterList + "- " + values[thing] + "<br>";
    console.log(monsterList);
    console.log(indoorPower);
    document.querySelector('.js-monster-list')
        .innerHTML = `${monsterList}`;

    document.querySelector('.js-outdoor-power')
        .innerHTML = `Outdoor Level: ` + `${outdoorPower}` + `/` + `${thing2}`;
    document.querySelector('.js-indoor-power')
        .innerHTML = `Indoor Level: ` + `${indoorPower}` + `/` + `${thing3}`;
}

function addMobButtonClick2(clicked) {
    thing = clicked;
    outdoorPower = outdoorPower + values[thing];
    thing = thing + '_name';
    monsterList = monsterList + "- " + values[thing] + "<br>";
    console.log(monsterList);
    console.log(outdoorPower);
    document.querySelector('.js-monster-list')
        .innerHTML = `${monsterList}`;

    document.querySelector('.js-outdoor-power')
        .innerHTML = `Outdoor Level: ` + `${outdoorPower}` + `/` + `${thing2}`;
    document.querySelector('.js-indoor-power')
        .innerHTML = `Indoor Level: ` + `${indoorPower}` + `/` + `${thing3}`;
}

//REMOVING ENTITIES FROM MONSTER LIST

function killMobButtonClick(clicked) {
    thing = clicked;
    indoorPower = indoorPower - values[thing];
    thing = thing + '_name';
    thing = '- ' + values[thing] + '<br>'
    monsterList = monsterList.replace(thing, '');
    document.querySelector('.js-monster-list')
        .innerHTML = `${monsterList}`;

    document.querySelector('.js-outdoor-power')
        .innerHTML = `Outdoor Level: ` + `${outdoorPower}` + `/` + `${thing2}`;
    document.querySelector('.js-indoor-power')
        .innerHTML = `Indoor Level: ` + `${indoorPower}` + `/` + `${thing3}`;
}

function killMobButtonClick2(clicked) {
    thing = clicked;
    outdoorPower = outdoorPower - values[thing];
    thing = thing + '_name';
    thing = '- ' + values[thing] + '<br>'
    monsterList = monsterList.replace(thing, '');
    document.querySelector('.js-monster-list')
        .innerHTML = `${monsterList}`;

    document.querySelector('.js-outdoor-power')
        .innerHTML = `Outdoor Level: ` + `${outdoorPower}` + `/` + `${thing2}`;
    document.querySelector('.js-indoor-power')
        .innerHTML = `Indoor Level: ` + `${indoorPower}` + `/` + `${thing3}`;
}

// DAYS REMAINING

function removeDay(){
    console.log(daysLeft);
    daysLeft = daysLeft - 1;
    console.log(daysLeft);

    companyBuy = '';

    if (daysLeft == -1) {
        daysLeft = 3;
    }

    if (daysLeft == 3) {
        companyBuy = '30%';
    } else if (daysLeft == 2) {
        companyBuy = '53%';
    } else if (daysLeft == 1) {
        companyBuy = '77%';
    } else if (daysLeft == 0) {
        companyBuy = '100%';
    }

    document.querySelector('.js-runs-left')
        .innerHTML = `RUNS LEFT ` + `${daysLeft}` + ` - THE COMPANY IS CURRENTLY BUYING AT ` + `${companyBuy}`;
}

function daysLeftJS() {
    daysLeft = document.querySelector('.js-days-left');
    daysLeft = Number(daysLeft.value);
    console.log(daysLeft);

    if (daysLeft == 3) {
        companyBuy = '30%';
    } else if (daysLeft == 2) {
        companyBuy = '53%';
    } else if (daysLeft == 1) {
        companyBuy = '77%';
    } else if (daysLeft == 0) {
        companyBuy = '100%';
    }

    document.querySelector('.js-runs-left')
        .innerHTML = `RUNS LEFT ` + `${daysLeft}` + ` - THE COMPANY IS CURRENTLY BUYING AT ` + `${companyBuy}`;
}

function daysLeftExpress(event) {
    if (event.key === 'Enter') {
        daysLeftJS();
    }
}

// QUOTA CALCULATIONS

function quotaAmount() {
    quota = document.querySelector('.js-quota');
    quota = Number(quota.value);

    document.querySelector('.js-the-quota')
        .innerHTML = `QUOTA: ` + `${shipValue}` + `/` + `${quota}`;
}

function quotaUpdater(event) {
    if (event.key === 'Enter') {
        quotaAmount();
    }
}

function shipValueCalculator(event) {

    if (event.key === 'Enter') {
        shipValue = document.querySelector('.js-ship-value')
        shipValue = Number(shipValue.value);

        document.querySelector('.js-the-quota')
            .innerHTML = `QUOTA: ` + `${shipValue}` + `/` + `${quota}`;
    }
}