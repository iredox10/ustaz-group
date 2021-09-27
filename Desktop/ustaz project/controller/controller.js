const User = require('../model/sign-up')

// sign in controller
module.exports.get_log = (req,res) =>{
    res.render('sign-in')
}

module.exports.post_log = async (req,res) =>{
    const {email,password } = req.body
    try{
        const userEmail = User.findOne({email})
        const userPwd = User.findOne({password})
        if(userEmail && userPwd ){
            res.redirect(`/${userEmail._id}`)
        }
    }
    catch(err){
        console.log(err);
    }
}

// sign up controller
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
        res.redirect(`/${newUser._id}`)
        console.log(newUser);
    } catch (err) {
        console.log(err);
    }
}

//* route for single user

module.exports.get_user = async (req,res) =>{
    try {
        let user = await User.findById(req.params.id)
        res.render('userPage', {user})
        console.log('visited');
    } catch (err) {
        console.log(err);
    }
}




// booking controller