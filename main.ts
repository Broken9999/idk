function Spawn_Enemy () {
    EnemyY = 0
    EnemyX = randint(0, 4)
    led.plotBrightness(EnemyX, EnemyY, 255)
    Enemy_Die = 0
}
input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
    if (x < 0) {
        x = 0
    }
    led.plotBrightness(x, y, 255)
})
function Kill_Enemy () {
    led.unplot(EnemyX, EnemyY)
}
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
    if (x > 4) {
        x = 4
    }
    led.plotBrightness(x, y, 255)
})
function Move_Enemy () {
    led.unplot(EnemyX, EnemyY)
    EnemyY += 1
    if (EnemyY <= 4) {
        led.plotBrightness(EnemyX, EnemyY, 255)
    }
}
let Enemy_Die = 0
let EnemyX = 0
let EnemyY = 0
let y = 0
let x = 0
x = 2
y = 4
led.plot(x, y)
Spawn_Enemy()
basic.forever(function () {
    if (EnemyY >= 4) {
        Kill_Enemy()
        Enemy_Die = 1
        Spawn_Enemy()
    }
    if (Enemy_Die != 1) {
        Move_Enemy()
    }
    if (EnemyX == x && EnemyY == y) {
        led.unplot(x, y)
        game.gameOver()
    }
    basic.pause(500)
})
