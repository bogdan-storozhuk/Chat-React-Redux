const initialState = {
    messages: [],
    loading: true,
    error: null,
    isEditPopupShown: false,
    editingMessage: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MESSAGES_REQUEST':
            return {
                ...state,
                messages: [],
                    loading: true,
                    error: null
            };

        case 'FETCH_MESSAGES_SUCCESS':
            return {
                ...state,
                messages: action.payload,
                    loading: false,
                    error: null
            };

        case 'FETCH_MESSAGES_FAILURE':
            return {
                ...state,
                messages: [],
                    loading: false,
                    error: action.payload
            };

        case 'MESSAGE_ADDED':

            return {
                ...state,
                messages: [...state.messages, action.payload]
            };

        case 'MESSAGE_REMOVED':
            return {
                ...state,
                messages: [...state.messages.filter(item => item.id !== action.payload)]
            }

            case 'EDIT_MESSAGE_POPUP_SHOWED':
                return {
                    ...state,
                    isEditPopupShown: true,
                }

                case 'EDIT_MESSAGE_POPUP_HIDDEN':
                    return {
                        ...state,
                        isEditPopupShown: false,
                        editingMessage: null,
                    }
                    case 'GET_EDITING_MESSAGE':
                        const message = state.messages.find(item => item.id === action.payload);
                        return {
                            ...state,
                            editingMessage: message
                        }
                        case 'MESSAGE_EDITED':
                            const newMessage = action.payload;
                            const index = state.messages.findIndex(item => item.id === newMessage.id);

                            return {
                                ...state,
                                editingMessage: null,
                                    messages: [...state.messages.slice(0, index),
                                        newMessage,
                                        ...state.messages.slice(index + 1)
                                    ]
                            }

                            default:
                                return state;



    }
};

export default reducer;