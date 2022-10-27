/* let fullname = 'Azman Hossain';
if(fullname){
    let firstname = fullname.split(' ')[0];
    console.log(firstname);
}

const frstname = (x) => {
    return x.split(' ')[0];
}
console.log(frstname(fullname));

const frstname3 = (x) => x.split(' ')[0];
console.log(frstname3(fullname)); */

const multiplier= {
    number:[1,2,3,4,5,6,7,8,9,10],
    multiplyBy: 2,
    multiply(){
        return this.number.map((mul) => mul*this.multiplyBy);
    }
}
const nums=[1,2,2,3];
const checkif= (num) => {
    let a = (num.length>0)? "Bigger than 0":"Smaller than 0";
    console.log(a);
};
checkif(nums);
//console.log(checkif(num));
//console.log(multiplier.multiply());
