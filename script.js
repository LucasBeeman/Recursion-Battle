var enemies = [
    {
        "Name": "Cypher",
        "Type": "Sentinal",
        "Ability": "Trip Wire",
        "HP" : 500,
        "Accuracy" : 3,
        "Dodge": 3
    },
    {
        "Name": "Breach",
        "Type": "Initiator",
        "Ability": "Flash Point",
        "HP" : 550,
        "Accuracy" : 6,
        "Dodge": 7
    },
    {
        "Name": "Yoru",
        "Type": "Duelist",
        "Ability": "Uninvited Guest",
        "HP" : 1000,
        "Accuracy" : 10,
        "Dodge": 8
    },
    {
        "Name": "KillJoy",
        "Type": "Sentinal",
        "Ability": "Turret",
        "HP" : 1250,
        "Accuracy" : 5,
        "Dodge": 2,
    },
    {
        "Name": "Jett",
        "Type": "Duelist",
        "Ability": "Trip Wire",
        "HP" : 1500,
        "Accuracy" : 10,
        "Dodge": 10
    }
];
var heros = [
    {
        "Name": "Sage",
        "Type": "Sentinal",
        "Ability": "Healing Sphere",
        "HP" : 1500,
        "Accuracy" : 10,
        "Dodge": 10
    },
    {
        "Name": "Phoenix",
        "Type": "Duelist",
        "Ability": "Hot Hands",
        "HP" : 1500,
        "Accuracy" : 10,
        "Dodge": 10,
    }
];
var heroMultiplier = 0;
//Descides the hit multiplyer of dammage
function heroRoll(){
    random = Math.floor(Math.random() * 5 + 1);
    heroMultiplier = random;
    console.log(heroMultiplier, hero.Name, "Multiplier")
}

var enemyMultiplier = 0;

function enemyRoll(){
    random = Math.floor(Math.random() * 5 + 1);
    enemyMultiplier = random
    console.log(enemyMultiplier, enemy.Name, "Multiplyer")
}
//randomly selects the hero and ememy
function heroChoice(){
    random = Math.floor(Math.random() * 2);
    hero = heros[random];
    hero;
    console.log("You are", hero.Name, "(Stats below)")
    console.log(hero)
}

function enemyChoice(){
    random = Math.floor(Math.random() * 5);
    enemy = enemies[random];
    enemy;
    console.log("You are agains", enemy.Name, "(Stats below)")
    console.log(enemy);
}

function Combat(){
    headDammage = 100;
    bodyDammage = 50;
    limbDammage = 25;
    miss = 0;
    hitArray = [headDammage, bodyDammage, bodyDammage, bodyDammage, limbDammage, limbDammage, limbDammage, limbDammage, miss, miss];
    random = Math.floor(Math.random() * hitArray + 1)

    function battleCalls(){
        switch(random){
            case 0:
                console.log("Head shot!");
                break;
            case 1:
            case 2:
            case 3:
                console.log("Body shot!");
                break;
            case 4:
            case 5:
            case 6:
            case 7:
                console.log("Limb shot!");
                break;
            case 8:
            case 9:
                console.log("Miss!");
                break;
            default:
                console.log("????");
                break;
        }    
    }

    if(hero.HP > 0 && enemy.HP > 0){
        //hero Attack
        random = Math.floor(Math.random() * 10 + 1)
        heroRoll();
        enemy.HP -= hitArray[random] * heroMultiplier;
        battleCalls()
        console.log(enemy.Name,"lost", hitArray[random] * heroMultiplier, "HP")
        console.log(enemy.Name, "has", enemy.HP, "HP")
        //enemy Attack
        random = Math.floor(Math.random() * 10 + 1);
        enemyRoll();
        hero.HP -= hitArray[random] * enemyMultiplier;
        battleCalls();
        console.log(hero.Name,"lost", hitArray[random] * enemyMultiplier, "HP")
        console.log(hero.Name,"has", hero.HP, "HP")
        Combat();
    }else{
        if(enemy.HP <= 0){
            console.log(enemy.Name, "was defeated");
        }
        else if(hero.HP <= 0){
            console.log("GAME OVER")
        }
    }
}

heroChoice();
enemyChoice();
Combat();

