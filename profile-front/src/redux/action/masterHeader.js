// const InitState = {
//   mhno:undefined,
//   link:undefined,
//   title:undefined,
//   class_name:undefined,
//   order_by:undefined,
//   hide_yn:undefined,
//   gubun:undefined,
// };
const InitState = []

function masterHeaderReducer(state = InitState, action) {
  switch (action.type) {
    case "addMasterHeader": {
      return [...state, action.masterHeader]
    }
    case "setAllMasterHeader": {
      return action.masterHeader
    }
    case "updateMasterHeader": {
      return {[action.index] : action.masterHeader}
    }
    default:
      return state;
  }
}

export default masterHeaderReducer;