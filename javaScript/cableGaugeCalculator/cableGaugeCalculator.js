var VariationCalculator = function (voltage, variation) {
    return voltage * variation;
};
var AmperageCalculator = function (power, voltage) {
    return power / voltage;
};
var gaugeCalculator = function (amperage, distance, conductivity, drop) {
    var calculateGage = (amperage * (distance * 2)) / (conductivity * drop);
    var gaugeSize = 0;
    return gaugeSize;
};
var copperConductivity = 58;
var variationLimit = 0.04;
var circuitPower = 5500;
var circuitVoltage = 127;
var circuitDistance = 30;
var circuitAmperage = AmperageCalculator(circuitPower, circuitVoltage);
var voltageDrop = VariationCalculator(circuitVoltage, variationLimit);
var cableGauge = gaugeCalculator(circuitAmperage, circuitDistance, copperConductivity, voltageDrop);
console.log("Required cable gauge is ".concat(cableGauge, " mm"));
