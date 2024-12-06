let dataInput = false;

function addExperiment() {
  var nm1 = parseFloat(document.getElementById("nm1").value);
  var nm2 = parseFloat(document.getElementById("nm2").value);
  var nm3 = parseFloat(document.getElementById("nm3").value);
  var nm4 = parseFloat(document.getElementById("nm4").value);
  var nm5 = parseFloat(document.getElementById("nm5").value);
  var iz1 = parseFloat(document.getElementById("iz1").value);
  var iz2 = parseFloat(document.getElementById("iz2").value);
  var iz3 = parseFloat(document.getElementById("iz3").value);
  var iz4 = parseFloat(document.getElementById("iz4").value);
  var iz5 = parseFloat(document.getElementById("iz5").value);


  if (isNaN(nm1) || isNaN(nm2) || isNaN(nm3) || isNaN(nm4) || isNaN(nm5) || isNaN(iz1)) {
    if (isNaN(nm1)) {
      document.getElementById("nm1").style.border = "1px solid red";
    }
    else {
      document.getElementById("nm1").style.border = "1px solid #bbbbbb";
    }
    if (isNaN(nm2)) {
      document.getElementById("nm2").style.border = "1px solid red";
    }
    else { document.getElementById("nm2").style.border = "1px solid #bbbbbb"; }
    if (isNaN(nm3)) {
      document.getElementById("nm3").style.border = "1px solid red";
    }
    else {
      document.getElementById("nm3").style.border = "1px solid #bbbbbb";
    }
    if (isNaN(nm4)) {
      document.getElementById("nm4").style.border = "1px solid red";
    }
    else {
      document.getElementById("nm4").style.border = "1px solid #bbbbbb";
    }
    if (isNaN(nm5)) {
      document.getElementById("nm5").style.border = "1px solid red";
    }
    else {
      document.getElementById("nm5").style.border = "1px solid #bbbbbb";
    }
    if (isNaN(iz1)) {
      document.getElementById("iz1").style.border = "1px solid red";
    }
    else {
      document.getElementById("iz1").style.border = "1px solid #bbbbbb";
    }
    return;
  }
  else {
    document.getElementById("nm1").style.border = "1px solid #bbbbbb";
    document.getElementById("nm2").style.border = "1px solid #bbbbbb";
    document.getElementById("nm3").style.border = "1px solid #bbbbbb";
    document.getElementById("nm4").style.border = "1px solid #bbbbbb";
    document.getElementById("nm5").style.border = "1px solid #bbbbbb";
    document.getElementById("iz1").style.border = "1px solid #bbbbbb";
    document.getElementById("iz2").style.border = "1px solid #bbbbbb";
    document.getElementById("iz3").style.border = "1px solid #bbbbbb";
    document.getElementById("iz4").style.border = "1px solid #bbbbbb";
    document.getElementById("iz5").style.border = "1px solid #bbbbbb";
  }

  var table = document.getElementById("dataTable");
  var row = table.insertRow(-1);
  var rowNum = table.rows.length - 1;

  var v1 = (3/nm1) * Math.pow(10,17);
  var v2 = (3/nm2) * Math.pow(10,17);
  var v3 = (3/nm3) * Math.pow(10,17);
  var v4 = (3/nm4) * Math.pow(10,17);
  var v5 = (3/nm5) * Math.pow(10,17);



  var h1 = (1,602 * Math.pow(10, 19)*iz1)/v1;
  var h2 = (1,602 * Math.pow(10, 19)*iz2)/v2;
  var h3 = (1,602 * Math.pow(10, 19)*iz3)/v3;
  var h4 = (1,602 * Math.pow(10, 19)*iz4)/v4;
  var h5 = (1,602 * Math.pow(10, 19)*iz5)/v5;

  h = (h1 + h2 + h3 + h4 + h5) / 5;

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);

  cell1.outerHTML = '<th>' + rowNum + '</th>';
  console.log(v1, v2, v3, v4, v5);
  cell2.innerHTML = `λ<sub>1</sub>=` + nm1 + `<br>` + `λ<sub>2</sub>=` + nm2 + `<br>` +`λ<sub>3</sub>=` + nm3 + `<br>` +`λ<sub>4</sub>=` + nm4 + `<br>` +`λ<sub>5</sub>=` + nm5;
  cell3.innerHTML = `U<sub>1</sub>=` + iz1 + `<br>` + `U<sub>2</sub>=` + iz2 + `<br>` +`U<sub>3</sub>=` + iz3 + `<br>` +`U<sub>4</sub>=` + iz4 + `<br>` +`U<sub>5</sub>=` + iz5;
  cell4.innerHTML = `ν<sub>1</sub>=` + String(v1).slice(0,3) + `<br>` + `ν<sub>2</sub>=` + String(v2).slice(0,3) + `<br>` +`ν<sub>3</sub>=` + String(v3).slice(0,3) + `<br>` +`ν<sub>4</sub>=` + String(v4).slice(0,3) + `<br>` +`ν<sub>5</sub>=` + String(v5).slice(0,3);
  cell5.innerHTML = `h<sub>1</sub>=` + String(h1).slice(0,5) + `...<br>` + `h<sub>2</sub>=` + String(h2).slice(0,5) + `...<br>` +`h<sub>3</sub>=` + String(h3).slice(0,5) + `...<br>` +`h<sub>4</sub>=` + String(h4).slice(0,5) + `...<br>` +`h<sub>5</sub>=` + String(h5).slice(0,5) + "...";
  cell6.innerHTML = (h/Math.pow(10,-34)).toFixed(4);

  dataInput = true;

  showIntermediateCalculations(v1, v2, v3, v4, v5, h1, h2, h3, h4, h5);
}


function showIntermediateCalculations(v1, v2, v3, v4, v5, h1, h2, h3, h4, h5) {
  var calculationsDiv = document.getElementById("intermediateCalculations");
  var calculationResult = "<p><strong>Вычисления:</strong></p>";

  calculationResult += "<p>Частота первой волны: c/λ = " + v1 + "Гц</p>";
  calculationResult += "<p>Частота второй волны: c/λ = " + v2 + "Гц</p>";
  calculationResult += "<p>Частота третьей волны: c/λ = " + v3 + "Гц</p>";
  calculationResult += "<p>Частота четвертой волны: c/λ = " + v4 + "Гц</p>";
  calculationResult += "<p>Частота пятой волны: c/λ = " + v5 + "Гц</p>";
  calculationResult += "<br>";
  calculationResult += "<p>Постоянная Планка для 1 пары: (e*Uз)/v = " + h1 + "</p>";
  calculationResult += "<p>Постоянная Планка для 2 пары: (e*Uз)/v =" + h2 + "</p>";
  calculationResult += "<p>Постоянная Планка для 3 пары: (e*Uз)/v =" + h3 + "</p>";
  calculationResult += "<p>Постоянная Планка для 4 пары: (e*Uз)/v =" + h4 + "</p>";
  calculationResult += "<p>Постоянная Планка для 5 пары: (e*Uз)/v =" + h5 + "</p>";


  calculationsDiv.innerHTML = calculationResult;
}


function clearTable() {
  document.getElementById("dataTable").innerHTML = "<tr><th>Угол, градусы</th><th>t, c</th><th>nm4</th><th>Эксп. значение<br>диф. сечения<br>I<sub>э</sub>, х10<sup>-23</sup>см<sup>2</sup></th><th>Абс. погрешность<br>∆I, х10<sup>-23</sup>см<sup>2</sup></th><th>Теор. значение<br>диф. сечения<br>I<sub>т</sub>, х10<sup>-23</sup>см<sup>2</sup></th></tr>";
  document.getElementById("intermediateCalculations").innerHTML = "";
  dataInput = false;
}