
function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        var a = readLine().split(' '); 
        a = a.map(Number); // a is an array that contains the arrival times of students 
        var count = 0; 
 

    function nonLates(arr) {
        for (var i = 0; i < arr.length; i++ ) {
            
            if (arr[i] <= 0) { count += 1;}
     
        }             
   
    }
        
         nonLates(a);
        
        
        
         //console.log(a);--> these three lines of code helps me identify what values are passing through my function 
         //console.log(k);--> and what the value for count becomes.
       // console.log(count);
   
        
    function answer(val)   { 
        if ( val < k ){console.log("YES")}
    
    else {console.log("NO")}
    }
    
    answer(count);
    
}
    
        
    }

    
    
