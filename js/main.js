var bodyElement =document.getElementById("demo")
var imgElement=document.getElementById("img")
var turnonoffBtn=document.getElementById("turnonoffBtn")


function turnon()
{
    bodyElement.style.backgroundColor ="yellow"
    imgElement.scr="image/on.png"
    turnonoffBtn.innerHTML="turn off"

}

function turnof()

{
    bodyElement.style.backgroundColor ="gray"
    imgElement.scr="image/of.png"
    turnonoffBtn.innerHTML="turn on"

}


function turnonof()
{
    if(    turnonoffBtn.innerHTML=="turn on"    )
    {
        turnon();
    }
else if(    turnonoffBtn.innerHTML=="turn off"
)
{
    turnof();
}
else
{
    turnon()
}

}

