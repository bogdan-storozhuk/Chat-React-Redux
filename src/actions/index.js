const messagesLoaded = (messages) => {
    return {
        type: 'FETCH_MESSAGES_SUCCESS',
        payload: messages,
    }
}

const messagesRequested = () => {
    return {
        type: 'FETCH_MESSAGES_REQUEST',
    }
}

const messagesError = (error) => {
    return {
        type: 'FETCH_MESSAGES_FAILURE',
        payload: error,
    }
}

const messageAdded = (messageId) => {
    return {
        type: 'MESSAGE_ADDED',
        payload: messageId
    }
}

 const messageRemoved = (messageId) => {
    return {
        type: "MESSAGE_REMOVED",
        payload: messageId,
    }
}


const fetchMessages = (chatService, dispatch) => () => {
    dispatch(messagesRequested())
    chatService.getMessages()
        .then((data) => dispatch(messagesLoaded(data)))
        .catch((error) => dispatch(messagesError(error)));
}

const showEditPopup =() => {
    return {
        type: "EDIT_MESSAGE_POPUP_SHOWED"
    }
}

const hideEditPopup =() => {
    return {
        type: "EDIT_MESSAGE_POPUP_HIDDEN"
    }
}

const getEditingMessage = (id) => {
    return {
        type: "GET_EDITING_MESSAGE",
        payload: id,
    }
}



const messageEdited = (message) => {
    return {
        type: "MESSAGE_EDITED",
        payload: message,
    }
}

export {
    messagesLoaded,
    messagesRequested,
    messagesError,
    messageAdded,
    messageRemoved,
    fetchMessages, 
    showEditPopup,
    hideEditPopup,
    getEditingMessage,
    messageEdited,
};