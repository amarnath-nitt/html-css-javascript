(function (window) {
	 var speakerWord = "Hello";
	 var helloSpeaker = function (name) {
	 	console.log(speakerWord  + " " + name);
	 }
   
   window.speakerWord=speakerWord;

})(window);