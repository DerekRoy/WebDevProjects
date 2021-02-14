function calculate(){
  let currentExpect = parseInt(document.querySelector("#country").value);
  let age = calcAge();
  let gender = calcGender();
  let healthRisk =  calcBMIRisk();
  let smoker = document.getElementById('smoker').checked ? -10 : 0;
  let exercise = calcExercise();

  console.log(currentExpect,age,gender,healthRisk,smoker,exercise);

  localStorage.setItem("life",currentExpect+age+gender+healthRisk+smoker+exercise);
  console.log(currentExpect+age+gender+healthRisk+smoker+exercise);
}

function calcAge(){
  let d = new Date()
  return -(d - document.querySelector("#birthday").valueAsDate)/31536000000;
}

function calcGender(){
  if(document.getElementById('female').checked){
    return 4;
  }
  return -4;
}

function calcBMIRisk(){
  let bmi = calcBMI();

  // Underweight
  if(bmi<=18){
    bmi = 49 - bmi;
  }

  let effect = 0;
  // Overweight
  if(bmi>26 && bmi<31){
    effect = -1;
  } else if(bmi>=31 && bmi<33){
    effect = -1.5;
  } else if(bmi >= 33 && bmi<36){
    effect = -2.5;
  }else if(bmi>=36 && bmi<38){
    effect = -3.5;
  }else if(bmi>=38 && bmi<42){
    effect = -4.5;
  }else if(bmi>=42 && bmi<45){
    effect = -6.5;
  }else if (bmi>=45){
    effect = -12.5;
  }

  return effect;
}

function calcBMI(){
  let height = (parseInt(document.querySelector("#feet").value)*12 + parseInt(document.querySelector("#inches").value))**2;
  let lbs = parseInt(document.querySelector("#weight").value);
  return (lbs/height)*703
}

function calcExercise(){
  let minutes = parseInt(document.querySelector("#weight").value);
  let effect;
  if(minutes< 60){
    effect = -1;
  }else if(minutes>=75 && minutes<300){
    effect = 3.4;
  }else{
    effect = 1;
  }
  return effect;
}
