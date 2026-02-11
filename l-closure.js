/***
 * A closure happens when a function remembers variables from its outer scope even after that outer function has finished executing.
 * /

//lexical scope..
function outerfunc() {
    let counter = 1;

    function innerFunc() {
        console.log(counter++);
    }

    innerFunc();
};

outerfunc();
outerfunc();
outerfunc();

/** closure.. */

function outerfunc1() {
    let counter = 1;

    function innerFunc1() {
        console.log(counter++);
    }

    return innerFunc1;
};

func = outerfunc1();

func();
func();
func();