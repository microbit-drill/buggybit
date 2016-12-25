let right = 0
let left = 0
let start = false
basic.forever(() => {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, left)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P16, right)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    if (start) {
        if (pins.digitalReadPin(DigitalPin.P1) == pins.digitalReadPin(DigitalPin.P2)) {
            left = 1
            right = 1
            led.plot(2, 2)
        } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            left = 1
            right = 0
            led.plot(0,0)
        } else {
            left = 1
            right = 0
            led.plot(4,0)
        }
    } else {
        left = 0
        right = 0
    }
})
input.onButtonPressed(Button.A, () => {
    start = !(start)
})
input.onButtonPressed(Button.B, () => {
    start = !(start)
})
