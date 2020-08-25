//www.codewars.com/kata/51f41b98e8f176e70d0002a8/train/javascript
//Sort arrays - 1
sortme = function( names ){
    return names.sort()
}
//www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript
//Be Concise I - The Ternary Operator
function f(age) {
    if (age <= 12) {
        return "You're a(n) kid";
    } else if (age >= 13 && age <= 17) {
        return "You're a(n) teenager";
    } else if (age >= 18 && age <= 64) {
        return "You're a(n) adult";
    } else {
        return "You're a(n) elderly";
    }
}
describeAge = function(age){
    return f(age);
};
//www.codewars.com/kata/58d248c7012397a81800005c/train/javascript
//Find out whether the shape is a cube
var cubeChecker = function(volume, side){
    if (side<=0 || volume<=0){
        return false;
    }else if(Math.pow(side,3)!==volume){
        return false;
    }else{
        return true;
    }
};
//www.codewars.com/kata/568dc69683322417eb00002c/train/javascript
//L2: Triple X
function tripleX(str){
    if (str.indexOf('x') == -1){
        return false;
    }
    else {
        let firstx = str.indexOf('x');
        if (firstx === str.indexOf('xxx')){
            return true
        }
        else {
            return false
        }
    }
}
//www.codewars.com/kata/5704aea738428f4d30000914/train/javascript
//Triple Trouble
function tripleTrouble(a,b,c){
    var d="";
    for(i=0;i<a.length;i++)
    {
        d=d+a[i]+b[i]+c[i];
    }
    return d;
}
//www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
//Count by X
function countBy(x, n) {
    var z = [];
    for(i = 1; i <= n; i++){
        z.push(i * x);
    }
    return z;
}
//www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/javascript
function move (position, roll) {
    return position + roll * 2
}