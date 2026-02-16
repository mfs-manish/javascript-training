var url = "http://abc.php";

function log(message) {
    console.log(message);
}

// module.exports.log = log;  // export object having log as element.
module.exports = log; //export function not object
// module.exports.endPoint = url;