function mmConverter(input) {
    let number = Number(input[0]);
    let metricToConvert = input[1];
    let convertedMetric = input[2];
    let mm = 0;
    finalResult = 0;


    // all metrics to mm

    if (metricToConvert === "mm") {
        mm = number;
    } else if (metricToConvert === "cm") {
        mm = number * 10;
    } else if (metricToConvert === "m") {
        mm = number * 1000;
    }

    //mm to wanted metric

    if (convertedMetric === "mm") {
        finalResult = mm;
    } else if (convertedMetric === "cm") {
        finalResult = mm / 10;
    }
    else if (convertedMetric === "m") {
        finalResult = mm / 1000;
    }

    console.log(finalResult.toFixed(3));

}
mmConverter(["45", "cm", "mm"]);