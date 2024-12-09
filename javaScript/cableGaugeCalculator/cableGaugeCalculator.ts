const VariationCalculator = (voltage: number, variation: number) => {
  return voltage * variation;
};

const AmperageCalculator = (power: number, voltage: number) => {
  return power / voltage;
};

const gaugeCalculator = (
  amperage: number,
  distance: number,
  conductivity: number,
  drop: number
) => {
  const calculateGage: number =
    (amperage * (distance * 2)) / (conductivity * drop);

  const gaugeSize: number = 0;
  return gaugeSize;
};

const copperConductivity = 58;
const variationLimit = 0.04;
const circuitPower = 5500;
const circuitVoltage = 127;
const circuitDistance = 30;

const circuitAmperage = AmperageCalculator(circuitPower, circuitVoltage);
const voltageDrop = VariationCalculator(circuitVoltage, variationLimit);

const cableGauge: number = gaugeCalculator(
  circuitAmperage,
  circuitDistance,
  copperConductivity,
  voltageDrop
);

console.log(`Required cable gauge is ${cableGauge} mm.`);
