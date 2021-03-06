// ***************************** THE CALL STACK *****************************
// its a structure/tool which helps JavaScript keep its place in our code
function multiply(x,y){
    return x*y;
}
const square = x => multiply(x,x);
const isRightTriangle = (a,b,c) => (
    square(a) + square(b) == square(c)
)
console.log("BEFORE");
isRightTriangle(3,4,5);
console.log("DONEEEE");
// *************************** Web APIs **************************************

console.log("Sending request to server!");
setTimeout(()=>{
    console.log("Here is your data from the server...")
},3000)
console.log("I am at the end of the file.");
//THE BROWSER DOES THE WORK. JS hands certain tasks to the browser to carry out setTimeout being one of them.

// *************************** CALLBACK HELL **********************************

// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red';
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(()=>{
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(()=>{
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor = 'blue';
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    },delay)
}

delayedColorChange('red',1000, ()=>{
    delayedColorChange('orange',1000, ()=>{
         delayedColorChange('yellow',1000, ()=>{
             delayedColorChange('green',1000, ()=>{
                 delayedColorChange('blue',1000, ()=>{
        
                })
            })
        })
    })
})

// Eg. of an Asynchronous operation using callbacks
searchMoviesAPI('amadeus',() => {
    saveToMyDB(movies, () => {
        // if it works run this
    }, () => {
        // if it doesn't work run this
    })
}, () => {
    //if API is down or request failed
})


