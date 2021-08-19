
export const SelectionSortAnimations=(array)=>{
    const animations = []
    SelectionSort(array,array.length,animations);
    return animations;
}

const SelectionSort = (array, n, animations)=>{
    for(let i=0;i<n;i++){
        let minInd = i;
        for(let j=i+1;j<n;j++){
            animations.push([minInd,j])
            animations.push([minInd,j]);
            animations.push([minInd,array[minInd]]);
            animations.push([j,array[j]]);
            if(array[j] < array[minInd])
                minInd = j;
        }
        animations.push([i,minInd])
        animations.push([minInd,i]);
        animations.push([minInd,array[i]]);
        animations.push([i,array[minInd]]);
        let temp = array[i];
        array[i] = array[minInd];
        array[minInd] = temp;
    }
}