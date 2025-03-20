function calculate() {
    const real = parseFloat(document.getElementById("real").value) || 0;
    const imaginary = parseFloat(document.getElementById("imaginary").value) || 0;

    const magnitude = Math.sqrt(real * real + imaginary * imaginary).toFixed(2);
    const argument = (Math.atan2(imaginary, real) * (180 / Math.PI)).toFixed(2);

    const results = `
        Magnitude: ${magnitude} <br>
        Argument (degrees): ${argument}° <br>
        Polar Form: ${magnitude} (cos(${argument}°) + i sin(${argument}°))
    `;

    document.getElementById("results").innerHTML = results;
    plotComplexNumber(real, imaginary);
}

function plotComplexNumber(real, imaginary) {
    const canvas = document.getElementById("grid");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 25;

    // Draw grid
    ctx.strokeStyle = "#ddd";
    for (let x = 0; x <= width; x += scale) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    for (let y = 0; y <= height; y += scale) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }

    // Draw axis
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // Plot point
    ctx.fillStyle = "red";
    const plotX = centerX + real * scale;
    const plotY = centerY - imaginary * scale;
    ctx.beginPath();
    ctx.arc(plotX, plotY, 5, 0, 2 * Math.PI);
    ctx.fill();
}
