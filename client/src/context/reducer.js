const reducer = (state, action) => {
    switch (action.type) {
     
      case 'UPDATE_IMAGES':
        return { ...state, images: [...state.images, action.payload] };
      case 'DELETE_IMAGE':
        return {
          ...state,
          images: state.images.filter((image) => image !== action.payload),
        };
      case 'UPDATE_DETAILS':
        return { ...state, details: { ...state.details, ...action.payload } };
      case 'UPDATE_LOCATION':
        return { ...state, location: action.payload };
  
      default:
        throw new Error('No matched action!');
    }
  };
  
  export default reducer;
  