
export const MergeSortAnimations= (array)=>{
    const animations = [];
    if(array.length <=1)
        return;
    const tempArray = array.slice();
    MergeSort(array,0,array.length-1,animations,tempArray);
    return animations;
}

const MergeSort = (array, i, j, animations,tempArray) => {
    if(i<j){
        let mid = Math.floor((i+j)/2);
        MergeSort(tempArray,i,mid,animations,array);
        MergeSort(tempArray,mid+1,j,animations,array);
        Merge(array,i,mid,j,tempArray,animations);
    }
}
const Merge = (array, i, mid, j, tempArray, animations)=>{
    let a = i, k=i;
    let b = mid+1;
    while(a<=mid && b<=j){
        animations.push([a,b]);
        animations.push([a,b]);
        if(tempArray[a] <= tempArray[b]){
            animations.push([k,tempArray[a]]);
            array[k++] = tempArray[a++];
        }else{
            animations.push([k,tempArray[b]]);
            array[k++] = tempArray[b++];
        }
    }
    while(a<=mid){
        animations.push([a,a]);
        animations.push([a,a]);
        animations.push([k,tempArray[a]]);
        array[k++] = tempArray[a++];
    }
    while(b<=j){
        animations.push([b,b]);
        animations.push([b,b]);
        animations.push([k,tempArray[b]]);
        array[k++] = tempArray[b++];
    }
}