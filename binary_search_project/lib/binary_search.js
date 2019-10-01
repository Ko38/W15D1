function binarySearch(array, target) {
    if (array.length === 0){
        return false;
    }
    if (array.length === 1 && array[0] !== target) {
        return false;
    }
    let midIndex = Math.floor(array.length/2);
    if (array[midIndex] === target) {
        return true;
    } else if (array[midIndex] > target) {
        return binarySearch(array.slice(0,midIndex), target);
    } 

    return binarySearch(array.slice(midIndex), target);
    
}

function binarySearchIndex(array, target) {
    if (array.length === 0){
        return -1;
    }
    if (array.length === 1 && array[0] !== target) {
        return -1;
    }
    let midIndex = Math.floor(array.length/2);
    if (array[midIndex] === target) {
        return midIndex;
    } else if (array[midIndex] > target) {
        return binarySearchIndex(array.slice(0,midIndex), target);
    } 

    let result = binarySearchIndex(array.slice(midIndex), target);
    if (result === -1){
        return result;
    }
    return result + midIndex;
    
}


module.exports = {
    binarySearch,
    binarySearchIndex
};