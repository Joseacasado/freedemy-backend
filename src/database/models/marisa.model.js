const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScheduleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: false
    },
    tags: {
      type: [String],
      required: false,
    },
    loop: {
      type: Boolean,
      default: false,
      required: true,
    },
    events: [
      {
        _id: {
          type: String,
          required: true,
        },
        startDate: {
          type: Date,
          required: true,
        },
        endDate: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'updated'
    }
  }
)

module.exports = mongoose.model('Schedule', ScheduleSchema)
