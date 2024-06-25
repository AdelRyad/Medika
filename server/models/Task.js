import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: [ "On Hold", "Completed", "Canceled" ],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Attachment: {
        type: [
            {
                filename: String,
                size: Number
            }
        ],
        required: true
    },
    AssignedTo: {
        type: [ String ],
        required: true
    }
} );

const TaskModel = mongoose.model( "Task", TaskSchema );
export default TaskModel;