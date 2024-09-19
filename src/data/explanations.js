export default [
  {
    title: "Bubble Sort",
    description:
      "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
    step: "In Bubble Sort algorithm,\n• Traverse from left and compare adjacent elements and the higher one is placed at right side.\n• In this way, the largest element is moved to the rightmost end at first.\n• This process is then continued to find the second largest and place it and so on until the data is sorted.",
    complexity: ["Best: Ω(n)", "Average: θ(n^2)", "Worst: O(n^2)", "Space: O(1)"],
  },
  {
    title: "Insertion Sort",
    description:
      "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.",
    step: "To sort an array of size N in ascending order,\n• Iterate over the array and compare the current element (key) to its predecessor,\n• If the key element is smaller than its predecessor, compare it to the elements before.\n• Move the greater elements one position up to make space for the swapped element.",
    complexity: ["Best: Ω(n)", "Average: θ(n^2)", "Worst: O(n^2)", "Space: O(1)"],
  },
  {
    title: "Merge Sort",
    description:
      "Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.",
    step: "•  Initially divide the array into two equal halves.\n• These subarrays are further divided into two halves. Then they become array of unit length that can no longer be divided and array of unit length are always sorted.\n• The sorted subarrays are merged together, and we get bigger sorted subarrays.\n• This merging process is continued until the sorted array is built from the smaller subarrays.",
    complexity: ["Best: Ω(n log(n))", "Average: θ(n log(n))", "Worst: O(n log(n))", "Space: O(n)"],
  },
  {
    title: "Selection Sort",
    description:
      "Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. ",
    step: "To perform selection sort on an array of size N:\n• Iterate from the beginning of the array to the second-to-last element.\n•  Find the minimum element in the unsorted portion of the array.\n• Swap the minimum element with the first element in the unsorted portion.\n• Move the boundary between the sorted and unsorted portions one element to the right.\n• Repeat the above steps until the entire array is sorted.",
    complexity: ["Best: Ω(n^2)", "Average: θ(n^2)", "Worst: O(n^2)", "Space: O(1)"],
  },
  {
    title: "Quick Sort",
    description:
      "QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.",
    step: "To perform Quick Sort on an array of size N:\n• Choose an element from the array as the pivot.\n• Partition the array into two sub-arrays, with elements less than the pivot in one sub-array and elements greater than the pivot in the other sub-array.\n•  Recursively apply Quick Sort to the sub-arrays.\n• Combine the sorted sub-arrays and the pivot to obtain the final sorted array.",
    complexity: ["Best: Ω(n log(n))", "Average: θ(n log(n))", "Worst: O(n^2)", "Space: O(log(n))"],
  },
];
