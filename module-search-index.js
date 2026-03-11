package model;
/**
 * Η κλάση TheatricalReservation αναπαριστά μια κράτηση
 * για θεατρική παράσταση και κληρονομεί από την υπερκλάση Reservation.
 */
public class TheatricalReservation extends Reservation{

    /**
     * Προεπιλεγμένος κατασκευαστής χωρίς παραμέτρους.
     */
    public TheatricalReservation() {
        super();
    }

    /**
     * Κατασκευαστής της κλάσης TheatricalReservation
     * όπου καλεί τον κατασκευαστή της υπερκλάσης Reservation
     * @param reservationId μοναδικός αριθμός κράτησης
     * @param customerId    κωδικός πελάτη
     * @param performanceId κωδικός παράστασης
     * @param seats         αριθμός θέσεων
     */
    public TheatricalReservation(String reservationId, String customerId, String performanceId, int seats) {
        super(reservationId, customerId, performanceId, seats);
    }

    /**
     * Επιστρέφει περιγραφή της κράτησης συμπεριλαμβάνοντας τον τύπο παράστασης.
     *
     * @return συμβολοσειρά με τα στοιχεία της κράτησης και τον τύπο παράστασης "Θεατρική"
     */
    @Override
    public String toString() {
        return super.toString() + " | Τύπος παράστασης: Θεατρική";
    }

}
