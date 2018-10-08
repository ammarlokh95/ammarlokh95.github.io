
export default (state = {navTo:'HOME'}, action) => {
    switch (action.type) {
     case 'NAVIGATION_ACTION':
     var result = Object.assign({}, state, {navTo: action.navTo})
     return result
     default:
      return state
    }
   }