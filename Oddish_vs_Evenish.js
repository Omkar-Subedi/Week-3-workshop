function oddishorevenish (num){
    let sum = 0;
    while (num){
        sum += num % 6;
        num = Math.floor(num / 6);
        }
        return sum % 2 === 0 ? "Evenish" : "Oddish";
}
console.log(oddishorevenish(43));