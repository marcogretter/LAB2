#include <stdio.h>
#include <string.h>
#define N 10
int main() {
    char v1[N],v2[N];
    int i=0,j=0,lun1,lun2,compatibile=1;
    do {
        printf("Digita stringa 1:\n");
        scanf("%s",v1);
        lun1=strlen(v1);
        
        printf("Digita stringa 2:\n");
        scanf("%s",v2);
        lun2=strlen(v2);
    }
    while (lun1!=lun2);
    
    if(v1[i]==v2[j]) {
        for(i=0;i<lun1;i=i+2) {
            if(v1[i]==v2[i])
                compatibile=1;
            else
                compatibile=0;
        }
        if(compatibile==1)
            printf("Le due stringhe sono direttamente compatibili.\n");
        else
            printf("Le due stringhe NON sono direttamente compatibili.\n");
    }
    else {
        for(i=1;i<lun1;i=i+2) {
            if(v1[i]==v2[i])
                compatibile=1;
            else
                compatibile=0;
        }
        if(compatibile==1)
            printf("Le due stringhe sono inversamente compatibili.\n");
        else
            printf("Le due stringhe NON sono inversamente compatibili.\n");
    }
    return 0;
}
