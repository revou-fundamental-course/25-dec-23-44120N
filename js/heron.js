let resultHeron = document.getElementById('heron');

function callHeron() {
    let a = parseFloat(document.getElementById('aH').value);
    a = parseFloat(a.toFixed(floatAccuration));
    let b = parseFloat(document.getElementById('bH').value);
    b = parseFloat(b.toFixed(floatAccuration));
    let c = parseFloat(document.getElementById('cH').value);
    c = parseFloat(c.toFixed(floatAccuration));
    let H = parseFloat(document.getElementById('H').value);
    H = parseFloat(H.toFixed(floatAccuration));

    resultHeron.innerHTML = "";

    if (a <= 0 || b <= 0 || c <= 0 || H <= 0 
        || a > maxValue || b > maxValue || c > maxValue || H> maxValue) {
        resultHeron.classList.remove("form__equation");
        let result = [];
        if (a <= 0) {
            resultHeron.classList.add("red");
            result.push("Side a should be positive number");
        }
        if (a > maxValue) {
            resultHeron.classList.add("red");
            result.push("Side a: Number limit exceeded");
        }

        if (b <= 0) {
            resultHeron.classList.add("red");
            result.push("Side b should be positive number");
        }
        if (b > maxValue) {
            resultHeron.classList.add("red");
            result.push("Side b: Number limit exceeded");
        }

        if (c <= 0) {
            resultHeron.classList.add("red");
            result.push("Side c should be positive number");
        }
        if (c > maxValue) {
            resultHeron.classList.add("red");
            result.push("Side c: Number limit exceeded");
        }

        if (H <= 0) {
            resultHeron.classList.add("red");
            result.push("Area should be positive number");
        }
        if (H > maxValue) {
            resultHeron.classList.add("red");
            result.push("Area: Number limit exceeded");
        }

        resultHeron.innerHTML = result.join("<br>");
    } else {
        if (!isNaN(H) && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
            resultHeron.classList.remove("red");
            let HeronResult = boolHeron(a, b, c, H);
            resultHeron.innerHTML = HeronResult;
        } else if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            resultHeron.classList.remove("red");
            HeronResult = calcHeron(a, b, c);
            resultHeron.innerHTML = HeronResult;
        }
    }
}

function calcHeron(a, b, c) {
    let arr = [a, b, c];
    if (arr[0] + arr[1] <= arr[2]) {
        return "Make sure a + b > c";
    } else if (arr[0] + arr[2] <= arr[1]) {
        return "Make sure a + c > b";
    } else if (arr[1] + arr[2] <= arr[0]) {
        return "Make sure b + c > a";
    } else {
        resultHeron.classList.add("form__equation");
        let s = (a + b + c)/2;
        s = parseFloat(s.toFixed(floatAccuration))
        let heronResult = [`\\(s = ${s}\\)`,
                           `\\(A = \\sqrt{${s}(${s} - ${a})(${s} - ${b})(${s} - ${c})}\\)`,
                           `\\(A = \\sqrt{${s}(${s - a})(${s - b})(${s - c})}\\)`, 
                           `\\(A = \\sqrt{${s * (s - a) * (s - b) * (s - c)}}\\)`, 
                           `\\(A = ${Math.sqrt(s * (s - a) * (s - b) * (s - c))}\\)`];
        setTimeout(function () {
            resultHeron.innerHTML = heronResult.join("<br>");
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultHeron]);
        }, 0);
        return heronResult;
    }
}

function boolHeron(a, b, c, H) {
    let arr = [a, b, c];
    let s = parseFloat(((a + b + c) / 2).toFixed(floatAccuration));
    if (arr[0] + arr[1] <= arr[2] || arr[0] + arr[2] <= arr[1] || arr[1] + arr[2] <= arr[0]) {
        return "The triangle doesn't exist";
    } else{
        if (parseFloat((Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(floatAccuration)) == H){
            return true
        } else {
            return false
        }
    }
}