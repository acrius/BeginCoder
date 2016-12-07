import { createStore, applyMiddleware } from 'redux'
import root_reducer from '../reducers'

export default (initial_state) => {
    createStore(root_reducer, initial_state);
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const next_root_reducer = require('../reducers');
            store.replaceReducer(next_root_reducer);
        });
    }
    return store;
}
