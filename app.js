import express from 'express';
import cors from 'cors';
import path from 'path';
import indexRouter from './routes/index.js'
import userRouter from './routes/users.js'
import comprasRouter from './routes/compras.js'

var app=express();

app.use(express.json());
app.use('/',indexRouter);
app.use('/',comprasRouter);



app.listen(8000,()=>{
  console.log(`Server runnin in http://localhost:8000`);
})