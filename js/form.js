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

$('input.answered').on('change', function() {
  var success = $(this).parent().data('correct');
  var current = $(this).val();
  var status = $(this).siblings('input[name=status-question]');
   if($(this).hasClass('checkbox')){
     console.log()
     var approve = [1,2,3]
     var checks = $('input.checkbox:checked');
     var multipleCheck = false;
     status.val(0);
    for(i = 0; i< checks.length; i++){
      if(checks.length ==  approve.length){
        for(x = 0; x < approve.length; x++){
          if($(checks[i]).val() == approve[x]){
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
   } else {
    if(success == current){
      status.val(1);
    }else{
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
  }

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
$('#name').text(name+' '+ surname);

})


