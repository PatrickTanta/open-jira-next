import { models, model,  Model, Schema } from "mongoose";
import { Entry } from "../interfaces";

interface IEntry extends Entry {
}

const entrySchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Number },
  status: {
    type: String,
    enum: {
      values: ['pending', 'in-progress', 'finished'],
      message: '{VALUE} no es un estado permitido'
    }
  }
});

const EntryModel: Model<IEntry> = models.Entry || model('Entry', entrySchema)

export default EntryModel;