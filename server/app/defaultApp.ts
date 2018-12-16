import { Application } from './application';
import express = require('express');
import { AddressInfo } from 'net';

export class DefaultApplication {
    private application = new Application();
    private expressApp = express();

    public constructor() {
        
    }

    public startListening(port: number | string, callback: Function) {
        let server = this.expressApp.listen(port, () => {
            console.log("Srver started listening on port: " + (server.address() as AddressInfo).port);
            callback();
        });
    }
}