//module.exports = (a = 0, b = 0) => {
//  return new Promise((resolve, reject) => {
  //  if(a && b){
    //  resolve(a * b);
  //  }else{
    //  reject(new Error('my error message'));
  //  }
  //});
//};
module.exports = (a = 0, b = 0)=>{
    return new Promise((res,rej, next)=>{
  if (a && b){
    resolve(a*b);
  }else{ reject(new Error('my error message'));
    }
  });
};
