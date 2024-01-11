const riga = document.getElementById("riga");


for(let i=1; i<=100; i++ ){
    let numeri;
    if(i % 15==0){
        numeri = "FizzBuzz";
        const card = `<div class="card m-2 p-3 bg-danger">${numeri}</div>`;
        riga.innerHTML += card;
        console.log("FizzBuzz");
    }
    else if(i % 5==0){
        numeri = "Buzz";
        const card = `<div class="card m-2 p-3 bg-warning">${numeri}</div>`;
        riga.innerHTML += card;
        console.log("Buzz");
    }
    else if(i % 3==0){
        numeri = "Fizz";
        const card = `<div class="card m-2 p-3 bg-info">${numeri}</div>`;
        riga.innerHTML += card;
        console.log("Fizz");
    }
    else{
        numeri = i;
        const card = `<div class="card m-2 p-3 bg-dark text-white">${numeri}</div>`;
        riga.innerHTML += card;
        console.log(i);
    }
    // const card = `<div class="card m-3">${numeri}</div>`;
    // riga.innerHTML += card;

}