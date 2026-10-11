// Exercice 6 : afficher la série 1, -2, 4, -8, 16, -32 ...
// exactement nbr valeurs, avec 0 < nbr < 15
import java.util.Scanner;

public class Ex06SeriePuissances {
    public static void main(String[] args) {
        Scanner clavier = new Scanner(System.in);
        int nbr;

        do {
            System.out.print("Combien de valeurs (entre 1 et 14) ? ");
            nbr = clavier.nextInt();
        } while (nbr <= 0 || nbr >= 15);

        int valeur = 1;
        for (int i = 0; i < nbr; i++) {
            System.out.println(valeur);
            valeur = valeur * -2;   // on double et on change le signe
        }
    }
}
