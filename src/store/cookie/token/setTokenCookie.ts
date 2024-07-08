export function setTokenCookie(value: string | null, liveMinutes: number) {
  const date = new Date();

  date.setTime(date.getTime() + (liveMinutes * 60 * 1000));

  const expires = "expires=" + date.toUTCString();

  document.cookie = "Token=" + value + ";" + expires + ";path=/";
}

