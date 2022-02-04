function saturdayFun(fun){
    if(fun === "bathe my dog"){
        return `This Saturday, I want to ${fun}!`
    } else {
        return "This Saturday, I want to roller-skate!"
    }
}

function mondayWork(taco){
    if (taco === "work from home"){
        return "This Monday, I will work from home."
    } else{
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective(string = "*"){

    return function (adjective = "special"){

            console.log(`You are ${string}${adjective}${string}!`);
        return `You are ${string}${adjective}${string}!`
   }
};
