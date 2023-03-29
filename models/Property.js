import mongoose from "mongoose";

// Property Schema
const propertySchema = new mongoose.Schema({
  propertyId: {
    type: String ,
    default: 0,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  priceDes: { type: String, required: true, trim: true },
  propertyType: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    head: { type: String, required: true, trim: true },
    details: { type: String, required: true, trim: true },
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  photos: {
    type: [String],
  },
});
const PropertyModel = mongoose.model("Property", propertySchema);

export default PropertyModel;
