export default function(state = false, action){ 
    switch (action.type) {
    case "CLICKED_NAVIGATION":
        return action.payload;
    }
    return state;
}


