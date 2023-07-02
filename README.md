<h1 align="center">Simple Super Mario Bros Character API</h1>
<table bordercolor="#66b2b2">

<tr>
<td width="50%" valign="top">
<img src="images/read.png" />
</td>

<td width="50%" valign="top">
<p align="center"><img width="50%" height="50%" src="images/readm.jpg" /></p>       
</td>
</tr>
</table>

<p>Take a look at it here on cyclic 👉 https://simple-mario-character-api.vercel.app/</p>
<p>https://super-mario-bros-character-api.onrender.com/</p>
<p>*Render does take a minute to spin up the first time*</p>

<h2 align="center">Technology Used</h2>
    <p align="center"> 
    <a href="https://www.w3schools.com/css/" target="_blank"
            rel="noreferrer"> <img align="center"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3" width="40" height="40" /> </a> 
    <a href="https://git-scm.com/" target="_blank"
            rel="noreferrer"> <img align="center" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40"
                height="40" /> </a> 
    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img align="center"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5" width="40" height="40" /> </a> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img align="center"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript" width="40" height="40" /> </a> 
           <!--- <a href="https://nodejs.org" target="_blank"
            rel="noreferrer"> <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs" width="40" height="40" /> </a> --->
                <img align="center" width="50px" src="images/node.png" alt="node.js" />
                <a href="https://postman.com" target="_blank"
            rel="noreferrer"> <img align="center" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman"
                width="40" height="40" /> </a> 
                <img align="center" width="50px" src="images/express.png" alt="express.js" />
     <a align="center" href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> </p>
     
<h2 align="center">About</h2>
<p>This is a simple API with the character objects stored server side. When you enter the characters name it will display thier name, ability, the first game they appeared in, and their picture.
     
<h2 align="center">How to use it in your own project</h2>
<p>Place this url in your fetch - `https://odd-colt-vestments.cyclic.app/api/${characterName}`</p>
<p>${characterName} should take the input value from ~input type="text"~ if you're using a search bar or ~input type="radio"~ if you're using a radio button.</p>
<p>Your client side javascript fetch would look like this.</p>

```
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
```
