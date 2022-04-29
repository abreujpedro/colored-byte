import { requestPictureDispatch } from '../../states/requestPictureState/requestPictureState';

export default async function fetchPictures() {
  requestPictureDispatch.pendingReducer();
  try {
    const response = await fetch('https://picsum.photos/v2/list?limit=3');
    const data = await response.json();
    requestPictureDispatch.fullfiledReducer();
    return data;
  } catch (errorParam) {
    requestPictureDispatch.refusedReducer();
    throw errorParam;
  }
}
