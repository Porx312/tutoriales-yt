function openCharacter(e, character){
    document.querySelectorAll(".tabcontent").forEach(element => {
        element.style.display = 'none'
    })
    document.querySelectorAll(".tablinks").forEach(element => {
        element.classList.remove("active")
    })
    document.getElementById(character).style.display = "block"
    e.currentTarget.classList.add("active")
}

document.getElementById("defaultOpen").click()