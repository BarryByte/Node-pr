const userModel = require("../models/user")
exports.createUser = async (req, res) => {
    const user = userModel.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        address: req.body.address,
        phone: req.body.phone
    });
    console.log(user);

    return res.status(201).json({ message: "user is created" });
};

exports.getAllUsers = async (req, res) => {
    const users = await userModel.find({});
    return res.status(200).json(users);
}
exports.getUserById = async (req, res) => {
    const user = await userModel.findById(req.params.id)
    return res.status(200).json(user);
}
exports.updateUserById = async (req, res) => {
    const user = await userModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    return res.status(200).json(user);
}

