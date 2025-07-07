let bill = document.getElementById("bill_amount");
let percents = document.querySelectorAll(".percents");
let numOfPeople = document.getElementById("number_of_people");
let tipPerPerson = document.querySelector(".tip_per_person");
let totalTip = document.querySelector(".total_tip");
let resetBtn = document.querySelector(".reset_btn");
let customPercent = document.getElementById("custom_tip");
let tipPercent = 0;


/*
1.calculate tip amount
2. calculate tip per person
3.calculate bill per person
4.sum 2. and 3.
*/ 

// calculate total tip amount
function tipAmount(bill,percent){
    return (bill * percent)/100;
}

//calculate tip per person
function tipForOne(tip){
    return tip/numOfPeople.value;
}


// calculate tip per person  plus bill per person
function totalBill(tip){
    return (bill.value / numOfPeople.value) + tip;
}

// get percents 
percents.forEach(element =>{
    element.addEventListener("click",()=>{
        tipPercent = element.innerHTML.split("%")[0];
    })
})

//tip choosen by user
customPercent.addEventListener("input",()=>{
    tipPercent = customPercent.value;
    
})

numOfPeople.addEventListener("input",()=>{

    // console.log(tipPercent)
    let totalTipAmount = tipAmount(bill.value,tipPercent);
    let tipForPerson = tipForOne(totalTipAmount,numOfPeople.value);
    let totalBillPerPerson = totalBill(tipForPerson,numOfPeople.value);
    

    if(numOfPeople.value == 0 && bill.value == 0){
        bill.style.border = "1px solid red";
        numOfPeople.style.border = "1px solid red";
    }
    else{
        // console.log("Total Tip Amount: ",totalTipAmount);
        // console.log("Tip For Person: " + tipForPerson.toFixed(2));
        // console.log("Total Bill Per Person: " + totalBillPerPerson.toFixed(2));

        tipPerPerson.innerHTML = "$" + tipForPerson.toFixed(2);
        totalTip.innerHTML = "$" + totalBillPerPerson.toFixed(2);

    }
})

//reset button
resetBtn.addEventListener("click",()=>{
    numOfPeople.value = "";
    bill.value = "";
    tipPerPerson.innerHTML = "$0.00";
    totalTip.innerHTML = "$0.00";

})


