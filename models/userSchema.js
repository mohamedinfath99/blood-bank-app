const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum: ["donar", "admin", "hospital", "organization"]
    },
    name: {
        type: String,
        required: function () {
            if (this.role === "user" || this.role === "admin") {
                return true
            }
            return false
        }
    },
    organizationName: {
        type: String,
        required: function () {
            if (this.role === "organization") {
                return true
            }
            return false
        }
    },
    hospitalName: {
        type: String,
        required: function () {
            if (this.role === "hospital") {
                return true
            }
            return false
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    website: {
        type: String
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone is required']
    }
}, { timestamps: true });


const users = mongoose.model("users", userSchema)

module.exports = users;