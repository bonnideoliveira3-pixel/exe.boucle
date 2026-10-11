// Exercice 5 : somme d'un élément sur trois de 2 (compris) à 100 (non compris)
// c'est-à-dire 2 + 5 + 8 + ... + 98 = 1650
// Trois solutions : (a) while, (b) do...while, (c) for
public class Ex05SommeUnSurTrois {
    public static void main(String[] args) {
        int i, somme;

        // (a) TantQue -> while
        somme = 0;
        i = 2;
        while (i < 100) {
            somme = somme + i;
            i = i + 3;
        }
        System.out.println("(a) while    : somme = " + somme);

        // (b) Faire TantQue -> do ... while
        somme = 0;
        i = 2;
        do {
            somme = somme + i;
            i = i + 3;
        } while (i < 100);
        System.out.println("(b) do-while : somme = " + somme);

        // (c) Pour -> for
        somme = 0;
        for (i = 2; i < 100; i = i + 3) {
            somme = somme + i;
        }
        System.out.println("(c) for      : somme = " + somme);
    }
}
