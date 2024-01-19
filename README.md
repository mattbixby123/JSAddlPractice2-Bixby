# JSAddlPractice2-Bixby

Frontend Wev Dev with JavaScript - additional practice Pt. 2

link: https://docs.google.com/document/d/1wSZmBKJSKNqMfuULk0kbbj0GQOI2aUzIF0a6V73JQEg/edit

Frontend Web Dev with JavaScript
Additional Practice
This document provides additional practice on the following objectives:
Write functioning Javascript in an external JS file and include it via a script tag
Identify some of the most common data types in Javascript: null, undefined, Boolean, Number, String, and Function via their syntax
Recognize "truthy" and "falsy" values in JavaScript
Compose if, if...else, if...else-if, if...else-if...else, and ternary conditional statements in Javascript
Write pseudocode (explicit instructions in english with the appropriate level of detail for a computer to complete a task)
Apply if, if...else, if...else-if, if...else-if...else, and ternary conditional statements in JavaScript to manage control flow.

Setup
Open VSCode and create two files: index.html and index.js.
Populate the HTML file with some basic boilerplate code. Hint: VSCode comes with a handy shortcut, typing an “!” and hitting tab should auto populate the file with some basic HTML.
Inside the <head> tags of your HTML file, create a <script> tag.
We’ll use this script tag to link our JS file. Inside the script tag, you’ll need to add 3 attributes like so:

<script src=”./index.js” type=”text/javascript” defer>
The src attribute is used to provide the file path to the javascript file we want to link, the type attribute provides what type of file we are linking to, and the defer attribute ensures that our HTML file fully loads before the browser runs the JavaScript file.
Inside of index.js, add a simple console.log(“Hello World!”).
Next, if you have the Live Server extension installed on VSCode, right click the HTML file and click “Open With Live Server”. If you don’t have the extension, you can navigate to the HTML files location in Finder on Mac, or File Explorer on Windows, right click it and open with Google Chrome.
Once the browser opens, open up the Chrome Dev Tools. You should see “Hello World!” has been printed to the console.

Jacket or No Jacket?
Write a program that uses the temperature outside to determine if you 
should wear a jacket.	
Start by thinking about the logic we’ll need to do to write this program. Write some pseudo code in comments to outline the code we’ll need to write.
Once you’ve planned out the program, it’s time to start writing the code. Declare  a variable to hold the current temperature and assign it the value 60. This value could change later on, so keep that in mind when deciding which variable type to use.
Declare a second variable called isRaining, and assign it a boolean value.
We’ll need to use some conditional statements to check the values of our variables. Write an if statement to check if the temperature is less than or equal to 40. If it is, print to the console “It’s <temperature> degrees outside! Wear a heavy jacket.”
Next, add an else if statement, and check if the temperature is less than or equal 60. If it is, print to the console “It’s <temperature> degrees outside. Wear a jacket.”
Add another else if statement to check if the temperature is less than 70. If it is, print to the console “It’s <temperature> degrees outside, wear a light jacket.”
If none of the above statements are truthy, print to the console “It’s hot out today! No jacket needed!”
Run the program and see what is printed to the console. Try changing the value of the current temperature to something else. Did the output change?
Add another if statement to check if isRaining is true. If it is, print to the console. “It’s raining, too, so you should bring an umbrella!” If it’s false, print “No rain today, you can leave the umbrella at home!”.
	Bonus:
Instead of using an if statement to check if isRaining is true, try to incorporate a ternary operator. If it’s raining, print to the console that you need an umbrella, if it’s not raining, print “It’s not raining, so no umbrella needed!”
Create reusable code by writing a function that accepts a temperature, and isRaining as parameters, and uses the above conditional statements to print a string based on the temperature.

The Calculator
	Write a program that calculates prints the result after evaluating 
mathematical operations between two numbers.
Start by declaring a variable called userName, and assign it to an empty string.
If userName has a truthy value, print “Hello <user>!” to the console. If it has a falsy value, print “Hello, guest!”
Next declare two variables to hold two different numbers. You can give these variables any value.
Now declare a variable to hold a mathematical operation as a string. I.e. “add”, “subtract”, “multiply.”
Use conditional statements to check which operation to use:
“add” should add the two numbers together, and print “Sum of <num1> and <num2> is <result>.”
“subtract” should subtract num2 from num1, and print “Difference of <num1> and <num2> is <result>.”
“multiply” should multiply the two numbers together, and print “Product of <num1> and <num2> is <result>.”
“divide” should divide num1 by num2, and print “Division of <num1> and <num2> is <result>.”
“modulus” should perform the modulo operation on num1 and num2, and print “Modulus of <num1> and <num2> is <result>.”
If the operation is anything other than the ones listed above, print “<operation> is an invalid operation.”
Try running your program with different operators and number values.
What happens if you assign the numbers as a string, i.e “25”?
	Bonus:
Add more conditional statements to check if the numbers are valid inputs, i.e that the variable type is “number”.
Try adding more operators, like “exponents”.
Create reusable code by turning this program into a function that accepts 3 parameters, num1, num2 and operation.
Submission
To submit this assignment, put a GitHub link or screenshot of your work below and email this document to your instructional team members (ITMs). Make sure this document, and all links, are viewable by your ITMs.
