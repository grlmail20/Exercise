function addItemtoArray() {
    const arr = ['India', 'USA', 'China', 'Russia', 'UK']
   // console.log(arr)
    //arr.push('Germany','Australia')
    //console.log(arr)
    //arr.pop()
    //console.log(arr)
    //arr.unshift('Japan','Antartica','Europe')  //can push one element also, like 'Japan'
    //console.log(arr)
    const index = arr.indexOf('Russia')
    console.log(index)
}
addItemtoArray();

// Try this const index = arr.indexOf('Newzealand') ---> It will show -1
//The indexOf() method returns the first index (position) of a specified value. 
//The indexOf() method returns -1 if the value is not found. 
//The indexOf() method starts at a specified index and searches from left to right.
// By default the search starts at the first element and ends at the last
