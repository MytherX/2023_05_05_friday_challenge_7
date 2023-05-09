
function playAudio() { 
    const  soundObject = document.getElementById("myAudio"); 
    soundObject.play(); 
    soundObject.volume = 0.15;
} 

export {playAudio}