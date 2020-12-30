let num = 0
get_num()
let ouverture = 1
function get_num() {
    return basic.showNumber(num)
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (num > 0) {
        num -= 1
        get_num()
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (num < 2) {
        num += 1
        get_num()
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (num == 0) {
        //  compter
        while (ouverture == 1) {
            get_num()
            input.onButtonPressed(Button.A, function on_button_pressed_a2() {
                
                if (num > 0) {
                    num -= 1
                }
                
            })
            input.onButtonPressed(Button.B, function on_button_pressed_b2() {
                if (num < 10) {
                    
                    num += 1
                }
                
            })
        }
    } else if (num == 1) {
        num = 0
        while (true) {
            //  emoji follie
            if (num == 0) {
                get_coeur()
            } else if (num == 1) {
                get_triste()
            } else if (num == 2) {
                get_content()
            } else if (num == 3) {
                get_maison()
            } else if (num == 4) {
                get_lapin()
            } else if (num == 5) {
                get_serpent()
            } else if (num == 6) {
                get_surpris()
            } else if (num == 7) {
                get_girafe()
            } else if (num == 8) {
                get_vache()
            } else if (num == 9) {
                get_tortue()
            } else if (num == 10) {
                get_canard()
            }
            
            input.onButtonPressed(Button.A, function on_button_pressed_a3() {
                
                if (num > 0) {
                    num -= 1
                }
                
            })
            input.onButtonPressed(Button.B, function on_button_pressed_b3() {
                
                if (num < 10) {
                    num += 1
                }
                
            })
        }
    } else if (num == 2) {
        num = 0
        while (true) {
            get_num()
            input.onGesture(Gesture.Shake, function on_gesture_shake() {
                
                num = randint(1, 6)
            })
        }
    }
    
})
//  =========================================================================
//  racourci icône.
function get_coeur() {
    return basic.showIcon(IconNames.Heart)
}

function get_triste() {
    return basic.showIcon(IconNames.Sad)
}

function get_content() {
    return basic.showIcon(IconNames.Happy)
}

function get_maison() {
    return basic.showIcon(IconNames.House)
}

function get_lapin() {
    return basic.showIcon(IconNames.Rabbit)
}

function get_serpent() {
    return basic.showIcon(IconNames.Snake)
}

function get_surpris() {
    return basic.showIcon(IconNames.Surprised)
}

function get_girafe() {
    return basic.showIcon(IconNames.Giraffe)
}

function get_vache() {
    return basic.showIcon(IconNames.Cow)
}

function get_tortue() {
    return basic.showIcon(IconNames.Tortoise)
}

function get_canard() {
    return basic.showIcon(IconNames.Duck)
}

