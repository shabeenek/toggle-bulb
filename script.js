function Bulb(){
    var  image = document.getElementById('image');
    if(image.src.match("offb.png")){
        image.src = "onb.png";
        document.getElementById("switch").value = "Turn Off";
    }else{
        document.getElementById("switch").value = "Turn On";
        image.src = "offb.png";
    }
}