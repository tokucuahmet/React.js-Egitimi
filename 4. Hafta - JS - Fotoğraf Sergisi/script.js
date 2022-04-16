var yenile = document.getElementById("yenile");
var fotograf = document.getElementsByTagName("img");

yenile.addEventListener("click", function(){
    location.reload();
});

function degistir(){
    for(var i = 0; i < fotograf.length; i++){
        fotograf[i].src = "https://source.unsplash.com/random/380x300"+"?random="+Math.random();
    }
}
degistir();







