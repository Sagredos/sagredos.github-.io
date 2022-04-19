function bigger()
{
    document.getElementById("text").style.fontSize = "24pt";
}

function fancy()
{
    document.getElementById("boring").checked  = false; 
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "#0000FF";
    document.getElementById("text").style.textDecoration = "underline";
}

function boring()
{
    document.getElementById("fancy").checked  = false; 
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "#000000";
    document.getElementById("text").style.textDecoration = "none";
    document.getElementById("text").style.fontSize = "10pt";
}


function moo() {  
    let moo = document.getElementById("text");
    moo.style.textTransform = "uppercase";
    let parts = moo.value.split(".");
    moo.value = parts.join("-Moo");
}
