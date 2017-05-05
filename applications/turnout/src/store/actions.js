import * as types from './mutation-types'

export const signIn = ({commit}, user_payload) => {
  commit(types.SIGN_IN, user_payload)
}

export const signOut = ({commit}) => {
  commit(types.SIGN_OUT)
}
