class Validator {
  constructor() {
    this.validations = [
        'data-min-length',
    ]
  }

  // iniciar a validação de todos os campos
  validate(form) {
    //pegar os input
    let inputs = form.getAttributeNames("input");

    //console.log(inputs);

    // transformo uma HTMLCollection -> array
    let inputsArray = [...inputs];

    //console.log(inputsArray);

    // loop nos input e validação meadiante ao que for encontrado
    inputsArray.forEach(function(input) {
        
        // loop em todas as validações existentes
        for(let i = 0; this.validations.length > i; i++){
            if(input.getAttribute(this.validations[i]) != null){
                console.log('achou validação');
            }
        }

    }, this);
  }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let Validator = new Validator();

// evento que dispara as validações
submit.addEventListener("click", function (e) {
  e.preventDefault();

  Validator.validate(form);
  //console.log('funcionou');
});
