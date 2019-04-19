export default function(state = false, action){
    switch(action.type){
        case "NEWS_SEARCH":
        return action.payload;
    }
    return state;
}