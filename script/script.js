/**
*
* script.css
* @author- Arshath
* @date- 20/11/2022
*/
function weightConverter() {
    var kilogram = document.getElementById('kilograms').value;
    var perKilogram = document.getElementById('input-kg').innerHTML =kilogram*1000;
    var perPound = document.getElementById('input-pound').innerHTML =perKilogram*0.0022046;
    document.getElementById('input-ounce').innerHTML =perPound*16;
}
