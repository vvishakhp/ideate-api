import { ApplicationConfig } from "../app/application";
import fs = require('fs');
import path = require('path');

export const defaultConfig: ApplicationConfig = {
    apiConfig: JSON.parse(fs.readFileSync(path.resolve(__dirname, 'defaultConfig.json')).toString()),
}