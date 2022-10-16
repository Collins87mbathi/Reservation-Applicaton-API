const Reservation = require("../models/Reservation");
const ApiError = require("../ErrorHandler/error");

class ReservationMethods {
  CreateReservation = async (req,res,next) => {
  const {firstname,lastname,date,time,people,mobileNo} = req.body;
  if(!firstname || !lastname || !date || !time || !people || !mobileNo) {
   return next(ApiError.BadRequest("please input values"));
  }
  const Postreservation = await new Reservation({
   firstname,
   lastname,
   date,
   time,
   people,
   mobileNo
  })
  const reservation = await Postreservation.save();
  res.status(200).json(reservation);
  }

  GetReservations = async (req,res,next) => {
    try {
        const reservation = await Reservation.find();
        res.status(200).json(reservation);
    } catch (error) {
     next(ApiError.InternalServerError(error));   
    }
    
  }

  GetReservation = async (req,res,next) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if(!reservation) return next(ApiError.InternalServerError("not found"))
    } catch (error) {
       next(ApiError.InternalServerError(error)); 
    }
  }

  DeleteReservations = async (req,res,next) => {
    try {
      await Reservation.findByIdAndDelete(req.params.id);
      res.status(200).json("reservation has been deleted successfully");

    } catch (error) {
      next(ApiError.InternalServerError(error));  
    }
  }

  UpdateReservation = async (req,res,next) => {
    try {
      await Reservation.findByIdAndUpdate(req.params.id);
      res.status(200).json("reservation has been updated successfully");  
    } catch (error) {
        next(ApiError.InternalServerError(error));
    }
  }

}

module.exports = new ReservationMethods();