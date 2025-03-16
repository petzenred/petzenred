// const axios = require('axios/dist/node/axios.cjs'); // node
const axios = require("axios"); // node

const test_url = "https://httpbin.org/get";

// let test_response0 = axios.get(test_url);
// test_response0
//     .then((res) => {
//         console.log(test_response0);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// The same can be accomplisted using async/await keywords

const fetchData1 = async () => {
    const test_response1 = axios.get(test_url);
};

async function fetchData2(url) {
    try {
        let test_response2 = await axios.get(test_url);
        console.log(test_response2.data);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    } finally {
        console.log("Function fetchData2() finished")
    }
};

fetchData2();

