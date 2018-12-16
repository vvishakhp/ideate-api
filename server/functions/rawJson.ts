import { APIFunction } from "./apiFunction";

export class RawJson extends APIFunction {

    public constructor() {
        super();
    }

    public getFileds(): string[] {
        return ["value"]
    }
}

export interface RawJsonData {
    value: string;
}