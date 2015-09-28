import {UPDATE_PROFILE} from '../constants/BlogConstants';

const initialState = {
  firstName: 'Milos',
  lastName: 'Dzepina',
  punchLine: 'JavaScript Engineer @PSTech'
};

export default function posts(state = {}, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return Object.assign({}, state, action.profile);

    default:
      return state;
  }
}
