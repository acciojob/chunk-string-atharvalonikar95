function stringChop(str, size) {
  // your code here
	let ans=[] 
	let i=0
	if (!str || size <= 0) {
	    return [];
	}
	while(i<str.length){
		let chunk=str.slice(i,i+size)
		ans.push(chunk)
		i+=size
	}
	return ans
// }

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
