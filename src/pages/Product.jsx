import { useState, useEffect } from "react";

// UI
import Navbar from "../components/ui/Navbar/Navbar";
import Bar from "../components/ui/Bar/Bar";

// Algorithms
import {
  MergeSort,
  InsertionSort,
  QuickSort,
  BubbleSort,
  SelectionSort,
} from "../components/algorithms";

function Productpage() {
  const [array, setArray] = useState([]);
  const [arraySteps1, setArraySteps1] = useState([]);
  const [arraySteps2, setArraySteps2] = useState([]);
  const [colorSteps1, setColorSteps1] = useState([]);
  const [colorSteps2, setColorSteps2] = useState([]);
  const [currentStep1, setCurrentStep1] = useState(0);
  const [currentStep2, setCurrentStep2] = useState(0);
  const [arraySize, setArraySize] = useState(15);
  const [delay, setDelay] = useState(50);
  const [algorithm1, setAlgorithm1] = useState("");
  const [algorithm2, setAlgorithm2] = useState("");
  const [timeouts, setTimeouts] = useState([]);
  const [startGeneratingSteps, setStartGeneratingSteps] = useState(false);
  const [sortingTime1, setSortingTime1] = useState(0);
  const [sortingTime2, setSortingTime2] = useState(0);
  const [isSortingFinished, setIsSortingFinished] = useState(false);

  const getDelay = (arraySize) => {
    return Math.floor(1000 / arraySize);
  };

  const handleArraySizeAndSpeedChange = (newArraySize) => {
    const size = parseInt(newArraySize);
    const newDelay = getDelay(size);
    setArraySize(size);
    setDelay(newDelay);
  };

  const generateRandomArray = () => {
    let randomArray = [];
    for (let i = 0; i < arraySize; i++) {
      randomArray.push(Math.floor(Math.random() * 100) + 10);
    }
    return randomArray;
  };

  const clearKey = () => {
    let blankKey = new Array(arraySize).fill(0);
    setColorSteps1([blankKey]);
    setColorSteps2([blankKey]);
  };

  const generateSteps = () => {
    let arr1 = [...array];
    let arr2 = [...array];
    let steps1 = [array.slice()];
    let steps2 = [array.slice()];
    let clrSteps1 = [...colorSteps1];
    let clrSteps2 = [...colorSteps2];

    // Catat waktu eksekusi untuk algoritma pertama
    
    sort(arr1, steps1, clrSteps1, algorithm1, setSortingTime1);
    const endTime1 = performance.now();
    setSortingTime1(endTime1);

    // Catat waktu eksekusi untuk algoritma kedua
    
    sort(arr2, steps2, clrSteps2, algorithm2, setSortingTime2);
    const endTime2 = performance.now();
    setSortingTime2(endTime2);

    setArraySteps1(steps1);
    setArraySteps2(steps2);
    setColorSteps1(clrSteps1);
    setColorSteps2(clrSteps2);
    setStartGeneratingSteps(false);
  };

  const sort = (array, arraySteps, colorSteps, algorithm) => {
    switch (algorithm) {
      case "Bubble Sort":
        BubbleSort(array, arraySteps, colorSteps);
        break;
      case "Insertion Sort":
        InsertionSort(array, arraySteps, colorSteps);
        break;
      case "Merge Sort":
        MergeSort(array, arraySteps, colorSteps);
        break;
      case "Selection Sort":
        SelectionSort(array, arraySteps, colorSteps);
        break;
      case "Quick Sort":
        QuickSort(array, arraySteps, colorSteps);
        break;
    }
  };

  const clearTimeouts = () => {
    timeouts.forEach((timeout) => clearTimeout(timeout));
    setTimeouts([]);
  };

  const initialize = () => {
    const newArray = generateRandomArray();
    setArray(newArray);
    setArraySteps1([newArray]);
    setArraySteps2([newArray]);
    setCurrentStep1(0);
    setCurrentStep2(0);
    setDelay(getDelay(arraySize));
    clearKey();
    clearTimeouts();
    setStartGeneratingSteps(true);
    setIsSortingFinished(false);
    setSortingTime1(0);
    setSortingTime2(0);
  };

  const initialize_with_current_array = () => {
    const arrayCopy = array.slice();
    setArraySteps1([arrayCopy]);
    setArraySteps2([arrayCopy]);
    setCurrentStep1(0);
    setCurrentStep2(0);
    setDelay(getDelay(arraySize));
    clearKey();
    clearTimeouts();
    setStartGeneratingSteps(true);
    setIsSortingFinished(false);
    setSortingTime1(0);
    setSortingTime2(0);
  };

  const startSorting = () => {
    let timeoutsArray = [];
    let currStep1 = currentStep1;
    let currStep2 = currentStep2;
    if (
      currentStep1 === arraySteps1.length - 1 &&
      currentStep2 === arraySteps2.length - 1
    ) {
      return false;
    }
    for (let i = 0; i < arraySteps1.length; i++) {
      let timeout = setTimeout(
        () => {
          setArray([...arraySteps1[i]]);
          setCurrentStep1(currStep1++);
          if (i === arraySteps1.length - 1) {
            setIsSortingFinished(true);
          }
        },
        delay * (i + 1),
      );
      timeoutsArray.push(timeout);
    }
    for (let i = 0; i < arraySteps2.length; i++) {
      let timeout = setTimeout(
        () => {
          setArray([...arraySteps2[i]]);
          setCurrentStep2(currStep2++);
          if (i === arraySteps2.length - 1) {
            setIsSortingFinished(true);
          }
        },
        delay * (i + 1),
      );
      timeoutsArray.push(timeout);
    }
    setTimeouts(timeoutsArray);
  };

  const getBarWidth = () => {
    return Math.floor(500 / arraySize);
  };

  const bars1 = arraySteps1[currentStep1]?.map((number, index) => {
    return (
      <Bar
        key={index}
        index={index}
        length={number}
        width={getBarWidth()}
        color={colorSteps1[currentStep1][index]}
      />
    );
  });

  const bars2 = arraySteps2[currentStep2]?.map((number, index) => {
    return (
      <Bar
        key={index}
        index={index}
        length={number}
        width={getBarWidth()}
        color={colorSteps2[currentStep2][index]}
      />
    );
  });

  useEffect(() => {
    initialize();
  }, [arraySize]);

  useEffect(() => {
    if (startGeneratingSteps) {
      generateSteps();
    }
  }, [startGeneratingSteps]);

  useEffect(() => {
    initialize_with_current_array();
  }, [algorithm1, algorithm2]);

  return (
    <div className="flex min-h-screen min-w-min flex-col items-center justify-between bg-slate-800 font-inter">
      <Navbar
        handleArraySizeAndSpeedChange={handleArraySizeAndSpeedChange}
        arraySize={arraySize}
        generateNewArray={initialize}
        setAlgorithm1={setAlgorithm1}
        setAlgorithm2={setAlgorithm2}
        startSorting={startSorting}
        sortingTime1={sortingTime1}
        sortingTime2={sortingTime2}
        algorithm1={algorithm1}
        algorithm2={algorithm2}
        isSortingFinished={isSortingFinished}
      />
      <div className="flex max-w-4xl flex-row items-center justify-center">
        <div className="mr-4 flex h-96 w-3/4 rotate-180 flex-row justify-evenly overflow-visible">
          {bars1}
        </div>
        <div className="mr-4 flex h-96 w-3/4 rotate-180 flex-row justify-evenly overflow-visible">
          {bars2}
        </div>
      </div>
    </div>
  );
}

export default Productpage;
