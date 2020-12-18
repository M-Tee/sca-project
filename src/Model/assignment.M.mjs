import mongoose from 'mongoose';

const { Schema } = mongoose;

const assignSchema = new Schema(
  {
    regNo: {
      type: String
    },
    file: {
      type: Schema.Types.Mixed,
      required: true,
      path: 'file'
    },
    date: {
      type: Date 
    }
  }
); 

const Assignment = mongoose.model('Assignment', assignSchema);

export default Assignment;
