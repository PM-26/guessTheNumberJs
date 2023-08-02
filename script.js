let number=Math.floor(Math.random()*100);
let turns=0;
let guess=prompt("Enter a number between 1 and 100 --> ");


do{
    guess= Number.parseInt(guess);
    if (guess>number){
        console.log("Number entered is greater.");
        guess=prompt("Enter again.");
        guess=Number.parseInt(guess);
        ++turns;
    }
    else if(guess<number){
        console.log("Number entered is smaller.");
        guess=prompt("Enter again.");
        guess=Number.parseInt(guess);
        ++turns;
    }
    }
    while(guess!=number);
    console.log("You guess the number in ",turns, "turns.");