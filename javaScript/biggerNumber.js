//This script was designed to receive an array of number, find out the bigger value, and return.

//In order to perform this task I've used two functions. One I reused from another project (ordenaArray). With this function I can organize the array in a crescent order. 
// The other function has the sole purpose of acquire the last number of an array, and return it. 

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


function retornaMaior(array)
{
    let maior = ordenaArray(array);
   
    console.log(maior[maior.length-1]);
}

let array =[23, 45, 480, 5, 7];

retornaMaior(array);
