// document.getElementById("count-el").innerText=5;


//initialize the count to zero 
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//chenge the count-el int the html to reflect the new count
let countEl = document.getElementById("count-el")   //Passing the argument to the function 
let saveEl = document.getElementById("save-el")
let saveCount;
let count=0;
function increment(){
    count += 1;
    countEl.textContent=count;
    // alert(count)
    // document.getElementById("count-el").innerText=count;
    // alert("clicked")
    saveCount=count
}

function save(){
    let countDash =  count + " - "

    saveEl.textContent += countDash  
    // alert(saveCount)
    // count = 0;
    // countEl.textContent=count;
}

function reset(){
    count = 0;
    countEl.textContent=count;
}



// let countDash = count + "-"

// saveEl.innerText += countDash


   /** Render Welcome message  **/

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Abhay Kumar "
// let greeting = "welcome "


// welcomeEl.innerText = greeting + name
// // welcomeEl.innerText = welcomeEl.innerText +"#"
// welcomeEl.innerText +=  " #"