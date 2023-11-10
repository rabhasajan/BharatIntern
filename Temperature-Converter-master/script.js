const kelvin = document.getElementById('kelvin');
const fahrenheit = document.getElementById('fahrenheit');
const celsius = document.getElementById('celsius');


const calculation = (event)=>{
     const tempName = event.target.name;
     const currentVal = +event.target.value;

     switch (tempName) {
        case "kelvin":
            fahrenheit.value =  (((currentVal - 273.15) * 9/5) + 32).toFixed(2) ;
            celsius.value =  (currentVal - 273.15).toFixed(2) ;

            break;
     
        case "fahrenheit":
            kelvin.value = ((currentVal - 32) * 5/9 + 273.15 ).toFixed(2);
            celsius.value = ((currentVal - 32) * 5/9).toFixed(2) ;
            break;
     
        case "celsius":
            fahrenheit.value = ((currentVal * 9/5) + 32).toFixed(2);
            kelvin.value = (currentVal + 273.15).toFixed(2); 
            break;
     
        default:

            break;
     }
}