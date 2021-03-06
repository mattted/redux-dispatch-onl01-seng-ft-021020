function changeState(state, action){
  console.log('changeState')
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action){
  console.log('dispatch')
  state = changeState(state, action)
  return state
}

function render() {
  console.log('render')
  document.body.textContent = state.count  
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

dispatch(action)
dispatch(action)
dispatch(action)
dispatch(action)
render()
