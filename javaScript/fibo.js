//Function to execute the Fibonacci sequence for a define number of times. This number is indicated by the function input.


function fibo(interations) {
	let fiboSequence=[];

	for(i=0; i<interations; i++){

		if(fiboSequence.length == 0){
			fiboSequence[0] = 0;
		} else if(fiboSequence.length == 1){  //TODO: add verf in case the first element isn't 1.
			fiboSequence[1] = 1;
		} else {
				let joe = fiboSequence[fiboSequence.length-1] + fiboSequence[fiboSequence.length-2];
				fiboSequence.push(joe)
		}

	}

	return(fiboSequence);
}

let fibonnaci = fibo(10);

console.log(fibonnaci);
