import { RequestHandler } from 'express';
import Joi from "joi";
import {ErrorResponseObject} from '../utils/index'

//This can be be moved to a new file and exported as a module
const validateSpec = (spec:any, data:any, optionalConfig = {})=>{
  const { error, value } = spec.validate(data, {
    errors: {
      wrap: {
        label: '',
      },
    },
    ...optionalConfig,
  });
  if (error) {
    //return custom err message rather than generic err response

      if(error.details[0].type === 'any.only'){
          error.message = 'plan must be one of [starter, advanced, enterprise]'
      }
    throw new Error(error.message);
  }
  return value;
};
const Validate:RequestHandler = async(req,res,next)=>{
try {

  const schema =Joi.object({
      plans:Joi.array().items(Joi.string().valid("starter", "advanced", "enterprise")),
      sort:Joi.bool()
  }) 

  if(req.query){
    const normalize_plans = req.query && req.query.plans && Object.keys(req.query)
    req.query.plans = normalize_plans && normalize_plans.length ? `${req.query.plans}`.toLowerCase().split(','):req.query.plans
    await validateSpec(schema, req.query);
  }

     next()
     return true
} catch (error) {
    let errorMessage = "Unknown Error";
  if (error instanceof Error) {
    errorMessage = error.message;
  }
   return res.status(400).json(new ErrorResponseObject(`${errorMessage}`)) 
}

}



export {Validate}