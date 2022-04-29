export default async function fetchPictures() {
  let stateRequest = "pending";
  let error = null;
  try {
    const response = await fetch("https://picsum.photos/v2/list?limit=3");
    const data = await response.json();
    stateRequest = "fullfiled";
    return { data, stateRequest, error };
  } catch (errorParam) {
    stateRequest = "reject";
    error = errorParam;
    return { data, stateRequest, error };
  }
}
