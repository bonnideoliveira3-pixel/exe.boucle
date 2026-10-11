/* Exercice 2 : afficher une table de multiplication choisie par l'utilisateur */
#include <stdio.h>

int main(void)
{
    int table, i;

    printf("Table de multiplication choisie : ");
    scanf("%d", &table);

    for (i = 1; i <= 10; i++)
    {
        printf("%d X %d = %d\n", i, table, i * table);
    }

    return 0;
}
