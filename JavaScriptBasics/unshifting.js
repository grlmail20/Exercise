function addItemtoArray() {
    const arr = ['India', 'USA', 'China', 'Russia', 'UK']
    console.log(arr)
    arr.push('Germany','Australia')
    console.log(arr)
    arr.pop()
    console.log(arr)
    arr.unshift('Japan','Antartica','Europe')  //can push one element also, like 'Japan'
    console.log(arr)
}
addItemtoArray();

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.