
document.addEventListener("DOMContentLoaded", () => {
    const contractForm = document.getElementById("contractForm");
    const contractsList = document.getElementById("contracts");

    // Load contracts from local storage
    let contracts = JSON.parse(localStorage.getItem("contracts")) || [];

    // Function to display contracts
    function displayContracts() {
        contractsList.innerHTML = "";
        contracts.forEach((contract, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                <strong>${contract.farmer} → ${contract.buyer}</strong>
                <p>${contract.details}</p>
                <button onclick="markCompleted(${index})">${contract.completed ? "Completed" : "Mark as Completed"}</button>
            `;
            contractsList.appendChild(li);
        });
    }

    // Handle contract creation
    contractForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let farmer = document.getElementById("farmerName").value;
        let buyer = document.getElementById("buyerName").value;
        let details = document.getElementById("contractDetails").value;
        let termsChecked = document.getElementById("terms").checked;

        if (!termsChecked) {
            alert("You must agree to the terms.");
            return;
        }

        let newContract = { farmer, buyer, details, completed: false };
        contracts.push(newContract);
        localStorage.setItem("contracts", JSON.stringify(contracts));

        displayContracts();
        contractForm.reset();
    });

    // Mark contract as completed
    window.markCompleted = function(index) {
        contracts[index].completed = true;
        localStorage.setItem("contracts", JSON.stringify(contracts));
        displayContracts();
    };

    displayContracts();
});