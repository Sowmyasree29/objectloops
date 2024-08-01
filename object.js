let str="abcdef"
let count=0;
for(i of str)
{
    count++
}
console.log("the length of the string is",count)

const obj = {
    name: "Alice",
    age: 25,
    city: "Wonderland"
};

// Iterate over keys
console.log("Keys:");
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key);
    }
}

// Iterate over values
console.log("\nValues:");
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(obj[key]);
    }
}

// Iterate over entries
console.log("\nEntries:");
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
    }
}


// Iterate over entries (key-value pairs)
console.log("Entries:");
for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}

// Iterate over keys
console.log("\nKeys:");
for (let key of Object.keys(obj)) {
    console.log(key);
}

// Iterate over values
console.log("\nValues:");
for (let value of Object.values(obj)) {
    console.log(value);
}
