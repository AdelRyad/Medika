import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema( {

    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    }
} );
const DoctorModel = mongoose.model( "Doctor", DoctorSchema );
export default DoctorModel;