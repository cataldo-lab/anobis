
//Proyecto año Bisiesto

console.log("Lista de años bisciestos..!\n")


for(let i=2000;i<=3000;i++){
    if(i%4==0 && !(i%100==0)){
        console.log(i+" Es año bisiesto !")
    }else if(i%400==0){
        console.log(i+" Es año bisiesto !")
    }
}