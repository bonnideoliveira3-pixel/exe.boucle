// Exercice 10 : factorielle n! = n x (n-1) x ... x 2 x 1, avec 0! = 1
import java.util.Scanner;

public class Ex10Factorielle {
    public static void main(String[] args) {
        Scanner clavier = new Scanner(System.in);
        int n;

        do {
            System.out.print("Encodez un entier positif ou nul (max 20) : ");
            n = clavier.nextInt();
        } while (n < 0 || n > 20);   // au-dela de 20, le resultat deborde d'un long

        long fact = 1;
        for (int i = 2; i <= n; i++) {
            fact = fact * i;
        }

        System.out.println(n + "! = " + fact);
    }
}
