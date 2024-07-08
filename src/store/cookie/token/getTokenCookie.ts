export function getTokenCookie() {
  const decodedCookie = decodeURIComponent(document.cookie);

  const token = new URLSearchParams(decodedCookie).get('Token');

  return token
}
