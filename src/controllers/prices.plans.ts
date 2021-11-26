import { RequestHandler } from 'express';
import { SuccessResponseObject } from '../utils/index';
import database from '../database/pricing.plans.json'
import { sort_response, map_response,normalizeResponse } from '../modules/operations';

export const pricing_plans: RequestHandler = async (req, res) => {

    const prices: any = database
    const isSort = req.query.sort

    //Check if plan is passed
    const plans = (req.query as { plans: string[] }).plans;
    let response;

    let retrievePlans = plans && plans.length
    if (retrievePlans) {
        response = map_response(plans)
    }
    if (isSort) {
    response = response ?  normalizeResponse(response) :  sort_response(prices.tiers[0])
    }


    let final_result = response ?? prices


    return res.status(200).json(new SuccessResponseObject("Pricing sucessfully fetched", final_result));



};

