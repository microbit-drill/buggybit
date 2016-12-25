let left = 0
let start = false
let right = 0
basic.forever(() => {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, left)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P16, right)
    if (start) {
        if (pins.digitalReadPin(DigitalPin.P1) == pins.digitalReadPin(DigitalPin.P2)) {
            left = 1
            right = 1
            basic.showLeds(`
                # # . # #
                . # . # .
                . . . . .
                # # # # #
                . # # # .
                `)
        } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            left = 1
            right = 0
            basic.showLeds(`
                . # . . #
                # # . # #
                . . . . .
                # # # # #
                . # # # .
                `)
        } else {
            left = 0
            right = 1
            basic.showLeds(`
                # . . # .
                # # . # #
                . . . . .
                # # # # #
                . # # # .
                `)
        }
    } else {
        left = 0
        right = 0
        basic.showLeds(`
            . # . # .
            # # . # #
            . . . . .
            . # # # .
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.A, () => {
    start = !(start)
})
input.onButtonPressed(Button.B, () => {
    start = !(start)
})
