/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BubbleSortAnimations } from "../Sorting Algorithms/BubbleSort";
import { HeapSortAnimations } from "../Sorting Algorithms/HeapSort";
import { InsertionSortAnimations } from "../Sorting Algorithms/InsertionSort";
import { MergeSortAnimations } from "../Sorting Algorithms/MergeSort";
import { QuickSortAnimations } from "../Sorting Algorithms/QuickSort";
import { SelectionSortAnimations } from "../Sorting Algorithms/SelectionSort";

export default function SortingAnimations() {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(100);
  const [speed, setSpeed] = useState(-5);
  const [isRunning, setIsRunning] = useState(false);
  console.log(isRunning);
  useEffect(() => {
    newArray();
    setIsRunning(false);
  }, []);
  const newArray = () => {
    if (isRunning) {
        toast("Wait until Algorithm finishes or else it reloads the page", {type:"warning"});
        setTimeout(() => {
            window.location.reload();
        }, 3000);
      return;
    }
    const temp = [];
    for (let i = 0; i < size; i++) {
      temp[i] = Math.floor((Math.random() * 100000000) % 590) + 10;
    }
    setArray(temp);
  };
  const handleSize = (e) => {
    if (isRunning) {
      window.location.reload();
      return;
    }
    setSize(e.target.value);
    newArray();
  };
  const handleSpeed = (e) => {
    if (isRunning) {
      window.location.reload();
      return;
    }
    setSpeed(e.target.value);
  };

  const MergeSort = async () => {
    if (isRunning) {
        window.location.reload();
      return;
    }
    await setIsRunning(true);
    const animations = MergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bars");
      const bar1 = arrayBars[animations[i][0]].style;
      if (i % 3 === 2) {
        setTimeout(() => {
          const newLength = animations[i][1];
          bar1.height = `${newLength}px`;
        }, i * -speed);
      } else {
        setTimeout(() => {
          const bar2 = arrayBars[animations[i][1]].style;
          if (i % 3 === 0) {
            bar1.backgroundColor = "white";
            bar2.backgroundColor = "white";
          } else {
            bar1.backgroundColor = "hsl(277, 29%, 52%)";
            bar2.backgroundColor = "hsl(277, 29%, 52%)";
          }
        }, i * -speed);
      }
    }
  };
  const QuickSort = async () => {
    if (isRunning) {
        window.location.reload();
      return;
    }
    await setIsRunning(true);
    const animations = QuickSortAnimations(array);
    for(let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bars");
      let x = i%4;
      if(x<2){
        setTimeout(() => {
            const bar1 = arrayBars[animations[i][0]].style;
            const bar2 = arrayBars[animations[i][1]].style;
            if(x === 0){
                bar1.backgroundColor = "white";
                bar2.backgroundColor = "white";
            }else{
                bar1.backgroundColor = "hsl(277, 29%, 52%)";
                bar2.backgroundColor = "hsl(277, 29%, 52%)";
            }
        }, i*(-speed));
      }else{
        setTimeout(() => {
            console.log(animations[i][0],animations[i][1]);
            const bar1 = arrayBars[animations[i][0]].style;
            let newLength = animations[i][1];
            bar1.height = `${newLength}px`;
        }, i*(-speed));
      }
    }
  };
  const BubbleSort = async () => {
    if (isRunning) {
        window.location.reload();
      return;
    }
        await setIsRunning(true);
      const animations = BubbleSortAnimations(array);
      for(let i=0;i<animations.length;i++){
        const arrayBars = document.getElementsByClassName("array-bars");
        let x = i%4;
        if(x<2){
          setTimeout(() => {
              const bar1 = arrayBars[animations[i][0]].style;
              const bar2 = arrayBars[animations[i][1]].style;
              if(x === 0){
                  bar1.backgroundColor = "white";
                  bar2.backgroundColor = "white";
              }else{
                  bar1.backgroundColor = "hsl(277, 29%, 52%)";
                  bar2.backgroundColor = "hsl(277, 29%, 52%)";
              }
          }, i*(-speed));
        }else{
          setTimeout(() => {
              console.log(animations[i][0],animations[i][1]);
              const bar1 = arrayBars[animations[i][0]].style;
              let newLength = animations[i][1];
              bar1.height = `${newLength}px`;
          }, i*(-speed));
        }
      }
  };
  const InsertionSort = async () => {
    if (isRunning) {
        window.location.reload();
      return;
    }
        await setIsRunning(true);
      const animations = InsertionSortAnimations(array);
      for(let i=0;i<animations.length;i++){
        const arrayBars = document.getElementsByClassName("array-bars");
        const bar1 = arrayBars[animations[i][0]].style;
        if (i % 3 === 2) {
          setTimeout(() => {
            const newLength = animations[i][1];
            bar1.height = `${newLength}px`;
          }, i * -speed);
        } else {
          setTimeout(() => {
            const bar2 = arrayBars[animations[i][1]].style;
            if (i % 3 === 0) {
              bar1.backgroundColor = "white";
              bar2.backgroundColor = "white";
            } else {
              bar1.backgroundColor = "hsl(277, 29%, 52%)";
              bar2.backgroundColor = "hsl(277, 29%, 52%)";
            }
          }, i * -speed);
        }
      }
  };
  const HeapSort = async () => {
    if (isRunning) {
        window.location.reload();
      return;
    }
    await setIsRunning(true);
      const animations = HeapSortAnimations(array);
      let it = true;
      for(let i=0;i<animations.length;i++){
          console.log(animations[i]);
        const arrayBars = document.getElementsByClassName("array-bars");
        if(animations[i].length === 4){
            setTimeout(() => {
                const bar1 = arrayBars[animations[i][0]].style;
                const bar2 = arrayBars[animations[i][1]].style;
                let newLength1 = animations[i][2];
                let newLength2 = animations[i][3];
                bar1.height = `${newLength1}px`;
                bar2.height = `${newLength2}px`;
            }, i*(-speed));
        }else{
            const bar1 = arrayBars[animations[i][0]].style;
            const bar2 = arrayBars[animations[i][1]].style;
            if(it){
                setTimeout(() => {
                    bar1.backgroundColor = "white";
                    bar2.backgroundColor = "white";
                }, i*(-speed));
                it = false;
            }
            else{
                setTimeout(() => {
                  bar1.backgroundColor = "hsl(277, 29%, 52%)";
                  bar2.backgroundColor = "hsl(277, 29%, 52%)";
                }, i*(-speed));
                it = true;
            }
        }
      }
  };
  const SelectionSort = async () => {
    if (isRunning) {
        window.location.reload();
      return;
    }
    await setIsRunning(true);
      const animations = SelectionSortAnimations(array);
      for(let i=0;i<animations.length;i++){
        const arrayBars = document.getElementsByClassName("array-bars");
        let x = i%4;
        if(x<2){
          setTimeout(() => {
              const bar1 = arrayBars[animations[i][0]].style;
              const bar2 = arrayBars[animations[i][1]].style;
              if(x === 0){
                  bar1.backgroundColor = "white";
                  bar2.backgroundColor = "white";
              }else{
                  bar1.backgroundColor = "hsl(277, 29%, 52%)";
                  bar2.backgroundColor = "hsl(277, 29%, 52%)";
              }
          }, i*(-speed));
        }else{
          setTimeout(() => {
              console.log(animations[i][0],animations[i][1]);
              const bar1 = arrayBars[animations[i][0]].style;
              let newLength = animations[i][1];
              bar1.height = `${newLength}px`;
          }, i*(-speed));
        }
      }
  };
  return (
    <div className="container">
      <div className="header">
        <div className="components">
          <h1>SORTING VISUALISER</h1>
          <div className="customs">
            <button onClick={newArray}>Generate New Array</button>
            <div className="labels">
              <label>Size:</label>
              <input
                className="size-input"
                type="range"
                min={10}
                max={150}
                value={size}
                onChange={(e) => handleSize(e)}
              />
            </div>
            <div className="labels">
              <br></br><label>Speed:</label>
              <input
                className="speed-input"
                type="range"
                min={-20}
                max={-1}
                value={speed}
                onChange={(e) => handleSpeed(e)}
              />
            </div>
          </div>
          <div className="sorts">
            <button onClick={MergeSort}>Merge Sort</button>
            <button onClick={QuickSort}>Quick Sort</button>
            <button onClick={InsertionSort}>Insertion Sort</button>
            <button onClick={SelectionSort}>Selection Sort</button>
            <button onClick={HeapSort}>Heap Sort</button>
            <button onClick={BubbleSort}>Bubble Sort</button>
          </div>
        </div>
      </div>
      <div className="bars">
        {array.map((value, index) => (
          <div
            className="array-bars"
            style={{ height: `${value}px` }}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
}
