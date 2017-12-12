// default text
document.getElementById('heading').innerHTML = localStorage['title'] || 'save me save me';
document.getElementById('content').innerHTML = localStorage['text'] || 'I\'m being held against my will and forced to learn javascript';

// autosave
setInterval(function(){
	localStorage['title'] = document.getElementById('heading').innerHTML;
	localStorage['text'] = document.getElementById('content').innerHTML;
}, 1000);