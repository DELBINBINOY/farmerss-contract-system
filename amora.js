document.getElementById("contractForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const farmerName = document.getElementById("farmerName").value;
    const buyerName = document.getElementById("buyerName").value;
    const contractDetails = document.getElementById("contractDetails").value;
    const terms = document.getElementById("terms").checked;

    if (!terms) {
        alert("You must agree to the terms.");
        return;
    }

    const contractList = document.getElementById("contracts");
    const li = document.createElement("li");
    li.textContent = `Farmer: ${farmerName}, Buyer: ${buyerName} - ${contractDetails}`;
    contractList.appendChild(li);

    this.reset();
});
