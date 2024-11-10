# Water Jug Challenge

## Description
This application solves the *Water Jug Challenge* problem, where the goal is to measure a specific amount of water using two jugs with different capacities. The app allows the user to input the capacities of the two jugs (X and Y) and the target amount (Z), and it will provide the sequence of steps needed to measure exactly Z gallons of water, or indicate if it is impossible.

## Algorithm
The algorithm used to solve the problem is based on the *Bézout’s Identity* theorem, which states that for two integers, X and Y, if the greatest common divisor (GCD) of X and Y divides the target amount Z, then it is possible to measure Z gallons. If not, no solution exists.

The app simulates the operations of filling, emptying, and transferring water between the two jugs to reach the desired amount. It records each step and displays it in the UI.

## Features
- Input the capacities of the two jugs (X and Y) and the target amount of water (Z).
- Get a step-by-step solution for how to measure the exact amount of water, or see a "No Solution" message if it's impossible.
- Operations include: Fill, Empty, and Transfer between jugs.
- Displays the current amount of water in each jug at each step.

## Installation & Usage
1. Clone the repository:

  git clone https://github.com/your-username/water-jug-challenge.git

2. Navigate to the project directory:

  cd water-jug-challenge

3. Install dependencies:

  npm install

4. Start the development server:

  npm run dev

The app will be available at http://localhost:5173/