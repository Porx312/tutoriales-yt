const acc = document.querySelectorAll(".btn-accordion")
acc.forEach(accor => {
    accor.addEventListener("click", function(){
        this.classList.toggle("active")
        let panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = 'none'
        }else{
            panel.style.display = 'block'
        }
    })
})