import cowsay from 'cowsay-browser'
import './scss/main.scss' 

export default {  
  say: function (str) {  
    return cowsay.say({ text: str })  
  }  
}