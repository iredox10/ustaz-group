const User = require('../model/sign-up')
module.exports.get_log = (req,res) =>{
    res.render('sign-in')
}
module.exports.post_sign = async (req,res) =>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        gender: req.body.gender,
        address: req.body.address
    })

    try {
        const newUser = await user.save()
        res.redirect(`/:${newUser.id}`)
        console.log(newUser);
    } catch (err) {
        console.log(err);
    }
}

//* route for single user

module.exports.get_user = async (req,res) =>{
    let user = await User.findOne(req.params.id)
    res.render('userPage', {user})
}