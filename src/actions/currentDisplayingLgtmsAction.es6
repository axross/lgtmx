export const CURRENTDISPLAYINGLGTMS_NEXT = 'CURRENTDISPLAYINGLGTMS_NEXT';
export const CURRENTDISPLAYINGLGTMS_PREV = 'CURRENTDISPLAYINGLGTMS_PREV';

const goNext = () => {
  return {
    type: CURRENTDISPLAYINGLGTMS_NEXT,
  };
};

const goPrev = () => {
  return {
    type: CURRENTDISPLAYINGLGTMS_PREV,
  };
};

export const currentDisplayingLgtmsAction = {
  goNext,
  goPrev,
};
