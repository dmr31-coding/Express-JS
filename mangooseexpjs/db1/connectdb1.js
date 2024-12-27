import mongoose from 'mangoose'

// const connectDB = (DATABASE_URL) => {
//     return mangoose.connect(DATABASE_URL)
//     .then(() => {
//         console.log("connected successfully...")
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

const connectDB = async(DATABASE_URL) => {
    try {
        await mangoose.connect(DATABASE_URL)
        console.log("connected successfully..")
    } catch (err) {
        console.log(err)
    }
    
}



export default connectDB