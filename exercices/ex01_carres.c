/* Exercice 1 : afficher les carrés de tous les nombres de 0 à 100 */
#include <stdio.h>

int main(void)
{
    int i;

    for (i = 0; i <= 100; i++)
    {
        printf("%d au carre = %d\n", i, i * i);
    }

    return 0;
}
