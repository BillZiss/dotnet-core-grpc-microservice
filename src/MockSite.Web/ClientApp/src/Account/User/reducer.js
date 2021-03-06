import { handleActions } from 'redux-actions'
import actions from './action'

const initialState = {
  current: undefined,
  list: []
}

export default handleActions(
  {
    [actions.fetchListSuccess]: (state, action) => ({
      ...state,
      list: action.payload
    }),
    [actions.fetchCurrentRequest]: state => ({
      ...state,
      current: undefined
    }),
    [actions.fetchCurrentSuccess]: (state, action) => ({
      ...state,
      current: action.payload
    }),
    [actions.deleteSuccess]: (state, { payload: ids }) => ({
      ...state,
      list: state.list.filter(item => !ids.includes(item.id))
    })
  },
  initialState
)
