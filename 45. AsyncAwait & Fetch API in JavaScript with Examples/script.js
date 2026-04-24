console.log("AsyncAwait & Fetch API in JavaScript with Examples")

// async function getData(){
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

async function getData(){
 let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//  let data = await x.json()
 let data = await x.text()
 return (data)
      
}

async function main() {
    console.log("Loading something")

    console.log("Do something else")

    console.log("Load Data")

    let data = await getData()

    console.log(data)

    console.log("Processing Data")

    console.log("Task 2")
}

main()