import { Request, Response } from 'express';
import { handleCreateUser, getAllUsers, handleDeleteUser, handleViewUser, handleUpdateUser } from 'services/user.service';

const getHomePage = async (req: Request, res: Response) => {
    // get user from database
    const users = await getAllUsers();
    // console.log(">>> check user: ", users);
    res.render("home.ejs", {
        users: users
    });
};

const getCreateUserPage = (req: Request, res: Response) => {
    res.render("create_user.ejs");
};

const postCreateUser = async (req: Request, res: Response) => {
    const { fullName, email, address } = req.body;
    console.log(">>> check req body: ", req.body);
    // handle create user
    await handleCreateUser(fullName, email, address);
    res.redirect("/");
};



const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    // delete user
    await handleDeleteUser(id as string);
    res.redirect("/");
};

const getViewUserPage = async (req: Request, res: Response) => {
    const { id } = req.params;
    // get user by ID
    const user = await handleViewUser(id as string);
    // Implementation for viewing a specific user
    return res.render("view_user.ejs", {
        id: id,
        user: user
    });
};

const postUpdateUser = async (req: Request, res: Response) => {
    const { id, email, address, fullName } = req.body;
    // update user by ID
    const user = await handleUpdateUser(id as string, fullName, email, address);
    // Implementation for updating a user
    res.redirect("/");
}

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUserPage, postUpdateUser };