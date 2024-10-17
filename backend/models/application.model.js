import mongoose from "mongoose";

// this schema is for applicants so that they can see in which job they have applied.
const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    }, 
  },
  { timestamps: true }
);

export const Application = mongoose.model("Application", applicationSchema);
