// API - 3 (LinkedIn Jobs)
const url = 'https://linkedin-job-search-api.p.rapidapi.com/active-jb-7d?limit=10&offset=0&title_filter=%22Data%20Engineer%22&location_filter=%22United%20States%22%20OR%20%22United%20Kingdom%22';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '368d9d91dfmsh18598e1b2ea283fp198005jsnf6703649f6a6',
		'x-rapidapi-host': 'linkedin-job-search-api.p.rapidapi.com'
	}
};

async function jobsPortal() {
    try {
        const response = await fetch(url, options);
        if (!response.ok){
            throw new Error("Something went wrong")
        }
        const result = await response.json();
        displayData(result);
    } catch (err) {
        console.error(err);
    }   
}

let container = document.getElementById("container")
let loader = document.getElementById("loader")
function displayData(arr){
    loader.remove();
    for (let obj of arr){
        let items = document.createElement("div")
        items.className = "subs"
        items.innerHTML = `
        <img src = '${obj.organization_logo}' class='Image'>
        <p><strong>Job Title :</strong> ${obj.title}</p>
        <p><strong>Experience Level :</strong> ${obj.seniority}</p>
        `;
        // loader.remove();
        container.appendChild(items);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    jobsPortal();
});


