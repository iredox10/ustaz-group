const User = require('../model/registerModel');
const Article = require('../model/article');
module.exports.get_home = (req, res) => {
	res.render('home');
};

module.exports.get_register = (req, res) => {
	res.render('register');
};

module.exports.post_log_in = async (req, res) => {

	try {
		let userEmail = await User.findOne({email:req.body.email})
		let userPwd = await User.findOne({password:req.body.password})
		if(userEmail && userPwd) res.render('article-page')
		else{ 
			res.send('username or password')
		}
	} catch (err) {
		console.log(err);	
	}

};


module.exports.get_log_in = (req, res) => {
	res.render('log-in');
};

module.exports.article = async (req, res) => {
	let articles = await Article.find();
	res.render('article-page', { articles });
};

module.exports.post_register = async (req, res) => {
	try {
		const user = new User({
			fullName: req.body.fullName,
			schoolName: req.body.schoolName,
			address: req.body.address,
			regNumber: req.body.regNumber,
			email: req.body.email,
			password: req.body.password,
		});
		const newUser = user.save();
		res.redirect('/article-page');
	} catch (err) {
		console.log(err);
	}
};

module.exports.get_registered_users = async (req, res) => {
	try {
		const users = await User.find();
		// res.send(users)
		res.render('users', { users });
	} catch (err) {
		console.log(err);
	}
};
module.exports.get_admin = (req, res) => {
	res.render('admin-page');
};

module.exports.get_add_article = (req, res) => {
	res.render('add-article');
};
module.exports.post_add_article = async (req, res) => {
	try {
		let article = new Article({
			title: req.body.title,
			articleBody: req.body.articleBody,
		});
		article = await article.save();
		res.redirect('/article-page');
	} catch (err) {
		console.log(err);
	}
};

module.exports.get_fullArticle = async (req, res) => {
	try {
		let article = await Article.findById(req.params.id);
		res.render('full-article', { article });
	} catch (err) {
		console.log(err);
	}
};

module.exports.get_admin_article = async (req, res) => {
	try {
		let articles = await Article.find();
		res.render('admin-article-page', { articles });
	} catch (err) {
		console.log(err);
	}
};

module.exports.delete_article = async (req, res) => {
	try {
		let deleteArticle = await Article.findByIdAndDelete(req.params.id)
		res.redirect('/admin-article-page')
	} catch (err) {
		console.log(err);
	}
};


module.exports.edit_article = async (req,res) =>{
	try {
		let article = await Article.findById(req.params.id)
		res.render('edit-article', {article})
	} catch (err) {
		console.log(err);	
	}
}