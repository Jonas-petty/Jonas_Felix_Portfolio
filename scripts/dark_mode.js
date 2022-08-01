// Alternate the website mode, light or dark

let mode = "light"
let icon = document.getElementById('icon_mode')

let about = document.getElementById('about')
let about_link = document.getElementById('alternate')

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
    about_link.href = '#dark_about'
    about.id = 'dark_about'
    icon.src = "images/light_sun_icon.png"
    
}

function turn_light() {
    about_link.href = '#about'
    about.id = 'about'
    icon.src = "images/light_moon_icon.png"
}