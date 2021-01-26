window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recogNition = new SpeechRecognition();
recogNition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recogNition.addEventListener('result',e=>{
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
    p.textContent = transcript;
    if(e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
    if(transcript.includes('Nepal')){
        console.log('🇳🇵')
    }
})
recogNition.addEventListener('end',recogNition.start)
recogNition.start();