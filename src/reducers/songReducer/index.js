const initialState = {
    song: [],
    isOpenModal: false,
}

export default function songReducer(state = initialState, action) {
    switch (action.type) {
        case 'LISTEN_SONG':
            state.song = action.song;
            return { ...state, isOpenModal: true }
        default:
            return state
    }
}