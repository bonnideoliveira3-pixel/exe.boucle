// Exercice 3 : encoder deux valeurs, la seconde doit être différente de la première
import java.util.Scanner;

public class Ex03ValeursDifferentes {
    public static void main(String[] args) {
        Scanner clavier = new Scanner(System.in);

        System.out.print("Encodez une premiere valeur : ");
        int valeur1 = clavier.nextInt();

        System.out.print("Encodez une seconde valeur : ");
        int valeur2 = clavier.nextInt();

        while (valeur2 == valeur1) {
            System.out.println("La seconde valeur doit etre differente de la premiere!");
            System.out.print("Encodez une seconde valeur : ");
            valeur2 = clavier.nextInt();
        }

        System.out.println("Merci");
    }
}
