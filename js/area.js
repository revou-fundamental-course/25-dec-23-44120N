let resultArea = document.getElementById('area');

function callArea() {
    let b = parseFloat(document.getElementById('base').value);
    b = parseFloat(b.toFixed(floatAccuration));
    let h = parseFloat(document.getElementById('height').value);
    h = parseFloat(h.toFixed(floatAccuration));
    let A = parseFloat(document.getElementById('A').value);
    A = parseFloat(A.toFixed(floatAccuration));

    resultArea.innerHTML = "";

    if (b <= 0 || h <= 0 || A <= 0 
        || b > maxValue || h > maxValue || A > maxValue) {
        resultArea.classList.remove("form__equation");
        let result = [];
        if (b <= 0) {
            resultArea.classList.add("red");
            result.push("Base should be positive number");
        }
        if (b > maxValue) {
            resultArea.classList.add("red");
            result.push("Base: Number limit exceeded");
        }

        if (h <= 0) {
            resultArea.classList.add("red");
            result.push("Height should be positive number");
        }
        if (h > maxValue) {
            resultArea.classList.add("red");
            result.push("Height: Number limit exceeded");
        }

        if (A <= 0) {
            resultArea.classList.add("red");
            result.push("Area should be positive number");
        }
        if (A > maxValue) {
            resultArea.classList.add("red");
            result.push("Area: Number limit exceeded");
        }

        resultArea.innerHTML = result.join("<br>");
    } else {
        if (!isNaN(A) && !isNaN(b) && !isNaN(h)) {
            resultArea.classList.remove("red");
            let areaResult = boolArea(b, h, A);
            resultArea.innerHTML = areaResult;
        } else if (!isNaN(b) && !isNaN(h)) {
            resultArea.classList.remove("red");
            let areaResult = calcArea(b, h);
            resultArea.innerHTML = areaResult;
        } else if (!isNaN(A) && !isNaN(b)) {
            resultArea.classList.remove("red");
            let areaResult = calcHeight(A, b);
            resultArea.innerHTML = areaResult;
        } else if (!isNaN(A) && !isNaN(h)) {
            resultArea.classList.remove("red");
            let areaResult = calcBase(A, h);
            resultArea.innerHTML = areaResult;
        }
    }
}

function calcArea(b, h) {
    resultArea.classList.add("form__equation");
    let areaResult = `\\(A = \\frac{1}{2} × ${b} × ${h} = ${parseFloat((0.5 * b * h).toFixed(floatAccuration))}\\)`;
    resultArea.innerHTML = areaResult;
    setTimeout(function () {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultArea]);
    }, 0);

    return areaResult;
}

function calcBase(A, h) {
    resultArea.classList.add("form__equation");
    let areaResult = `\\(b = \\frac{2 × ${A}}{${h}} = ${parseFloat((2 * A / h).toFixed(floatAccuration))}\\)`;
    resultArea.innerHTML = areaResult;
    setTimeout(function () {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultArea]);
    }, 0);

    return areaResult;
}

function calcHeight(A, b) {
    resultArea.classList.add("form__equation");
    let areaResult = `\\(h = \\frac{2 × ${A}}{${b}} = ${parseFloat((2 * A / b).toFixed(floatAccuration))}\\)`;
    resultArea.innerHTML = areaResult;
    setTimeout(function () {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultArea]);
    }, 0);

    return areaResult;
}

function boolArea(b, h, A){
    if (parseFloat((0.5 * b * h).toFixed(floatAccuration)) == A){
        return true
    } else{
        return false
    }
}