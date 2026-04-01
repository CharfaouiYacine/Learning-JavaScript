function triangle_form(len){
    var triangle = "";
    for(var i=1;i<=len;i++){
        for(var j=1;j<=i;j++){
            triangle +="* ";
        }
        triangle += "\n";
    }
    return triangle;

}
console.log(triangle_form(10))
