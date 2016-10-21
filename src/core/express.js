import express from "express";
import bodyParser from "body-parser";
import responseTime from "response-time";
import mitanEko from "mitan-eko";
import zouti from "zouti";

import systemRoutes from "../routes/system";

let oApp,
    fInit;

fInit = function ( iAppPort = APP_PORT ) {
    if ( oApp ) {
        return oApp;
    }

    oApp = express();

    // configure middlewares
    oApp.use( mitanEko( "kach" ) );
    oApp.use (responseTime());
    oApp.use( bodyParser.json());
    oApp.use(bodyParser.urlencoded({
        "extended": true,
    }));

    // routes
    oApp.use( systemRoutes );

    // listening
    oApp.listen( iAppPort, () => {
        zouti.log( `Server is listening on port ${ iAppPort }`, "jimmy/kash" );
    } );
};

export {
    fInit as init,
}
