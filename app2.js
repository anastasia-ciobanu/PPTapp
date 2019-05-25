const argList = process.argv.slice(2);
    var sum = 0;
    argList.forEach(value => {
        console.log("Valoarea care va fi adaugata este " + value);
        sum += Number(value);
    });
    console.log("Suma este " + sum);
