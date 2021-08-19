
export const HeapSortAnimations = (array)=>{
    const animations = [];
    HeapSort(array,array.length,animations);
    return animations;
}

const HeapSort = (array,n,animations) =>{
    for(let i= Math.floor(array.length/2)-1;i>=0;i--){
        heapify(array,i,n,animations);
    }
    for(let i= array.length-1;i>=1;i--){
        animations.push([0,i]);
        animations.push([0,i]);
        animations.push([0,i,array[i],array[0]]);
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        heapify(array,0,i,animations);
    }
}
const heapify = (array,i,n,animations) =>{
    let maximum = i;
    let leftChild = 2*i+1;
    let rightChild = 2*i+2;
    if(leftChild < n && array[leftChild] > array[maximum]){
        maximum = leftChild;
    }
    if(rightChild<n && array[rightChild] > array[maximum]){
        maximum = rightChild;
    }
    if(maximum !== i){
        animations.push([maximum,i]);
        animations.push([i,maximum]);
        animations.push([i,maximum,array[maximum],array[i]]);
        let temp = array[i];
        array[i] = array[maximum];
        array[maximum] = temp;
        heapify(array,maximum,n,animations);
    }
}