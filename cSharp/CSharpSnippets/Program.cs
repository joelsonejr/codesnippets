using System.Data;
using CSharpSnippets;

namespace CSharpSnippets
{
    class CableGauge
    {
        public static void Main(string[] args)
        {   
            double copperConductivity = 58;
            List<double> wireGaugeSizes2 = new List<double>() {0.5, 0.75, 1.0, 1.5, 2.5, 4.0, 6.0, 10.0, 16.0, 25.0, 35.0, 50.0, 70.0,95.0, 120.0, 150.0,185.0, 240.0, 300.0 };

            //TODO: Create entity "circuit"
            Console.Write("Tensão do circuito (em volts): ");
            int circuitVoltage = int.Parse(Console.ReadLine());
            Console.Write("Potência do circuito (em watts): ");
            int circuitPower = int.Parse(Console.ReadLine());
            Console.WriteLine("Comprimento do circuito (em metros): ");
            double distance = double.Parse(Console.ReadLine());
            Console.Write("Valor máximo para variação da tensão (4%, 5%, etc): ");
            double variation = double.Parse(Console.ReadLine())/100;

            try
            {
            double circuitAmps = AmpCalculator(circuitPower, circuitVoltage);
            double voltageVariation = VariationCalculator(circuitVoltage, variation);
            double calculatedGauge = GaugeCalculator(circuitAmps, distance, voltageVariation, copperConductivity);
            double gaugeSize = StandardizeGauge(calculatedGauge, wireGaugeSizes2);

            Console.WriteLine($"O fio recomendado possui uma bitola de {gaugeSize}mm.");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());   
            }
        }

        public static double GaugeCalculator (double amperage, double distance, double variation, double conductivity)
        {
            return (amperage * (distance * 2)) / (conductivity * variation);
        }

         public static double AmpCalculator(double power, int voltage)
        {
            return power / voltage;
        }

        public static double VariationCalculator(int voltage, double variation)
        {
            return voltage * variation;
        }

        public static double StandardizeGauge(double size, List<double> gages) 
        {   
            double standardized = -1;

            if (size > gages.Last())
            {
                throw new Exception($"A bitola do cabo excede {gages.Last()}mm. Favor consultar um profissional.");
            }

            foreach (var gage in gages )
            {
                if (size < gage)
                {
                    standardized = gage;
                    break;
                }
            }

            return standardized;
        }
    }
}
