const revenueEl = document.getElementById("revenue");

const generateReport = () => {
  fetch("/api/report")
    .then((response) => response.json())
    .then((data) => {
      const revenue = data;
      revenueEl.innerHTML = `
            <h2>Net Revenue: $${revenue}</h2>
        `;
    });
};
generateReport();
