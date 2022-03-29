const juli = {
    nombre: "Juli",
    hambre: 50,
    edad: 0,
    energiaVital: 70,
    diversion: 50,
    signoVital: function (){
        console.log(`Me llamo ${this.nombre}, tengo ${this.edad} años y estoy con un %${this.energiaVital} de vida. Tengo %${this.hambre} de hambre. Estoy %${this.diversion} divertido`)
    },
    vivir: function(){
        this.edad += 1
        this.hambre += 15
        this.energiaVital -= 30
        this.diversion -= 20
    },
    sigueConVida: function(){
        return this.energiaVital > 0 && this.energiaVital <= 100 && this.hambre >= 0 && this.hambre < 100
    },
    comer: function (){
        if (this.energiaVital < 80)
        {
            this.hambre-= 10
            this.energiaVital += 10
        }
    },
    pasear: function (){
        this.energiaVital += 10
        this.hambre += 5
    },
    siesta: function (){
        this.energiaVital += 5
    },
    jugar: function(){
        this.diversion += 20
        this.hambre += 5
        this.energiaVital -= 10
    }

}

module.exports = juli