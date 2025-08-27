import User from "../models/User.mjs"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const register = async (req, res) => {
    const user = new User(req.body)
    await user.save()
    res.send(user)
}

export const login = async (req, res) => { 
    const user = await User.findOne({ email: req.body.email })
    if(!user) {
        return res.status(404).send('User not found')
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) {
        return res.status(404).send('Invalid password')
    }
    const token = jwt.sign({ _id: user._id }, 'secret', { expiresIn: '1d' })
    res.send({user, token})
}