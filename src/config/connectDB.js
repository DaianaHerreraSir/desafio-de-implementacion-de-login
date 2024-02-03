import mongoose from "mongoose"

export const connectDB= async () => {

        try {
    
            await mongoose.connect(
                "mongodb+srv://dherrerasir:mongodb2024@cluster0.2cm3474.mongodb.net/ecommerce?retryWrites=true&w=majority")
    
            console.log('Base de datos conectada')        
    
        } catch (error) {
    
            console.log(error)
    
        }
    
    }

