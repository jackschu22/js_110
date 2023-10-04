/* JS110 Lesson 2: Practice Problem 7

Given the following code, what will the final values of a and b be? Try to answer 
without running the code. */

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

/* The final value of a will be 2 and the final value of b will be [3, 8]. On line 10 we
mutate the first element of the array `arr`, which is the primitive number value held by
the global variable `a`. This permanently changes the value in the array `arr`, but does
not modify `a`, as primitive values like numbers are immutable in JS. On line 11, we mutate
the first element of the second element of the array `arr`, which is the first element
of the array `b`, which is the primitive number value `5`. The value of `a` is subtracted
from `5`, and since the value of `a` is unchanged, `2` is subtracted from `5`, resulting 
in `3`. */