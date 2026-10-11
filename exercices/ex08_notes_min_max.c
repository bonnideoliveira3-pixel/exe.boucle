/* Exercice 8 : encoder des notes entre 0 et 20 (une note négative termine).
   Afficher la plus grande et la plus petite note, et combien de fois chacune. */
#include <stdio.h>

int main(void)
{
    int note;
    int max = -1, min = 21;
    int nbMax = 0, nbMin = 0;

    printf("Encodez une note (negative pour terminer) : ");
    scanf("%d", &note);

    while (note >= 0)
    {
        if (note > 20)
        {
            printf("Note invalide (0 a 20) !\n");
        }
        else
        {
            if (note > max)
            {
                max = note;
                nbMax = 1;
            }
            else if (note == max)
            {
                nbMax++;
            }

            if (note < min)
            {
                min = note;
                nbMin = 1;
            }
            else if (note == min)
            {
                nbMin++;
            }
        }

        printf("Encodez une note (negative pour terminer) : ");
        scanf("%d", &note);
    }

    if (nbMax == 0)
    {
        printf("Aucune note encodee.\n");
    }
    else
    {
        printf("Note la plus grande : %d (accordee %d fois)\n", max, nbMax);
        printf("Note la plus petite : %d (accordee %d fois)\n", min, nbMin);
    }

    return 0;
}
