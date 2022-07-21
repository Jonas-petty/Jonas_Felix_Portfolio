let mode = "light"
let icon = document.getElementById('icon_mode')

function alter_mode() {
    if (mode == "light") {
        mode = "dark"
        turn_dark()
    } else {
        mode = "light"
        turn_light()
    }
}

function turn_dark() {
    document.body.id = "dark_body"
    document.getElementById('perfil').id = "dark_perfil"
    document.getElementById('social').id = "dark_social"
    icon.src = "images/light_sun_icon.png"
    
}

function turn_light() {
    document.body.id = ""
    document.getElementById('dark_perfil').id = "perfil"
    document.getElementById('dark_social').id = "social"
    icon.src = "images/light_moon_icon.png"
}