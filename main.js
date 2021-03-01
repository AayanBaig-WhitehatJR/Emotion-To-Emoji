var prediction1 = ""
var prediction2 = ""
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})
Webcam.attach(' #camera ')

function captureImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capture_image' src=" + data_uri + ">"
    })
}
console.log("Ml5 Version Is Up To Date: ", ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/W24HkHgGm/model.json', modelLoaded);

function modelLoaded(){
    console.log("Ml5 Says: Model is Loaded.")
}
function speak(){
    console.log("halo")
 var synth = window.speechSynthesis
 speak_data1 = "The first prediction is: " + prediction1
 speak_data2 = "The second prediction is: " + prediction2
 var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2)
 synth.speak(utterThis)
}

function identifyEmotion(){
    img = document.getElementById("capture_image")
    classifier.classify(img, gotResult)
    console.log("Emotion Identified.")
}
function gotResult(error, results){
if(error){
    
    console.log(error)
}
else{
    console.log(results)
document.getElementById("result_emotion_name").innerHTML = results[0].label
document.getElementById("result_emotion_name2").innerHTML = results[1].label
prediction1 = results[0].label
prediction2 = results[1].label
speak()
if(results[0].label == "Happy"){
    document.getElementById("result_updateEmoji").innerHTML = "&#128512"
}
if(results[0].label == "Sad"){
    document.getElementById("result_updateEmoji").innerHTML = "&#128546;"
}
if(results[0].label == "Angry"){
    document.getElementById("result_updateEmoji").innerHTML = "&#128548;"
}
if(results[0].label == "Very Angry"){
    document.getElementById("result_updateEmoji").innerHTML = "&#128545;"
}
if(results[0].label == "Disappointed"){
    document.getElementById("result_updateEmoji").innerHTML = "&#128532;"
}
if(results[1].label == "Happy"){
    document.getElementById("result_updateEmoji2").innerHTML = "&#128512"
}
if(results[1].label == "Sad"){
    document.getElementById("result_updateEmoji2").innerHTML = "&#128546;"
}
if(results[1].label == "Angry"){
    document.getElementById("result_updateEmoji2").innerHTML = "&#128548;"
}
if(results[1].label == "Very Angry"){
    document.getElementById("result_updateEmoji2").innerHTML = "&#128545;"
}
if(results[1].label == "Disappointed"){
    document.getElementById("result_updateEmoji2").innerHTML = "&#128532;"
}
}
}