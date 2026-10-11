/* Exercice 9 : vérifier si un entier positif est premier */
#include <stdio.h>

int main(void)
{
    int n, diviseur;
    int estPremier;

    do
    {
        printf("Encodez un entier positif : ");
        scanf("%d", &n);
    } while (n < 0);

    if (n < 2)
    {
        estPremier = 0;   /* 0 et 1 ne sont pas premiers */
    }
    else
    {
        estPremier = 1;
        diviseur = 2;
        while (diviseur * diviseur <= n && estPremier)
        {
            if (n % diviseur == 0)
                estPremier = 0;
            diviseur++;
        }
    }

    if (estPremier)
        printf("%d est un nombre premier.\n", n);
    else
        printf("%d n'est pas un nombre premier.\n", n);

    return 0;
}
