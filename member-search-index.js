package model;

/**
 * Η κλάση Theatrical Performance (θεατρική παράσταση) κληρονομεί
 * τα attributes της υπερκλάσης Performance
 * και προσθέτει το πεδίο του πρωταγωνιστή.
 */
public class TheatricalPerformance extends Performance{
    private String mainCharacter; //πρωταγωνιστής θεατρικής παράστασης

    /**
     * Προεπιλεγμένος κατασκευαστής χωρίς παραμέτρους.
     */
    public TheatricalPerformance() {
        super();
    }

    /**
     * Κατασκευαστής που αρχικοποιεί μια θεατρική παράσταση με τα στοιχεία της.
     *
     * @param id            Κωδικός παράστασης
     * @param title         Τίτλος παράστασης
     * @param venue         Χώρος διεξαγωγής
     * @param date          Ημερομηνία παράστασης
     * @param mainCharacter Ο πρωταγωνιστής της παράστασης
     */
    public TheatricalPerformance(String id, String title, String venue, String date, String mainCharacter) {
        super(id, title, venue, date);
        this.mainCharacter = mainCharacter;
    }

    /**
     * Επιστρέφει το όνομα του πρωταγωνιστή της θεατρικής παράστασης.
     *
     * @return το όνομα του πρωταγωνιστή
     */
    public String getMainCharacter() {
        return mainCharacter;
    }

    /**
     * Ορίζει το όνομα του πρωταγωνιστή της θεατρικής παράστασης.
     *
     * @param mainCharacter το νέο όνομα του πρωταγωνιστή
     */
    public void setMainCharacter(String mainCharacter) {
        this.mainCharacter = mainCharacter;
    }

    /**
     * Επιστρέφει μια περιγραφή της θεατρικής παράστασης σε μορφή συμβολοσειράς.
     *
     * @return περιγραφή της παράστασης
     */
    @Override
    public String toString() {
        return super.toString() + ", Πρωταγωνιστής: " + mainCharacter;
    }

    /**
     * Επιστρέφει τα στοιχεία της παράστασης σε μορφή CSV.
     *
     * @return γραμμή CSV με τα στοιχεία της παράστασης
     */
    public String toCsvLine ()
    {
        String Lin = super.getId() + "," + super.getTitle() + "," + mainCharacter + "," + super.getVenue()
                + "," + super.getDate();
        return Lin;
    }
}
