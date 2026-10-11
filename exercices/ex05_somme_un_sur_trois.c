/* Exercice 5 : somme d'un élément sur trois de 2 (compris) à 100 (non compris)
   c'est-à-dire 2 + 5 + 8 + ... + 98 = 1650
   Trois solutions : (a) while, (b) do...while, (c) for */
#include <stdio.h>

int main(void)
{
    int i, somme;

    /* (a) TantQue -> while */
    somme = 0;
    i = 2;
    while (i < 100)
    {
        somme = somme + i;
        i = i + 3;
    }
    printf("(a) while    : somme = %d\n", somme);

    /* (b) Faire TantQue -> do ... while */
    somme = 0;
    i = 2;
    do
    {
        somme = somme + i;
        i = i + 3;
    } while (i < 100);
    printf("(b) do-while : somme = %d\n", somme);

    /* (c) Pour -> for */
    somme = 0;
    for (i = 2; i < 100; i = i + 3)
    {
        somme = somme + i;
    }
    printf("(c) for      : somme = %d\n", somme);

    return 0;
}
