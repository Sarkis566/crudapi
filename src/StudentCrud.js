import {MongoClient} from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

let mongoClient;
let _connection = process.env.MONGO_DB_CONNECTION;

async function connectToDB(uri){
   try {
    mongoClient = new MongoClient(uri);
    await mongoClient.connect();
    console.log('connection to mongodb succeded!!!')
    return mongoClient;
   } catch (error) {
    console.error('Errorwhile trying to connect')
   } 
}


 export async function CreateStudentDocument(uri,Studentbj)
{
let db={};  // iza variablr defined l try w bl bdna nhetto bl finally lzm n3mlo define barra//
  try {
    let mongoClient = await connectToDB(uri);
  const db= mongoClient.db('school');
  const collection = db.collection('students');
  Studentbj.id=uuidv4();
  await collection.insertOne(Studentbj);
  } catch (error) {
    console.log('error while  trying to create document ')
  }
  finally{
    // db.close();
    mongoClient.close();
    console.log('this line of code will be executed if the previouss code succeded or not');     //code b fut 3le iza fi error aw laa
  }
  
// db password bl atlas lzm naabya mn khilel data access , edit user  w mneeml generate lal passwod//
}

export async function RemoveStudentDocument(uri,_id)
{
let db={};  // iza variablr defined l try w bl bdna nhetto bl finally lzm n3mlo define barra//
  try {
    let mongoClient = await connectToDB(uri);
  const db= mongoClient.db('school');
  const collection = db.collection('students');
  await collection.deleteOne(Studentbj);
  } catch (error) {
    console.log('error while  trying to create document ')
  }
  finally{
    // db.close();
    mongoClient.close();
    console.log('this line of code will be executed if the previouss code succeded or not');     //code b fut 3le iza fi error aw laa
  }
  
// db password bl atlas lzm naabya mn khilel data access , edit user  w mneeml generate lal passwod//
}

export async function GetAllStudents(uri)
{
let db={};  // iza variablr defined l try w bl bdna nhetto bl finally lzm n3mlo define barra//
  try {
    let mongoClient = await connectToDB(uri);
  const db= mongoClient.db('school');
  const collection = db.collection('students');
  await collection.deleteOne(Studentbj);
  } catch (error) {
    console.log('error while  trying to create document ')
  }
  finally{
    // db.close();
    mongoClient.close();
    console.log('this line of code will be executed if the previouss code succeded or not');     //code b fut 3le iza fi error aw laa
  }
  
// db password bl atlas lzm naabya mn khilel data access , edit user  w mneeml generate lal passwod//
}