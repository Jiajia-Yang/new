import { handleActions } from 'redux-actions'

const initState = () => ({ })
export const demoData = handleActions({
  'request demo'(state, action) {
    return { ...state, loading: true }
  },
  'receive demo'(state, action) {
    const { req, res } = action.payload
    return { data: res, loading: false }
  },
}, initState())

