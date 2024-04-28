let dataInput = false;

function addExperiment() {
    var densityLiquid = parseFloat(document.getElementById("densityLiquid").value);
    var densityBall = parseFloat(document.getElementById("densityBall").value);
    var radius = parseFloat(document.getElementById("radius").value);
    var time = parseFloat(document.getElementById("time").value);
    var distance = parseFloat(document.getElementById("distance").value); 

    if (isNaN(densityLiquid) || isNaN(densityBall) || isNaN(radius) || isNaN(time) || isNaN(distance)) {
        if (isNaN(densityLiquid)) {
            document.getElementById("densityLiquid").style.border = "1px solid red";
        }
        else {
            document.getElementById("densityLiquid").style.border = "1px solid #bbbbbb";
        }
        if (isNaN(densityBall)) {
            document.getElementById("densityBall").style.border = "1px solid red";
        }
        else { document.getElementById("densityBall").style.border = "1px solid #bbbbbb"; }
        if (isNaN(radius)) {
            document.getElementById("radius").style.border = "1px solid red";
        }
        else { document.getElementById("radius").style.border = "1px solid #bbbbbb"; }
        if (isNaN(time)) {
            document.getElementById("time").style.border = "1px solid red";
        }
        else { document.getElementById("time").style.border = "1px solid #bbbbbb"; }
        if (isNaN(distance)) {
            document.getElementById("distance").style.border = "1px solid red";
        }
        else { document.getElementById("distance").style.border = "1px solid #bbbbbb"; }
        return ;
    }
    else {
        document.getElementById("distance").style.border = "1px solid #bbbbbb";
        document.getElementById("time").style.border = "1px solid #bbbbbb";
        document.getElementById("radius").style.border = "1px solid #bbbbbb";
        document.getElementById("densityBall").style.border = "1px solid #bbbbbb";
        document.getElementById("densityLiquid").style.border = "1px solid #bbbbbb";
    }

    var velocity = distance / time;
    var coefficient = (densityBall - densityLiquid) * 980 * Math.pow(radius, 2) * 2 / (velocity * 9);

    var table = document.getElementById("dataTable");
    var row = table.insertRow(-1);
    var rowNum = table.rows.length - 1;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = rowNum;
    cell2.innerHTML = densityLiquid;
    cell3.innerHTML = densityBall;
    cell4.innerHTML = radius;
    cell5.innerHTML = time.toFixed(2);
    cell6.innerHTML = velocity.toFixed(2);
    cell7.innerHTML = coefficient.toFixed(10);
    
    dataInput = true;

    showIntermediateCalculations(densityLiquid, densityBall, radius, time, velocity, coefficient, distance);
}

function clearTable() {
    document.getElementById("dataTable").innerHTML = "<tr><th>№</th><th>Плотность жидкости (г/см³)</th><th>Плотность шарика (г/см³)</th><th>Радиус шарика (см)</th><th>Время падения (с)</th><th>Скорость падения (см/с)</th><th>Коэффициент плотности</th></tr>";
    document.getElementById("intermediateCalculations").innerHTML = "";
    dataInput = false;
}


function showIntermediateCalculations(densityLiquid, densityBall, radius, time, velocity, coefficient, distance) {
    var calculationsDiv = document.getElementById("intermediateCalculations");
    var calculationResult = "<p><strong>Вычисления:</strong></p>";
    calculationResult += "<p>Скорость падения шарика (v₀) = l/t</p>";
    calculationResult += "<p>Скорость падения шарика (v₀) = " + distance / time + "</p>";
    calculationResult += "<p>Скорость падения шарика (v₀) = " + velocity.toFixed(2) + " м/с</p><br>";
    calculationResult += "<p>Коэффициент плотности (Cp) = (2 * r^2 * ((ρш - ρж) * g*100) / (9 * V₀)</p>";
    // calculationResult += "<p>Коэффициент плотности (Cp) = ((" + densityBall + " - " + densityLiquid + ") * 9.8 * " + radius + "^2) / (" + velocity.toFixed(2) + "^2 * " + time.toFixed(2) + "^2)</p>";
    calculationResult += "<p>Коэффициент плотности (Cp) = " + coefficient.toFixed(6) + "</p>";

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