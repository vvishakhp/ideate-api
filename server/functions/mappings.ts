import { RawJson } from "./rawJson";
import { APIFunction } from "./apiFunction";

export interface FunctionMappingArray {
    [key: string]: typeof APIFunction;
}

export let mappings: FunctionMappingArray = {
    RAW_JSON: RawJson
};