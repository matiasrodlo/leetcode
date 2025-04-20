/*
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%

The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return: "Rating not recognised"*/

function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case "terrible":
      return Math.ceil(amount * 0); // Tip: 0%
    case "poor":
      return Math.ceil(amount * 0.05); // Tip: 5%
    case "good":
      return Math.ceil(amount * 0.1); // Tip: 10%
    case "great":
      return Math.ceil(amount * 0.15); // Tip: 15%
    case "excellent":
      return Math.ceil(amount * 0.2); // Tip: 20%
    default:
      return "Rating not recognised";
  }
}

calculateTip(20, "excellent");
