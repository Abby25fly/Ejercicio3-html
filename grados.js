function convertirCelsius(){
  var num = document.getElementById('farenheit').value;
  var res = (num-32)*5/9;
    resultado.innerText = res.toFixed(2);
}
