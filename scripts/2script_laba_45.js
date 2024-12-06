let dataInput = false;

function addExperiment() {
  var u = parseFloat(document.getElementById("u").value);
  var t = parseFloat(document.getElementById("t").value);
  var w = parseFloat(document.getElementById("w").value);
  var s = parseFloat(document.getElementById("s").value);

  if (isNaN(t) || isNaN(u) || isNaN(w) || isNaN(s)) {
    if (isNaN(u)) {
      document.getElementById("u").style.border = "1px solid red";
    }
    else {
      document.getElementById("u").style.border = "1px solid #bbbbbb";
    }
    if (isNaN(t)) {
      document.getElementById("t").style.border = "1px solid red";
    }
    else { document.getElementById("t").style.border = "1px solid #bbbbbb"; }
    if (isNaN(w)) {
      document.getElementById("w").style.border = "1px solid red";
    }
    else {
      document.getElementById("w").style.border = "1px solid #bbbbbb";
    }
    if (isNaN(s)) {
      document.getElementById("s").style.border = "1px solid red";
    }
    else {
      document.getElementById("s").style.border = "1px solid #bbbbbb";
    }
    return;
  }
  else {
    document.getElementById("t").style.border = "1px solid #bbbbbb";
    document.getElementById("u").style.border = "1px solid #bbbbbb";
    document.getElementById("w").style.border = "1px solid #bbbbbb";
    document.getElementById("s").style.border = "1px solid #bbbbbb";
  }

  var kelv = t + 273;
  var sigma = (w)/(s*kelv^4);

  var table = document.getElementById("dataTable");
  var row = table.insertRow(-1);
  var rowNum = table.rows.length - 1;

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);

  cell1.outerHTML = '<th>' + rowNum + '</th>';
  cell2.innerHTML = t;
  cell3.innerHTML = u;
  cell4.innerHTML = w.toFixed(3);
  cell5.innerHTML = kelv.toFixed(3);
  cell6.innerHTML = sigma.toFixed(3);

  dataInput = true;

  showIntermediateCalculations(t, u, w, kelv, sigma);
}

function clearTable() {
  document.getElementById("dataTable").innerHTML = "<tr><th>№</th><th>ЭДС:</th><th>I<sub>кз</sub></th><th>Сопротивление источника(r):</th><th>Мощность(N<sub>max</sub></th></tr>";
  document.getElementById("intermediateCalculations").innerHTML = "";
  dataInput = false;
}


function showIntermediateCalculations(t, u, w, kelv, sigma) {
  var calculationsDiv = document.getElementById("intermediateCalculations");
  var calculationResult = "<p><strong>Вычисления:</strong></p>";

  // calculationResult += "<p>Температура в Кельвинах = t+273 = " + t + 273 + "</p>";
  // calculationResult += "<p>Постоянная Стефана-Больцмана = σ=W/(ST<sup>4</sup>),<br>Дж/(м<sup>2</sup>*с*К<sup>4</sup>) = " + sigma + "</p>";

  calculationsDiv.innerHTML = calculationResult;
}

function toggleCalculations() {
  var calculationsDiv = document.getElementById("intermediateCalculations");
  var button = document.querySelector('button:nth-child(3)');

  if (calculationsDiv.style.display === "none" && dataInput === true) {
    calculationsDiv.style.display = "block";
    calculationsDiv.style.border = "1px solid #ddd";
    calculationsDiv.style.padding = "10px";
    button.textContent = "Скрыть промежуточные вычисления";
  } else {
    calculationsDiv.style.display = "none";
    button.textContent = "Показать промежуточные вычисления";
  }
}