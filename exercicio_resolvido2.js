const productPrice = 100, numberInstallments = -13;

if (numberInstallments == 1) {
    console.log(`You've gained a 10% discount by paying it upfront! Your total is U$${(productPrice * 0.9).toFixed(2)}`)
} else if (numberInstallments > 1 && numberInstallments < 7) {
    console.log(`Each of your ${numberInstallments} installements will cost U$${(productPrice / numberInstallments).toFixed(2)}, without interest.`)
} else if (numberInstallments > 7 && numberInstallments < 12) {
    console.log(`Each of your ${numberInstallments} installements will cost U$${((productPrice * (1.01 ** numberInstallments)) / numberInstallments).toFixed(2)}, with a 1% monthly interest.`)
} else {
    console.log(`Invalid number of installments`)
}