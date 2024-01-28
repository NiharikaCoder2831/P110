Webcam.set({
    width:'300', height: '250', image_format: 'png', png_quality:90
})
camera = document.getElementById('camera')
Webcam.attach('#camera')

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML="<img id='pic' src="+data_uri+">"
    })
}
function speech(){
    var synth= new speechSynthesis;
    speakdata='The first prediction is '+pd1+' And, the second prediction is ' +pd2;
    var utterthis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
}