const http = require('http');
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer(function (req,res) {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("Hello World /n");

});
server.listen(port,hostname,function() {
    console.log('Server running at http://'+ hostname + ":" + port +'/');

    var a = [1,2,3,4,5];
    var b = [3,4,5,6,7,8,9];
    var temp=[];
    var reverseValue=[];

    b.forEach(value => {
        a.push(value);
    })

    function removeDuplicate(value){

        a.forEach(value => {
            var booleanValue = willCheckElement(value);
            if(booleanValue == false)
                temp.push(value);
        })

    }

    function willCheckElement(value){
        if(temp.length != 0){
           return temp.indexOf(value) > -1 ;
        }
        else
            return false;
    }


    function reverseArray(){
        let tempLength = temp.length - 1;

        while(tempLength >= 0){
            reverseValue.push(temp[tempLength]);
            tempLength--;
        }

    }

    removeDuplicate(a);
    console.log("remove duplicate "+temp)
    reverseArray();
    console.log("reverse value "+reverseValue)

});
