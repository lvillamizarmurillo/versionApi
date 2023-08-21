import dotenv from "dotenv";
import { MongoClient } from 'mongodb';
dotenv.config("../");
export async function connection(){
    try {
        const uri = `mongodb+srv://${process.env.MY_NAME}:${process.env.MY_PASSWORD}@cluster0.1wthqi6.mongodb.net/${process.env.MY_DB}`
        const option = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        const client = await MongoClient.connect(uri, option);
        return client.db();
    } catch (error) {
        return {status: 500, message: error};
    }
}