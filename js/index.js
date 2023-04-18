class Validator {
  constructor() {
    this.validations = [
      //'data-min-length','data-max-length','data-required',
    ];
  }
  // iniciar a validação de todos os campos
  validate(form) {
    
  //pegar os input
  let inputs = form.getElementsByTagName("input");

  // console.log(inputs);

  // transformo uma HTMLCollection -> array
  let inputsArray = [...inputs];

  // console.log(inputsArray);


  }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

// evento que dispara as validações
submit.addEventListener("click", function (e) {
  e.preventDefault();

  validator.validate(form);
  //console.log('funcionou');

});

/*   // resgata todas as validações
    let currentValidations = document.querySelectorAll("form");

    if (currentValidations.length > 0) {
      this.cleanValidations(currentValidations);
    }
   
    // loop nos input e validação meadiante ao que for encontrado
    inputsArray.forEach(function (input) {
      // fazer validação de acordo com o atributo do input
      for (let i = 0; this.validations.length > i; i++) {
        // verificar se a validação existe no input
        if (input.getAttribute(this.validations[i]) != null) {
          // console.log(input.getAttribute(this.validations[i]));
          // console.log('achou validação');

          // limpa string para saber o método
          let method = this.validations[i]
            .replace("data-", "")
            .replace("-", "");

          // valor do input
          let value = input.getAttribute(this.validations[i]);

          // invoca o método
          this[method](input, value);
        }
      }
    }, this);
  }

  // verifica se um input tem um número minimo de caracteres
  minlength(input, minValue) {
    // console.log(input);
    // console.log(minValue);

    let inputLength = input.value.length;

    let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

    if (inputLength < minValue) {
      //console.log(errorMessage);
      this.printMessage(input, errorMessage);
    }
  }

  // verifica se um input passou do limite de caracteres
  maxlength(input, maxValue){
    
    let inputLength = input.value.length;

    let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;

    if (inputLength > maxValue) {
      //console.log(errorMessage);
      this.printMessage(input, errorMessage);
    }
  }

  //metodo para imprimir msg de erro na tela
  printMessage(input, msg) {
    let template = document.querySelector(".error-validation").cloneNode(true);

    template.textContent = msg;

    let inputParent = input.parentNode;

    template.classList.remove("template");

    inputParent.appendChild(template);
  }

  // verifica se o input é requerido
  required(input){

    let inputValue = input.value;

    if(inputValue === ''){
        let errorMessage = `Este campo é obrigatório`;

        this.printMessage(input, errorMessage);
    }

  }
  // limpa as validações da tela
  cleanValidations(validations) {
    validations.forEach((el) => el.remove());
  }
} */
