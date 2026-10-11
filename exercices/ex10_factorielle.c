/* Exercice 10 : factorielle n! = n x (n-1) x ... x 2 x 1, avec 0! = 1 */
#include <stdio.h>

int main(void)
{
    int n, i;
    long long fact = 1;

    do
    {
        printf("Encodez un entier positif ou nul (max 20) : ");
        scanf("%d", &n);
    } while (n < 0 || n > 20);   /* au-dela de 20, le resultat deborde */

    for (i = 2; i <= n; i++)
    {
        fact = fact * i;
    }

    printf("%d! = %lld\n", n, fact);

    return 0;
}
