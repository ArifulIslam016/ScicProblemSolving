function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([5,7,7,8,9])); 