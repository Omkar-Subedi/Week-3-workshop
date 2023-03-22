function primeinrange (n1, n2){
    for (let i = n1; i<= n2; i++){
        if (isprime(i)){
            return true;
    }
    }
    return false;
}
function isprime(num){
    if (num <=1) {
        return false;
    }
    for (let i = 2; i<= Math.sqrt(num); i++){
        if (num % i == 0){
            return false;
    }
    }
    return true;
}
console.log(primeinrange(62, 66));