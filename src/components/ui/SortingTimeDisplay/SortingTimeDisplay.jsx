function SortingTimeDisplay({
  sortingTime1,
  sortingTime2,
  algorithm1,
  algorithm2,
}) {
  return (
    <div className="flex h-full w-full items-center justify-center gap-2 rounded-md border bg-slate-700 px-2 py-1 text-xl text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-slate-600">
      <p>
        Sorting time for {algorithm1}:{" "}
        <span className="text-orange-400">
          {(sortingTime1 / 1000).toFixed(2)}s
        </span>
      </p>

      <p>
        Sorting time for {algorithm2}:{" "}
        <span className="text-orange-400">
          {(sortingTime2 / 1000).toFixed(2)}s
        </span>
      </p>
    </div>
  );
}

export default SortingTimeDisplay;
