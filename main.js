function updateClock() {
    const now = new Date();
    const hours = now.getHours() || 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate angles for hour, minute, and second hands
    const hourAngle = (hours % 12) * 30 + minutes * 0.5;
    const minuteAngle = minutes * 6;
    const secondAngle = seconds * 6;

    // Rotate the hands based on the angles calculated
    $("#hourHand").css("transform", `rotate(${hourAngle}deg)`).children(".timeNumber").html(hours).css("transform", `rotate(${-hourAngle}deg)`)
    $("#minuteHand").css("transform", `rotate(${minuteAngle}deg)`).children(".timeNumber").html(minutes).css("transform", `rotate(${-minuteAngle}deg)`)
    $("#secondHand").css("transform", `rotate(${secondAngle}deg)`).children(".timeNumber").html(seconds).css("transform", `rotate(${-secondAngle}deg)`)
}

// Update the clock every second (1000 miliseconds)
setInterval(updateClock, 1000);

// Initial call
updateClock();