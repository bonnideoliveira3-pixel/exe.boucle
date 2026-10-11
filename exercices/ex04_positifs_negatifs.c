/* Exercice 4 : encoder des entiers jusqu'à avoir autant de positifs que de négatifs.
   0 est considéré comme positif. */
#include <stdio.h>

int main(void)
{
    int nombre;
    int nbPositifs = 0;
    int nbNegatifs = 0;

    do
    {
        printf("Encodez un nombre entier : ");
        scanf("%d", &nombre);

        if (nombre >= 0)
            nbPositifs++;
        else
            nbNegatifs++;

        printf("  -> %d positif(s), %d negatif(s)\n", nbPositifs, nbNegatifs);
    } while (nbPositifs != nbNegatifs);

    printf("Fin : la serie contient autant de positifs que de negatifs.\n");

    return 0;
}
