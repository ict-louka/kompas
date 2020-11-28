basic.forever(function () {
    if (input.compassHeading() < 45) {
        basic.showString("N")
    } else if (input.compassHeading() < 135) {
        basic.showString("O")
    } else if (input.compassHeading() < 225) {
        basic.showString("Z")
    } else if (input.compassHeading() < 315) {
        basic.showString("N")
    } else {
        basic.showString("N")
    }
})
