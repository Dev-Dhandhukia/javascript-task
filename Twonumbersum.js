let sumoftwonums = (array, sum) => {
  
  let nums = []
      	 
      for(let x=0;x<=array.length-1;x++){
        for(let y=x+1;y<array.length-1;y++){
          
          if (array[x] + array[y] === sum){
          	nums.push([array[x], array[y]])
       	  }
          
      	}
      }  	
   return nums
}
let array = [ 3,5,-4, 8, 11, 1, -1, 6 ]
let sum = 10

console.log(sumoftwonums(array, sum) )