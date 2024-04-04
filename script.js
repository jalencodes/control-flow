const PI        = 3.1415
const radius    = 5
const plantArea = PI * radius * radius

// Part 1

function plantPrediction(plantCount, weeks)
{
    let curPlantCnt = plantCount * Math.pow(2, weeks)
    let curAreaUsed = 0.8 * curPlantCnt
    let perAreaUsed = curAreaUsed / plantArea * 100
    
    if (perAreaUsed > 80) {
        console.log(`After week ${weeks}, the growing area will be at ${perAreaUsed.toFixed(2)}% capacity\nWe recommend the plants be pruned.`);
    }
    else if (perAreaUsed <= 80 && perAreaUsed >= 50) {
        console.log(`After week ${weeks}, the growing area will be at ${perAreaUsed.toFixed(2)}% capacity\nWe recommend the plants be monitored.`);
    }
    else {
        console.log(`After week ${weeks}, the growing area will be at ${perAreaUsed.toFixed(2)}% capacity\nWe predict there will be space to plant more.`);
    }
    return curAreaUsed
}


plantPrediction(20, 1)
plantPrediction(20, 2)
plantPrediction(20, 3)

// Part 2

let plantCount      = 100
let weeks           = 10
let area10Weeks     = plantPrediction(plantCount, weeks)
let neededSpace     = area10Weeks - plantArea
let newSpaceRadius  = Math.sqrt(neededSpace / PI)

console.log(`The radius of the new planting area will be ${newSpaceRadius.toFixed(2)} meters.`);

// Part 3
try {
    startingPlantArea = 0.8 * plantCount
    if (startingPlantArea >= plantArea) {
        throw "I expected better, there is not enough space to plant that many"
    }
    else{
        plantPrediction(plantCount, weeks)
    }
} catch (err) {
    console.log(err);
}
