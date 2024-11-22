import dbConnct from "../config/dbConfig.js";

// Establish a database connection with provided connection string
const connection=await dbConnct(process.env.STRCONNCT);


export async function getAllPost(){

    // Return all documents from 'post' collection in 'imersao' database as array
    return connection.db("imersao").collection("post").find().toArray();
}

export async function  createPost(newPost){

    // Insert a newPost document into 'post' collection in 'imersao' database
    return connection.db("imersao").collection("post").insertOne(newPost);
}