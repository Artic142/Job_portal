import mongoose from "mongoose";

// //function to connect mongodb database
const connectDB =async ()=>{
    mongoose.connection.on('connected',()=>console.log('Database connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
}

export default connectDB


// import mongoose from "mongoose";

// const connectDB = (async () => {

//     try {
//         await mongoose.connect('mongodb://localhost:27017/')
//         console.log(mongoose.connection.readyState);
//         console.log("DB Connected !!")

//     }
//     catch (err) {

//         console.log(mongoose.connection.readyState)
//         console.log("DB Connection faild !!")

//     }

// })

// export default connectDB;