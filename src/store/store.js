import { rootSaga } from "../saga";
import { watcherUsers } from "../saga/myuser";
import counterslice from "../slice/counterslice";
import myuserslice from "../slice/myuserslice";
import userSlice from "../slice/userSlice";
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware  from 'redux-saga'


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({ reducer: {
    counter: counterslice,
    users: userSlice,
    myusers: myuserslice

},

middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
}




)

sagaMiddleware.run(rootSaga);



