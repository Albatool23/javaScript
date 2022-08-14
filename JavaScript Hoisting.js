//1
// console.log(hello); //undefined var after console
// var hello = 'world'



//2
// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);  //output mangnet
// }


//3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay'; //no var
//      console.log(brendan);
// }
// console.log(brendan);//output super cool


//4
// var food = 'chicken';
// console.log(food); //output chicken
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food); //output half-chicken
//     var food = 'gone';
// }




//5
// mean(); //error
// console.log(food); // no var
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);


//6
// var genre = "disco";
// console.log(genre); //output disco
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre); //output rock
//     var genre = "r&b";
//     console.log(genre); //output r&b
// }
// console.log(genre); //output disco



//7
// dojo = "san jose";
// console.log(dojo);  //output san jose
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo); //output seattle
//     var dojo = "burbank";
//     console.log(dojo); //output burkbank
// }
// console.log(dojo); //output san jose



//8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {}; //error //let
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
       // dojo = "closed for now";
    }
    return dojo;
}




