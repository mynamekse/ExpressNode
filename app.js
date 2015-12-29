var dd=require('./module.js');
// console.log(dd.name);

function Car( model, year, miles ) {

  this.model = model;
  this.year = year;
  this.miles = miles;

}

Car.prototype={
  hello:function(){
    return 'mycar';
  }
}

var ddd=new Car('d','ee','eee');

console.log(ddd.hello());
