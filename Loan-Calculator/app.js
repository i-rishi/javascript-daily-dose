window.onload = function () {
  const button = document.querySelector("#btn");
  button.addEventListener("click", calculateLoan);
};

function calculateLoan() {
  const amount = document.querySelector("#amount").value;
  const interest = document.querySelector("#interest").value;
  const tenure = document.querySelector("#tenure").value;

  if (!amount || isNaN(amount) || amount < 0) {
    alert("Please enter a valid amount");
    return;
  } else if (!interest || isNaN(interest) || interest < 0) {
    alert("Please enter a valid interest");
    return;
  } else if (!tenure || isNaN(tenure) || tenure < 0) {
    alert("Please enter a valid tenure");
    return;
  }

  const interestAmount = interest / 12 / 100;
  const emi =
    amount *
    interestAmount *
    (Math.pow(1 + interestAmount, tenure) /
      (Math.pow(1 + interestAmount, tenure) - 1));

  const emiValue = document.querySelector("#emi");
  emiValue.innerHTML = "EMI:" + emi.toFixed(2);

  const totalInterest = emi * tenure - amount;
  const totalInterestValue = document.querySelector("#totalInterest");
  totalInterestValue.innerHTML = "Total Interest:" + totalInterest.toFixed(2);

  const totalPayment = emi * tenure;
  const totalPaymentValue = document.querySelector("#totalPayment");
  totalPaymentValue.innerHTML = "Total Payment:" + totalPayment.toFixed(2);
}
