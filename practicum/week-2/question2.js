
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
        cookies_sort = cookies.sort( function(a, b){return a-b} );
        let max = cookies_sort[cookies_sort.length-1];
        let difference = 0;
        for (let i = 0; i < cookies_sort.length - 1; i++) {
                difference += (max - cookies_sort[i])
        }
        extraCookies -= difference;
        if (extraCookies == 0) {
                return true;
        }
        else {
                return false
        }
 };
