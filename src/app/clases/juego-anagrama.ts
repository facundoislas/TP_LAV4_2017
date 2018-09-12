import { Juego } from '../clases/juego'

export class JuegoAnagrama extends Juego {

    anagramas : Array<any>;
    anagrama : any;
    palabra : string;
    
    ingreso : string;

    constructor() {
        super('Anagrama');
        this.init();
    }

    verificar() {
        this.gano = this.anagrama.palabra2 == this.ingreso.toLocaleLowerCase();
        return this.anagrama.palabra2 == this.ingreso.toLocaleLowerCase();
    }

    nuevo() {
        let indice = Math.floor(Math.random()*this.anagramas.length);
        this.palabra =  this.anagramas[indice].palabra1;
        this.anagrama = this.anagramas[indice];
        console.log(this.anagrama.palabra2);
    }

    init() {
        this.anagramas = new Array<any>();
        function getObject(p1, p2) {
            return { palabra1: p1, palabra2: p2 };
        }
        this.anagramas.push(getObject('aguardentosa' , 'engatusadora'));
        this.anagramas.push(getObject('altisonancia' , 'nacionalista'));
        this.anagramas.push(getObject( 'anemográfica' , 'mecanografía'));
        this.anagramas.push(getObject('anemométrica' , 'maceramiento'));
        this.anagramas.push(getObject('aparcamiento' , 'metacarpiano'));
        this.anagramas.push(getObject('armonización' , 'romanización'));
        this.anagramas.push(getObject('asqueamiento' , 'saqueamiento'));
        this.anagramas.push(getObject('astringencia' , 'transigencia'));
        this.anagramas.push(getObject('atrasamiento' , 'metatarsiano'));
        this.anagramas.push(getObject('cardiografía' , 'radiográfica'));
        this.anagramas.push(getObject('certificable' , 'rectificable'));
        this.anagramas.push(getObject('certificador' , 'rectificador'));
        this.anagramas.push(getObject('circuncisión' , 'incircunciso'));
        this.anagramas.push(getObject('conservación' , 'conversación'));
        this.anagramas.push(getObject('conservadora' , 'conversadora'));
        this.anagramas.push(getObject('desamparador' , 'desparramado'));
        this.anagramas.push(getObject('desmentidora' , 'sórdidamente'));
        this.anagramas.push(getObject('enfriamiento' , 'refinamiento'));
        this.anagramas.push(getObject('escandalizar' , 'zascandilear'));
        this.anagramas.push(getObject('imperdonable' , 'imponderable'));
        this.anagramas.push(getObject('irónicamente' , 'renacimiento'));
        this.anagramas.push(getObject('materialismo' , 'memorialista'));
    }

}
