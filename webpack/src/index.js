import cow from './components/cow/index.js'  
 
const message = 'is great'  
document.querySelector('#box').innerText = cow.say(`Webpack with Babel ${message}!`)