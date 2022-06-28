//Promesas en JavaScript
import { getHeroeById } from './bases/08-import-export.';

const promesa = new Promise( ( resolve, reject )=>{

    setTimeout( () => {
        // console.log( '2 segundos despues' )
        // resolve()

        /**
         * tarea 
         * importar getHeroeById en una constante
         */
        console.log(getHeroeById(2))
    },2000)
});

promesa.then( () => {
    console.log( 'Then de la promesa' );
})