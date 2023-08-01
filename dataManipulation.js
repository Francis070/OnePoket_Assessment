let dataManipulation = (list)=>{
    let sumFunc = list.reduce((sum, eachElement)=> {  //used the reduce function to find out the sum
        // console.log(sum, eachElement);
        return sum+eachElement;
    }, 0);
    return sumFunc;
};

console.log(dataManipulation([1, 2, 3, 4, 5]));  // printing the result in terminal.
