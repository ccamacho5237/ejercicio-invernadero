input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 8) {
        basic.showIcon(IconNames.Sword)
        basic.clearScreen()
    } else {
        if (input.temperature() >= 8 && input.temperature() <= 30) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        } else {
            if (input.temperature() > 30) {
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    . . # . .
                    . . # . .
                    . . # . .
                    `)
                basic.clearScreen()
            }
        }
    }
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P0) < 200) {
        basic.showIcon(IconNames.Skull)
        basic.clearScreen()
    } else {
        if (pins.analogReadPin(AnalogPin.P0) >= 200 && pins.analogReadPin(AnalogPin.P0) <= 600) {
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
        } else {
            if (true) {
                basic.showIcon(IconNames.Ghost)
                basic.clearScreen()
            }
        }
    }
})
