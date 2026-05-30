import express, { Express } from 'express';
import { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUserPage, postUpdateUser } from 'controllers/user.controller';
import { get } from 'https';


const router = express.Router();

const webRoutes = (app: Express) => {
    router.get('/', getHomePage);
    router.get('/create_user', getCreateUserPage);
    router.post('/handle_create_user', postCreateUser);
    router.post('/handle_delete_user/:id', postDeleteUser);
    router.get('/handle_view_user/:id', getViewUserPage);
    router.post('/handle_update_user', postUpdateUser);


    app.use('/', router);
};


export default webRoutes;