const productPrice = 105, numberInstallments = 6;

if (numberInstallments == 1) {
    console.log(`You've gained a 10% discount by paying it upfront! Your total is U$${(productPrice * 0.9).toFixed(2)}`)
} else {
    console.log(`Each of your ${numberInstallments} installements will cost U$${(productPrice / numberInstallments.toFixed(2))}.`)
}