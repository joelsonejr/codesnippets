// This script comprehends a function receives an array, organizes it ( in crescent order), and 
// returns it.

function ordenaArray(a)
{
   
    for (let i = 0; i < a.length; i++)
    {
        for (let j = i + 1; j < a.length; j++)
        {
            if (a[i] > a[j])
            {
                var b = a[i];
                a[i] = a[j];
                a[j] = b;
            }
        }
    }

    return a;
}



let array =[120, 2, 1, 390, 5, 0];

let teste = ordenaArray(array);
console.log(teste);
