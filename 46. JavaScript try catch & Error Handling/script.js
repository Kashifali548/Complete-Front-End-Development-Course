let a = prompt("Enter first number")

let b = prompt("Enter second number")

let sum = parseInt(a) + parseInt(b)

if  (isNaN(a) || isNaN(b)){
    throw SyntaxError("This is not allowed")
}

function main(){

    try {
        console.log("The sum is ", sum*c)   
        return true 
    } catch (error) {
        console.log("There is an error")
        return false
    } finally{
        console.log("Files are closed")
    }
}

let c = main()