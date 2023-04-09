//Catch Weight and Height from user input.
const Weight = document.getElementById("weight");
const Height = document.getElementById("height");

//Catch submit form
const formSubmit = document.getElementById("submit");

//Catch grouping element to show the result BMI
const Result = document.getElementById("result");

// Calculate BMI with = Width / (Height / 100)^2 after that return the result value.
const calculationBMI = (weight, height) => (weight / Math.pow(height / 100, 2)).toFixed(1);

export { calculationBMI };

// Make function with value parameter from calculation result, do conditional statement and return BMI category result.
const getCategoryBMI = (value) => {
  if (value < 18.5) {
    return "Underweight";
  }
  if (value < 24.9) {
    return "Normal Weight";
  }
  if (value < 29.9) {
    return "Overweight";
  }
  if (value >= 30) {
    return "Obesity";
  }
};

export { getCategoryBMI };

//EventListener On Submit
formSubmit.addEventListener("submit", (el) => {
  //Use preventDefault() to stop reloading if we submit the form
  el.preventDefault();

  if (document.querySelector(".result > p")) {
    Result.innerHTML = "";
  }
  //Call calculationBMI() from calculation.js file. Send weight and height value to argument.
  const result = calculationBMI(Weight.value, Height.value);
  //Call getCategoryBMI() from categories.js file. Send result value from calculation result to argument.
  const category = getCategoryBMI(result);
  //Create a p element and nested the results into the element tag.
  const nodeElement = `<p class="fade-in">Your BMI is <strong>${result}</strong> which means You are <strong>${category}!</strong></p>`;
  //Use insertAdjacentHTML() method with 2 arguments to nested nodeElement.
  Result.insertAdjacentHTML("afterbegin", nodeElement);
});
