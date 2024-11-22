import { MongoClient } from 'mongodb';

export default async function dbConnct(strConnct) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(strConnct);
        console.log("Connecting to MongoDB...");
        await mongoClient.connect();
        console.log("Connected");

        return mongoClient;
    } catch (error) {
        console.error("Connection to MongoDB failed!", error);
        process.exit();
    }
}