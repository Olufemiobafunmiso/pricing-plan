import app from './app';
import { config } from './config';
app.listen(config.port,()=>{console.log(`app running at port ${config.port}`)});