import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/PostsReducers.js'
import thunk from 'redux-thunk'

export default (initialState) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
