const userService = require('../services/user.service')

const create = async (req, res) => {
  const {name, username, email, password, avatar, background} = req.body;
  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({message:"submit all fields for registration"});
  }

  const user = await userService.create(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error Creating User" });
  } 

  res.status(201).send({
    message: "user created succesfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

module.exports = {create}