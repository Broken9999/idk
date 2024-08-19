def Spawn_Enemy():
    global EnemyY, EnemyX, Enemy_Die
    EnemyY = 0
    EnemyX = randint(0, 4)
    led.plot_brightness(EnemyX, EnemyY, 255)
    Enemy_Die = 0

def on_button_pressed_a():
    global x
    led.unplot(x, y)
    x += -1
    if x < 0:
        x = 0
    led.plot_brightness(x, y, 255)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global x
    led.unplot(x, y)
    x += 1
    if x > 4:
        x = 4
    led.plot_brightness(x, y, 255)
input.on_button_pressed(Button.B, on_button_pressed_b)

def Move_Enemy():
    global EnemyY
    led.unplot(EnemyX, EnemyY)
    EnemyY += 1
    if EnemyY <= 4:
        led.plot_brightness(EnemyX, EnemyY, 255)
Enemy_Die = 0
EnemyX = 0
EnemyY = 0
y = 0
x = 0
x = 2
y = 4
led.plot(x, y)
Spawn_Enemy()

def on_forever():
    global Enemy_Die
    if EnemyY >= 4:
        Enemy_Die = 1
        Spawn_Enemy()
    if Enemy_Die != 1:
        Move_Enemy()
    basic.pause(500)
basic.forever(on_forever)
