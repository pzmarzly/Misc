#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int main(){
    int h, m, s;
    char c;
    scanf("%d:%d:%d%cM",&h,&m,&s,&c);
    if (h==12&&c=='A') printf("00:%d:%d",m,s);
    else if (h==12&&c=='P') printf("12:%d:%d",m,s);
    else if (c=='A') printf("%d:%d:%d",h,m,s);
    else printf("%d:%d:%d",h+12,m,s);
    return 0;
}
