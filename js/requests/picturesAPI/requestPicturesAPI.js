export default async function getPictures() {
  const response = await fetch("https://picsum.photos/v2/list?limit=3");
  const pictures = await response.json();
  return pictures;
}
