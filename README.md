# Location-Search

A simple Google Maps clone built using **React** and **TypeScript** with interactive map functionality. The application allows users to search for locations and interact with a map, similar to Google Maps.

## Features

-   **Search for Locations**: A user can type in a location, such as "New York", into the search panel on the left-hand side.
-   **External API for Location Lookup**: Once the search term is submitted, the application queries an external API to find matching locations worldwide.
-   **Search Results Display**: All the matching locations (with city and country) are displayed under the search bar.
-   **Map Interaction**: Each search result has a "Go" button. When clicked, the map automatically pans and zooms in to center on the selected location.

## Technologies Used

-   **TypeScript**: Entire project is built with TypeScript for type safety and better development experience.
-   **React**: The project uses React as the primary UI library.
-   **Leaflet**: A lightweight, open-source JavaScript library for interactive maps.
-   **React Leaflet**: Provides React components for Leaflet maps, making it easier to use Leaflet within a React application.
-   **Tailwind CSS**: Utility-first CSS framework used for styling the user interface.

## Packages

-   `@types/leaflet`: Type definitions for the Leaflet library.
-   `leaflet`: The main library for map functionality.
-   `react`: The core library for building UI components.
-   `react-dom`: Enables React to render components in the browser DOM.
-   `react-leaflet`: A wrapper for integrating Leaflet with React.
-   `tailwind`: A CSS framework for building fast and responsive UIs.

## How It Works

1. **Search Panel**: On the left-hand side, users can input a location in the search bar and press Enter.
2. **Search Results**: A list of locations matching the search term is displayed below the search bar, including the city and country.
3. **Go Button**: Each search result has a "Go" button. When clicked, the map pans to the corresponding location and zooms in for a better view.
4. **Map Display**: The map is displayed on the right-hand side and reacts to user interactions from the search results.

## Project Structure

-   **/src**
    -   **/components**
        -   LocationSearch.tsx - Search panel and input handling. Displays search results and Go button functionality.
        -   Map.tsx - Handles map rendering and panning/zooming.
    -   **/api**
        -   search.ts - Handles API calls for location search.
        -   Place.ts - Typescript interface for place object.
    -   App.tsx - Main app component.

## Installation and Setup

1. **Clone the repository**:

    ```bash
    https://github.com/olaide-hok/Location-Search.git
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm start
    ```

4. **Open in your web browser**: Visit <http://localhost:5173> to interact with the map and search features.

## Further Imporovements

-   **Location Pins**: Add pins or markers on the map for each search result.
-   **Search History**: Implement a feature that saves the user's search history.
-   **Error Handling**: Add proper error handling for API calls and empty search results.
