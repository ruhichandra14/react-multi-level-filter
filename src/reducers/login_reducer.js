const IsUserLoggedIn = "failure";
export default function(state = IsUserLoggedIn, action){  
    debugger;
      switch (action.type) {
        case "CLICKED_LOGIN":
            return action.payload;
        }
        return state;
 }


