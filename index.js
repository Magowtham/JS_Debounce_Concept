const input =document.querySelector("input");
let counter=0;
//asume this is the function who is fetching the data from the server 
const fetchData=()=>{
    console.log("fetching the data..."+counter++)
}

const debounceFnCreater=(fn,d)=>{
    //closure
    let timerId;
    //returning a dbounce function
    return function(){
        clearTimeout(timerId);
        timerId=setTimeout(fn,d);
    }
}

// reuturns a function having a timerId variable attached as closure and stores the setTimeout id
const debounceFn=debounceFnCreater(fetchData,300);

//using the debounce function created by the debounce function creator
input.addEventListener("keydown",debounceFn);   
