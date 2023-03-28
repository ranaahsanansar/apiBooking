import PropertyModel from "../models/Property"



class PropertyController {
    static listNewProperty = async (req, res) => {
        const {id , title , description, priceCoin , priceDes , propertyType , locationHead , locationDetails ,  city} = req.body;
        if ( title && description && priceCoin , priceDes , propertyType , locationHead , locationDetails , city ){
            console.log("Ok ha Sab ");
        }
    }
}