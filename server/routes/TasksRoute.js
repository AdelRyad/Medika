import e from "express";
import multer from "multer";
const router = e.Router();
import TaskModel from "../models/Task.js";


router.get( "/", ( req, res ) =>
{
    TaskModel.find()
        .then( ( data ) =>
        {
            res.json( data );
        } )
        .catch( ( error ) =>
        {
            res.json( error );
        } );
} );

const storage = multer.diskStorage( {
    destination: ( req, file, cb ) =>
    {
        cb( null, 'uploads' );
    },
    filename: ( req, file, cb ) =>
    {
        cb( null, file.originalname );
    },
} );
const upload = multer( { storage } );

router.post( "/", upload.array( 'files', 5 ), ( req, res ) =>
{
    const task = new TaskModel( {
        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        status: req.body.status,
        description: req.body.description,
        attachment: req.files.map( file => ( {
            filename: file.originalname,
            size: file.size
        } ) ),
        assignedTo: req.body.assignedTo
    } );

    task.save()
        .then( ( data ) =>
        {
            res.send( 'created' );
        } )
        .catch( ( error ) =>
        {
            res.send( error );
        } );
} );


export default router;