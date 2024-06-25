import mongoose from "mongoose";
const PatientSchema = new mongoose.Schema( {

    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: [ "On Hold", "Completed", "Canceled" ],
        required: true
    },
    doctor: {
        type: String,
        required: true
    }
} );
const PatientModel = mongoose.model( "Patient", PatientSchema );
export default PatientModel;