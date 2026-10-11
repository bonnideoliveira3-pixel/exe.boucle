// Exercice 4 : encoder des entiers jusqu'à avoir autant de positifs que de négatifs.
// 0 est considéré comme positif.
import java.util.Scanner;

public class Ex04PositifsNegatifs {
    public static void main(String[] args) {
        Scanner clavier = new Scanner(System.in);
        int nbPositifs = 0;
        int nbNegatifs = 0;

        do {
            System.out.print("Encodez un nombre entier : ");
            int nombre = clavier.nextInt();

            if (nombre >= 0) {
                nbPositifs++;
            } else {
                nbNegatifs++;
            }

            System.out.println("  -> " + nbPositifs + " positif(s), " + nbNegatifs + " negatif(s)");
        } while (nbPositifs != nbNegatifs);

        System.out.println("Fin : la serie contient autant de positifs que de negatifs.");
    }
}
