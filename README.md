# Asynchronous JavaScript - Bored API Fetch

#Exercise 1

A simple JavaScript script that demonstrates how to make asynchronous network requests using the Fetch API. It connects to the Bored API to retrieve and log random activity suggestions.

## Features

- **Fetch API**: Makes asynchronous HTTP requests to a REST API.
- **Error Handling**: Validates server responses (`response.ok`) and catches network errors.
- **JSON Parsing**: Converts raw network streams into usable JavaScript objects.

# Exercise 2: Async/Await and Callbacks

This exercise enhances the asynchronous workflow by refactoring the `getBoredActivity` function from Promises (`.then()`) to modern `async/await` syntax. It also introduces code decoupling using a callback function pattern.

## Features

- **Async/Await Syntax**: Eliminates promise chaining for cleaner, synchronous-looking asynchronous code.
- **Try/Catch Blocks**: Implements robust error handling for network and parsing failures.
- **Callback Architecture**: Decouples the data fetching logic from the data presentation layer.
