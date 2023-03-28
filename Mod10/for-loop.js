let add = 2

for(let a = 1; a < 4109; a){
    if(a<4108){
        document.write(a+ ", ");
    }else{
        document.write(a);
    }
    a = a + add;
    add = add*2-1;
}