const VariationCalculator = (voltage: number, variation: number) => {
  return voltage * variation;
};

const AmperageCalculator = (power: number, voltage: number) => {
  return power / voltage;
};

const wireGauges: number[] = [1.5, 2.5, 4.0, 6.0, 10.0, 16.0];

const convertToStandardGaugeSize = (size: number) => {
  let standardSize: number = 0;

  for (let i = 0; i < wireGauges.length; i++) {
    if (size < wireGauges[i]) {
      standardSize = wireGauges[i];
      return standardSize;
    }
  }

  return standardSize;
};

const gaugeCalculator = (
  amperage: number,
  distance: number,
  conductivity: number,
  drop: number
) => {
  const calculatedGage: number =
    (amperage * (distance * 2)) / (conductivity * drop);

  const gaugeSize = convertToStandardGaugeSize(calculatedGage);

  return gaugeSize;
};

// const readline = require("node:readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const copperConductivity = 58;
const variationLimit = 0.04;
const circuitPower = 5500;
let circuitVoltage = 127;
const circuitDistance = 30;

// rl.question(`Qual a tensão do circuito?`, async (voltage: number) => {
//   circuitVoltage = voltage;
//   rl.close();
// });

const circuitAmperage = AmperageCalculator(circuitPower, circuitVoltage);
const voltageDrop = VariationCalculator(circuitVoltage, variationLimit);

const cableGauge: number = gaugeCalculator(
  circuitAmperage,
  circuitDistance,
  copperConductivity,
  voltageDrop
);

console.log(`Required cable gauge is ${cableGauge} mm.`);
