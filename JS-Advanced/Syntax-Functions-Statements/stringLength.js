function stringLength(firstString, secondString, thirdString) {
    let totalL = firstString.length + secondString.length + thirdString.length;
    console.log(totalL);
    let averageL = Math.floor(totalL / 3);
    console.log(averageL)
}
stringLength('chocolate', 'ice cream', 'cake');