// redux-persist-config.js

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can blacklist specific reducers that you don't want to persist
  blacklist: ['chat'], // Example of blacklisting the 'chat' reducer
};

const persistedReducer = (rootReducer) => persistReducer(persistConfig, rootReducer);

export default persistedReducer;
