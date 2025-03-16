// ARROW FUNCTIONS

// This is an arrow function
const DoSomething = () => {
    return "Hello World";
}


// TERNARY OPERATORS

let one = 1;
let two = one > 10 && "Pedro"; // if the variable one is less than 10, two will be equal to 'Pedro'
let three = one > 10 || "Maria"; // If the variable one is more than 10, three will be equal to 'Maria'
let four = one > 10 ? "Alejandro" : "Shadow"; // If variable one is less than 10, four will be equal to 'Alejandro'. Otherwise four will be equal to 'Shadow'


// OBJECTS
// also called hashmaps, dictionaries, etc.
const me_object_ref = { // declare an object with {}
    name: 'Red', 
    age: 25
}
const age_name = "age";

function greet(name) {
    console.log("You're a nerd, " + name);
    return 0;
}

greet(me_object_ref.name);
greet("Timmy");

// This is an example of an anonymous function - it's called that because it's never formally declared and thereby given a name. It can't be reused elsewhere.
// <button onClick={() => {console.log("Hello World")}}></button>

// Destructuring objects
let {name, age} = me_object_ref;
console.log(name);

// This creates an object identical to me_object_ref but the property 'name' is equal to 'Jeffrey' not 'Red' and a new property 'isMarried' has been added
const person2 = {...me_object_ref, name: "Jeffrey", isMarried: false};
console.log(person2);

// This will make an object identical to me_object_ref but the property 'age' is equal to 15. 
// Since the varibles name already exists with the value I want, if I want a property called that, 
// I don't need to set it explicitly (e.g. with name = name)
const person3 = {
    name: name,
    age: age - 10
};
console.log(person3);


// THE THREE FUNDAMENTAL OPERATIONS OF JAVASCRIPT
// .map, .filter, and .reduce

// .map()
let names = ["Tony", "Natasha", "Rhodey"]
console.log("names list before .map: " + names)
names = names.map((name) => {
    return name + name
})
console.log("names list after .map to edit: " + names)
names = names.map((name) => {
    return "Josephine"
})
console.log("names list after .map to replace: " + names)

//.filter()
let ages = [15, 22, 30, 9];
let legal = ages.filter(checkCanDrink);

function checkCanDrink(age) {
    return age >= 21;
}
console.log(legal);

//.reduce()



// ASYNCHRONICITY

const event = new Promise((resolve, reject) => {
    let name = "Tony";
    if (name == "Red") {
        resolve(name);
    } else {
        reject("name should have been 'Red' but was '" + name + "' instead");
    }
});
event.then((name) => {
    console.log("Successfully returned " + name);
}).catch((err_msg) => {
    console.log("ERROR!\n" + err_msg);
}).finally(() => {
    console.log("Promise finished");
}); // then is called by resolve(), catch is called by reject(), finally is always called


const axios = require("axios"); // node
const test_url = "https://httpbin.org/get";

// Query a webpage with the Node.js RESTful API package axios
let test_response0 = axios.get(test_url);
test_response0
    .then((res) => {
        console.log(test_response0.data);
    })
    .catch((err) => {
        console.log(err);
    });

// The same can be accomplisted using async/await keywords

await sleep

const fetchData1 = async () => {
    const test_response1 = axios.get(test_url);
};

async function fetchData2(url) {
    console.log("Running asynchronous function fetchData2()...");
    try {
        let test_response2 = await axios.get(test_url);
        console.log(test_response2.data);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    } finally {
        console.log("Function fetchData2() finished");
    }
};

fetchData2();

