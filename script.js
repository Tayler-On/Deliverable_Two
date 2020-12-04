let rainFallInput = prompt("How many inches of rain fell?");
// store user's rain input and return "*"s equal to their input in the console
let aLine = "";                 
let rain = rainFallInput
while(rain > 0){
    aLine += "*";
    rain --;
}
console.log(aLine);

// define constants
const DEF_CROP_YIELD = 50; 
const HIGH_RAIN = 20; 
const DEC_HIGH_RAIN = .9; 
const LOW_RAIN = 10;
const DEC_LOW_RAIN = .8;
const MULT_REG_FERT = 1.1;
const MULT_PREM_FERT = 1.15;

// find crop yield for too much rain
let cropYield = 0;
if(rainFallInput >= HIGH_RAIN){
    cropYield = DEF_CROP_YIELD*DEC_HIGH_RAIN;
}

// find crop yield for too little rain
else if(rainFallInput <= LOW_RAIN){
    cropYield = DEF_CROP_YIELD*DEC_LOW_RAIN;
}

// find crop yield for ideal rain 
else{
    cropYield = DEF_CROP_YIELD;
}
findCropYield (cropYield);

// function for handling user's input about fertilizer
function findCropYield(cropYield) {
    let fertilizer = prompt("Did you use fertilizer?");
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