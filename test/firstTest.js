//describe('the group of tests', ()=>{
  //it('some test', ()=>{

  //});
//  it('everything is bad', ()=>{
  //  throw new Error('something is wrong');
  //});
//});


//const assert = require('chai').assert;

//describe('Թեստերի խումբ', () => {

//  it('2 * 2 հավասար է 4', () => {
  //  assert(2 * 2 === 4, '2 * 2 հավասար ՉԷ 4');
  //});

//});
// describe('testeri xumb', ()=>{
//   it('inch vor test', ()=>{
//
//   });
//   it('vat e amen inch', ()=>{
//     throw new Error('inch vor sxal');
//   });
// });



// function hello(a){
//   return a*a
// }
//
// Number.prototype.hello = function(){return this.this};
// var x = 6
// x.hello();//36
//nuyn dzevi mej shouldy kashxati


//const assert = require('chai').assert;
//describe('tester xumb', ()=>{
  //it('it is an objects  hamematutyn',()=>{
  //  assert(2*2===4, 'it is ok');
//  });

  //it('math objects function', ()=>{
    //  assert(Math.max(2,5)===5, 'two parameters')
    //});
//it('one parametr',()=>{
//  assert(Math.max(5)===5, 'one parameters');
//});
//it('it is string', ()=>{
//  assert(Math.max("bddy", "tddw")===false, 'string');
//});
//it('without arg', ()=>{
//  assert(Math.max()===-Infinity, 'without parametr');
//});



const myFunction = require('../lib/myFunction');
const assert = require('chai').assert;
//const {assert}= require('chai'); nuyn e inch vor verevin@

describe('the function- module', ()=>{
  it('two right', ()=>{
    let z = myFunction(2,3);
    assert(z = 6, 'this is not equal 6');
  });

 it('two  arjeqner@ vorpes tox', ()=>{
   let z = myFunction('hello', 'good');// NaN
    assert.isNaN(z, 'sa petk e lini NaN');
  });

  it('ete arjeq chenk talis', ()=>{
   let z = myFunction(); //tann enk grelu
   assert.fail(z, 'petk e veradarzni sxal');
  });
});
// const {expect} = require('chai');
// const myFunction = require('../lib/myFunction');
//
// describe('module - myFunction', () => {
//
//   it('2 ճիշտ արժեք', async () => {
//     let z = await myFunction(2, 3); // 6
//     expect(6).to.equal(z);
//   });
//
//   it('2 արժեքները որպես տող', async () => {
//     let z = await myFunction('hello', 'test');
//     expect(z).to.be.NaN;
//   });
//
// });
