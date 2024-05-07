const display= document.querySelector(".display");
const result= document.querySelector(".result");
const buttons= document.querySelectorAll("button");
const specialChars=["%","*","/","-","+","="];
let output="";

const icon = document.getElementById("icon");

// Add an event listener to detect clicks on the icon
icon.addEventListener("click", function() {
  // Toggle between different icons by changing the class
  if (icon.classList.contains("fa-toggle-on")) {
    // If the current icon is a star, change it to a heart
    icon.classList.remove("fa-toggle-on");
    icon.classList.add("fa-toggle-off");
    document.body.style.backgroundColor="#000";
  } else {
    // If the current icon is a heart, change it back to a star
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
    document.body.style.backgroundColor="#e0e3eb";
  }
});
console.log(display,buttons)

const calculate =(btnValue)=> {
    if(btnValue === "=" && output !== ""){
        output=eval(output.replace("%","/100"));
        result.style.display="block";
    }
    else if(btnValue==="AC"){
        output="";
        result.value = "";
        display.value=""
    }
    else if(btnValue === "DEL"){
        output = output.toString().slice(0, -1);
        display.value = output;
    }
    else{
        if (specialChars.includes(btnValue) && specialChars.includes(output[output.length - 1])) {
            // Do nothing if both inputs are operators
            return;
        }
        output += btnValue;
    }
    //display.value=output;
    //result.value=output;

    if (!["AC", "DEL", "="].includes(btnValue)) {
        // Update the display only if the clicked button is not AC, DEL, or =
        display.value = output;
    }
    if (btnValue === "=") {
        result.value = output;
    }
}

//Add event listener to buttons, call calculate on click.
buttons.forEach(button => {
    //Button click listener calls calculate() with dataset value as argument
    button.addEventListener("click", e => calculate(e.target.dataset.value))

})