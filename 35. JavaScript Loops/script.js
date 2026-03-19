let a = 1;

// console.log(a)
// console.log(a+1)
// console.log(a+2)

for (i=0; i<100; i++) {
    console.log(a+i);
}

let obj ={
    name: "Kashif",
    role: "Student",
    Uni: "Virtual University",
}

for (const key in obj) {
    
    const element = obj[key];
    console.log(key, element)  
}

for (const c of "Kashif") {
    console.log(c)
}


let b = 0;

while(b<10){
    console.log(b);
    b++;
}

console.log("do while loop")
let c = 10;

do {
    console.log(c);
    c++;
} while (c < 6);