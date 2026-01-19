 function StringReverse(st) {
    const divided=st.split('')
    const revesed=divided.reverse()
    const newst=revesed.join("")
    console.log(newst)
    return newst
}
// StringReverse("hi")
// console.log(StringReverse('hi'))