let diam_sum = 0;
let experiments_count = 0;
let diametr_5_sred = undefined;
function addExperiment() {
    let diametr = document.getElementById("diametr");
    if (experiments_count >= 20) {
        return;
    }
    if (diametr.value === "") {
        diametr.style.borderColor = "red";
        return;
    }
    else {
        diametr.style.borderColor = "#bbbbbb";
    }
    let d = +diametr.value;
    ++experiments_count;
    diam_sum += d;

    let table = document.getElementById("dataTable");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    // if (experiments_count <= 5) {
    //     var cell6 = row.insertCell(5);
    // }

    // if (experiments_count > 5) {
    //     switch (experiments_count) {
    //         case (6): {
    //             cell5.outerHTML = "<th colspan='2'>&ltD<sub>5</sub>&gt = " + diam_sum / experiments_count + "</th>";
    //             break;
    //         }
    //     }
    // }
    cell1.outerHTML = "<th>" + experiments_count + "</th>";
    cell2.innerHTML = d;
    cell3.innerHTML = Math.abs((diam_sum / experiments_count) - d).toFixed(2);
    cell4.innerHTML = Math.pow(Math.abs((diam_sum / experiments_count) - d), 2).toFixed(4);
    if (experiments_count <= 5) {
        cell5.innerHTML = Math.abs((diam_sum / experiments_count) - d).toFixed(2);
        cell6.innerHTML = Math.pow(Math.abs((diam_sum / experiments_count) - d), 2).toFixed(4);
    }
    for (let i = 0; i + 1 < experiments_count; ++i) {
        let val = Math.abs((diam_sum / experiments_count) - +table.rows[i + 2].cells[1].textContent);
        table.rows[i + 2].cells[2].textContent = val.toFixed(2);
        table.rows[i + 2].cells[3].textContent = (val * val).toFixed(4);
        if (experiments_count <= 5) {
            table.rows[i + 2].cells[4].textContent = val.toFixed(2);
            table.rows[i + 2].cells[5].textContent = (val * val).toFixed(4);
        }
    }
    if (experiments_count === 5) {
        diametr_5_sred = (diam_sum / experiments_count).toFixed(3);
    }
    if (experiments_count === 20) {
        showIntermediateCalculations()
    }
}

function clearTable() {
    let table = document.getElementById("dataTable");
    document.getElementById("intermediateCalculations").innerHTML = "";
    let rowCount = table.rows.length;
    for (let i = rowCount - 1; i > 1; --i) {
        table.deleteRow(i);
    }
    experiments_count = 0;
    diam_sum = 0;
}

function showIntermediateCalculations() {
    var calculationsDiv = document.getElementById("intermediateCalculations");
    let table = document.getElementById("dataTable");
    calculationsDiv.style.display = "block";
    calculationsDiv.style.border = "1px solid #ddd";
    calculationsDiv.style.padding = "10px";
    let sr_kvad_5 = 0;
    let sr_kvad_20 = 0;
    for (let i = 2; i < table.rows.length; ++i) {
        //console.log(table.rows[i].cells[3]);
        sr_kvad_20 += +table.rows[i].cells[3].textContent;
        if (i < 7) {
            sr_kvad_5 += +table.rows[i].cells[5].textContent;
        }
        //console.log(i, table.rows[i].cells[0]);
    }
    var calculationResult = "<p><strong>Результаты:</strong></p>";
    calculationResult += "<p>&ltD<sub>5</sub>&gt = " + diametr_5_sred + "</p>";
    calculationResult += "<p>&ltS<sub>5</sub>&gt = " + (Math.sqrt(sr_kvad_5 / 4)).toFixed(4) + "</p>";
    calculationResult += "<p>&ltS'<sub>5</sub>&gt = " + (((Math.sqrt(sr_kvad_5 / 4))) / Math.sqrt(5)).toFixed(4) + "</p>";
    calculationResult += "<p>&ltD<sub>20</sub>&gt = " + (diam_sum / 20).toFixed(2) + "</p>";
    calculationResult += "<p>&ltS<sub>20</sub>&gt = " + (Math.sqrt(sr_kvad_20 / 19)).toFixed(4) + "</p>";
    calculationResult += "<p>&ltS'<sub>20</sub>&gt = " + (((Math.sqrt(sr_kvad_20 / 19))) / Math.sqrt(20)).toFixed(4) + "</p><br>";

    calculationsDiv.innerHTML = calculationResult;
}
