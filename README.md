# Brew

## Overview

This repo contains both the frontend and backend of our app.

### `frontend`

An [Expo](https://expo.dev/) project.

This contains our frontend UI for our app.

The web development server runs at `http://localhost:8081`. If this port is taken, the next available port will be used.

### `backend`

A [FastAPI](https://fastapi.tiangolo.com/) project.

This contains the backend APIs for our app.

The development server runs at `http://localhost:8000`. If this port is taken, the next available port will be used.

## First-Time Setup for Local Development

### Expo

1.  Ensure you're in `frontend`.
    ```shell
    cd frontend
    ```
2.  Install dependencies.
    ```shell
    npm i
    ```

### FastAPI

1.  Ensure you're in `backend`.
    ```shell
    cd backend
    ```
2.  Create a virtual environment. A Python virtual environment allows you to install packages specifically for this project without interfering with your system-wide Python packages.
    ```shell
    python3 -m venv .venv
    ```
3.  Activate the virtual environment.

    VS Code may prompt to automatically select the newly created virtual environment.
    Otherwise, for Mac/Linux, run

    ```shell
    source .venv/bin/activate
    ```

    and for Windows, run

    ```shell
    .\.venv\scripts\activate
    ```

4.  Install dependencies
    ```shell
    pip install -r requirements.txt -r requirements-dev.txt
    ```

## Develop

To start development, launch the development servers on the frontend and backend.

### Starting the frontend development server

```shell
cd frontend
npm start
```

This will start Expo's development server, and the frontend should now be
accessible at `http://localhost:8081`.

### Starting the backend development server

```shell
cd backend
npm start
```

This will start FastAPI's development server running on a Uvicorn server on port 8000.

## Helpful VSCode Extensions

-   [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) for Python linting, intellisense, etc.
-   [Mypy](https://marketplace.visualstudio.com/items?itemName=ms-python.mypy-type-checker) for Python type checking
-   [Black](https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter) for Python code formatting
-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for code formatting on file save or set to a keybind
