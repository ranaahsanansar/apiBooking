import mongoose from "mongoose";

// Property Schema 
const propertySchema = new mongoose.Schema({
    id: {
        type: Number, default: 0
    },
    title: {
        type: String , required: true , trim: true
    },
    description: {
        type: String , required: true , trim: true
    },
    price: {
        coins: {type: Number , required: true, trim: true},
        des: {type: String, required: true, trim: true}
    },
    propertyType: {
        type: String, required: true , trim: true
    },
    location: {
        head: {type: String , required: true , trim : true},
        details: {type: String , required: true , trim : true}
    },
    city: {
        type: String, required: true , trim : true
    },
    photos: {
        type: [String]
    }
    

});

const PropertyModel = mongoose.model('property' , propertySchema)

export default PropertyModel;