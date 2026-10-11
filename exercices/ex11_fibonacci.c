/* Exercice 11 : afficher les nombres de Fibonacci inférieurs à nbre
   f0 = 0, f1 = 1, fn = fn-1 + fn-2 */
#include <stdio.h>

int main(void)
{
    long nbre;
    long f0 = 0, f1 = 1, suivant;

    printf("Encodez une valeur : ");
    scanf("%ld", &nbre);

    while (f0 < nbre)
    {
        printf("%ld\n", f0);
        suivant = f0 + f1;
        f0 = f1;
        f1 = suivant;
    }

    return 0;
}
