import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import RangeSlider from "../RangeSlider/RangeSlider";
import SelectAlgorithm from "../SelectAlgorithm/SelectAlgorithm";
import SortingTimeDisplay from "../SortingTimeDisplay/SortingTimeDisplay";

function VerticalBar() {
  return <div className="h-20 w-0.5 bg-slate-400"></div>;
}

function Navbar({
  arraySize,
  handleArraySizeAndSpeedChange,
  generateNewArray,
  startSorting,
  setAlgorithm1,
  setAlgorithm2,
  sortingTime1,
  sortingTime2,
  algorithm1,
  algorithm2,
  isSortingFinished,
  resetSorting,
}) {
  const navigate = useNavigate();

  // generates a new random array
  const generateNewArrayHandler = () => {
    generateNewArray();
  };

  // lets the user change size of array and speed of sorting
  const handleSizeAndSpeedChange = (event) => {
    handleArraySizeAndSpeedChange(event.target.value);
  };

  // handle changing of algorithm
  const handleSortingAlgorithmChange1 = (value) => {
    setAlgorithm1(value);
  };

  const handleSortingAlgorithmChange2 = (value) => {
    setAlgorithm2(value);
  };

  // starts playing the sorting algorithm
  const sortArrayHandler = () => {
    startSorting();
  };

  return (
    <div className="flex h-52 min-w-full flex-col flex-wrap items-center justify-center bg-blue-300 text-white md:bg-slate-900">
      <div>
        <button
          className="absolute left-8 top-8 flex items-center justify-between rounded-md bg-indigo-800 px-2 py-1 font-semibold text-slate-200 transition-all duration-300 ease-in-out hover:bg-indigo-700"
          onClick={() => navigate("/")}
        >
          <IoChevronBack />
          <p>Back</p>
        </button>
        <h1 className="text-3xl font-bold">BIMSQ Sorting Visualizer</h1>
      </div>

      <div className="flex flex-row items-center justify-between gap-4 p-4 md:gap-8">
        <div>
          <RangeSlider onChange={handleSizeAndSpeedChange} value={arraySize} />
        </div>

        <div>
          <VerticalBar />
        </div>

        <div className="flex flex-col content-center items-center">
          <h4 className="m-0 mb-2">Generate Array</h4>
          <button
            className="inline w-24 rounded-xl border-4 border-solid border-indigo-800 bg-slate-700 p-1 text-base text-white transition-all duration-300 ease-in-out hover:bg-slate-600 md:w-40"
            onClick={generateNewArrayHandler}
          >
            Generate
          </button>
        </div>

        <div>
          <VerticalBar />
        </div>

        <div>
          <SelectAlgorithm
            number={1}
            onChange={handleSortingAlgorithmChange1}
          />
        </div>

        <div>
          <SelectAlgorithm
            number={2}
            onChange={handleSortingAlgorithmChange2}
          />
        </div>

        <div>
          <VerticalBar />
        </div>

        <div className="flex flex-col content-center items-center">
          <h4 className="m-0 mb-2">Sort Array</h4>
          <div className="flex flex-row gap-2">
            <button
              className="inline w-20 rounded-xl border-4 border-solid border-indigo-800 bg-slate-700 p-1 text-base text-white transition-all duration-300 ease-in-out hover:bg-slate-600 md:w-28"
              onClick={sortArrayHandler}
            >
              Sort
            </button>
            <button
              className="inline w-20 rounded-xl border-4 border-solid border-red-800 bg-slate-700 p-1 text-base text-white transition-all duration-300 ease-in-out hover:bg-red-600 md:w-28"
              onClick={() => {
                console.log("Reset button clicked");
                resetSorting();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {isSortingFinished && (
        <SortingTimeDisplay
          sortingTime1={sortingTime1}
          sortingTime2={sortingTime2}
          algorithm1={algorithm1}
          algorithm2={algorithm2}
        />
      )}
    </div>
  );
}

export default Navbar;
