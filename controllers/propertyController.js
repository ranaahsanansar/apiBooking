import PropertyModel from "../models/Property.js";

class PropertyController {
  static listNewProperty = async (req, res) => {
    const {
      id,
      title,
      description,
      priceCoin,
      priceDes,
      propertyType,
      locationHead,
      locationDetails,
      city,
    } = req.body;
    if (
      (title && description && priceCoin,
      priceDes,
      propertyType,
      locationHead,
      locationDetails,
      city)
    ) {
      try {
        const doc = new PropertyModel({
          propertyId: id,
          ownerId: req.user._id,
          title: title,
          description: description,
          price: priceCoin,
          priceDes: priceDes,
          propertyType: propertyType,
          location: {
            head: locationHead,
            details: locationDetails,
          },
          city: city,
        });

        await doc.save();

        res.status(201).send({
          status: "success",
          message: "Property Listed for sale",
        });
      } catch (err) {
        res.status(201).send({
          status: "failed",
          message: "DB Error",
        });
      }
    } else {
      res.send({
        status: "failed",
        message: "All feidls are required",
      });
    }
  };

  static getPropertyDetails = async (req, res) => {
    const { id } = req.params;
    try {
      const property = await PropertyModel.findById(id).populate({path:'ownerId',select:'-password'})
      if (property) {
        res.send(property);
      } else {
        res.send("Not Found");
      }
    } catch (err) {
      res.send("DB Error"+ err);
    }
  };

  static deleteProperty = async (req, res)=>{
    const { id } = req.params;
    try {
      const property = await PropertyModel.findByIdAndDelete(id)
      console.log(property)
      if (property) {
        res.send(property);
      } else {
        res.send("Not Found");
      }
    } catch (err) {
      res.send("DB Error");
    }
  }
}

export default PropertyController;
