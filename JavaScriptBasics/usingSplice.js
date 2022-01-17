function addItemtoArray() {
    const arr = ['India', 'USA', 'China', 'Russia', 'UK']
    const index = arr.indexOf('Russia')
    console.log(index)
    arr.splice(index,1) //the 1st parameter chooses Russia to be removed and next parameter '1' removes one item starting from Russia
   // Try this arr.splice(0,2);
  // Try this arr.splice(2,2,'test','test1')
    console.log(arr)
}
addItemtoArray();

//splice() JS Array Method. The splice() method is a built-in method for JavaScript Array objects. 
//It lets you change the content of your array by removing or replacing existing elements with new ones.
// This method modifies the original array and returns the removed elements as a new array