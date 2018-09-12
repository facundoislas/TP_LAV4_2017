import { Juego } from '../clases/juego'

export class JuegoHistoria extends Juego {
  
    dibujoAdivinar: Array<string> = new Array<string>();
    preguntas: Array<string> = new Array<string>();
    dibujoAJugar: string;
    dibujoDeUsuario: string = '';
    gano: boolean;
    contador: number = 0;
    numeroRandom: number = 0;
    nombre: string = '';
    jugador: string = '';
    resultado: string = '';

    constructor(unNombre?: string, jugador?: string, gano?: boolean) {
        super(unNombre, gano, jugador);
    }
/*
    Comenzar() {
        this.preguntas = [
            "¿Que evento ocurrio en esta foto?",
            "¿En que año se sanciono la Constitucion Nacional?",
            "¿En que provincia se declaro la independencia?",
            "¿Quien es este personaje historico?",
            "¿Que se conmemora el 20 de junio?",
            "",
            "DONALD",
            "HIJITUS",
            "SONIC",
            "DEXTER",
            "COYOTE",
            "GOKU",
            "PLUTO"];

        this.dibujoAdivinar = [
            "../TP_LAV4_2017/assets/dibujo/picapiedras.jpg",
            "../TP_LAV4_2017/assets/dibujo/dumbo.jpg",
            "../TP_LAV4_2017/assets/dibujo/gargolas.jpg",
            "../TP_LAV4_2017/assets/dibujo/garfield.jpg",
            "../TP_LAV4_2017/assets/dibujo/snoopy.jpg",
            "../TP_LAV4_2017/assets/dibujo/piolin.jpg",
            "../TP_LAV4_2017/assets/dibujo/donald.jpg",
            "../TP_LAV4_2017/assets/dibujo/hijitus.jpg",
            "../TP_LAV4_2017/assets/dibujo/sonic.jpg",
            "../TP_LAV4_2017/assets/dibujo/dexter.jpg",
            "../TP_LAV4_2017/assets/dibujo/coyote.jpg",
            "../TP_LAV4_2017/assets/dibujo/goku.jpg",
            "../TP_LAV4_2017/assets/dibujo/pluto.jpg"
        ];
        this.Next();
    }

    Next() {
        this.numeroRandom = Math.floor((Math.random() * 12) + 0);
        this.dibujoAJugar = this.dibujoAdivinar[this.numeroRandom];

    }

    Verificar(unaPalabra: string) {
        if (unaPalabra != '' && unaPalabra != null) {

            unaPalabra = unaPalabra.toUpperCase();
            console.log(unaPalabra);
            console.log(this.dibujoAdivinado[this.numeroRandom])

            if (unaPalabra === this.dibujoAdivinado[this.numeroRandom]) {
                this.gano = true;
                this.resultado = "GANO!"
                this.contador = 0;
                console.log(this);
            }
            else {
                this.contador++;
            }

            if (this.contador == 3) {
                this.gano = false;
                this.resultado = "PERDIO!"
                this.Next();
            }
        }
    }

    Rendirse() {
        this.gano = false;
        this.resultado = "PERDIO!"
        this.Next();
    }
*/

    public verificar() {
        return true;
     }


  
}