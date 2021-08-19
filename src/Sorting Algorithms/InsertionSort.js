
export const InsertionSortAnimations=(array)=>{
    const animations=[];
    InsertionSort(array,array.length,animations);
    return animations;
}

const InsertionSort = (array,n,animations)=>{
    for(let i=1;i<n;i++){
        let val = array[i];
        let j=i-1;
        while(j>=0 && array[j] > val){
            animations.push([j,i]);
            animations.push([j,i]);
            animations.push([j+1,array[j]]);
            array[j+1] = array[j];
            j--;
        }
        animations.push([j+1,i]);
        animations.push([j+1,i]);
        animations.push([j+1,val]);
        array[j+1] = val;
    }
}