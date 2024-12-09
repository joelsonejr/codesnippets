var VariationCalculator = function (voltage, variation) {
    return voltage * variation;
};
var AmperageCalculator = function (power, voltage) {
    return power / voltage;
};
var wireGauges = [1.5, 2.5, 4.0, 6.0, 10.0, 16.0];
var convertToStandardGaugeSize = function (size) {
    var standardSize = 0;
    for (var i = 0; i < wireGauges.length; i++) {
        if (size < wireGauges[i]) {
            standardSize = wireGauges[i];
            return standardSize;
        }
    }
    return standardSize;
};
var gaugeCalculator = function (amperage, distance, conductivity, drop) {
    var calculatedGage = (amperage * (distance * 2)) / (conductivity * drop);
    var gaugeSize = convertToStandardGaugeSize(calculatedGage);
    return gaugeSize;
};
// const readline = require("node:readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
var copperConductivity = 58;
var variationLimit = 0.04;
var circuitPower = 5500;
var circuitVoltage = 127;
var circuitDistance = 30;
// rl.question(`Qual a tensão do circuito?`, async (voltage: number) => {
//   circuitVoltage = voltage;
//   rl.close();
// });
var circuitAmperage = AmperageCalculator(circuitPower, circuitVoltage);
var voltageDrop = VariationCalculator(circuitVoltage, variationLimit);
var cableGauge = gaugeCalculator(circuitAmperage, circuitDistance, copperConductivity, voltageDrop);
console.log("Required cable gauge is ".concat(cableGauge, " mm."));
