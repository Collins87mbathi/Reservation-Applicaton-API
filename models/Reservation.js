const mongoose = require("mongoose");


const ReservationSchema = new mongoose.Schema({
  firstname: {
    type: String,
    
  },
  lastname: {
    type: String,
   
  },
  date: {
    type: Date,
   
  },
  time: {
   type: String,
  },
  people: {
   type: Number,
   
  },
  mobileNo: {
    type:String,
   
  }
},
{timestamps: true}
);

module.exports = mongoose.model('Reservation', ReservationSchema);