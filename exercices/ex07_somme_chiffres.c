/* Exercice 7 : somme des chiffres d'un entier long strictement positif
   (sans boucle for). Exemple : 2376 -> 2+3+7+6 = 18 */
#include <stdio.h>

int main(void)
{
    long nombre;
    int somme = 0;

    do
    {
        printf("Encodez un entier strictement positif : ");
        scanf("%ld", &nombre);
    } while (nombre <= 0);

    while (nombre > 0)
    {
        somme = somme + nombre % 10;   /* dernier chiffre */
        nombre = nombre / 10;          /* on retire le dernier chiffre */
    }

    printf("Somme des chiffres = %d\n", somme);

    return 0;
}
