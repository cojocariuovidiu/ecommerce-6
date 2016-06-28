/*
var async = require('async');

Category.find({},function(err,category){

    Product.findOne({category: category._id }, function(err, productSingle){
        Product.findById({_id:productSingle._id}, function(err, productSingleId){

        });
    });
});*/

var faker = require('faker');
var async = require('async');
/*

async.waterfall([

    function(callback){
        for(var i =0 ;i<30;i++){
        console.log(
             faker.commerce.productName()
            ,faker.commerce.color()
            ,faker.commerce.department()
            ,faker.commerce.price()
            ,faker.commerce.productAdjective()
            ,faker.commerce.productMaterial()
            ,faker.commerce.product()

        );
        }
        callback(null);
    },

    function(callback){
        console.log('------------------------------------------------\n');

        console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
        callback(null);
    },

    function(callback){

        console.log('------------------------------------------------\n');

        for(var i =0 ;i<30;i++) {
            console.log(
                faker.fake( "{{commerce.productName}}, {{commerce.color}}, {{commerce.department}}, {{commerce.price}}, {{commerce.productAdjective}}, {{commerce.productMaterial}}, {{commerce.product}} ")
            );
        }
        console.log('-----------------THE -- END-----------------------\n');
    }

]);
*/

/*
async.waterfall([

]);
*/

var x = 'a';
console.log('start');
/*

a0b();
a1b();
a2b();
*/


function a0b(){
    console.log(x);
    x = 'b';
}

function a1b(){
    console.log(x);
    x = 'c';
}

function a2b(i){
    x = 'a2b' + ' : ' + i;
    console.log('x in a2b -- '+x);
}
console.log(x);

for(var i=0;i<3;i++){
    //a2b(i);

    x = 'a2b' + ' : ' + i;
    console.log('x in a2b -- '+x);

    //-----------

    console.log(i + ' : loop : ' + x);
}
console.log('end');
console.log(x);