import { Map, fromJS } from 'immutable';
import { setPlaceholders } from './executePlaceholderSaga';

const initialState = Map({
    placeholders: []
});

const executePlaceholdersReducer = (state = initialState, action) => {
    if (action.type === setPlaceholders) {
        return state.merge({
            placeholders: fromJS(action.placeholders)
        })
    } else {
        return state;
    }
};

export default executePlaceholdersReducer;
