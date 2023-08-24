# QuizMaster Backend README

This document provides details about the backend component of QuizMaster.

## Table of Contents

- [Overview](#overview)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [API Endpoints](#api-endpoints)

## Overview

The backend of QuizMaster serves as the API layer for the frontend. It primarily interacts with the OpenAI service to generate quiz content. The frontend application makes calls to the backend, which in turn fetches and processes data from OpenAI.

## Environment Variables

To run the backend locally or deploy it, certain environment variables need to be set. These are provided in the `.env.sample` file. Here's a brief description of each:

- `OPENAI_API_KEY`: Your OpenAI API key for making requests to the OpenAI service.

Please ensure to set these variables in your environment or in a `.env` file before starting the backend.

## Dependencies

The backend has several dependencies, all of which are listed in the `requirements.txt` file. Here's a brief overview:

- `flask`: A lightweight web application framework. Used for handling API requests and serving responses.
- `openai`: The official client library for the OpenAI service.

## API Endpoints

Here are the main API endpoints that the frontend will interact with:

- **Generate Quiz**:
  - **Endpoint**: `/generate`
  - **Method**: `POST`
  - **Description**: Accepts parameters like number of questions, theme, difficulty, etc., and returns a generated quiz based on those parameters.

_(If there are more endpoints in the future, you can add them in this section.)_