import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import RangeSlider from "../RangeSlider/RangeSlider";
import SelectAlgorithm from "../SelectAlgorithm/SelectAlgorithm";

function VerticalBar() {
  return <div className="w-1 h-20 bg-slate-400"></div>;
}

function Navbar({
  arraySize,
  handleArraySizeAndSpeedChange,
  generateNewArray,
  startSorting,
  setAlgorithm,
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
  const handleSortingAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
  };

  // starts playing the sorting algorithm
  const sortArrayHandler = () => {
    startSorting();
  };

  return (
    <div className="bg-slate-900 text-white min-w-full flex flex-col items-center justify-center">
      <div>
        <button
          className="absolute left-8 top-8 px-2 py-1 text-slate-200 rounded-md bg-indigo-800 hover:bg-indigo-700 flex justify-between items-center transition-all duration-300 ease-in-out font-semibold"
          onClick={() => navigate("/")}
        >
          <IoChevronBack />
          <p>Back</p>
        </button>
        <h1 className="text-3xl font-bold py-5">BIMSQ Sorting Visualizer</h1>
      </div>

      <div className="flex flex-row items-center justify-between p-4 gap-4 md:gap-8">
         {/*// TODO:  Disini tempat custom angka array dari berapa sampai berapa */}
      
        <div>
          <RangeSlider onChange={handleSizeAndSpeedChange} value={arraySize} />
        </div>

        <div>
          <VerticalBar />
        </div>

        <div>
          <button
            className="p-1 w-24 md:w-40 inline bg-slate-700 text-white border-4 border-solid border-indigo-800 rounded-xl text-base hover:bg-slate-600 transition-all duration-300 ease-in-out"
            onClick={generateNewArrayHandler}
          >
            Generate Array
          </button>
        </div>

        <div>
          <VerticalBar />
        </div>

        <div>
          <SelectAlgorithm onChange={handleSortingAlgorithmChange} />
        </div>

        <div>
          <VerticalBar />
        </div>

        <div>
          <button
            className="p-1 w-20 md:w-28 inline bg-slate-700 text-white border-4 border-solid border-indigo-800 rounded-xl text-base hover:bg-slate-600 transition-all duration-300 ease-in-out"
            onClick={sortArrayHandler}
          >
            Sort!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
