console.log("hello wepack");

// const emails = ['akash@gmail.com', 'akash2@gmail.com', 'akash3@gmail.com']
// emails.push('akash4@gmail.com')
// console.log(emails);


//block scoping
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