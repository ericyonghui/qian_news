export default {
  namespace: 'headerModel',
  state: {
    loginFlag: false,
    nickname:''
  },
  effects: {
    * queryLoginFlag({payload}, {call, put}) {
      console.info(payload);
      yield put({type: 'setLoginFlag', payload: {
          nickname:payload.nickname,
          loginFlag: payload.loginFlag
        }});
    },
  },
  reducers: {
    setLoginFlag(state, { payload }) {
      return {
        ...state,
        loginFlag: payload.loginFlag,
        nickname: payload.nickname
      };
    },
  }
}
