import { handleActions } from 'redux-actions';
import * as actions from '../../actions/index';

export default handleActions({
    [actions.switchFilter](state) {
        return {filter: !state.filter};
    }
}, {filter: true});