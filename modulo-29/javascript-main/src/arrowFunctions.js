"use strict"

//function Pessoa() {
  const Pessoa = ( ) => {

    this.idade = 0

    setInterval(() => {
        console.log(this.idade++)
    }, 2000);

}

const p1 = new Pessoa()
