$(document).ready(function(){
  //agraga clase fijar en formulario de inicio
  var inputs = document.getElementsByClassName('formulario__input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
      if(this.value.length>=1) {
        this.nextElementSibling.classList.add('fijar');
      } else {
        this.nextElementSibling.classList.remove('fijar');
      }
    });
  }

  //Validacion de encuesta

  var respuestas = {
    rsp0: [12],
    rsp2: [2],
    rsp3: [1,2,3],
    rsp4: [3],
    rsp5: [2],
    rsp6: [1],
    rsp7: [2,3],
    rsp8: [1],
    rsp9: [1],
    rsp10: [2],
    rsp11: [1],
    rsp12: [2],
    rsp13: [1],
    rsp14: [2],
    rsp15: [2],
    rsp16: [1],
    rsp17: [2]
  }

$('input.answered').on('change', function() {
  var rsp = $(this).parent().data('rsp');
  var current = $(this).val();
  var status = $(this).siblings('input[name=status-question]');
  var checks = $(this).parent().find('input:checked');
  var multipleCheck = false;
     status.val(0);
    for(i = 0; i< checks.length; i++){
      if(checks.length ==  respuestas[rsp].length){
        for(x = 0; x < respuestas[rsp].length; x++){
          if($(checks[i]).val() == respuestas[rsp][x]){
            multipleCheck = true;
            status.val(1);
          } else {
            multipleCheck = false;
            status.val(0);
          }
        }
      } else {
        multipleCheck = false;
        status.val(0);
      }
    } 
      
});



// get parameters by url
var getParameterByName = function(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return (location.search.split(name + '=')[1] || '').split('&')[0];
  };
  
  var name = decodeURI(getParameterByName('name'));
  var surname = decodeURI(getParameterByName('apellido'));


  // send and check form
$('#send').on('click', function(){
  var hidden = $('input[name=status-question]');
  var finalScore = false;
  for(i = 0; i < hidden.length; i++){
    var valStatus = $(hidden[i]).val();
    if(valStatus == 1){
      finalScore = true;
      window.location.replace("diploma.html?name="+name+"&apellido="+surname);
    } else {
      window.location.replace("testIncorrecto.html");
      return false;
    }
  }
})

// replace name in the last step
// Imprimir nombre y apellido siempre con inicial mayuscula, sin importar como lo escribe el usuario

function findGetParameter(parameterName) {
  var result = null,
      tmp = [];
  location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
  return result;
};
var apellido = findGetParameter('apellido');
var arrApe = apellido.split(' ');
var nombre = findGetParameter('name');
var arrNom = nombre.split(' ');
var fullNameTemplate = '';

arrNom.forEach(function(value, index) {
    fullNameTemplate += value.charAt(0).toUpperCase()+ value.slice(1).toLowerCase()  + ' ';
  //console.log(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
});

arrApe.forEach(function(value, index) {
  fullNameTemplate += value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() + ' ' ;
  //console.log(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());
});

$('#name').text(fullNameTemplate);

})
