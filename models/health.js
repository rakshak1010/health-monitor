const mongoose = require("mongoose");

const HealthSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        bp: [
            {
                y1: Number,
                y2: Number,
                x: Date
            },
        ],
        ecg: [
            {
                y: Number,
                x: Date
            },
        ],
        spo2: [
            {
                y: Number,
                x: Date
            },
        ],
        temperature: [
            {
                y: Number,
                x: Date
            },
        ],
        heartRate: [
            {
                y: Number,
                x: Date
            },
        ]
    },
    {
        id: true,
        timestamps: true
    }
);


Health = mongoose.model("Health", HealthSchema);

module.exports = Health;
