function bibary(decimal){
    if (decimal === 0){
        return "0";
    }
    let binarystr = "";
    while (decimal > 0){
        binarystr += decimal % 2;
        decimal = Math.floor(decimal / 2);
    }
    return binarystr.split("").reverse().join("");
}
console.log(binary(1));