import { useNavigate } from "react-router-dom";
import RangeSlider from "../RangeSlider/RangeSlider";
import SelectAlgorithm from "../SelectAlgorithm/SelectAlgorithm";

function VerticalBar() {
  return <div className="w-1 h-20 bg-slate-400"></div>;
}

function Navbar(props) {
  const navigate = useNavigate();

  // generates a new random array
  const generateNewArrayHandler = () => {
    props.generateNewArray();
  };

  // lets the user change size of array and speed of sorting
  const handleArraySizeAndSpeedChange = (event) => {
    props.handleArraySizeAndSpeedChange(event.target.value);
  };

  // handle changing of algorithm
  const handleSortingAlgorithmChange = (event) => {
    props.setAlgorithm(event.target.value);
  };

  // starts playing the sorting algorithm
  const sortArrayHandler = () => {
    props.startSorting();
  };

  return (
    <div className="bg-slate-900 text-white min-w-full flex flex-col items-center justify-center">
      <div>
        <button
          className="absolute left-8 top-8 p-2 text-slate-200 rounded-xl bg-indigo-800 hover:bg-indigo-700"
          onClick={() => navigate("/", { replace: true })}
        >
          ⬅️Back
        </button>
        <h1 className="text-3xl font-bold py-5">BIMSQ Sorting Visualizer</h1>
      </div>

      <div className="flex flex-row items-center justify-between p-4 gap-4 md:gap-8">
        <div>
          <RangeSlider
            onChange={handleArraySizeAndSpeedChange}
            value={props.arraySize}
          />
        </div>

        <div>
          <VerticalBar />
        </div>

        <div>
          <button
            className="p-1 w-24 md:w-40 inline bg-slate-700 text-white border-4 border-solid border-indigo-800 rounded-xl text-base hover:bg-slate-600"
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
            className="p-1 w-20 md:w-28 inline bg-slate-700 text-white border-4 border-solid border-indigo-800 rounded-xl text-base hover:bg-slate-600"
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
