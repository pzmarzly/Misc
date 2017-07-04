#include <stdio.h>

#define uint64 unsigned long long int

#define TTI(d) *((uint64*)(&d))

void print_binary(uint64 number)
{
    if (number) {
        print_binary(number >> 1);
        putc((number & 1) ? '1' : '0', stdout);
    }
}

int main() {
    printf("%s %s %s %s\n",
        0.1f == 0.1d ? "TAK" : "NIE",
        0.1f + 0.1f == 0.2f ? "TAK" : "NIE",
        0.2f * 6.0f + 0.3f == 1.5f ? "TAK" : "NIE",
        (long long int)2000 == (short)2000 ? "TAK" : "NIE"
    );
    int a = 4242;
    double d1 = 0.1d;
    double d2 = 0.1f;
    float f1 = 0.1f;
    print_binary(TTI(d1));
    printf(" ");
    print_binary(TTI(d2));
    printf(" ");
    print_binary(TTI(f1));

    return 0;
}