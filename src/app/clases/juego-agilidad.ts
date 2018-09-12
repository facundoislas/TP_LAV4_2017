import { Juego } from '../clases/juego'

export class JuegoAgilidad extends Juego {
    num1: number;
    num2: number;
    operador: string;
    resultado: number;
    numIngresado: number;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Agilidad Aritmetica",gano,jugador);
      }

      public verificar() {
          this.gano = this.resultado == this.numIngresado;
          return this.resultado == this.numIngresado;
      }

      public realizarOperacion()
      {
          this.num1 = Math.floor(Math.random()*11);
          this.num2 = Math.floor(Math.random()*11);
          let oper = this.num1 = Math.floor(Math.random()*(3-1)+1);

           switch(oper) {
            case 1:
                this.operador = '+';
                this.resultado = this.num1 + this.num2;
                break;
            case 2:
                this.operador = '-';
                this.resultado = this.num1 - this.num2;
                break;
                case 3:
                    this.operador = '*';
                    this.resultado = this.num1 * this.num2;
                    break;
        }
      }
}
