function mmConverter(input) {
    let number = Number(input[0]);
    let metricToConvert = input[1];
    let newMetric = 0;
    if (metricToConvert === "mm") {
        newMetric = number * 0.001;
    } else if (metricToConvert === "m") {
        newMetric = number * 100;
    } else if (metricToConvert === "cm") {
        newMetric = number * 10;
    }

    console.log(newMetric.toFixed(3));

}
mmConverter(["45", "cm", "mm"]);