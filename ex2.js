var x = parseInt(prompt("Enter x:"));

function odd_pyramid(x){
    for(var i = 1; i < x + 1; i++){
        for(var j = 1; j < i * 2; j += 2){
            document.write(j + "&nbsp;");
        }
        document.write("<br>");
    }
}
odd_pyramid(x);