//This script takes all the number in a given array, sum them up, and then return the average of those numbers.


function media(a)
{
    let soma = 0;

    for (i = 0; i < a.length; i++)
    {
        soma += a[i];
    }

    soma = soma / a.length;
    return soma;
}

let array = [1, 2, 3, 4, 5];

console.log(media(array));