function SelectAlgorithm({ onChange }) {
  return (
    <div className="flex flex-col content-center items-center">
      <h4 className="m-0 mb-2">Select Algorithm</h4>
      <select
        name="algorithms"
        id="algorithms"
        className="text-center font-bold h-fit w-28 md:w-40 p-1 bg-slate-700 text-white border-4 border-solid border-indigo-800 rounded-xl text-base hover:bg-slate-600 transition-all duration-300 ease-in-out"
        onChange={onChange}
      >
        <option value="">Click here</option>
        <option value="Bubble Sort">Bubble Sort</option>
        <option value="Insertion Sort">Insertion Sort</option>
        <option value="Merge Sort">Merge Sort</option>
        <option value="Selection Sort">Selection Sort</option>
        <option value="Quick Sort">Quick Sort</option>
      </select>
    </div>
  );
}

export default SelectAlgorithm;
