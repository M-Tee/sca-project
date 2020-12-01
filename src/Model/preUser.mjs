import bcrypt from 'bycrpt';

export default (schema) => {
  schema.pre('save', async function() {
    //get the password feild & hash the password
    if(this.isModified('password')){
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(this.password, salt);
      this.password = hash;
  }
  //catch any errors
    throw new Error('Something Went Wrong');
  });
};
