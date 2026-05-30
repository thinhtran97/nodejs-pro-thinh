import e from "express";
import { get } from "http";
import getConnection from "config/database";

const handleCreateUser = async (fullName: string, email: string, address: string) => {
    // insert data to database
    const connection = await getConnection();
    try {
        const sql = 'INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)';
        const values = [fullName, email, address];

        const [result, fields] = await connection.execute(sql, values);
        return result;

        console.log(result);
        console.log(fields);
    } catch (err) {
        console.log(err);
        return [];
    }
    // return result
    console.log(">>> check data from controller: ", fullName, email, address);
};

const handleDeleteUser = async (id: string) => {
    // delete user from database
    const connection = await getConnection();
    try {
        const sql = 'DELETE FROM `users` WHERE id = ?';
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);
        return result[0 as keyof typeof result];
    } catch (err) {
        console.log(err);
        return [];
    }
};

const handleViewUser = async (id: string) => {
    // get user by ID from database
    const connection = await getConnection();
    try {
        const sql = 'SELECT * FROM `users` WHERE id = ?';
        const values = [id];
        const [result, fields] = await connection.execute(sql, values);
        return result[0 as keyof typeof result];
    } catch (err) {
        console.log(err);
        return [];
    }
};

const handleUpdateUser = async (id: string, fullName: string, email: string, address: string) => {
    // update user by ID from database
    const connection = await getConnection();
    try {
        const sql = 'UPDATE `users` SET name = ?, email = ?, address = ? WHERE id = ?';
        const values = [fullName, email, address, id];
        const [result, fields] = await connection.execute(sql, values);
        return result;
    } catch (err) {
        console.log(err);
        return [];
    }
};

const getAllUsers = async () => {
    // get all users from database  
    const connection = await getConnection();
    // A simple SELECT query
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `users` '
        );
        return results;

        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
        console.log(err);
        return [];
    }
    return ">>> check get all users from database: []";
}

export { handleCreateUser, getAllUsers, handleDeleteUser, handleViewUser, handleUpdateUser };