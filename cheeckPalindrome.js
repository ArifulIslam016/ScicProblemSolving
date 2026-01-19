function cheeck(word) {
    const reveredword= word.toLowerCase().split('').reverse().join('')
    if(word.toLowerCase()===reveredword){
        return true
    }else{
        return false
    }
}
console.log(cheeck("Madam"))
console.log(cheeck("hello"))