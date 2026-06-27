function quick_Sort(arr){
    if(arr.length<2){
        return arr
    }else{
        let pivot = arr[0]
        let less = []
        let greater = []
        for(let i=1;i<arr.length;i++){
            if(arr[i]<=pivot){
                less.push(arr[i])
            }else{
                greater.push(arr[i])
            }

        }
        return [...quick_Sort(less),pivot,...quick_Sort(greater)]
    }
}
let my = [20,20,-4,100,2,55,4,1,3,-20]
let myList = quick_Sort(my)
console.log(myList)