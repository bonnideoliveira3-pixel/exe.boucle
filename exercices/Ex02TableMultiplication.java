// Exercice 2 : afficher une table de multiplication choisie par l'utilisateur
import java.util.Scanner;

public class Ex02TableMultiplication {
    public static void main(String[] args) {
        Scanner clavier = new Scanner(System.in);

        System.out.print("Table de multiplication choisie : ");
        int table = clavier.nextInt();

        for (int i = 1; i <= 10; i++) {
            System.out.println(i + " X " + table + " = " + (i * table));
        }
    }
}
