document.querySelector('button').addEventListener('click', apiRequest)
// event listener for enter pressed
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        event.preventDefault()
        apiRequest()
    }
  });
  


async function apiRequest() {
    const characterName = document.querySelector('#searchBar').value.toLowerCase()
    try {
        const response = await fetch(`https://odd-colt-vestments.cyclic.app/api/${characterName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('name').innerText = data.name
        document.getElementById('strength').innerText = data.strength
        document.getElementById('origin').innerText = data.origin
        document.querySelector('img').src = data.image
    } catch (error) {
        console.log(error)
    }
}