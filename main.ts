hummingbird.startHummingbird()
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Light, ThreePort.One) <= 0) {
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        150,
        75
        )
        basic.showIcon(IconNames.Skull)
    } else {
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        0
        )
    }
})
