const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must Provide Name"],
        trim: true,
        maxLength: [50, 'Name cannot be more than 50 chars']
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Task", TaskSchema);
