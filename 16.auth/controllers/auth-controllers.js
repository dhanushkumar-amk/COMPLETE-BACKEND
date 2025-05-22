const User = require('../model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// register controllers
const registerUser = async(req, res) => {
    try {
        // extract user information frm req body
        const {userName, email, password, role} = req.body;

        //check if name is present already in database
        const checkExistingUser = await User.findOne({$or : [{userName}, {email}]})
        if(checkExistingUser){
            return res.status(400).json({
                success : false,
                message : "User is already exists"
            })
        }

        // hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //create a new User and save in a database
        const newUser = new User({
            userName,
            email,
            password : hashedPassword,
            role : role || "user"
        })

        await newUser.save();

        if(newUser){
            res.status(201).json({
                success : true,
                message : "user register successfully"
            })
        }else{
            res.status(400).json({
                success : false,
                message : "user register Unsuccessfull"
            })
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : "some error occured! pls try again"
        })
    }
}

// login controllers
const loginUser = async(req, res) => {
    try {
          // extract user information frm req body
        const { userName, password } = req.body;

        // if current user is exists in database or not
         const user = await User.findOne({userName})
        if(!user){
           return  res.status(400).json({
                success : false,
                message : "invalid Credentials"
            })
        }

        // check pasword is match
        const isPaswordIsMatch = await bcrypt.compare(password, user.password);
        if(!isPaswordIsMatch){
           return  res.status(400).json({
                success : false,
                message : "invalid Credentials"
            })
        }

        // Generate the jwt token
        const accessToken  = jwt.sign({
            userId  : user._id,
            userName : user.userName,
            role : user.role
        }, process.env.JWT_SECRETE_KEY, {
            expiresIn : '15m'
        })

        res.status(200).json({
            success : true,
            message : "Logged in successfully",
            accessToken
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : "some error occured! pls try again"
        })
    }
}


module.exports = {registerUser, loginUser}
