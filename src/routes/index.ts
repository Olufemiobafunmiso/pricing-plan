import { Response, Router } from 'express';
import {SuccessResponseObject} from '../utils/index'
import {pricing_plans} from '../controllers/prices.plans';
import {Validate} from '../middleware/auth'
const router = Router();
router.get('/',(_,res:Response)=>{
    res.status(200).json(new SuccessResponseObject('API is Live 🚀',null));

})
router.get('/v1/pricing', Validate, pricing_plans);


export default router;