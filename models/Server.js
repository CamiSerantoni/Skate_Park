// Importamos express
import express from 'express';
// Importamos nuestro moto de plantilla
import { create } from 'express-handlebars';

// Creación de variables de entorno
import { fileURLToPath } from 'url'
import { dirname } from "path";


// Variables que me permiten mostrar el path donde estoy en el proyecto
const __filename = fileURLToPath( import.meta.url )
const __dirname = dirname( __filename )

// IMPORTAMOS NUESTRAS VISTAS
 import vistaHome  from '../routes/vistaHome.routes.js';
 import vistaLogin from '../routes/vistaLogin.routes.js';
 import vistaRegistro from '../routes/vistaRegistro.routes.js';
 import vistaAdmin from '../routes/vistaAdmin.routes.js';
 import vistaDatos from '../routes/vistaDatos.routes.js';
//import rutaGetParticipantes from '..routes/vistaGetParticipantes.routes.js'; 
import postParticipante from '../routes/postParticipante.routes.js';
// import rutaPost from '../routes/vistaPost.routes.js'
// import rutaGet from '../routes/vistaGetUsuarios.routes.js';
// import rutaDelete from '../routes/vistaDeleteUsuario.routes.js';
// import rutaPut from '../routes/vistaPutUsuario.routes.js';
// import rutaPostTransferencia from '../routes/vistaPostTransferencia.routes.js';
// import rutaGetTransferencias from '../routes/vistaGetTransferencias.routes.js';
// import rutaGet from '../routes/vistaGet.routes.js'

 


// Creamos nuestro modelo o clase de servidor

class Server {

    // Vamos a crear nuestro constructor para que ejecute 
    // Middleware
    // Rutas o Routes
    constructor(){
        // Cramos la app  de express
        this.app = express();
        this.port = process.env.PORT || 8000;

        this.Paths = {
            rootHome:'/',
            rootLogin:'/login',
            rootRegistro:'/registro',
            rootAdmin:'/admin',
            rootDatos:'/datos',
            //rootGetParticipantes:'/participantes',
            rootPostParticipante:'/skater',
            // rootGet:'/usuarios',
            // rootDelete:'/usuario',
            // rootPut:'/usuario',
            // rootPostTransferencia:'/transferencia',
            // rootGetTransferencias:'/transferencias'
            
        }

        // Iniciamos nuestros metodos iniciales
        this.middlewares();
        this.routes()
    }


    middlewares(){
        this.app.use( express.json() );
        this.app.use( express.static('public') );
        this.app.use( express.urlencoded({ extended: true }));
        this.app.use('/jquery',express.static(  `${__dirname}/../node_modules/jquery/dist`  ));
        this.app.use('/css', express.static( `${__dirname}/../public/assets/css` ))
        this.app.use('/bootstrap', express.static( `${__dirname}/../node_modules/bootstrap/dist/css`));
        this.app.use('/bootstrapjs',express.static(  `${__dirname}/../node_modules/bootstrap/dist/js`  ));
        this.app.use('/img',express.static( `${__dirname}/../public/assets/imgs`  ));
    }


    routes(){
        this.app.use( this.Paths.rootHome, vistaHome );
        this.app.use( this.Paths.rootLogin, vistaLogin );
        this.app.use( this.Paths.rootRegistro, vistaRegistro );
        this.app.use( this.Paths.rootAdmin, vistaAdmin );
        this.app.use( this.Paths.rootDatos, vistaDatos );
        this.app.use( this.Paths.rootPostParticipante, postParticipante );
        // this.app.use( this.Paths.rootPost, rutaPost);
        // this.app.use( this.Paths.rootGet, rutaGet );
        // this.app.use(this.Paths.rootDelete, rutaDelete);
        // this.app.use(this.Paths.rootPut, rutaPut);
        // this.app.use(this.Paths.rootPostTransferencia, rutaPostTransferencia);
        // this.app.use(this.Paths.rootGetTransferencias, rutaGetTransferencias);
                  
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        } )
    }


    initHandlebars(){
        this.hbs = create({
            partialsDir:[
                "views"
            ]
        })
        this.app.engine( "handlebars", this.hbs.engine );
        this.app.set("view engine","handlebars");
    }


}

export default Server;