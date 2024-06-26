import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import PatientRoute from "./routes/PatientsRoute.js";
import TaskRoute from './routes/TasksRoute.js';

const app = express();
dotenv.config();
app.use( express.json() );
app.use( cors( {
    origin: "*",
} ) );
app.get( '/', ( req, res ) =>
{
    res.json( { message: 'Hello from Vercel!' } );
} );
app.use( express.static( 'uploads' ) );
app.use( '/api/patients', PatientRoute );
app.use( '/api/tasks', TaskRoute );


const PORT = process.env.PORT || 5000;
mongoose
    .connect( process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } )
    .then( () =>
    {
        console.log( "MongoDB connected" );
    } )
    .catch( ( error ) =>
    {
        console.log( error );
    } );


app.listen( PORT, () =>
{
    console.log( `Server is running on port ${ PORT }` );
} );