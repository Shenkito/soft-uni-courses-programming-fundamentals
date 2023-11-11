function experienceGaining(input) {
    
    let experienceWanted = Number(input.shift());
    let expectedBattles = Number(input.shift());
    
    let sumExperience = 0;
    let battlesCount = 0;

    let isEnoughExp = false;

    for (let i = 1; i <= expectedBattles; i++) {
        battlesCount++;
        let experiencePerBattle = input[i - 1];

        if (i % 3 == 0) {
           experiencePerBattle += experiencePerBattle * 0.15;
        }

        if (i % 5 == 0) {  
            experiencePerBattle *= 0.90;        
        }

        if (i % 15 == 0) {
            experiencePerBattle += experiencePerBattle * 0.05;
        }

        sumExperience += experiencePerBattle;

        if (sumExperience >= experienceWanted) {
            isEnoughExp = true;
            break;
        }
    }

    if (isEnoughExp) {
        console.log(`Player successfully collected his needed experience for ${battlesCount} battles.`);
    } else {
        let expNeed = experienceWanted - sumExperience;
        console.log(`Player was not able to collect the needed experience, ${expNeed.toFixed(2)} more needed.`);
    }
}

experienceGaining(([400,
    5,
    50,
    100,
    200,
    100,
    20])
    )