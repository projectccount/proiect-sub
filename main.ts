radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 30) {
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 200)
    }
})
radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (value == 2) {
        basic.showLeds(`
            . # # . .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    } else if (value == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . . . # .
            . # # # .
            `)
    } else if (value == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (value == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (value == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (value == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (value == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (value == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (value == 10) {
        basic.showLeds(`
            . # # # #
            # # # . #
            . # # . #
            . # # . #
            # # # # #
            `)
    } else if (value == 11) {
        basic.showLeds(`
            . # . . #
            # # . # #
            . # . . #
            . # . . #
            # # . # #
            `)
    } else if (value == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    } else if (value == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (value == 14) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    } else if (value == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (value == 16) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (value == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . # .
            # . . # .
            # . . # .
            `)
    } else if (value == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (value == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    } else if (value == 20) {
        basic.showLeds(`
            # # # # #
            . # # . #
            # # # . #
            # . # . #
            # # # # #
            `)
    }
})
basic.forever(function () {
    radio.setGroup(125)
})
