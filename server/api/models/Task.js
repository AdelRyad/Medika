import mongoose from "mongoose";

const AttachmentSchema = new mongoose.Schema( {
    filename: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
}, { _id: false } );

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
    attachment: {
        type: [ AttachmentSchema ],
    },
    assignedTo: {
        type: String,
        required: true
    }
} );

const TaskModel = mongoose.model( "Task", TaskSchema );
export default TaskModel;
