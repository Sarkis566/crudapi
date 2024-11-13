import express from 'express';
import {config} from 'dotenv';
import { CreateStudentDocument, RemoveStudentDocument, GetAllStudents } from './src/StudentCrud.js';
config();


const _uri =process.env.MONGO_DB_CONNECTION;
 const app = express();
 app.use(express.json());

 app.get('/',(req,res)=>{
    res.send('Hi')
 })


 app.post('/students',async (req,res)=>{
   // console.log(req.body);
   // res.send(req.body);

    await CreateStudentDocument(_uri,req.body);
    res.send('OK');
 })

 app.delete('/students',async (req,res)=>{
   // console.log(req.body);
   // res.send(req.body);
    console.log('Trying to remove student');
    //await RemoveStudentDocument(_uri,req.body,_id);
    res.send('OK');
 })

 app.get('/students',async (req,res)=>{
   // console.log(req.body);
   // res.send(req.body);
   //  console.log('Trying to remove student');
    let   data =  await GetAllStudents(_uri);
    res.send(data);
 })
app.listen(process.env.PORT)