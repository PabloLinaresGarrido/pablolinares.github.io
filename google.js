
var writable = true;
function autoWrite(message, element){

	element.focus();
	element.value = '';
	const letters = message.split('');
	let counter = 0;
	let interval = setInterval(() =>{
	if(writable){
		element.value += letters[counter];
		counter++;
		if(counter === letters.length){
			 clearInterval(interval);
			 setTimeout(() => autoWrite(message, element)
			 , 3000);
		}
		 }
		 else{
			 	 clearInterval(interval);
				  element.value = '';
		 }
}, 100);

}
function searchBoxClick(searchBox){
		searchBox.addEventListener('click', ()=> {
		writable = false;
		searchBox.value = '';
	}, false)
}

let searchBox = document.getElementById('search')
autoWrite('Search for something', searchBox);

searchBoxClick(searchBox);