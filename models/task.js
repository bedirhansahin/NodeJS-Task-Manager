const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must Provide Name"],
        trim: true,
        maxLength: [50, "Name cannot be more than 50 chars"],
        minLength: [5, "Name cannot be less than 5 chars"],
        unique: true,
    },
    completed: {
        type: Boolean,
        default: false, 
    },
});

module.exports = mongoose.model("Task", TaskSchema);
