// Exercice 9 : vérifier si un entier positif est premier
import java.util.Scanner;

public class Ex09NombrePremier {
    public static void main(String[] args) {
        Scanner clavier = new Scanner(System.in);
        int n;

        do {
            System.out.print("Encodez un entier positif : ");
            n = clavier.nextInt();
        } while (n < 0);

        boolean estPremier;
        if (n < 2) {
            estPremier = false;   // 0 et 1 ne sont pas premiers
        } else {
            estPremier = true;
            int diviseur = 2;
            while (diviseur * diviseur <= n && estPremier) {
                if (n % diviseur == 0) {
                    estPremier = false;
                }
                diviseur++;
            }
        }

        if (estPremier) {
            System.out.println(n + " est un nombre premier.");
        } else {
            System.out.println(n + " n'est pas un nombre premier.");
        }
    }
}
