import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";



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