
export const QuickSortAnimations = (array) =>{
    const animations = []
    QuickSort(array,0,array.length-1,animations);
    return animations;
}

const QuickSort = (array, i, j, animations) => {
    if(i<j){
        let k = partition(array,i,j,animations);
        QuickSort(array,i,k-1,animations);
        QuickSort(array,k+1,j,animations); 
    }
}

const partition = (array, low, high,animations)=>{
    let pivot = array[high];
    let i=low;
    for(let j= low;j<high;j++){
        animations.push([j,high]);
        animations.push([j,high]);
        if(array[j] < pivot){
            animations.push([i,array[j]]);
            animations.push([j,array[i]]);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
        }else{
            animations.push([i,array[i]]);
            animations.push([j,array[j]]);
        }
    }
    animations.push([i,high]);
    animations.push([i,high]);
    animations.push([i,array[high]]);
    animations.push([high,array[i]]);
    let temp = array[i];
    array[i] = array[high];
    array[high] = temp;
    return i;
}