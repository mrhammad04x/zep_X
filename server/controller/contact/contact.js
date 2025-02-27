const connection=require("../../connection/connection");




const getcontact = (req, res) => {
    const sqlQuery = "SELECT * FROM contact";
    connection.query(sqlQuery, (err, data) => {
      if (err) {
        return res.status(500)
      } else {
        return res.json(data);
      }
    });
  };


const addcontact=(req,res)=>{
 const {first_name,last_name,email,contact,message}=req.body;
 const q="INSERT INTO contact (first_name,last_name,email,contact,message) VALUES (?,?,?,?,?)";
 const data=[first_name,last_name,email,contact,message];
     connection.query(q, data, (err, results) => {
        if (err) {
            res.status(500).json({ err: "error in fetching" })
        } else {
            res.status(200).json(results)
        }
    })

};

const deletecontact = (req, res) => {
    const { id } = req.params;
    const q = "DELETE FROM contact WHERE contact_id=?";
    connection.query(q, [id], (err, results) => {
        if (err) {
            res.status(500).json({ err: "error in deleting" })
        } else {
            res.status(200).json(results);
        }
    })
  }


module.exports={getcontact,addcontact,deletecontact};