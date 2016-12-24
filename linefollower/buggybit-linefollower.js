let start = false
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.forever(() => {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    if (start) {
        if (pins.digitalReadPin(DigitalPin.P1) == pins.digitalReadPin(DigitalPin.P2)) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                # . . . #
                . # # # .
                `)
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P16, 1)
        } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            basic.showLeds(`
                # . . . .
                . # . # .
                . . # . .
                # . . . #
                . # # # .
                `)
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P16, 0)
        } else {
            basic.showLeds(`
                . . . . #
                . # . # .
                . . # . .
                # . . . #
                . # # # .
                `)
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
input.onButtonPressed(Button.A, () => {
    start = !(start)
    if (!(start)) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
input.onButtonPressed(Button.B, () => {
    start = !(start)
    if (!(start)) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})