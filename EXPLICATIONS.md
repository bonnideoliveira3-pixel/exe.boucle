# Explications pour débutant (jamais codé)

## 1. C'est quoi un programme ?

Un programme est une **liste d'instructions** que l'ordinateur exécute **une par une, de haut en bas**, comme une recette de cuisine.
L'ordinateur ne devine rien : il fait exactement ce qu'on écrit.

On écrit le programme dans un fichier `.c` (du texte), puis on le **compile** avec `gcc` :
la compilation traduit le texte en un fichier que l'ordinateur sait exécuter.

```bash
gcc ex01_carres.c -o ex01     # traduire  (compiler)
./ex01                        # lancer     (sous Windows : ex01.exe)
```

## 2. Le squelette de tous les programmes

```c
#include <stdio.h>      // "boîte à outils" pour afficher (printf) et lire le clavier (scanf)

int main(void)          // le programme commence ici
{                       // début du programme
    ...instructions...
    return 0;           // "tout s'est bien passé"
}                       // fin du programme
```

- Chaque instruction se termine par un **point-virgule `;`** (comme un point à la fin d'une phrase).
- Les accolades `{ }` regroupent des instructions (comme des parenthèses).
- Ce qui est entre `/* ... */` ou après `//` est un **commentaire** : l'ordinateur l'ignore, c'est pour les humains.

## 3. Les variables = des boîtes

Une **variable** est une boîte avec un nom, dans laquelle on range une valeur.

```c
int age;        // je crée une boîte appelée "age" qui contient un nombre entier (int)
age = 18;       // je mets 18 dans la boîte
age = age + 1;  // je prends ce qu'il y a dans la boîte, j'ajoute 1, et je remets dedans -> 19
```

⚠️ Le `=` ne veut pas dire « égal » comme en math, il veut dire **« ranger dans »**.
Pour **comparer**, on écrit `==` (deux signes égal).

Types utilisés :
| Type | Contient | Exemple |
|---|---|---|
| `int` | nombre entier | `42`, `-7` |
| `long` | entier plus grand | `2376000000` |
| `long long` | entier encore plus grand | `20!` |

## 4. Afficher et lire

```c
printf("Bonjour\n");           // affiche Bonjour  (\n = retour à la ligne)
printf("Age : %d\n", age);     // %d est remplacé par la valeur de age -> "Age : 19"

scanf("%d", &age);             // attend que l'utilisateur tape un nombre et le range dans age
```
Le `&` devant la variable dans `scanf` est obligatoire (il indique *où* ranger le nombre). Retiens-le simplement par cœur.

## 5. Les conditions : `if` / `else` (« si… sinon… »)

```c
if (age >= 18)
    printf("Majeur\n");
else
    printf("Mineur\n");
```

Comparaisons : `==` égal, `!=` différent, `<` `>` `<=` `>=`.
Combiner : `&&` = ET, `||` = OU.

## 6. Les boucles = répéter (le sujet des exercices !)

Une **boucle** répète des instructions plusieurs fois, au lieu de les recopier.

### `while` — « TantQue »
```c
while (condition)
{
    ...répété TANT QUE la condition est vraie...
}
```
On vérifie la condition **avant** chaque tour. Si elle est fausse dès le départ, on ne fait aucun tour.

### `do ... while` — « Faire … TantQue »
```c
do
{
    ...
} while (condition);
```
On fait le tour **d'abord**, on vérifie **après**. Donc au moins **un** tour est toujours fait.
Parfait pour « demander une valeur jusqu'à ce qu'elle soit correcte ».

### `for` — « Pour »
```c
for (i = 1; i <= 10; i++)
{
    ...
}
```
Se lit : « **pour** i qui commence à 1, **tant que** i ≤ 10, en **ajoutant 1** à i après chaque tour ».
`i++` veut dire `i = i + 1`. On l'utilise quand on **sait à l'avance** combien de tours faire.

⚠️ Piège : si la condition ne devient jamais fausse, la boucle tourne **à l'infini**. (Pour arrêter un programme bloqué : `Ctrl + C` dans le terminal.)

## 7. Deux opérateurs utiles

- `/` entre deux entiers = division **sans virgule** : `17 / 5` donne `3`
- `%` (modulo) = le **reste** de la division : `17 % 5` donne `2`
  - `n % 2 == 0` → n est pair
  - `n % 10` → le dernier chiffre de n (`2376 % 10` = `6`)

---

# Les exercices expliqués

### Exercice 1 — Carrés de 0 à 100
On sait combien de tours faire (101) → boucle `for`. `i` vaut 0, puis 1, 2… 100. À chaque tour on affiche `i * i` (`*` = multiplier).

### Exercice 2 — Table de multiplication
1. On demande la table (`scanf`) et on la range dans `table`.
2. Une boucle `for` avec `i` de 1 à 10 affiche `i X table = i*table`.

### Exercice 3 — Deux valeurs différentes
On lit les deux valeurs. Puis : **tant que** la 2ᵉ est égale à la 1ʳᵉ (`valeur2 == valeur1`), on affiche le message d'erreur et on redemande. Quand elles sont différentes, la boucle s'arrête et on affiche « Merci ».

### Exercice 4 — Autant de positifs que de négatifs
Deux compteurs (boîtes qui commencent à 0) : `nbPositifs` et `nbNegatifs`.
À chaque nombre tapé : si ≥ 0 on ajoute 1 au compteur des positifs, sinon à celui des négatifs.
On utilise `do…while` car il faut lire **au moins un** nombre avant de pouvoir comparer. On s'arrête quand les deux compteurs sont égaux.

### Exercice 5 — Somme d'un nombre sur trois
Nombres pris : 2, 5, 8, 11, … 98 (on saute de 3 en 3, on s'arrête avant 100).
Une boîte `somme` commence à 0 et à chaque tour on fait `somme = somme + i` puis `i = i + 3`.
Le même travail est écrit 3 fois (`while`, `do…while`, `for`) pour montrer les trois boucles. Résultat : **1650**.

### Exercice 6 — Série 1, -2, 4, -8, 16…
Chaque nombre = le précédent **× -2** (on double et on change le signe).
1. On demande `nbr` avec un `do…while` : on redemande tant que `nbr <= 0` OU `nbr >= 15`.
2. Une boucle `for` fait `nbr` tours : on affiche `valeur`, puis `valeur = valeur * -2`.

### Exercice 7 — Somme des chiffres (2376 → 18)
L'astuce avec `%` et `/` :
| tour | nombre | `nombre % 10` (chiffre) | somme | `nombre / 10` |
|---|---|---|---|---|
| 1 | 2376 | 6 | 6 | 237 |
| 2 | 237 | 7 | 13 | 23 |
| 3 | 23 | 3 | 16 | 2 |
| 4 | 2 | 2 | 18 | 0 → stop |

Boucle `while (nombre > 0)` (pas de `for`, comme demandé).

### Exercice 8 — Note max et min
- `max` commence à -1 (plus petit que toute note) et `min` à 21 (plus grand que toute note), pour que la première note les remplace forcément.
- Pour chaque note : si elle est **plus grande** que `max` → nouveau max, compteur remis à 1 ; si elle est **égale** → compteur + 1. Pareil pour `min`.
- La boucle `while (note >= 0)` s'arrête dès qu'on tape une note négative.

### Exercice 9 — Nombre premier
Un nombre est premier s'il n'a aucun diviseur à part 1 et lui-même.
On essaie de le diviser par 2, 3, 4… : si un reste vaut 0 (`n % diviseur == 0`), il n'est **pas** premier.
La boîte `estPremier` vaut 1 (oui) au départ et passe à 0 (non) si on trouve un diviseur.
(Astuce : inutile de tester au-delà de √n, d'où `diviseur * diviseur <= n`.) 0 et 1 ne sont pas premiers.

### Exercice 10 — Factorielle
5! = 5 × 4 × 3 × 2 × 1 = 120. Une boîte `fact` commence à 1, et une boucle `for` la multiplie par 2, 3, … n.
Si n vaut 0, la boucle ne fait aucun tour et `fact` reste 1 → 0! = 1. ✔
Limite à 20 car au-delà le nombre est trop grand pour la boîte.

### Exercice 11 — Fibonacci
Chaque nombre = la somme des deux précédents : 0, 1, 1, 2, 3, 5, 8, 13…
On garde les deux derniers nombres dans `f0` et `f1`. À chaque tour :
1. on affiche `f0`,
2. on calcule `suivant = f0 + f1`,
3. on décale : `f0` prend la valeur de `f1`, `f1` prend la valeur de `suivant`.

On continue **tant que** `f0 < nbre`.

---

## Conseil pour apprendre
Ne lis pas seulement : **recopie** un programme toi-même, lance-le, puis **change un petit truc** (un nombre, un message) et regarde ce qui se passe. Les erreurs de `gcc` indiquent le numéro de ligne : souvent c'est juste un `;` oublié.
