export default async function requestFactory(url) {
  let stateRequest = 'pending';
  let error = null;
  try {
    const response = await fetch(url);
    const data = await response.json();
    stateRequest = 'fullfiled';
    return { data, stateRequest, error };
  } catch (errorParam) {
    stateRequest = 'reject';
    error = errorParam;
    return { data, stateRequest, error };
  }
}
