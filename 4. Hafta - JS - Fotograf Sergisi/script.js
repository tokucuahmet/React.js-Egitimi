var yenile = document.getElementById("yenile");
var fotograf = document.getElementsByTagName("img");

yenile.addEventListener("click", function(){ /*Sayfa Yenileme*/
    location.reload();
});

function degistir(){ /*Fotograf Degistirme*/
    for(var i = 0; i < fotograf.length; i++){
        fotograf[i].src = "https://source.unsplash.com/random/380x"+Number(243+i);
    }
}
degistir();







