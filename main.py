num = 0
get_num()
ouverture = 1
def get_num():
    return basic.show_number(num)

def on_button_pressed_a():
    global num
    if num > 0:
        num -= 1
        get_num()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global num
    if num < 1:
        num += 1
        get_num()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
    global num
    if num == 0:
    # compter
        while ouverture == 1:
            get_num()
            def on_button_pressed_a2():
                global num
                if num > 0:
                    num -= 1
            input.on_button_pressed(Button.A, on_button_pressed_a2)
            def on_button_pressed_b2():
                if num < 10:
                    global num
                    num += 1
            input.on_button_pressed(Button.B, on_button_pressed_b2)
    elif num == 1:
        num = 0
        while True:
    # emoji follie
            if num == 0:
                get_coeur()
            elif num == 1:
                get_triste()
            elif num == 2:
                get_content()
            elif num == 3:
                get_maison()
            elif num == 4:
                get_lapin()
            elif num == 5:
                get_serpent()
            elif num == 6:
                get_surpris()
            elif num == 7:
                get_girafe()
            elif num == 8:
                get_vache()
            elif num == 9:
                get_tortue()
            elif num == 10:
                get_canard()

            def on_button_pressed_a3():
                global num
                if num > 0:
                    num -= 1
            input.on_button_pressed(Button.A, on_button_pressed_a3)
            def on_button_pressed_b3():
                global num
                if num < 10:
                    num += 1
            input.on_button_pressed(Button.B, on_button_pressed_b3)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# =========================================================================
def get_coeur():
    return basic.show_icon(IconNames.HEART)

def get_triste():
    return basic.show_icon(IconNames.SAD)

def get_content():
    return basic.show_icon(IconNames.HAPPY)

def get_maison():
    return basic.show_icon(IconNames.HOUSE)

def get_lapin():
    return basic.show_icon(IconNames.RABBIT)

def get_serpent():
    return basic.show_icon(IconNames.SNAKE)

def get_surpris():
    return basic.show_icon(IconNames.SURPRISED)

def get_girafe():
    return basic.show_icon(IconNames.GIRAFFE)

def get_vache():
    return basic.show_icon(IconNames.COW)

def get_tortue():
    return basic.show_icon(IconNames.TORTOISE)

def get_canard():
    return basic.show_icon(IconNames.DUCK)