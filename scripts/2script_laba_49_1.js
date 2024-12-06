let dataInput = false;

function addExperiment() {
  var u1 = parseFloat(document.getElementById("U1").value);
  var u2 = parseFloat(document.getElementById("U2").value);
  var u3 = parseFloat(document.getElementById("U3").value);
  var u4 = parseFloat(document.getElementById("U4").value);
  var u5 = parseFloat(document.getElementById("U5").value);

  if (isNaN(u2) || isNaN(u1) || isNaN(u3) || isNaN(u4) || isNaN(u5)) {
    if (isNaN(u1)) {
      document.getElementById("U1").style.border = "1px solid red";
    }
    else {
      document.getElementById("U1").style.border = "1px solid #bbbbbb";
    }
    if (isNaN(u2)) {
      document.getElementById("U2").style.border = "1px solid red";
    }
    else { document.getElementById("U2").style.border = "1px solid #bbbbbb"; }
    if (isNaN(u3)) {
      document.getElementById("U3").style.border = "1px solid red";
    }
    else {
      document.getElementById("U3").style.border = "1px solid #bbbbbb";
    }
    if (isNaN(u4)) {
      document.getElementById("U4").style.border = "1px solid red";
    }
    else {
      document.getElementById("U4").style.border = "1px solid #bbbbbb";
    }
    if (isNaN(u5)) {
      document.getElementById("U5").style.border = "1px solid red";
    }
    else {
      document.getElementById("U5").style.border = "1px solid #bbbbbb";
    }
    return;
  }
  else {
    document.getElementById("U2").style.border = "1px solid #bbbbbb";
    document.getElementById("U1").style.border = "1px solid #bbbbbb";
    document.getElementById("U3").style.border = "1px solid #bbbbbb";
    document.getElementById("U4").style.border = "1px solid #bbbbbb";
    document.getElementById("U5").style.border = "1px solid #bbbbbb";
  }

  var kelv = u2 + 273;
  var sigma = (u3) / (u4 * kelv ^ 4);

  var table = document.getElementById("dataTable");
  var row = table.insertRow(-1);
  var rowNum = table.rows.length - 1;

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);

  // cell1.outerHTML = '<th>' + u + '</th>';
  cell1.innerHtml = rowNum;
  cell2.innerHTML = u1;
  cell3.innerHTML = u2;
  cell4.innerHTML = u3;
  cell5.innerHTML = u4;
  cell6.innerHTML = u5;

  console.log(rowNum);
  dataInput = true;

  showIntermediateCalculations(u1, u2, u3, u4, u5);
}


function showIntermediateCalculations(u1, u2, u3, u4, u5) {
  var calculationsDiv = document.getElementById("intermediateCalculations");
  var calculationResult = "<p><strong>Вычисления:</strong></p>";

  var avgdelta = (u5-u1)/4;

  
  var gas = '';
  var min = 100000;

  let arr = ["H2", "He", "Ne", "Ar", "Kr", "Xe", "Hg", "Cs"]

  let obj = {
  "H2": 11.2,
  "He": 20.9,
  "Ne": 16.6,
  "Ar": 11.6,
  "Kr": 10.0,
  "Xe": 8.5,
  "Hg": 4.9,
  "Cs": 1.4
  };

  for (let i = 0; i < 8; i++)
  {
  console.log(obj[arr[i]]);
    if (Math.abs(obj[arr[i]] - avgdelta) < min)
    {
      min = Math.abs(obj[arr[i]] - avgdelta);
      gas = arr[i]
    }
  } 

  calculationResult += "<p>Средняя разница = 𝛥𝑈 = 𝑈i+1 − 𝑈i = " + avgdelta + "<br>Газ: "+ gas +"</p>";

  calculationsDiv.innerHTML = calculationResult;
}


function clearTable() {
  document.getElementById("dataTable").innerHTML = "<tr><th>Угол, градусы</th><th>t, c</th><th>U3</th><th>Эксп. значение<br>диф. сечения<br>I<sub>э</sub>, х10<sup>-23</sup>см<sup>2</sup></th><th>Абс. погрешность<br>∆I, х10<sup>-23</sup>см<sup>2</sup></th><th>Теор. значение<br>диф. сечения<br>I<sub>т</sub>, х10<sup>-23</sup>см<sup>2</sup></th></tr>";
  document.getElementById("intermediateCalculations").innerHTML = "";
  dataInput = false;
}