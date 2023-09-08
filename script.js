// your code here
const form = document.getElementById('form');
const url = document.getElementById('url');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form['name'].value;
    const year = form['year'].value;

	let getURL = `${url.innerText}?`;

    if(name){
		getURL += `name=${encodeURIComponent(name)}&`;
	}

	if(year){
		getURL += `year=${encodeURIComponent(year)}`;
	}
	
    url.innerHTML = getURL;
});
