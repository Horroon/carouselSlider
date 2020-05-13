export const reducer = (state, action) => {
  switch (action.type) {
    case "findSlides":
      return { ...state, sliderImages: action.payload };
    case "arrow-left":
      return {
        ...state,
        current:
          state.current - 1 > 0
            ? state.current - 1
            : state.sliderImages.length - 1
      };
    case "arrow-right":
      return {
        ...state,
        current:
          state.current + 1 < state.sliderImages.length ? state.current + 1 : 0
      };
    case "dot":
      return {
        ...state,
        current: action.payload
      };
  }
};

export const InitialState = {
  sliderImages: [],
  current: 0
};
