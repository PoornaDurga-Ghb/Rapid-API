let loader = document.getElementById("loader")
let url = "https://dog.ceo/api/breeds/image/random"
async function dogData() {
    let response = await fetch(url)
    if (!response.ok){
        throw new Error("Unable to Fetch the Data..")
    }
    let result = await response.json()
    displayData(result);
}

function displayData(obj){
    loader.remove();
    let container = document.getElementById("container")
    container.innerHTML = `
    <img src='${obj.message}' class = 'Image'>
    `;
}

let call = addEventListener("DOMContentLoaded", function (){
    dogData();
});