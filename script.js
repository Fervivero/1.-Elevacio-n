//Ejercicio 1//
console.log(hello);                                   
var hello = 'world'; 

//Corrección Ejercicio 1//
var hello = 'world';  
console.log(hello); // world
undefined

//Ejercicio 2//
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//Corrección Ejercicio 2//
var needle = 'haystack';
var needle = 'magnet';
function test(){
    console.log(needle);
}
test();


//Ejercicio 3//
var brendan = 'super cool';
function print(){
    console.log(brendan);
}

brendan = 'only okay';
console.log(brendan);

//Respuesta Ejercicio 3//
//La consola imprime:
//super cool
//only ok

//Ejercicio 4 - No realizado//
var food = 'chicken';
console.log(food);
eat(); 
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

var food = 'chicken';

function eat(){
    var food = 'gone';
    food = 'half-chicken';
    console.log(food);
    
}

console.log(eat);
eat(); 

//Respuesta Ejercicio 4//
var food = 'chicken';
console.log(food);

function eat() {
    var food = 'gone';
    food = 'half-chicken';
    console.log(food);
}

console.log(eat);
eat();


//Ejercicio 5//
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//Respuesta Ejercicio 5//
var food;

console.log(food);

var mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
};

mean();

console.log(food);


//Ejercicio 6//
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


//Respuesta Ejercicio 6//
var genre = "disco";
console.log(genre);


function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
};

rewind();

console.log(genre);

//Ejercicio 7//
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//Respuesta Ejercicio 7//
dojo = "san jose";
console.log(dojo);


function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
};
learn();

console.log(dojo);
