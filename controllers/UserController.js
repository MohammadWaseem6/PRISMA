import prisma from "../DB/db.config.js";

export const CreateUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const findUser = await prisma.user.findUnique({
            where: { email: email }
        });

        if (findUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        });

        return res.status(200).json({ data: newUser, message: "User created successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
