const mongoose = require('mongoose');
require("dotenv").config();

const dbUser = process.env.dbUser;
const dbPassword = process.env.dbPassword;

const connectDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.ubqnv2f.mongodb.net/test`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conectado!')
    }catch(err){       
        console.log(err)
    }    
}

module.exports = connectDatabase;


