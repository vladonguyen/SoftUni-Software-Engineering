function worldRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let speed = Number(input[2]); // speed seconds per meter
    let delay = Math.floor(distance / 15) * 12.5 // in seconds

    let time = distance * speed + delay // the time of Ivan

    if (time < record) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    } else if (time >= record) {
        console.log(`No, he failed! He was ${(time - record).toFixed(2)} seconds slower.`)
    }
}
worldRecord(["55555.67",
    "3017",
    "5.03"])

