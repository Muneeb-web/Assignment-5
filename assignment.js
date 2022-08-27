//program # 1: Write a ts program to find maximum between two numbers
// var num1:number = 5;
// var num2:number = 10;
// if (num1>num2) {
//     console.log("num1 maximum num2");
// } else if(num1==num2){
//     console.log("Both numbers are  Equal");
// }
// else if(num2>num1){
//     console.log("num2 maximum num1")
// }else{
//     console.log("minimum");
// }
//Program # 2: Write a ts program to find maximum between three numbers
// var n1: number = 90;
// var n2: number = 100;
// var n3: number = 110;
// if (n1 > n2 && n1 > n3) {
//   console.log("n1 is maximum");
// } else if (n2 > n1 && n2 > n3) {
//   console.log("n2 is maximum");
// } else if (n3 > n1 && n3 > n2) {
//   console.log("n3 is maximum");
// }
//Program # 3: Write a ts program to check whether a number is negative, positive or zero.
// var number1:number = -5;
// if (number1>0) {
//     console.log("number is positive")
// }
// else{
//     console.log("number is negative");
// }
//Program # 4: Write a ts program to check whether a number is divisible by 5 and 11 or not
// var a1:number = 2233;
// if (a1%5==0) {
//     console.log("number is divide by 5");
// }
// else if(a1%11==0){
//     console.log("numbers is divided by 11");
// }
// else{
//     console.log("number is not divided");
// }
//Program # 5: Write a ts program to check whether a number is even or odd
// var a:number = 7;
//  if (a%2==0) {
//     console.log("number is even");
//  } else {
//     console.log("number is odd");
//  }
//program # 6: Write a ts program to check whether a year is leap year or not.
// var a0:any = prompt("Enter Year") 
// if(a0%4==0){
//     console.log("this is a leap year =" , a0);
// }
// else{
//     console.log("this is not leap year =" , a0);
// }
//program # 7: Write a ts program to check whether a character is alphabet or not.
// var  a2:any = prompt("Type here and check character is alphabet or not ")
// if ((a2>='a' && a2<="z") || (a2>="A" && a2<="Z")) {
//     console.log(a2 , "is an alphabet");
// }
// else if(a2>="0" && a2<= "9"){
// console.log(a2, "is a number");
// }
// else {
//     console.log(a2, "is not alphabet");
// }
// Program # 8: Write a ts program to input any alphabet and check whether it is vowel or consonant.
// var c = prompt("Enter alphabet and Check alphabet is vowel or consonent")
// if (c=="a" || c=="e" || c=="i" || c=="o" || c=="u" || c=="A" || c=="E" || c=="I" || c=="O" || c=="U")  {
//     console.log(c, " is a alphabet");
// } else {
//     console.log(c, "is a consonant");
// }
//Program # 9: Write a ts program to input any character and check whether it is alphabet, digit or special character.
// var b:any = prompt("Check type is alpha, number or char");
// if ((b >= "a" && b <= "z") || (b >= "A" && b <= "z")) {
//   console.log(b, "is alphabet");
// } else if (b >= "0" && b <= "9") {
//   console.log(b, "is digit");
// } else {
//   console.log(b, "is special character");
// }
//Program # 10: Write a ts program to check whether a character is uppercase or lowercase alphabet.
//  var a3:any = prompt("Enter Alphabet and check letter is uppercase or lowercase")
//  if (a3>= "a" && a3<= "z") {
//     console.log(a3,"is lowercase");
//  } else if(a3>="A" && a3<= "Z"){
//     console.log(a3, "is uppercase");
//  }else{
//     console.log(a3, "is not lowercase and uppercase");
//  }
//Program # 11: Write a ts program to input week number and print week day
// var d = prompt("enter a week number")
// if(d =="1"){
//     console.log("Monday");
// }
// else if(d=="2"){
//     console.log("Tuesday");
// }
// else if(d=="3"){
//     console.log("Wednesday");
// }
// else if(d == "4"){
//     console.log("Thursday");
// }
// else if(d=="5"){
//     console.log("Friday");
// }
// else if(d=="6"){
// console.log("Saturday");
// }
// else if(d=="7"){
//     console.log("Sunday");
// }
//Program # 12:Write a ts program to input month number and print number of days in that month
// var e = prompt("Enter month name")
// if(e == "1" || e=="3" || e=="5" || e=="7" || e=="8" || e=="10" || e=="12"){
// console.log("31 days in month");
// }
// else if(e =="2"){
//     console.log("28 days in month");
// }
// else{
//     console.log("30 days in month")
// }
//Program # 14: Write a ts program to input angles of a triangle and check whether triangle is valid or not
// var A:any= parseInt(prompt("Enter Angle A"))
// var B:any=parseInt (prompt("Enter Angle B"))
// var C:any=parseInt(prompt("Enter Angle C"))
// var D=parseInt(A+B+C)
// if(D==180){
//     console.log("Angle is valid");
// }
// else{
//     console.log("Angle is not valid" );
// }
//Program # 15: Write a ts program to input all sides of a triangle and check whether triangle is valid or not
// var a=parseInt(prompt("Angle A"));
// var b=parseInt(prompt("Angle B"));
// var c=parseInt(prompt("Angle C"));
// var d=parseInt(a+b+c)
// if(d==180){
//     console.log("Angle is valid");
// }
// else{
//     console.log("Angle is not valid");
// }
//program # 16: Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle
// var a=prompt("angle A")
// var b=prompt("Angle B")
// var c=prompt("Angle C")
// if(a==b && b==c){
//     console.log("Equilateral Triangle");
// }
// else if(a==b || b==c || c==a){
//     console.log("Isosceles Triangle");
// }
// else{
//     console.log("Scalene Triangle");
// }
//Program # 18: Write a ts program to calculate profit or loss
// var cost:any = prompt("Enter Cost price")
// var sell:any=prompt("Enter Sell Amount")
//  if(sell>cost){
//     const profit:any = sell-cost
//     console.log("Profit", +profit);
//  }
// else if(sell<cost){
//     const loss:any = cost-sell;
//     console.log("Loss",+loss);
// }
// else if(sell == cost){
//     console.log("NO profit No Loss");
// }
//Program # 19:  Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// var math:any= prompt("Enter MATH MArks");
// var Physics: String | null = prompt("Enter Physics Marks");
// var Chemistry: String | null = prompt("Enter Chemistry Marks");
// var Biology: String | null = prompt("Enter Biology Marks");
// var Computer: String | null = prompt("Enter Computer Marks");
// var obt: any = math + Physics + Chemistry + Biology + Computer;
// var percent: Number = (obt*100)/500;
// if (percent >= 90) {
//   console.log("Grade A");
// } else if (percent >= 80) {
//   console.log("Grade B");
// } else if (percent >= 70) {
//   console.log("Grade C");
// } else if (percent >= 60) {
//   console.log("Grade D");
// } else if (percent >= 40) {
//   console.log("Grade E");
// } else if (percent < 40) {
//   console.log("Grade F");
// }
//program # 20: Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// var basicSal:any=prompt("Enter Salary")
// if(basicSal<=10000){
//     const grossSal:any= basicSal+(basicSal*0.20)/100+(0.80*basicSal)/100;
//     console.log(grossSal);
// }
// else if(basicSal<=20000){
//     const grossSal:any= basicSal+(basicSal*0.25)/100+(0.90*basicSal)/100;
//     console.log(grossSal);
// }
// else if(basicSal>20000){
//     const grossSal:any= basicSal+(basicSal*0.30)/100+(0.80*basicSal)/100;
//     console.log(grossSal);
// }
//Program # 21: 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
// var units:any = prompt("Enter Electricity Units")
// if(units<=50){
//     const bill:any = units*0.50
//     const add:any = bill+(bill*(0.20/100))
//     console.log(add);
// }
// else if(units<=150){
// const bill:any = (50*0.50)+(units-50)*0.75
// const add:any = bill+(bill*(0.20/100))
// console.log(add);
// }
// else if(units<=250){
// const bill:any = (50*0.50)+(100*0.75)+(units-150)*1.20
// const add:any = bill+(bill*(0.20/100))
// console.log(add);
// }
// else if(units>250){
//     const bill:any = (50*0.50)+(100*0.75)+(100*1.20)+(units-250)*1.50
//     const add:any = bill+(bill*(0.20/100))
//     console.log(add);
// }
