import mongoose from 'mongoose';

const { Schema } = mongoose;

const assignSchema = new Schema(
  {
    uploaded_by: { //students name and regno
      type: String
    },
    file: {
      type: Schema.Types.Mixed,
      required: true,
    },
    uploaded_at: {
      type: Date
    }
  }
); 

const Assignment = mongoose.model('Assignment', assignSchema);

export default Assignment;
