/* Exercice 3 : encoder deux valeurs, la seconde doit être différente de la première */
#include <stdio.h>

int main(void)
{
    int valeur1, valeur2;

    printf("Encodez une premiere valeur : ");
    scanf("%d", &valeur1);

    printf("Encodez une seconde valeur : ");
    scanf("%d", &valeur2);

    while (valeur2 == valeur1)
    {
        printf("La seconde valeur doit etre differente de la premiere!\n");
        printf("Encodez une seconde valeur : ");
        scanf("%d", &valeur2);
    }

    printf("Merci\n");

    return 0;
}
