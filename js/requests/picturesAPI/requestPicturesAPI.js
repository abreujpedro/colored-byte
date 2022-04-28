import requestFactory from '../requestFactory';

export default async function fetchPictures() {
  const fetchObj = await requestFactory(
    'https://picsum.photos/v2/list?limit=3',
  );
  return fetchObj;
}
