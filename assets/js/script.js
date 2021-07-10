window.addEventListener("scroll", ()=>{
    let navbar = document.getElementById("navbar");
    let root = document.getElementById("root");
    if(this.pageYOffset >79){
        navbar.classList.add("fixed");
        root.classList.add("adjust-root");
    }else{
        navbar.classList.remove("fixed");
        root.classList.remove("adjust-root");
    }
})