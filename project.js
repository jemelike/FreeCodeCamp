const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    project_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    +
    phone: {
        type: String,
        required: true
    }
});

const Project = module.exports = mongoose.model('Contact', ContactSchema);