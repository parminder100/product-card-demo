module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/$1", // if you use @ alias
    },
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest", // let Babel transform JS/JSX
    },
};  