import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectAlgorithm({ onChange, number }) {
  return (
    <div className="flex flex-col content-center items-center">
      <h4 className="m-0 mb-2">Select Algorithm {number}</h4>

      <Select onValueChange={onChange} name={`algorithms-${number}`}>
        <SelectTrigger
          id={`algorithms-${number}`}
          className="border-border-indigo-800 h-fit w-28 rounded-xl border-4 border-solid border-indigo-800 bg-slate-700 p-1 text-center text-base font-normal text-white transition-all duration-300 ease-in-out hover:bg-slate-600 md:w-40"
        >
          <SelectValue placeholder="Click here" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Bubble Sort">Bubble Sort</SelectItem>
          <SelectItem value="Insertion Sort">Insertion Sort</SelectItem>
          <SelectItem value="Merge Sort">Merge Sort</SelectItem>
          <SelectItem value="Selection Sort">Selection Sort</SelectItem>
          <SelectItem value="Quick Sort">Quick Sort</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectAlgorithm;
