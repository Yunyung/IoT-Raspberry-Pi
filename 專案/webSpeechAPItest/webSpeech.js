var show = document.getElementById('show');
var recognition = new webkitSpeechRecognition();

recognition.continuous=true;
recognition.interimResults=true;
recognition.lang="en-US";

recognition.onstart=function(){
  console.log('開始辨識...');
};
recognition.onend=function(){
  console.log('停止辨識!');
};

recognition.onresult=function(event){
  var i = event.resultIndex;
  var j = event.results[i].length-1;
  show.innerHTML = event.results[i][j].transcript;
  console.log(event);
};

recognition.start();  
!