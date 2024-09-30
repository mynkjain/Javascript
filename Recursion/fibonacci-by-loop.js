function fibonacci(n){
  if(n===1 || n===2){
    return 1
  }
  let pre = 1;
  let prepre = 1;
  for(let i=3; i<n; i++){
    const temp = pre + prepre
    prepre = pre;
    pre = temp;
  }
  return pre + prepre
}

console.log(fibonacci(4))
