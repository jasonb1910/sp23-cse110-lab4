**Question 1:** Line 12 will print out the value `3` because there are 3 elements in the prices array which means the loop will run 3 times. Also, since the variable`i` is declared by using the keyword `var` so it can be accessed anywhere within the function scope. 

**Question 2:** Line 13 will print out the value `150` which is the `discountedPrice` of the last element in the price array that was added, can be calculated by 300 * (1-0.5) = `150`. 

**Question 3:** Line 14 will print out the value `150` which is the `finalPrice` of the last `discountedPrice` in the array. Since `finalPrice = Math.round(discountedPrice * 100) / 100` so can be calculated by 150 * 100 / 100 = `150`.

**Question 4:** This function will return the array of prices after applying a 50% discount which can be calculated by [100 * 0.5, 200 * 0.5, 300 * 0.5] = `[50, 100, 150]`.

**Question 5:** Line 12 will cause error because the variable `i` is declared by using the keyword `let` which cannot be accessed outside the loop scope.

**Question 6:** Line 13 will cause error because the `discountedPrice` in line 7 was declared with `let` so cannot be accessed outside the loop scope.

**Question 7:** Line 14 will print the value `150` which is the `finalPrice` of the last `discountedPrice` in the array. Since the `finalPrice` was declared with `let` within the function scope, so it can be accessible.

**Question 8:** This function will return the `discounted` array [50, 100, 150] which contains the prices after applying a 50% discount. 

**Question 9:** Line 11 will cause error because the variable `i` was declared by using the keyword `let` which cannot be accessed outside the loop scope.

**Question 10:** Line 12 will print out the value `3` because the price array has 3 elements that means the length of the array is 3, and the `length` variable was declared with `const`, which cannot be reassigned anywhere else.

**Question 11:** This function will return the array [50, 100, 150] because the `discounted` was declared with `const` so new values can be pushed to it as long as it is not reassigned. 

**Question 12:** 

  A. `student.name;`

  B. `student.['Grad Year'];`

  C. `student.greeting();`

  D. `student['Favorite Teacher'].name;`

  E. `student.courseLoad[0];`

**Question 13:**

  A. The output is `32` since integers map to their exact string representation, therefore, the string 3 is concatenated to the string 2 which resulted in the string `'32'`.  

  B. The output is `1` since cannot subtract two strings so `'3'` maps to 3 then using subtract two interger which resulted in the interger 3 - 2 = 1.

  C. The output is `3` since null maps to 0 which resulted in the interger 3 + 0 = 3.

  D. The output is `3null` since '3' is a string and null maps to 'null' string which resulted in the string '3null'.

  E. The output is `4` since true maps to 1 which resulted in the interger 1 + 3 = 1.

  F. The output is `0` since false maps to 0 and null also maps to 0 which resulted in the interger 0 + 0 = 0.

  G. The output is `3undefined` since '3' is a string and undifined is also a string which resulted in the string '3undefined'. 

  H. The output is `NaN` since undefined maps to NaN in numeric conversion.

**Question 14:**

  A. The output is `true` since the string '2' maps to the interger 2

  B. The output is `false` since by dictionary comparison, first char '2' is greater than the first char "1".

  C. The output is `true` since the string '2' maps to the interger 2

  D. The output is `false` since by strict equality, the interger 2 and the string '2' are different data type.

  E. The output is `false` since true maps to the interger 1, which is less than 2.

  F. The output is `true` since converting any non-zero value to boolean always results in true

**Question 15:** `==` compares the two values after converting to the same type while `===`checks for equality without types conversion needed.

**Question 16:** [question 16.js](part2-question16.js)

**Question 17:** The result will be the array [2,4,6]. The `modifyArray` is called with an array and a function parameter `callback` which will multiply each elements in the input array by 2 then pushes it to `newArray`. Despite the 'newArray' being defined as const variable, the element with new value can still be added to it by pushing, as long as it is not reassigned.  

**Question 18:** [question 18.js](part2-question18.js)

**Question 19:** The output is: 1 4 3 2
