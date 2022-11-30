const forms= document.querySelector(".forms"),
    links = document.querySelectorAll (".link")

console.log(pwField)

links.forEach(link => {
    link.addEventListener("click", => {
        preventDefault(); //no form submit
        forms.classList.toggle("show-signup");
        
    }
    )
})
