var answer = document.getElementById('answer');
function display(value) {
    answer.value += value;
}
function del() {
    document.form.answer.value = document.form.answer.value.substr(0, form.answer.value.length - 1)
}
function cls() {
    document.getElementById("answer").value = "";
}
function theResult() {
    var a = document.getElementById("answer").value;
    var b = eval(a);
    document.getElementById("answer").value = b;
}