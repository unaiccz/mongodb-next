import {connect, connection} from "mongoose";

const conn = {
    connected: false
}

export default async function connectDB() {
    if (conn.connected) return;

    try {
        const db = await connect("mongodb+srv://unaicc:011110@cluster0.0owbazx.mongodb.net/?retryWrites=true&w=majority",)
        conn.connected = db.connection.readyState;
        connection.on('connected', () => {
            console.log('Database connected');
        })
    } catch (error) {
        console.error('Failed to connect to database:', error);
    }
}