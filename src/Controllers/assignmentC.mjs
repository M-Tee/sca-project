import Assignment from '../Model/assignmentM.mjs';

async function upload(req, res) {
  try {
    const assignmnt = new Assignment(req.body);
    await assignmnt.save();
    return res.json(assignmnt);
  } catch (err) {
    console.log(err);
   };
};
async function getfiles(req, res) {
  try {

  } catch (err) {console.log(err)};

}

export default { upload };
