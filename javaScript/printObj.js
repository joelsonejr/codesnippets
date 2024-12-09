//This script main purpose is to receive an object, and print it's porperties. 
//Being that a simple task, I took the chace to practice some other things, like the use of a Constructor to build the objetc.

// Constructor used to create the object. 
function aluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
}

// Function responsible for reading and printing out each to the objects keys and values.
function printObj(obj){

    for (var [key, value] of Object.entries(obj)) 
        {
            console.log(key + ': ' + value)
        }
}


//I've created an array of objects, to provide more input to the function. Each element of the array is a call to the Contructor, that does all the job.
let turma = [
    new aluno("Jackeline", 5, 6),
    new aluno("Silvia", 7, 8),
    new aluno("Silvania", 9, 10)
]

//Printing out all the objects properties.
for (index in turma){
    printObj(turma[index]);
    console.log("\n");
}