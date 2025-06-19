function RangeSlider({ onChange, value }) {
  return (
    <div>
      <div className="flex flex-col content-center items-center">
        <h4 className="m-0 mb-2">Set Array Size ({value})</h4>
        <div className="flex content-center rounded-xl border-4 border-indigo-800 bg-slate-700 p-1.5 hover:bg-slate-600">
          <input
            type="range"
            min={5}
            max={100}
            step={5}
            onChange={onChange}
            title={value}
            value={value}
            className="border-2 border-white accent-indigo-800"
          />
        </div>
      </div>
    </div>
  );
}

export default RangeSlider;
