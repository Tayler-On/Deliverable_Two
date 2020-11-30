let rainFallInput = prompt("How many inches of rain fell?");
let aLine = "";
let rain = rainFallInput

const DEF_CROP_YIELD = 50;
const HIGH_RAIN = 20;
const DEC_HIGH_RAIN = .9;
const LOW_RAIN = 10;
const DEC_LOW_RAIN = .8;
const MULT_REG_FERT = 1.1;
const MULT_PREM_FERT = 1.15;

while(rain > 0){
    aLine += "*";
    rain --;
}
console.log(aLine);

if(rainFallInput >= HIGH_RAIN){
    let fertilizer = prompt("Did you use fertilizer?");
    let cropYield = DEF_CROP_YIELD*DEC_HIGH_RAIN;
    if(fertilizer === "yes"){
        let typeFert = prompt("Did you use premium or regular fertilizer?");
        if(typeFert === "regular"){
            let updatedCropYield = cropYield*MULT_REG_FERT;
            console.log("The yield should be " + updatedCropYield + " bushels per acre.");
    }
        if(typeFert === "premium"){
            let updatedCropYield = cropYield*MULT_PREM_FERT;
            console.log("The yield should be " + updatedCropYield + " bushels per acre.");
        }
}
    if(fertilizer === "no"){
        console.log("the yield should be " + cropYield + " bushels per acre.");
    }
}

if(rainFallInput <= LOW_RAIN){
    let fertilizer = prompt("Did you use fertilizer?");
    let cropYield = DEF_CROP_YIELD*DEC_LOW_RAIN;
    if(fertilizer === "yes"){
        let typeFert = prompt("Did you use premium or regular fertilizer?");
        if(typeFert === "regular"){
            let updatedCropYield = cropYield*MULT_REG_FERT
            console.log("The yield should be " + updatedCropYield + " bushels per acre.");
    }
        if(typeFert === "premium"){
            let updatedCropYield = cropYield*MULT_PREM_FERT
            console.log("The yield should be " + updatedCropYield + " bushels per acre.");
        }
}
    if(fertilizer === "no"){
        console.log("the yield should be " + cropYield + " bushels per acre.");
    }
}

if(rainFallInput > LOW_RAIN && rainFallInput < HIGH_RAIN){
    let fertilizer = prompt("Did you use fertilizer?");
    let cropYield = DEF_CROP_YIELD;
    if(fertilizer === "yes"){
        let typeFert = prompt("Did you use premium or regular fertilizer?");
        if(typeFert === "regular"){
            let updatedCropYield = cropYield*MULT_REG_FERT;
            console.log("The yield should be " + updatedCropYield + " bushels per acre.");
    }
        if(typeFert === "premium"){
            let updatedCropYield = cropYield*MULT_PREM_FERT;
            console.log("The yield should be " + updatedCropYield + " bushels per acre.");
        }
}
    if(fertilizer === "no"){
        console.log("the yield should be " + cropYield + " bushels per acre.");
    }
}