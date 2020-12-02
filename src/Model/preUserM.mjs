import bcrypt from 'bcrypt';

export default (schema) => {
  schema.pre('save', async function() {
    //Get the password feild & hash the password
    if(this.isModified('password')){
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(this.password, salt);
      return this.password = hash;
  }
  //catch any errors
    throw new Error('Something Went Wrong');
  });
};
