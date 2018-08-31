(function(){
    var loading = 0;
    var id = setInterval(frame, 64);
    function frame(){
        if(loading == 100){
            clearInterval(id);
            window.open("home.html", "_self")
        } else{
            loading = loading + 2.5;
            if(loading == 90){
                document.getElementById("load").style.animation = "fadeout 1s ease";
            }
        }
    }
})();