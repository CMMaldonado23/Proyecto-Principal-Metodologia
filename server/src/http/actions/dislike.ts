const initial = {
    likes: 1,
};
function dislike(state = initial){
    return{
        ...state,
        likes: state.likes - 1,
    }
}