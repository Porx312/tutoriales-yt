function openAnime(e, anime){
    
    document.querySelectorAll(".tabcontent").forEach(content => {
        content.style.display = 'none'
    })

    document.querySelectorAll(".tabLinks").forEach(link => {
        link.classList.remove("active")
    })
    document.getElementById(anime).style.display = "block"

    e.currentTarget.classList.add("active")
}