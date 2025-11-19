// Load dataset
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const ranges = data.map(row => row.defoliation_percentage);
    const timepoints = Object.keys(data[0]).filter(k => k !== "defoliation_percentage");

    const rangeSelect = document.getElementById("rangeSelect");
    const timeSelect = document.getElementById("timeSelect");
    const outputYield = document.getElementById("outputYield");
    const outputLoss = document.getElementById("outputLoss");

    // Populate dropdowns
    ranges.forEach(r => {
      const opt = document.createElement("option");
      opt.value = r;
      opt.textContent = r;
      rangeSelect.appendChild(opt);
    });

    timepoints.forEach(t => {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      timeSelect.appendChild(opt);
    });

    // Update output when selections change
    function updateOutput() {
      const selectedRange = rangeSelect.value;
      const selectedTime = timeSelect.value;
      if (!selectedRange || !selectedTime) return;

      const row = data.find(d => d.defoliation_percentage === selectedRange);
      const rawValue = parseFloat(row[selectedTime]);

      // Convert to percentages
      const yieldPct = (rawValue * 100).toFixed(1);
      const lossPct = ((1 - rawValue) * 100).toFixed(1);

      // Update outputs
      outputYield.textContent = yieldPct + " %";
      outputLoss.textContent = lossPct + " %";

      // Plot line chart for selected range
      const x = timepoints;
      const y = timepoints.map(t => parseFloat(row[t]) * 100); // convert to %

      Plotly.newPlot("chart", [{
        x: x,
        y: y,
        type: "scatter",
        mode: "lines+markers",
        line: { color: "steelblue" }
      }], {
        title: `Estimated yield (% of non-defoliated) for ${selectedRange}`,
        yaxis: { title: "Yield (%)" },
        margin: { t: 40 }
      });
    }

    rangeSelect.addEventListener("change", updateOutput);
    timeSelect.addEventListener("change", updateOutput);
  });
