const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Employee = new Schema(
    {
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        department: { type: String, required: true },
        role: { type: String, required: true },
        year_joined: { type: String, required: true },
        email: { type: String, required: true },
        cell: { type: String, required: true },
        state: { type: String, required: true },
        photo: { type: String, required: true },
        status: { type: String, required: true  },

    },
    {timestamps: true}
);

module.exports = mongoose.model("employees", Employee);