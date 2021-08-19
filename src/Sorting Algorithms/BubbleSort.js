
export const BubbleSortAnimations = (array)=>{
    const animations = [];
    BubbleSort(array,array.length,animations);
    return animations;
}

const BubbleSort = (array, n, animations)=>{

    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            animations.push([i,j]);
            animations.push([i,j]);
            if(array[i] > array[j]){
                animations.push([i,array[j]]);
                animations.push([j,array[i]]);
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }else{
                animations.push([i,array[i]]);
                animations.push([j,array[j]]);
            }
        }
    }
}