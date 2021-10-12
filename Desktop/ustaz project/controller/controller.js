const User = require('../model/sign-up')

//! sign in controller
module.exports.get_log = (req,res) =>{
    res.render('sign-in')
}

module.exports.post_log = async (req,res) =>{

    const {email,password } = req.body
    try{
        const userEmail = await User.findOne({email:email})
        const userPwd = await User.findOne({password:password})
        if(userEmail && userPwd ){
            res.redirect(`/user/${userEmail.id}`)
        }else{
            res.send('userName or password is incorrect')
        }
    }
    catch(err){
        console.log(err);
    }

}

//! sign up controller
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
        res.redirect(`/booking/${newUser._id}`)
    } catch (err) {
        console.log(err);
    }
}

//!  user controller
module.exports.get_user = async (req,res) =>{
    try {
        let user = await User.findById(req.params.id)
        res.render('userPage', {user})
    } catch (err) {
        console.log(err);
    }
}


//! booking controller
module.exports.get_booking_page = async(req,res)=>{
    try {
       const user =  await User.findById(req.params.id)
        res.render('booking', {user})
    } catch (err) {
    console.log(err)    
    }
}

module.exports.post_booking_page = async (req,res)=>{
    let id = req.params.id
    try {     
        let user = await User.findByIdAndUpdate(id,{
                pickDate: req.body.pickDate,
                pickTime: req.body.pickTime,
                pickAddress: req.body.pickAddress,
                dropDate: req.body.dropDate,
                dropTime: req.body.dropTime,
                dropAddress: req.body.dropAddress,
            }, {new:true});
            await user.save()
            res.redirect(`/user/${user.id}`)
    } catch (err) {
        console.log(err);
    }
}



//! admin controller
module.exports.admin = async (req,res) =>{
    try {
        const users = await User.find()
        res.render('admin', {users})
    } catch (err) {
        
    }
}

//* admin delete contoller
module.exports.delete_user = async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.redirect('/admin')
    } catch (err) {
        console.log(err);
    }
}


