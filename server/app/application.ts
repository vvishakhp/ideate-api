import { Router } from 'express-serve-static-core';
import express = require('express');
import { mappings } from '../functions/mappings';
import { defaultConfig } from '../config/defaultConfig';

export class Application {
    private apiRouter = express.Router();
    private adminRouter = express.Router();

    public constructor(private applicationConfig?: ApplicationConfig) {
        if (applicationConfig) {
            this.loadConfig(applicationConfig);
        } else {
            this.loadConfig(defaultConfig);
        }
    }

    private loadConfig(config: ApplicationConfig) {

    }

    public apiRoute(): Router {
        return this.apiRouter;
    }

    public adminRoute(): Router {
        return this.adminRouter;
    }
}

export interface ApplicationConfig {
    apiConfig?: string;
}