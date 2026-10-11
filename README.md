# Exercices : structure de contrôle « L'itération » (langage C)

| Fichier | Exercice |
|---|---|
| `exercices/ex01_carres.c` | Carrés de 0 à 100 |
| `exercices/ex02_table_multiplication.c` | Table de multiplication choisie |
| `exercices/ex03_valeurs_differentes.c` | Seconde valeur différente de la première |
| `exercices/ex04_positifs_negatifs.c` | Autant de positifs que de négatifs |
| `exercices/ex05_somme_un_sur_trois.c` | Somme 1 élément sur 3 (while / do-while / for) |
| `exercices/ex06_serie_puissances.c` | Série 1, -2, 4, -8… |
| `exercices/ex07_somme_chiffres.c` | Somme des chiffres (sans for) |
| `exercices/ex08_notes_min_max.c` | Note max / min et nombre d'occurrences |
| `exercices/ex09_nombre_premier.c` | Nombre premier |
| `exercices/ex10_factorielle.c` | Factorielle |
| `exercices/ex11_fibonacci.c` | Fibonacci inférieurs à nbre |

## Lancer un exercice dans Visual Studio Code

1. Installer un compilateur C (Windows : MinGW / MSYS2 ; Mac : `xcode-select --install` ; Linux : `gcc`).
2. Dans VS Code, installer l'extension **C/C++** (Microsoft) — ou **Code Runner** pour un bouton ▶.
3. Ouvrir le dossier, puis dans le terminal (`Ctrl+ù` ou *Terminal > Nouveau terminal*) :

```bash
cd exercices
gcc ex01_carres.c -o ex01
./ex01          # sous Windows : ex01.exe
```

> Avec Code Runner, activer *Run In Terminal* dans les paramètres pour pouvoir taper au clavier (`scanf`).
