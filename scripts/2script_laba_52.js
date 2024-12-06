let dataInput = false;

function addExperiment() {
    var u = parseFloat(document.getElementById("ygol").value);
    var t = parseFloat(document.getElementById("time").value);
    var w = parseFloat(document.getElementById("dN").value);
    var s = parseFloat(document.getElementById("eks").value);
    var a = parseFloat(document.getElementById("abs").value);
    var te = parseFloat(document.getElementById("teor").value);
    
  
    if (isNaN(t) || isNaN(u) || isNaN(w) || isNaN(s) || isNaN(a) || isNaN(te)) {
      if (isNaN(u)) {
        document.getElementById("ygol").style.border = "1px solid red";
      }
      else {
        document.getElementById("ygol").style.border = "1px solid #bbbbbb";
      }
      if (isNaN(t)) {
        document.getElementById("time").style.border = "1px solid red";
      }
      else { document.getElementById("time").style.border = "1px solid #bbbbbb"; }
      if (isNaN(w)) {
        document.getElementById("dN").style.border = "1px solid red";
      }
      else {
        document.getElementById("dN").style.border = "1px solid #bbbbbb";
      }
      if (isNaN(s)) {
        document.getElementById("eks").style.border = "1px solid red";
      }
      else {
        document.getElementById("eks").style.border = "1px solid #bbbbbb";
      }
      if (isNaN(a)) {
        document.getElementById("abs").style.border = "1px solid red";
      }
      else {
        document.getElementById("abs").style.border = "1px solid #bbbbbb";
      }
      if (isNaN(te)) {
        document.getElementById("teor").style.border = "1px solid red";
      }
      else {
        document.getElementById("teor").style.border = "1px solid #bbbbbb";
      }
      return;
    }
    else {
      document.getElementById("time").style.border = "1px solid #bbbbbb";
      document.getElementById("ygol").style.border = "1px solid #bbbbbb";
      document.getElementById("dN").style.border = "1px solid #bbbbbb";
      document.getElementById("eks").style.border = "1px solid #bbbbbb";
      document.getElementById("abs").style.border = "1px solid #bbbbbb";
      document.getElementById("teor").style.border = "1px solid #bbbbbb";
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

    showIntermediateCalculations(u, t, w, s, a, te);
}  


function showIntermediateCalculations(u, t, w, s, a, te) {
    var calculationsDiv = document.getElementById("intermediateCalculations");
    var calculationResult = "<p><strong>Вычисления:</strong></p>";
  
    calculationResult += "<p>Температура в Кельвинах = t+273 = " + t + 273 + "</p>";
  
    calculationsDiv.innerHTML = calculationResult;
  }


function clearTable() {
    document.getElementById("dataTable").innerHTML = "<tr><th>Угол, градусы</th><th>t, c</th><th>dN</th><th>Эксп. значение<br>диф. сечения<br>I<sub>э</sub>, х10<sup>-23</sup>см<sup>2</sup></th><th>Абс. погрешность<br>∆I, х10<sup>-23</sup>см<sup>2</sup></th><th>Теор. значение<br>диф. сечения<br>I<sub>т</sub>, х10<sup>-23</sup>см<sup>2</sup></th></tr>";
    document.getElementById("intermediateCalculations").innerHTML = "";
    dataInput = false;
  }