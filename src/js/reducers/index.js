// src/js/reducers/index.js
const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ARTICLE:
			return { ...state, articles: [...state.articles, action.payload] };
			return state;
		default:
			return state;
	}
}

export default rootReducer;