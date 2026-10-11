/* Exercice 6 : afficher la série 1, -2, 4, -8, 16, -32 ...
   exactement nbr valeurs, avec 0 < nbr < 15 */
#include <stdio.h>

int main(void)
{
    int nbr, i;
    int valeur = 1;

    do
    {
        printf("Combien de valeurs (entre 1 et 14) ? ");
        scanf("%d", &nbr);
    } while (nbr <= 0 || nbr >= 15);

    for (i = 0; i < nbr; i++)
    {
        printf("%d\n", valeur);
        valeur = valeur * -2;   /* on double et on change le signe */
    }

    return 0;
}
