function searchButton(){
  const studentId1 = parseInt(document.getElementById("studentID").value);

  switch (studentId1){
  case 10101:

  document.getElementById("name").textContent = "Roy";
  document.getElementById("age").textContent = "22"; 
  document.getElementById("sex").textContent = "M"; 
  document.getElementById("course").textContent = "BSIT"; 
  break;

  case 20202:

  document.getElementById("name").textContent = "Ash";
  document.getElementById("age").textContent = "30"; 
  document.getElementById("sex").textContent = "M"; 
  document.getElementById("course").textContent = "BSIT"; 
  break;

  default:

  document.getElementById("name").textContent = "invalid";
  document.getElementById("age").textContent = "invalid"; 
  document.getElementById("sex").textContent = "invalid"; 
  document.getElementById("course").textContent = "invalid";
  }
}

function resultButton(){
  let result1 = parseFloat(document.getElementById("prelim-grade").value);

  if (result1 <= 3.0){
      document.getElementById("result1").textContent = "PASSED";
      document.getElementById("result1").style.color = "GREEN";
  } else {
      document.getElementById("result1").textContent = "FAILED";
      document.getElementById("result1").style.color = "RED";
  }
}

function resultButton2(){
  let result1 = parseFloat(document.getElementById("midterm-grade").value);

  if (result1 > 3.0){
      document.getElementById("result2").textContent = "FAILED";
      document.getElementById("result2").style.color = "RED";
  } else {
      document.getElementById("result2").textContent = "PASSED"
      document.getElementById("result2").style.color = "GREEN";;
  }
}

function resultButton3(){
  let result1 = parseFloat(document.getElementById("semi-final").value);

  if (result1 > 3.0){
      document.getElementById("result3").textContent = "FAILED";
      document.getElementById("result3").style.color = "RED";
  } else {
      document.getElementById("result3").textContent = "PASSED";
      document.getElementById("result3").style.color = "GREEN";
  }
}

function resultButton4(){
  let result1 = parseFloat(document.getElementById("final-grade").value);

  if (result1 > 3.0){
      document.getElementById("result4").textContent = "FAILED";
      document.getElementById("result4").style.color = "RED";
  } else {
      document.getElementById("result4").textContent = "PASSED";
      document.getElementById("result4").style.color = "GREEN";
  }
}



function gradeButton(){
  const grade1 = parseFloat(document.getElementById("prelim-grade").value);
  const grade2 = parseFloat(document.getElementById("midterm-grade").value);
  const grade3 = parseFloat(document.getElementById("semi-final").value);
  const grade4 = parseFloat(document.getElementById("final-grade").value);

  const semGrade = (grade1 + grade2 + grade3 + grade4) / 4;

  document.getElementById("student-name").textContent = "ASH";
  document.getElementById("section").textContent = "BSIT-1K";
  

  if (semGrade > 3.0){
    document.getElementById("semester-grade").textContent = `${semGrade} FAILED`;
    document.getElementById("semester-grade").style.color = "RED";
} else {
    document.getElementById("semester-grade").textContent = `${semGrade} PASSED`;
    document.getElementById("semester-grade").style.color = "GREEN";
}
}
