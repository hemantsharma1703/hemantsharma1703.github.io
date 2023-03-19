function toggleOpen() {
    document.querySelector(".bar-1").classList.toggle("rotate45");
    document.querySelector(".bar-2").classList.toggle("rotateNeg45");
    
    if(document.getElementById("navmenu").getAttribute("style") === "display: none;") 
        document.getElementById("navmenu").setAttribute("style", "display: flex;");
    else 
        document.getElementById("navmenu").setAttribute("style", "display: none;");
}