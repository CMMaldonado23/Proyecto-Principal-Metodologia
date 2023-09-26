const initialState = {
    likes: 0,
  };

  function likeAction(state = initialState) {
    return {
        ...state,
        likes: state.likes + 1,
    };
  }