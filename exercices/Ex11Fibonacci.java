// Exercice 11 : afficher les nombres de Fibonacci inférieurs à nbre
// f0 = 0, f1 = 1, fn = fn-1 + fn-2
import java.util.Scanner;

public class Ex11Fibonacci {
    public static void main(String[] args) {
        Scanner clavier = new Scanner(System.in);

        System.out.print("Encodez une valeur : ");
        long nbre = clavier.nextLong();

        long f0 = 0, f1 = 1;
        while (f0 < nbre) {
            System.out.println(f0);
            long suivant = f0 + f1;
            f0 = f1;
            f1 = suivant;
        }
    }
}
