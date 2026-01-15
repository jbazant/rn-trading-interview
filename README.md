# Suite Mobile - Trading Team - Interview template

## Installation
### Prerequisites
- Node.js v20 or higher
- Yarn package manager
- Xcode (for iOS development)
- Android Studio (for Android development)

```
yarn install
```

### Running the app
To start the development server and run the web version of the app:
```
yarn web
```

To run the app on an iOS simulator:
```
yarn ios
```

To run the app on an Android emulator:
```
yarn android
```

### Running checks
#### Linting

```
yarn lint
```

#### Type checking

```
yarn typecheck
```

#### Tests

```
yarn test
```

You can also run tests in watch mode:
```
yarn test:watch
```

## Assignments
1. Reload rates every 10 seconds.
2. Display how long ago the rates were last updated.
3. Implement error handling for network requests.
    - You can simulate network errors by updating `NETWORK_ERROR_RATE` and `NETWORK_DELAY` constants in `src/utils/fetchRate.ts`.
4. Add unit tests for the new functionality.

### Notes
- Do not hesitate to fix any existing issues you may encounter. 
- Code structure and types are not written in stone and can be changed as you see fit.
- When updating tests note that `RatesProviderForTests` is often used instead of `RatesProvider`.
