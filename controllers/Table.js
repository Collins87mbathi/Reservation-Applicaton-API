const Table = require("../models/Table");
const ApiError = require("../ErrorHandler/error");

class TableMethods {
  CreateTable = async (req,res,next) => {
  const {name,capacity} = req.body;
  if(!name || !capacity) {
   return next(ApiError.BadRequest("please input values"));
  }
  const Postreservation = await new Table({
   name,
   capacity,
  
  })
  const table = await Postreservation.save();
  res.status(200).json(table);
  }

  GetTables = async (req,res,next) => {
    try {
        const table = await Table.find();
        res.status(200).json(table);
    } catch (error) {
     next(ApiError.InternalServerError(error));   
    }
    
  }

  GetTable = async (req,res,next) => {
    try {
        const table = await Table.findById(req.params.id);
        if(!table) return next(ApiError.InternalServerError("not found"));
        res.status(200).json(table);
    } catch (error) {
       next(ApiError.InternalServerError(error)); 
    }
  }

  DeleteTable = async (req,res,next) => {
    try {
      await Table.findByIdAndDelete(req.params.id);
      res.status(200).json("table has been deleted successfully");

    } catch (error) {
      next(ApiError.InternalServerError(error));  
    }
  }

  UpdateTable = async (req,res,next) => {
    try {
      await Table.findByIdAndUpdate(req.params.id);
      res.status(200).json("table has been updated successfully");  
    } catch (error) {
        next(ApiError.InternalServerError(error));
    }
  }

}

module.exports = new TableMethods();