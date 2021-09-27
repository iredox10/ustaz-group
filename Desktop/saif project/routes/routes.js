const express = require('express');
const controller = require('../controller/controller');
const route = express.Router();

route.get('/', controller.get_home);

route.get('/register', controller.get_register);

route.post('/log-in', controller.post_log_in);

route.get('/log-in', controller.get_log_in);

route.get('/article-page', controller.article);

route.post('/register', controller.post_register);

route.get('/admin', controller.get_admin);

route.get('/users', controller.get_registered_users);

route.post('/add-article', controller.post_add_article);
route.get('/add-article', controller.get_add_article);

route.delete('/article-detail/:id', controller.delete_article);
route.get('/article-detail/:id', controller.get_fullArticle);
route.get('/admin-article-page', controller.get_admin_article);
route.get('/article/edit/:id', controller.edit_article)
module.exports = route;
