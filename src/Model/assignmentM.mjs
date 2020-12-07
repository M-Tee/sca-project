import mongoose from 'mongoose';

const { Schema } = mongoose;

const assignSchema = new Schema(
  {
    file: {
      type: Schema.Types.Mixed,
      required: true,
      path: 'file'
    }
  }
); 

const Assignment = mongoose.model('Assignment', assignSchema);

export default Assignment;
