let promiseVar = new Promise(function(resolve, reject) {
    let err = true;
    setTimeout(() => {
        console.log('promise called');
        if (!err) {
            resolve({ 'UserName': 'Manish' });
        } else {
            reject();
        }
    }, 1000);
});

promiseVar.then((user) => {
    console.log("promse resolved");
    console.log(user);
}).catch((err) => {
    console.log("This is error.");
})

//use fetch function...
let header = {
    headers: {
        'Authorization': 'Basic ZGV2ZWxvcGVyOldmUnEuVjx9NWs5WkVNQDQ'
    }
};
let url = 'https://<DOMAIN_NAME>/fmi/data/v1/databases';

let prom1 = fetch(url, header);
prom1.then((resp) => {
    console.log(resp);
    return resp.json();
}).then(data => {
    console.log(data.response.databases);
}).catch(err => {
    console.log(err);
})

//use fetch using async function..

async function getDatabases() {
    let res = await fetch(url, header);
    let data = await res.json();
    console.log(data.response.databases);
}

getDatabases();