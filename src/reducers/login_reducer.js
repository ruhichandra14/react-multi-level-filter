const IsUserLoggedIn = "failure";
export default function(state = IsUserLoggedIn, action){  
    debugger;
      switch (action.type) {
        case "CLICKED_LOGIN":
            let newState = "success";
            return newState;
        }
        return state;
 }


