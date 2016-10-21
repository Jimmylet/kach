import { MongoClient } from "mongodb";
import Promise from "bluebird";
import zouti from "zouti";
let oDB, fInit;

const MONGO_URL = "mongodb://127.0.0.1:27017/kach";

fInit = function () {
    return new Promise( ( fResolve, fReject ) => {
        MongoClient.connect( MONGO_URL, ( oError, oLinkedDB ) => {
            if( oError ){
                return fReject( oError );
            }
            fResolve( oDB = oLinkedDB );
        });
    });
};

export {
    oDB as db,
    fInit as init,
};
