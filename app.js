// default text
document.getElementById('heading').innerHTML = localStorage['title'] || 'This be the title...';
document.getElementById('content').innerHTML = localStorage['text'] || '... and this be the text, you space monkey you.';

// autosave
setInterval(function(){
	localStorage['title'] = document.getElementById('heading').innerHTML;
	localStorage['text'] = document.getElementById('content').innerHTML;
}, 1000);