function calculate() {
    let gear1 = parseInt(document.getElementById("gear1").value);
    let gear2 = parseInt(document.getElementById("gear2").value);

    if (gear1 <= 0 || gear2 <= 0) {
        alert("Please enter valid teeth numbers!");
        return;
    }

    let gearRatio = gear2 / gear1;
    let speedChange = (1 / gearRatio).toFixed(2);
    let torqueChange = gearRatio.toFixed(2);

    document.getElementById("output").innerHTML = 
        `Gear Ratio: ${gearRatio.toFixed(2)}<br>` +
        `Output Speed: ${speedChange}x of input<br>` +
        `Output Torque: ${torqueChange}x of input`;
}

