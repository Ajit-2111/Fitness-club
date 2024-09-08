# Fitness Club

**Fitness Club** is a web application that helps users explore a variety of exercises using data fetched from the ExerciseDB API. Users can search for exercises, filter them based on body parts, and get detailed instructions on how to perform each exercise.

## Features

- **Search Exercises**: Users can search for exercises by name or keyword.
- **Sort by Body Part**: Exercises can be sorted by specific body parts such as arms, legs, chest, etc.
- **Exercise Instructions**: For each exercise, detailed instructions on how to perform the exercise are provided.

## Tech Stack

- **Frontend**: React.js
- **API**: ExerciseDB from RapidAPI
- **Styling**: CSS/Material-UI
- **Environment Variables**: `.env` file for storing API keys.

## Installation and Setup

Follow these steps to get the Fitness Club app running on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ajit-2111/Fitness-club.git
   cd fitness-club
   ```

2. **Install dependencies**:
   Make sure you have `npm` or `yarn` installed. Run the following command:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Set up environment variables**:
   You need to create a `.env` file in the root of your project to store the API key for ExerciseDB from RapidAPI.

   Create a `.env` file:
   ```bash
   touch .env
   ```

   Inside the `.env` file, add your API key:
   ```bash
   REACT_APP_RAPID_API_KEY=your_rapidapi_key_here
   ```

4. **Run the app**:
   Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

5. **Open the app**:
   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## How to Use

1. **Search for Exercises**:
   - Use the search bar to find exercises by entering a keyword (e.g., "push-up", "squat").
   
2. **Sort by Body Parts**:
   - Click on the body part filter to view exercises targeting specific muscle groups like arms, legs, back, etc.
   
3. **View Exercise Details**:
   - After selecting an exercise, you’ll be able to view detailed instructions and tips on how to perform the exercise correctly.

## API Integration

This app uses the [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) from RapidAPI to fetch exercise data such as:
- Exercise names
- Body parts involved
- Equipment required
- Detailed instructions for performing each exercise

## Environment Variables

The API key for ExerciseDB is stored securely in the `.env` file. Make sure to:
- Add the `.env` file to your `.gitignore` to prevent accidental commits of sensitive information.

Example `.env` setup:
```env
REACT_APP_RAPID_API_KEY=your_rapidapi_key_here
```

## Dependencies

- **React.js**: A JavaScript library for building user interfaces.
- **Material-UI**: For component-based styling and UI elements.

## Contributing

If you'd like to contribute, feel free to submit a pull request! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

