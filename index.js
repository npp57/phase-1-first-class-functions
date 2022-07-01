const chai = "chai";
const spies = "chai-spies";

function receivesAFunction (spy){
return spy();
};
function returnsANamedFunction(){
    return function fn(){};
};
function returnsAnAnonymousFunction(){
    return function(){}
}