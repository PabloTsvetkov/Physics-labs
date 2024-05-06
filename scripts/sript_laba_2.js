let exp_id = 1;
let a = -1;
let a_sum = 0;
let insertRowPosition = -1;
function addExperiment() {
    const m0 = document.getElementById("m0");
    const s = document.getElementById("S");
    const t = document.getElementById("t");
    const table = document.getElementById("dataTable");
    if (s.value !== "" && t.value !== "" && (exp_id > 1 || m0.value !== "")) {
        let row = table.insertRow(insertRowPosition);
        let newCell = row.insertCell(0);
        newCell.appendChild(document.createTextNode(exp_id));
        newCell = row.insertCell(1);
        newCell.appendChild(document.createTextNode(s.value));
        newCell = row.insertCell(2);
        newCell.appendChild(document.createTextNode(t.value));
        newCell = row.insertCell(3);
        a = 2 * s.value / (t.value * t.value);
        a_sum += a;
        newCell.appendChild(document.createTextNode(a.toFixed(2)));
        
        if (exp_id === 1) {
            m0.style.display = "none";
            document.getElementById("m0Label").style.display = "none";
            table.rows[0].cells[0].innerHTML = "m<sub>0</sub> = " + m0.value;
            table.rows[0].cells[0].style.height = "30px";
            row = table.insertRow(-1);
            newCell = row.insertCell(0);
            newCell.outerHTML = "<td colspan = '4'; style='text-align: left; padding-left: 20px; height: 30px;'>&lt a &gt = " + (a_sum / exp_id).toFixed(3);
        }
        else {
            table.rows[table.rows.length - 1].cells[0].innerHTML = "<td colspan = '4'; style='text-align: left; padding-left: 20px; height: 30px'>&lt a &gt = " + (a_sum / exp_id).toFixed(3);
        }
        insertRowPosition = table.rows.length - 1;
        ++exp_id;
    }
}

function clearTable() {
    a_sum = 0;
    insertRowPosition = -1;
    exp_id = 1;
    let table = document.getElementById("dataTable");
    for (let i = table.rows.length - 1; i > 1; --i) {
        table.deleteRow(i);
    }
    document.getElementById("m0").style.display = "block";
    document.getElementById("m0Label").style.display = "block";
    table.rows[0].cells[0].innerHTML = "m<sub>0</sub> = ";
}