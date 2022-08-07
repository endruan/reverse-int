module.exports = function reverse (n) {
  let oldNum = n + '';
  let newNum = '';
  let len = oldNum.length-1;
  

  if(oldNum[0] === "-") {
    oldNum = oldNum.replace("-","");
    len= len-1;
  }

  for (x in oldNum){
    newNum += oldNum[len];
    len = len - 1; 
  }

   return newNum;
}
