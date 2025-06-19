import { useState, useEffect, useRef, Fragment } from "react";
import Navbar from "../components/ui/Navbar/Navbar";
import Bar from "../components/ui/Bar/Bar";
import SortingTimeDisplay from "../components/ui/SortingTimeDisplay/SortingTimeDisplay";

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
  const [arraySize, setArraySize] = useState(5);
  const [delay, setDelay] = useState(50);
  const [algorithm1, setAlgorithm1] = useState("");
  const [algorithm2, setAlgorithm2] = useState("");
  const [timeouts, setTimeouts] = useState([]);
  const [startGeneratingSteps, setStartGeneratingSteps] = useState(false);
  const [sortingTime1, setSortingTime1] = useState(0);
  const [sortingTime2, setSortingTime2] = useState(0);
  const [isSortingFinished, setIsSortingFinished] = useState(false);

  const [isSorting1Finished, setIsSorting1Finished] = useState(false);
  const [isSorting2Finished, setIsSorting2Finished] = useState(false);
  const [startTime1, setStartTime1] = useState(null);
  const [startTime2, setStartTime2] = useState(null);
  const intervalRef = useRef(null);
  const [visualArray1, setVisualArray1] = useState([]);
  const [visualArray2, setVisualArray2] = useState([]);

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

    sort(arr1, steps1, clrSteps1, algorithm1);
    sort(arr2, steps2, clrSteps2, algorithm2);

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

  const initializeWithCurrentArray = () => {
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
    console.log(
      "StartSorting dipanggil, currentStep1:",
      currentStep1,
      "currentStep2:",
      currentStep2,
    );
    let timeoutsArray = [];
    let currStep1 = currentStep1;
    let currStep2 = currentStep2;

    setIsSorting1Finished(false);
    setIsSorting2Finished(false);

    const actualStartTime1 = performance.now() + delay;
    const actualStartTime2 = performance.now() + delay;

    if (
      currentStep1 === arraySteps1.length - 1 &&
      currentStep2 === arraySteps2.length - 1
    ) {
      console.log("Sorting tidak dijalankan karena sudah selesai.");
      return false;
    }

    for (let i = 0; i < arraySteps1.length; i++) {
      let timeout = setTimeout(
        () => {
          if (i === 0) {
            setStartTime1(performance.now());
          }
          setVisualArray1([...arraySteps1[i]]);
          setCurrentStep1(currStep1++);
          if (i === arraySteps1.length - 1) {
            setIsSorting1Finished(true);
            const finalTime = performance.now() - actualStartTime1;
            setSortingTime1(finalTime);
          }
        },
        delay * (i + 1),
      );
      timeoutsArray.push(timeout);
    }

    for (let i = 0; i < arraySteps2.length; i++) {
      let timeout = setTimeout(
        () => {
          if (i === 0) {
            setStartTime2(performance.now());
          }
          setVisualArray2([...arraySteps2[i]]);
          setCurrentStep2(currStep2++);
          if (i === arraySteps2.length - 1) {
            setIsSorting2Finished(true);
            const finalTime = performance.now() - actualStartTime2;
            setSortingTime2(finalTime);
          }
        },
        delay * (i + 1),
      );
      timeoutsArray.push(timeout);
    }
    setTimeouts(timeoutsArray);
    console.log(
      "Sorting dimulai, jumlah langkah:",
      arraySteps1.length,
      arraySteps2.length,
    );
  };

  const resetSorting = () => {
    console.log("resetSorting dipanggil");
    clearTimeouts();
    setIsSorting1Finished(false);
    setIsSorting2Finished(false);
    setSortingTime1(0);
    setSortingTime2(0);
    setStartTime1(null);
    setStartTime2(null);
    setIsSortingFinished(false);
    setCurrentStep1(0);
    setCurrentStep2(0);
    setStartGeneratingSteps(false);
    setAlgorithm1("");
    setAlgorithm2("");
  };

  useEffect(() => {
    if (
      (!isSorting1Finished || !isSorting2Finished) &&
      (startTime1 || startTime2)
    ) {
      intervalRef.current = setInterval(() => {
        if (!isSorting1Finished && startTime1) {
          setSortingTime1(performance.now() - startTime1);
        }
        if (!isSorting2Finished && startTime2) {
          setSortingTime2(performance.now() - startTime2);
        }
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isSorting1Finished, isSorting2Finished, startTime1, startTime2]);

  useEffect(() => {
    setVisualArray1(arraySteps1[currentStep1] || []);
  }, [arraySteps1, currentStep1]);

  useEffect(() => {
    setVisualArray2(arraySteps2[currentStep2] || []);
  }, [arraySteps2, currentStep2]);

  const getBarWidth = () => {
    if (arraySize <= 10) {
      return Math.min(Math.floor(500 / arraySize), 100);
    } else if (arraySize <= 25) {
      return Math.min(Math.floor(400 / arraySize), 25);
    } else if (arraySize <= 50) {
      return Math.min(Math.floor(350 / arraySize), 15);
    } else if (arraySize <= 100) {
      return Math.min(Math.floor(300 / arraySize), 8);
    } else {
      return Math.max(Math.floor(250 / arraySize), 2);
    }
  };

  const bars1 = visualArray1?.map((number, index) => {
    return (
      <Bar
        key={index}
        index={index}
        length={number}
        width={getBarWidth()}
        color={colorSteps1[currentStep1]?.[index]}
      />
    );
  });

  const bars2 = visualArray2?.map((number, index) => {
    return (
      <Bar
        key={index}
        index={index}
        length={number}
        width={getBarWidth()}
        color={colorSteps2[currentStep2]?.[index]}
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
    initializeWithCurrentArray();
  }, [algorithm1, algorithm2]);

  return (
    <Fragment>
      <div className="flex min-h-screen flex-col bg-slate-800 font-inter">
        <div className="relative z-10 w-full flex-shrink-0">
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
            resetSorting={resetSorting}
          />
        </div>
        <div className="w-full flex-shrink-0">
          <SortingTimeDisplay
            sortingTime1={sortingTime1}
            sortingTime2={sortingTime2}
            algorithm1={algorithm1}
            algorithm2={algorithm2}
          />
        </div>
        <div className="flex min-h-0 w-full flex-1 items-end justify-center bg-slate-800 py-4">
          <div className="flex w-full max-w-7xl items-center justify-center gap-2 px-4 md:gap-6">
            <div className="flex flex-row items-end justify-center px-2">
              {bars1}
            </div>
            <div className="flex flex-row items-end justify-center px-2">
              {bars2}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Productpage;
