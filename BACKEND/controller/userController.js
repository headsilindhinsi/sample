const userModel = require("../model/userModel")

const AddUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body

    const userData = new userModel({
      firstName, lastName, email, password
    })

    await userData.save()
    res.status(200).send("User added!")
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const getUser = async (req, res) => {
  try {
    const userList = await userModel.find()
    res.status(200).send(userList)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const RemoveUser = async (req , res) =>{
     try {
        await userModel.findByIdAndDelete(req.params.id)

        res.status(200).send("user Deleted Successfully")
     }
     catch (err) {
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
     }
}

const loginUser = async (req , res) => {
   
    try {
         console.log("LOGIN API HIT")
         console.log(req.body);
        const { email , password} = req.body

        const user = await userModel.findOne({

         email , password
        })
        if(user) {
            res.status(200).send(user)
        }
        else{
            res.status(401).send("Invalid  User!")
        }
    }
    catch(err) {
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

module.exports = { AddUser, getUser , RemoveUser , loginUser}
