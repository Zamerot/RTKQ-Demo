import {configureStore} from '@reduxjs/toolkit';

import {nameApi} from '../redux/NameApi/nameApi';

export const store = configureStore({
  reducer: {
    [nameApi.reducerPath]: nameApi.reducer,
  },

  middleware: middleWare =>
    middleWare({serializableCheck: false}).concat(nameApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
