class Validator {

    constructor(){
        this.validations =[

        ]
    }
}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let Validator = new Validator();


// evento que dispara as validações
submit.addEventListener('click', function(e){
    e.preventDefault();

    Validator.validate(form);
    //console.log('funcionou');
})