const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
    },
    // tags: {
    //   type: [String],
    //   required: false,
    // },
    // channelId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Channel",
    //   required: false,
    // },
    // channelName: {
    //   type: String,
    //   required: false,
    // },
    // status: {
    //   type: String,
    //   required: true,
    //   default: "inactivo",
    // },
    // loop: {
    //   type: Boolean,
    //   default: false,
    //   required: true,
    // },
    // startDate: {
    //   type: Date,
    //   required: false,
    // },
    // endDate: {
    //   type: Date,
    //   required: false,
    // },
    // fastEvents: [
    //   {
    //     _id: {
    //       type: String,
    //       required: true,
    //     },
    //     fasteventId: {
    //       type: Schema.Types.ObjectId,
    //       ref: "MediaProduction",
    //     },
    //     startDate: {
    //       type: Date,
    //       required: true,
    //     },
    //     endDate: {
    //       type: Date,
    //       required: true,
    //     },
    //   },
    // ],
  },
  {
    timestamps: {
      createdAt: "created",
      updatedAt: "updated",
    },
  }
);

module.exports = mongoose.model("Schedule", ScheduleSchema);
