class Validator {
  constructor() {
    this.validations = [
      // 'data-min-length',
    ];
  }

  // iniciar a validação de todos os campos
  validate(form) {
    //pegar os input
    let inputs = form.getElementsByTagName('input');

    //console.log(inputs);

    // transformo uma HTMLCollection -> array
    let inputsArray = [...inputs];

    //console.log(inputsArray);

    // loop nos input e validação meadiante ao que for encontrado
    inputsArray.forEach(function(input) {
        console.log(input);
    });
    
  }
}
/*
 

   

    

   

    
        
        // fazer validação de acordo com o atributo do input
      for(let i = 0; this.validations.length > i; i++) {
        if(input.getAttribute(this.validations[i]) != null) {

          // limpa string para saber o método
          let method = this.validations[i].replace("data-", "").replace("-", "");

          // valor do input
          let value = input.getAttribute(this.validations[i])

          // invoca o método
          this[method](input,value);

        }
      }

    }, this);
  }


// verifica se um input tem um número minimo de caracteres
minlength(input, minValue){

   let inputLength = input.value.length;

   let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

   if(inputLength < minValue){
    this.printMessage(input, errorMessage)
   }
}

//metodo para imprimir msg de erro na tela
printMessage(input, msg){

    let template = document.querySelector('.erro-validation').cloneNode(true);

    template.textContent = msg;

    let inputParent = input.parentNode;

    template.classList.remove('template');

    inputParent.appendChild(template);
}

} */

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

// evento que dispara as validações
submit.addEventListener("click", function (e) {
  e.preventDefault();

  validator.validate(form);
  //console.log('funcionou');
});
