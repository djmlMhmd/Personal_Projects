#include <stdio.h>

void plateauJeu(int M[][3])
{
    int i, j;
    printf("\n                ----------\n");
    for (i = 0; i < 3; i++)

    {
        printf("               ");
        for (j = 0; j < 3; j++)
        {
            printf("%-1s%s%1s", " ", "|", " ");
            // printf("|");
            if (M[i][j] == 0)
                printf("");
            if (M[i][j] == 1)
                printf("X");
            if (M[i][j] == 2)
                printf("O");
        }
        printf("%-1s%s", " ", "|\n                ----------\n");
        // printf("|\n                 -----\n");
    }
}

int gagnant(int M[][3])
{

    int i;
    for (i = 0; i < 3; i++)
    {
        if (M[i][0] == M[i][1] && M[i][0] == M[i][2] && M[i][0] != 0)
            return 1;
    }
    for (i = 0; i < 3; i++)
    {
        if (M[0][i] == M[1][i] && M[0][i] == M[2][i] && M[0][i] != 0)
            return 1;
    }
    if (M[0][0] == M[1][1] && M[0][0] == M[2][2] && M[0][0] != 0)
        return 1;
    if (M[0][2] == M[1][1] && M[0][2] == M[2][0] && M[2][0] != 0)
        return 1;

    return 0;
}

int main()
{
    int M[3][3] = {{0, 0, 0},
                   {0, 0, 0},
                   {0, 0, 0}};
    int test = 1, i, l, c, choix;
    plateauJeu(M);
    while (test <= 9)
    {
        for (i = 1; i <= 2; i++)
        {
            printf("Joueur numero %d : \n", i);
            do
            {
                do
                {
                    printf("Donner numero de la ligne soit 1,2 ou 3 : ");
                    scanf("%d", &l);
                } while (l != 1 && l != 2 && l != 3);
                do
                {
                    printf("Donner numero de la colonne soit 1,2 ou 3 : ");
                    scanf("%d", &c);
                } while (c != 1 && c != 2 && c != 3);

                if (M[l - 1][c - 1] == 0)
                {
                    M[l - 1][c - 1] = i;
                    test++;
                    choix = 1;
                }
                else
                {
                    printf("Autre choix svp \n");
                    choix = 0;
                }
            } while (choix == 0);
            plateauJeu(M);
            if (gagnant(M) == 1)
            {
                printf("Joueur %d a gagne \n", i);
                return 0;
            }
        }

        // return 0;
    }
}