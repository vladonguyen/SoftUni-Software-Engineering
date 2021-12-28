function movie(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decor = budget * 0.1;

    if (statists > 150) {
        clothesPrice = clothesPrice * 0.9;
    }

    let clothesSum = statists * clothesPrice;

    let totalExpenses = decor + clothesSum;

    if (budget >= totalExpenses) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - totalExpenses).toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalExpenses - budget).toFixed(2)} leva more.`)
    }


}
movie(["9587.88",
    "222",
    "55.68"])

