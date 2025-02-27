const connection = require("../../connection/connection");



const addToCart = (req, res) => {
    const { user_id, product_id, quantity, total_amount } = req.body;
    const query = "INSERT INTO cart (user_id, product_id, quantity,total_amount) VALUES (?, ?, ?,?)";
    connection.query(query, [user_id, product_id, quantity, total_amount], (err, results) => {
        if (err) {
            res.status(500).json({ err: "error in fetching" })
        } else {
            res.status(200).json(results)
        }
    })
}



const getCart = (req, res) => {
    const query = "SELECT * FROM cartt ";
    connection.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ err: "error in fetching" })
        } else {
            res.status(200).json(result)
        }
    })
}



const getCartByUserId = (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM cart WHERE user_id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json({ err: "error in fetching" })
        } else {
            res.status(200).json(result)
        }
    })
}


// app.post("/updateCartQuantity", async (req, res) => {
//     const { user_id, product_id, quantity } = req.body;

//     try {
//       await db.query(
//         "UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?",
//         [quantity, user_id, product_id]
//       );
//       res.json({ success: true, message: "Quantity updated successfully" });
//     } catch (error) {
//       res.status(500).json({ error: "Error updating quantity" });
//     }
//   });


const updateCartQuantity = (req, res) => {
    const { user_id, product_id, quantity } = req.body;
    const query = "UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?"
    connection.query(query, [quantity, user_id, product_id], (err, result) => {
        if (err) {
            res.status(500).json({ err: "error in fetching" })
        } else {
            res.status(200).json(result)
        }
    })
}

const deleteCart = (req, res) => {
    const { id } = req.params;
    const q = "DELETE FROM cart WHERE cart_id=?";
    connection.query(q, [id], (err, results) => {
        if (err) {
            res.status(500).json({ err: "error in deleting" })
        } else {
            res.status(200).json(results);
        }
    })
}



module.exports = { addToCart, getCart, getCartByUserId, updateCartQuantity ,deleteCart};