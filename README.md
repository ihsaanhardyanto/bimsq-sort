# BIMSQ Sort - Interactive Sorting Algorithm Visualizer

## Team Members (Kelompok 1)

1. Reynaldo Marchell Bagas Adji - 2602138214
2. Sessario Ammar Wibowo - 2602140433
3. William Prasetyo - 2602132103
4. Ihsaan Hardyanto - 2602114694
5. Richard Yohanes - 2602139103

## Overview

BIMSQ is an abbreviation for **B**ubble Sort, **I**nsertion Sort, **M**erge Sort, **S**election Sort, and **Q**uick Sort. This interactive web application provides real-time visualization of these five fundamental sorting algorithms, allowing users to compare their performance and understand how they work step-by-step.

### Key Features

- **Dual Algorithm Comparison**: Visualize and compare two sorting algorithms simultaneously
- **Interactive Controls**: Adjust array size, sorting speed, and algorithm selection in real-time
- **Performance Metrics**: Track sorting time for each algorithm
- **Responsive Design**: Optimized for various screen sizes with dynamic bar scaling
- **Real-time Visualization**: Watch sorting steps unfold with color-coded comparisons and swaps
- **Reset Functionality**: Reset sorting state without regenerating the array

### Preview

![Preview](/public/images/preview.png)

### Supported Algorithms

1. **Bubble Sort** - Simple comparison-based algorithm with O(n²) complexity
2. **Insertion Sort** - Efficient for small datasets with O(n²) average complexity
3. **Merge Sort** - Divide-and-conquer algorithm with O(n log n) complexity
4. **Selection Sort** - Selection-based algorithm with O(n²) complexity
5. **Quick Sort** - Efficient divide-and-conquer with O(n log n) average complexity

### Technology Stack

- **Frontend Framework**: React 18 with functional components and hooks
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS for utility-first styling
- **UI Components**: Shadcn UI and Radix UI for accessible components
- **Icons**: Lucide React and React Icons
- **Routing**: React Router DOM for navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/reynaldomarchell/bimsq-sort.git
# or
git clone https://github.com/ihsaanhardyanto/bimsq-sort.git
```

2. **Navigate to project directory**

```bash
cd bimsq-sort
```

3. **Install dependencies**

```bash
npm install
# or
yarn install
```

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser and visit** `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Usage Guide

### Basic Controls

1. **Select Algorithms**: Choose two different sorting algorithms from the dropdown menus
2. **Adjust Array Size**: Use the slider to change the number of elements (3-50)
3. **Start Sorting**: Click the "Sort" button to begin visualization
4. **Reset**: Click the "Reset" button to clear sorting state without changing array values
5. **Generate New Array**: Click "Generate New Array" to create a new random dataset

### Features in Detail

#### Dynamic Array Sizing

- Array size ranges from 3 to 50 elements
- Bar width automatically adjusts based on array size
- Optimal visualization for arrays ≤10 elements with wider bars

#### Performance Timing

- Real-time sorting time tracking for both algorithms
- Automatic timer reset when changing array size or algorithms
- Performance comparison between different sorting methods

#### Visual Feedback

- Color-coded bars indicate comparison and swap operations
- Smooth animations show sorting progress
- Responsive design adapts to different screen sizes

## Project Structure

```
bimsq-sort/
├── public/
│   └── images/
│       └── preview.png
├── src/
│   ├── components/
│   │   ├── algorithms/          # Sorting algorithm implementations
│   │   └── ui/
│   │       ├── Bar/            # Individual bar visualization
│   │       ├── Navbar/         # Navigation and controls
│   │       └── SortingTimeDisplay/  # Performance metrics
│   ├── pages/
│   │   └── Product.jsx         # Main sorting visualization page
│   └── main.jsx               # Application entry point
├── package.json
└── README.md
```

## Algorithm Implementations

Each sorting algorithm is implemented with step-by-step tracking:

- **Step Generation**: Captures each comparison and swap operation
- **Color Coding**: Tracks which elements are being compared or modified
- **Performance Metrics**: Measures actual sorting time
- **Visual States**: Maintains visual representation for smooth animation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built as part of an educational project to demonstrate sorting algorithm concepts
- Inspired by algorithm visualization tools and educational resources
- Thanks to the React and Vite communities for excellent development tools
