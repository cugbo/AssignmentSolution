### Question

Given an array of integers nums and an integer target, create a function that returns the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Input: nums = [2,7,11,15], target = 9

Output: [2,7]
Explanation: Because 2 + 7 == 9, we return [2, 7]

Constraints:
You can return the answer in any order
Only one valid answer exists

PS: The solution to this algorithm challenge must be written in either Javascript or PHP.

### Solution

- To solve this algorithm, we have to first declare a function called TwoNumbers which takes 2 parameters "nums" and "target".
- We declare a variable called result to store the array of results (i.e the two numbers that will add up to the target).
- We Map to store the difference between the target and the number at a given index.
- We loop through each element in the array to find the difference between the target and the number at each index.
- We run a consdition to determine that the difference is equal to the target less the number at that index.
- Finally return the result which will be the indices of the 2 numbers in the array

Example

given an input = [2, 7, 11, 15] and target = 9
The output will be [0, 1] which indicates 2 which is at index 0 and 7 which is at index = 1
therefore, 2 + 7 = 9.

To test this code on VS Code
You will need to call the function TwoNumbers and pass in the values for the arguments nums and target and log it to the console
==> console.log(TwoNumbers(nums[], target));
