const User = require("../model/User");

module.exports = {
    get: async (req, res) => {
        const { email } = req.body;
        const user = await User.findOne({ email, email });
        const userExists = await User.findOne({ email, email });
        if (!userExists) {
            return res.status(400).json({ msg: "User does not exist!" });
        }
        return res.status(200).json({ user });
    },
    post: async (req, res) => {
        const { name, email } = req.body;
        const user = new User({ name, email });
        const userExists = await User.findOne({ email, email });
        if (userExists) {
            return res.status(400).json({ msg: "User already exists!" });
        }

        try {
            await user.save();
            return res.status(200).json({ msg: "User successfully created!" });
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
};
