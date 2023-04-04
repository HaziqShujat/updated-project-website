
let count =0;
document.getElementById("decrease").onclick = function(){
    count -=1;
    document.getElementById("countlabel").innerHTML =count;

}
document.getElementById("reset").onclick = function(){
    count =0;
    document.getElementById("countlabel").innerHTML =count;
}
document.getElementById("increase").onclick = function(){
    count +=1;
    document.getElementById("countlabel").innerHTML =count;
}


class employee{
    constructor(name,age,salary){
        this.empname =name;
        this.empage = age;
        this.empsalary  = salary;
    }
    info(){
        document.write(`h3>employee class</h3>')
        Name :${this.empname}
        Age :${this.empage}
        Salary :${this.empsalary}`)
    }
}
class Manager extends employee{
    
     info(){
        ta =1000;
        pa =300;
        totalsalary = this.empsalary +ta +pa;
        document.write(`Manager class')
        Name :${this.empname}
        Age :${this.empage}
        Salary :${totalsalary}`)
    }
    

}



let a = new Manager('jack',20,12000)
let b = new employee('jami', 19, 1000)

a.info()
b.info()


var promise = new Promise((resolve,reject) =>{
    var term1 =2;
    var term2 = 2;
    var add = term1+term2;
    var answer = 4;
    var expressioncorrect = add ===answer;
if (expressioncorrect){
    resolve('the promise was fullfiled');
} else{
    reject({
        errortype:'arithmetic error',
        Message :"The expression didn't evaluate correctly.",
        originalExpression: `${term1} + ${term2} === ${answer}`,
       
    });
}

})
promise.then((Message)=>{
    console.log(`success:${Message}`);
})

promise.catch((err)=>{
    console.log(`${err.errortype} :${Message} :${originalExpression}`);
})