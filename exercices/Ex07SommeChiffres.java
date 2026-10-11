// Exercice 7 : somme des chiffres d'un entier long strictement positif
// (sans boucle for). Exemple : 2376 -> 2+3+7+6 = 18
import java.util.Scanner;

public class Ex07SommeChiffres {
    public static void main(String[] args) {
        Scanner clavier = new Scanner(System.in);
        long nombre;

        do {
            System.out.print("Encodez un entier strictement positif : ");
            nombre = clavier.nextLong();
        } while (nombre <= 0);

        long somme = 0;
        while (nombre > 0) {
            somme = somme + nombre % 10;   // dernier chiffre
            nombre = nombre / 10;          // on retire le dernier chiffre
        }

        System.out.println("Somme des chiffres = " + somme);
    }
}
