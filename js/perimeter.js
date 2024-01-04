let resultPerimeter = document.getElementById('perimeter');

function callPerimeter() {
    let a = parseFloat(document.getElementById('a').value);
    a = parseFloat(a.toFixed(floatAccuration));
    let b = parseFloat(document.getElementById('b').value);
    b = parseFloat(b.toFixed(floatAccuration));
    let c = parseFloat(document.getElementById('c').value);
    c = parseFloat(c.toFixed(floatAccuration));
    let P = parseFloat(document.getElementById('P').value);
    P = parseFloat(P.toFixed(floatAccuration));

    resultPerimeter.innerHTML = "";

    if (a <= 0 || b <= 0 || c <= 0 || P<=0 
        || a > maxValue || b > maxValue || c > maxValue || P > maxValue) {
        resultPerimeter.classList.remove("form__equation");
        let result = [];
        if (a <= 0) {
            resultPerimeter.classList.add("red");
            result.push("Side a should be positive number");
        }
        if (a > maxValue) {
            resultPerimeter.classList.add("red");
            result.push("Side a: Number limit exceeded");
        }

        if (b <= 0) {
            resultPerimeter.classList.add("red");
            result.push("Side b should be positive number");
        }
        if (b > maxValue) {
            resultPerimeter.classList.add("red");
            result.push("Side b: Number limit exceeded");
        }

        if (c <= 0) {
            resultPerimeter.classList.add("red");
            result.push("Side c should be positive number");
        }
        if (c > maxValue) {
            resultPerimeter.classList.add("red");
            result.push("Side c: Number limit exceeded");
        }

        if (P <= 0) {
            resultPerimeter.classList.add("red");
            result.push("Perimeter should be positive number");
        }
        if (P > maxValue) {
            resultPerimeter.classList.add("red");
            result.push("Perimeter: Number limit exceeded");
        }
        
        resultPerimeter.innerHTML = result.join("<br>");
    } else {
        if (!isNaN(P) && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
            resultPerimeter.classList.remove("red");
            let perimeterResult = boolPerimeter(a, b, c, P);
            resultPerimeter.innerHTML = perimeterResult;
        }  else if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            resultPerimeter.classList.remove("red");
            let perimeterResult = calcPerimeter(a, b, c);
            resultPerimeter.innerHTML = perimeterResult;
        } else if (!isNaN(P) && !isNaN(a) && !isNaN(b)) {
            resultPerimeter.classList.remove("red");
            let perimeterResult = calcSide_Perimeter(P, a, b);
            resultPerimeter.innerHTML = perimeterResult;
        } else if (!isNaN(P) && !isNaN(a) && !isNaN(c)) {
            resultPerimeter.classList.remove("red");
            let perimeterResult = calcSide_Perimeter(P, a, c);
            resultPerimeter.innerHTML = perimeterResult;
        } else if (!isNaN(P) && !isNaN(b) && !isNaN(c)) {
            resultPerimeter.classList.remove("red");
            let perimeterResult = calcSide_Perimeter(P, b, c);
            resultPerimeter.innerHTML = perimeterResult;
        }
    }
}

function calcPerimeter(a, b, c) {
    let arr = [a, b, c];
    if (arr[0] + arr[1] <= arr[2]) {
        return "Make sure a + b > c";
    } else if (arr[0] + arr[2] <= arr[1]) {
        return "Make sure a + c > b";
    } else if (arr[1] + arr[2] <= arr[0]) {
        return "Make sure b + c > a";
    } else {
        resultPerimeter.classList.add("form__equation");
        let perimeterResult = `\\(P = ${a} + ${b} + ${c} = ${parseFloat((a + b + c).toFixed(floatAccuration))}\\)`;
        resultPerimeter.innerHTML = perimeterResult;
        setTimeout(function () {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultPerimeter]);
        }, 0);

        return perimeterResult;
    }
}

function calcSide_Perimeter(P, a, b) {
    if (a + b <= P/2 || P<=a+b) {
        return `There is no solution`;
    } else {
        resultPerimeter.classList.add("form__equation");
        let perimeterResult = `\\(side = ${P} - ${a} - ${b} = ${parseFloat((P - a - b).toFixed(floatAccuration))}\\)`;
        resultPerimeter.innerHTML = perimeterResult;
        setTimeout(function () {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultPerimeter]);
        }, 0);

        return perimeterResult;
    }
}

function boolPerimeter(a, b, c, P){
    let sides=[a, b, c];
    sides.sort()
    if (parseFloat((a + b + c).toFixed(floatAccuration)) == P){
        if (sides[0]+sides[1]>sides[2]){
            return true
        } else{
            return "The triangle doesn't exist"
        }
    } else{
        return false
    }
}