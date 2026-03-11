package console;

import model.CustomerManager;
import model.PerformanceManager;
import model.ReservationManager;

import java.util.Scanner;

/**
 * Κύρια κλάση της εφαρμογής για τη διαχείριση καλλιτεχνικών δρώμενων.
 * Περιλαμβάνει το κύριο μενού και διαχειρίζεται την εκκίνηση της εφαρμογής
 * και τη φόρτωση και αποθήκευση των δεδομένων.
 *
 */
public class MainP {

    /**
     * Η κύρια μέθοδος εκκίνησης της εφαρμογής.
     * Δημιουργεί τους διαχειριστές για πελάτες, παραστάσεις και κρατήσεις,
     * φορτώνει τα δεδομένα και εμφανίζει το κύριο μενού επιλογών.
     *
     * @param args Δεν χρησιμοποιείται.
     */

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Αρχικοποίηση των managers
        CustomerManager customerManager = new CustomerManager();
        PerformanceManager performanceManager = new PerformanceManager();
        ReservationManager reservationManager = new ReservationManager();

        //Φόρτωση δεδομένων
        customerManager.loadCustomers();
        performanceManager.loadMusicalPerformances();
        performanceManager.loadTheatricalPerformances();

        int choice;
        do {
            System.out.println("\n===ΚΥΡΙΟ ΜΕΝΟΥ===");
            System.out.println("1. Διαχείριση Πελατών");
            System.out.println("2. Διαχείριση Παραστάσεων");
            System.out.println("3. Κρατήσεις Εισιτηρίων");
            System.out.println("0. Έξοδος");
            System.out.print("Παρακαλώ επιλέξτε μια ενέργεια ");
            choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    customerManager.customerMenu();
                    break;
                case 2:
                    performanceManager.performanceMenu();
                    break;
                case 3:
                    reservationManager.reservationMenu();
                    break;
                case 0:
                    System.out.println("Έξοδος από την εφαρμογή.");
                    // Αποθήκευση δεδομένων πριν το κλείσιμο
                    customerManager.saveData();
                    performanceManager.saveData();
                    break;
                default:
                    System.out.println("Μη έγκυρη επιλογή.");
            }

        } while (choice != 0);


    }

}