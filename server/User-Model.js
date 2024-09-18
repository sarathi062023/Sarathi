import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    
    jobTitle: {
        type: String,
        // required: true
    },
    company: {
        type: String,
        // required: true
    },
    location: {
        type: String,
        // required: true
    },
    linkedin: {
        type: String,
        // required: true
    },
    skills: {
        type: Array,
        // required: true
    },
    educationStatus: {
        type: String,
        // required: true
    },
    interests: {
        type: Array,
        // required: true
    },
    goals: {
        type: Array,
        // required: true
    },
    experience: {
        type: Array,
        // required: true
    }
});

const User = mongoose.model('User', UserSchema);

// ES Module export
export default User;
