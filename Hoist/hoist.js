// ****** 1 ********
console.log(hello);
var hello = 'world';
// var hello; 
// console.log(hello);
// hello = 'world';


// ******** 2 *******
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// var needle; 
// needle = 'magnet';
// console.log(needle);
// output is magnet;


// ******** 3 *******
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan; 
// console.log(brendan); 
// output is super cool (function was never called);


// ******** 4 *******
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// console.log(food); 
// output is chicken; 
// run function after it has been called;
// inside the function set food to half-chicken;
// console log food now the output is half-chicken;


// ******** 5 *******
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// console.log(food);
// there is no global var called food, so the output should be undefined;
// should be a type error because you can't set a var to a function;


// ******** 6 *******
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// console.log(genre) should be undefined;
// no var genre is set yet;
// var genre;
// calling and running the function;
// genre = 'rock';
// console.log(genre); 
// the output is 'rock', genre set to rock prior to this console.log;
// var genre = r&b;
// console.log(genre);
// the output is 'R&B';
// console.log(genre); 
// output is 'disco';



// ******** 7 *******
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// dojo = San Jose;
// console.log(dojo), 
// output is 'San Jose';
// calling and running the function;
// same concept with the last one, dojo = seattle, console.log(dojo) output is seattle;
// console.log(dojo) 
// output is 'Burbank';
// console.log(dojo) 
// output is San Jose due to it console logging the global dojo;



