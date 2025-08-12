import mongoose, { Document, Schema } from "mongoose";

export interface IListen extends Document {
  number: string;
  message: string;
  contactName?: string;
  carrier?: string;
  country?: string;
  networkType?: string;
  duration?: string;
  endedAt?: Date;
  type?: string;
}

const ListenSchema = new Schema<IListen>(
  {
    number: { type: String, required: true },
    message: { type: String, default: "" },
    contactName: { type: String, default: "" },
    carrier: { type: String, default: "" },
    country: { type: String, default: "" },
    networkType: { type: String, default: "" },
    duration: { type: String, default: "" },
    endedAt: { type: Date },
    type: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IListen>("Listen", ListenSchema);
