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
    document.getElementById('aside').id = "dark_aside"
    document.getElementById('contacts').id = "dark_contacts"
    icon.src = "images/light_sun_icon.png"
    
}

function turn_light() {
    document.body.id = ""
    document.getElementById('dark_aside').id = "aside"
    document.getElementById('dark_contacts').id = "contacts"
    icon.src = "images/light_moon_icon.png"
}