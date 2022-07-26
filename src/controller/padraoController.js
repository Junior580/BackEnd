const User = require("../model/User");

module.exports = {
    get: async (req, res) => {
        const { email } = req.body;
        const userExists = await User.findOne({ email, email });
        if (!userExists) {
            return res.status(400).json({ msg: "User does not exist!" });
        }
        try {
            const user = await User.findOne({ email, email });

            return res.status(200).json({ user });
        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    getid: async (req, res) => {
        const id = req.params.id;
        const userExists = await await User.findById(id);
        if (!userExists) {
            return res.status(400).json({ msg: "User does not exist!" });
        }
        try {
            const user = await User.findById(id);

            return res.status(200).json({ user });
        } catch (error) {
            return res.status(500).json({ error });
        }
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
    put: async (req, res) => {
        const id = req.params.id;
        const { name, email } = req.body;
        const user = { name, email };
        const userExists = await User.findById(id);

        if (!userExists) {
            return res.status(400).json({ msg: "User does not exist!" });
        }
        try {
            await User.findByIdAndUpdate(id, user);
            return res.status(200).json({ msg: "User successfully updated!" });
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const userExists = await User.findById(id);

        if (!userExists) {
            return res.status(400).json({ msg: "User does not exist!" });
        }
        try {
            await User.findByIdAndRemove(id);
            return res.status(200).json({ msg: "User successfully deleted!" });
        } catch (error) {
            return res.status(500).json({ error });
        }
    },
};
