import {
  CURRENTDISPLAYINGLGTMS_NEXT,
  CURRENTDISPLAYINGLGTMS_PREV,
} from '../actions';

const initialState = {
  offset: 0,
};

export const currentDisplayingLgtms = (state = initialState, action) => {
  switch (action.type) {
    case CURRENTDISPLAYINGLGTMS_NEXT:
      return offset + 4;
    case CURRENTDISPLAYINGLGTMS_PREV:
      return offset - 4;
  }

  return state;
};
