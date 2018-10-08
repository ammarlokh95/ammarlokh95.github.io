
const navigationAction = (navTo) => {
    console.log("action called: " + navTo)
    return {
        type: 'NAVIGATION_ACTION',
        navTo: navTo
    }
}

export default navigationAction;