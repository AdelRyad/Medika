import e from "express";
const router = e.Router();
import PatientModel from "../models/Patient.js";

router.post( "/", ( req, res ) =>
{
    const patient = new PatientModel( {
        name: req.body.name,
        time: req.body.time,
        type: req.body.type,
        status: req.body.status,
        doctor: req.body.doctor
    } );
    patient.save()
        .then( ( data ) =>
        {
            res.send( 'created' );
        } )
        .catch( ( error ) =>
        {
            res.send( error );
        } );
} );

router.get( "/:page", ( req, res ) =>
{
    PatientModel.find().limit( 6 ).skip( req.params.page * 6 )
        .then( ( data ) =>
        {
            res.json( data );
        } )
        .catch( ( error ) =>
        {
            res.json( error );
        } );
} );


export default router;