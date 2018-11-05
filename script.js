let promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    let randomInt = Math.floor(Math.random() * 10); 
    resolve(randomInt);
  }, 500)
});

promise.then(function(data){

  let secondRand = `#1 Cookie Jar Count Randomizer: ${data} cookie(s)`
  document.querySelector(".randNum1").innerHTML = secondRand;
  console.log(secondRand);

  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(Math.floor(Math.random() * 10)); 
    }, 2500);
  });
}).then(function(data){
  let secondRand = `#2 Cookie Jar Count Randomizer: ${data} cookie(s)`
  document.querySelector(".randNum2").innerHTML = secondRand;
  console.log(secondRand);
});

function myFunction() {
  var copyText = document.getElementById("link");
  copyText.select();
  document.execCommand("copy");
  document.getElementById("copied").innerHTML = `Github Link Copied`
  setTimeout(function(){
  }, 2000)
}