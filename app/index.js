console.log("hello wepack");

// const emails = ['akash@gmail.com', 'akash2@gmail.com', 'akash3@gmail.com']
// emails.push('akash4@gmail.com')
// console.log(emails);


//block scoping
console.log("--------- Block Scoping ---------");
const limit = 200;
{
  const limit = 10;
  console.log('backstage limit', limit);
}
console.log('overall', limit);

function hello(){
  let msg = "hello from hello()"
  console.log(msg);
}
function greeting(){
  let msg = "hello from greeting()"
  console.log(msg);
}
hello();
greeting();


//Template literals
console.log("--------- Template Literals ---------");
let b = `birthday`;
let c = `Happy ${b}`;
console.log(c);


//Spread Operator
console.log("----------- Spread Operator -----------")
let SA = [10, 20, 30];
let SB = [...SA, 40, 50];
console.log(SB);


//Rest parameters
console.log("----------- Rest parameters -----------")
function collect(...RP){
  console.log(RP)
}
collect(1,2,3,4,5,7,8,9);

//Destructing assignment
console.log("----------- Destructing assignment -----------")
let DA = [1,2,3];
let [one, two] = DA;
console.log(one, two)

let king = {name: "Musafa", kids: 1};
let {name, kids} = king;
console.log(name, kids);