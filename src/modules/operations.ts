import database from '../database/pricing.plans.json'
import { logger } from '../utils'

type Data =  Record<string, any> | Record<string, any>[];
export const sort_response = (item: any): object => {
    try {
        const isEmpty = Object.keys(item)
        if (!isEmpty.length) {
            throw new Error("Can't sort empty object")
        }
        return Object.keys(item).sort().reduce((acc: any, curr) => (acc[curr] = item[curr], acc), {});
    } catch (error) {
        let errorMessage = "Unknown Error";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        //Log the error for debugging purpose
        logger.error({
            message: errorMessage,
            level: 'error'
        });
        return { error }

    }

}

export const map_response = (arr: string[]) => {

    if (!arr.length) {
        throw new Error("Array cannot be empty")
    }
    const prices: any = database

    return arr.map((plan: any) => {
        let sortKeys = sort_response(prices.tiers[0][plan])
        return { [plan]: sortKeys }
    })


}

export const normalizeResponse  =(arr:Data)=>{
    try {
        if(!arr.length){
            throw new Error("Array cannot be empty")
        } 
        //Build the obj structure
        let newObj:any = {}
        arr.forEach((element:any) => {
            let [objectKey] = Object.keys(element);
            newObj[objectKey] = element[objectKey];
        });
        return sort_response(newObj)
    }catch (error) {
        let errorMessage = "Unknown Error";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        //Log the error for debugging purpose
        logger.error({
            message: errorMessage,
            level: 'error'
        });
        return { error }

    }
    

}