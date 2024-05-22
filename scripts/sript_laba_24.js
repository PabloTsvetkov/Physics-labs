let dataInput = false;

function addExperiment() {
    var eds = parseFloat(document.getElementById("eds").value);
    var Ikz = parseFloat(document.getElementById("Ikz").value);

    if (isNaN(eds) || isNaN(Ikz)) {
        if (isNaN(eds)) {
            document.getElementById("eds").style.border = "1px solid red";
        }
        else {
            document.getElementById("eds").style.border = "1px solid #bbbbbb";
        }
        if (isNaN(Ikz)) {
            document.getElementById("Ikz").style.border = "1px solid red";
        }
        else { document.getElementById("Ikz").style.border = "1px solid #bbbbbb"; }
        return ;
    }
    else {
        document.getElementById("eds").style.border = "1px solid #bbbbbb";
        document.getElementById("Ikz").style.border = "1px solid #bbbbbb";
    }

    var r = eds / Ikz;
    var N = eds * eds / ( 4 * r );

    var table = document.getElementById("dataTable");
    var row = table.insertRow(-1);
    var rowNum = table.rows.length - 1;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.outerHTML = '<th>' + rowNum + '</th>';
    cell2.innerHTML = eds;
    cell3.innerHTML = Ikz;
    cell4.innerHTML = r.toFixed(3);
    cell5.innerHTML = N.toFixed(3);
    
    dataInput = true;

    showIntermediateCalculations(eds, Ikz, r, N);
}

function clearTable() {
    document.getElementById("dataTable").innerHTML = "<tr><th>№</th><th>ЭДС:</th><th>I<sub>кз</sub></th><th>Сопротивление источника(r):</th><th>Мощность(N<sub>max</sub></th></tr>";
    document.getElementById("intermediateCalculations").innerHTML = "";
    dataInput = false;
}


function showIntermediateCalculations(eds, Ikz, r, N) {
    var calculationsDiv = document.getElementById("intermediateCalculations");
    var calculationResult = "<p><strong>Вычисления:</strong></p>";
    calculationResult += "<p>Сопротивление источник (r) = E/I = " + eds / Ikz + "</p>";
    calculationResult += "<p>Мощность (N<sub>max</sub>) = E^2 / 4r = " + eds * eds / (4 * r) + "</p>";

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