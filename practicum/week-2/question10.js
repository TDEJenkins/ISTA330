/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
     let difference = ( n.toString() ).split("");
    diffSort = difference.sort( function(a, b){return a-b} ); 
    diff = parseInt(diffSort[diffSort.length - 1]) - parseInt(diffSort[0]);
    return diff;
};