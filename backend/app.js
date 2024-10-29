import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
export const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://25100208:zainabzainab@ap.fg1jnuv.mongodb.net/")
    .then(() => {
        app.listen(3000, () => {
            console.log(`Listening on port 3000`);
            console.log("Connected to Database");
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });



// app.post('/signup', signup); 
// app.post('/login', login); 
// app.post('/password', password);
// app.post('/createTrade', createTrade);
// app.post('/fetchMyTrades', fetchMyTrades);
// app.get('/fetchActiveTrades', fetchActiveTrades);
// app.post('/submitOffer', submitOffer);
// // app.use('/api/trading_routes', routes);

