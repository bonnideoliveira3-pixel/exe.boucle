// Exercice 8 : encoder des notes entre 0 et 20 (une note négative termine).
// Afficher la plus grande et la plus petite note, et combien de fois chacune.
import java.util.Scanner;

public class Ex08NotesMinMax {
    public static void main(String[] args) {
        Scanner clavier = new Scanner(System.in);
        int max = -1, min = 21;
        int nbMax = 0, nbMin = 0;

        System.out.print("Encodez une note (negative pour terminer) : ");
        int note = clavier.nextInt();

        while (note >= 0) {
            if (note > 20) {
                System.out.println("Note invalide (0 a 20) !");
            } else {
                if (note > max) {
                    max = note;
                    nbMax = 1;
                } else if (note == max) {
                    nbMax++;
                }

                if (note < min) {
                    min = note;
                    nbMin = 1;
                } else if (note == min) {
                    nbMin++;
                }
            }

            System.out.print("Encodez une note (negative pour terminer) : ");
            note = clavier.nextInt();
        }

        if (nbMax == 0) {
            System.out.println("Aucune note encodee.");
        } else {
            System.out.println("Note la plus grande : " + max + " (accordee " + nbMax + " fois)");
            System.out.println("Note la plus petite : " + min + " (accordee " + nbMin + " fois)");
        }
    }
}
