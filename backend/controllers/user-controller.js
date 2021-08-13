const User = require("../models/user-model");
const {validRegister, validLogin} = require("../utilities/validation");
const {hash, compare} = require("bcrypt");
const {sign} = require("jsonwebtoken");
const {serialize} = require("cookie");
const salt = 10;

async function Register(req, res) {
  try {
    const {username, email, password} = req.body;
    const {error} = validRegister(req.body);

    if (error) {
      return res.status(400).json({message: error.details[0].message});
    }

    // check if user is registered already!
    const isUser = await User.findOne({email});
    if (isUser) {
      return res.status(400).json({message: "email is already exits"});
    }

    // hashed password
    const passwordHashed = await hash(password, salt)
      .then(hashed => {
        return hashed;
      })
      .catch(error => {
        throw new Error(error);
      });

    // create new user
    const newUser = new User({
      username,
      email,
      password: passwordHashed,
    });

    await newUser.save(error => {
      if (error) throw new Error(error);
      return res.status(201).json({message: "successfully registered"});
    });
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}

async function Login(req, res) {
  try {
    const {email, password} = req.body;
    const {error} = validLogin(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    //check if user is not registered
    const isUser = await User.findOne({email});

    if (!isUser) {
      return res
        .status(400)
        .json({message: "email or password is incorrect 1"});
    }

    // compare hashed password
    const samePassword = await compare(password, isUser.password);
    if (!samePassword) {
      return res
        .status(400)
        .json({message: "email or password is incorrect 2"});
    }

    // generate token
    const token = sign({_id: isUser._id}, process.env.ACCESS_TOKEN_USER);

    res.cookie(
      serialize("user_token", token, {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? false : "none",
        path: "/",
        maxAge: 60 * 60, // 1 day
      })
    );

    res.cookie(
      serialize(
        "user_info",
        JSON.stringify({
          username: isUser.username,
          email: isUser.email,
          role: isUser.role,
        }),
        {
          httpOnly: false,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : false,
          path: "/",
          maxAge: 60 * 60, // 1 day
        }
      )
    );

    res.status(200).json({
      message: "successfully login",
    });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

async function logout(req, res) {
  try {
    res.clearCookie("user_info");
    res.clearCookie("user_token");
    return res.status(200).json({message: "🙋🏻‍♂️ see you later"});
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  Register,
  Login,
  logout,
};
