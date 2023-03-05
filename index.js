let image1 = document.getElementsByTagName("img")[0]
let image2 = document.getElementsByTagName("img")[1]
let rand_nump1 = Math.floor(Math.random()*6)+1
let rand_nump2 = Math.floor(Math.random()*6)+1
image1.setAttribute("src","dice_images/dice"+rand_nump1+".jpg");
image2.setAttribute("src","dice_images/dice"+rand_nump2+".jpg");
if(rand_nump1==rand_nump2){
    document.getElementsByTagName("h1")[0].innerText = "Refresh Me"
}
else if(rand_nump1>rand_nump2){
    document.getElementsByTagName("h1")[0].innerText = "Player 1 Won"
}
else{
    document.getElementsByTagName("h1")[0].innerText = "Player 2 Won"
}