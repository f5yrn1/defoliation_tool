// Load dataset
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const ranges = data.map(row => row.defoliation_percentage);
    const timepoints = Object.keys(data[0]).filter(k => k !== "defoliation_percentage");

    const rangeSelect = document.getElementById("rangeSelect");
    const timeSelect = document.getElementById("timeSelect");
    const output = document.getElementById("outputValue");

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
      const value = row[selectedTime];
      output.textContent = value;
    }

    rangeSelect.addEventListener("change", updateOutput);
    timeSelect.addEventListener("change", updateOutput);
  });
