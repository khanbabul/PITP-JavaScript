// Method 1
// function beautiful() {
//     document.getElementById("h").style.color = "red";
//     document.getElementById("h1").style.color = "blue";
// }
// function beautifulReturn() {
//     document.getElementById("h").style.color = "black";
//     document.getElementById("h1").style.color = "black";
// }
// function changeFont() {
//     document.getElementById("h").style.fontFamily = "babulTTF";
//     document.getElementById("h1").style.fontFamily = "babulTTF";
// }
// function returnFont() {
//     document.getElementById("h").style.fontFamily = "Times New Roman";
//     document.getElementById("h1").style.fontFamily = "Times New Roman";
// }

// Method 2
function beautiful() {
    const h1 = document.getElementById("h1");    
    h1.style.color = "rgba(255, 0, 149, 0.86)";
    h1.style.fontFamily = "babulTTF";
    h1.style.fontSize = "35px";
    h1.style.textShadow = "2px 2px 4px rgba(0,0,0,0.3)";
    h1.style.transition = "all 0.5s ease";
    // h1.style.textDecoration = "underline";
}

function resetBeauty() {
    const h1 = document.getElementById("h1");
    h1.style.color = "black";
    h1.style.fontFamily = "Times New Roman";
    h1.style.fontSize = "";
    h1.style.textShadow = "none";
    h1.style.textDecoration = "none";
}