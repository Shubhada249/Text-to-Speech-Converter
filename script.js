// SpeechSynthesisUtterance class provides a way to convert text to speech 
let speech=new SpeechSynthesisUtterance();//speech is object

let voices=[];  //array

let voiceSelect=document.querySelector("select");

//This is called first time when web page is loaded
//onvoiceschanged holds a reference to a function which is executed when voiceschanged event occurs.
//voiceschanged event occurs when list of available voices for text-to-speech synthesis changes.
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();//voices store the list of available voices for text-to-speech synthesis in the browser
    

    //all voices in voices array are created as options in dropdown menu
    voices.forEach((voice,i)=>
        (voiceSelect.options[i]=new Option(voice.name,i))   //option has given value=i
    )
};

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value]; //speech.voice will contain current voice in which text will be read
});

document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;//speech.text is a property of that object (speech) which holds the text entered in textarea
    
    /*speechSynthesis: This is a feature or tool provided by the browser. It's like a special robot that can talk. 
    .speak() is the button you press to make the robot start talking.
    speech is what the robot is going to say, and you've already written down the message.*/ 
    window.speechSynthesis.speak(speech);
})



