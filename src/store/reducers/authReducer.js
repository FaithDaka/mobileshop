
const initState = {
    token: null,
    phonenumber: null,
    role: null,
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
};

const authReducer = (state = initState, action) => {

    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                authenticating: true
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                phonenumber: action.payload.phonenumber,
                role: action.payload.role,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
        case "LOGOUT_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "LOGOUT_SUCCESS":
            return {
                ...initState
            }
        case "LOGOUT_FAILURE":
            return {
                ...state,
                error: action.payload.error,
                loading: false
            }
            default:
                return state;
    }
}

export default authReducer;