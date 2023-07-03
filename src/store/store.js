import counterslice from "../slice/counterslice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({ reducer: {
    counter: counterslice }})


