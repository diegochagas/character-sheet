import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: '3det',
      storage,
      whitelist: ['advantages', 'disadvantages'],
    },
    reducers
  );

  return persistedReducer;
};
