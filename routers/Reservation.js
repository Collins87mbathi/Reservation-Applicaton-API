const router = require("express").Router();
const ReservationMethods = require("../controllers/Reservation");


router.post('/', ReservationMethods.CreateReservation);
router.get('/:id', ReservationMethods.GetReservation);
router.get('/',ReservationMethods.GetReservations);
router.delete('/:id', ReservationMethods.DeleteReservations);
router.put('/:id', ReservationMethods.UpdateReservation);

module.exports = router;