//console.log(this);

const ob = {
    userName: 'manish',

    func: function named() {
        function nestedFunc() {
            console.log(this.userName);
        }

        const afunc = () => {
            console.log(this.userName);
        }
        console.log(this);
        afunc()
        nestedFunc()
    }
}

const aunc1 = () => {
    console.log(this);

}
aunc1();
ob.userName = 'sohan'

// ob.func()