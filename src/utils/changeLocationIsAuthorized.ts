export function changeLocationIsAuthorized(path: string | null) {
  window.location.href = `/AuthorizedToggle/${path || 'repository'}`
}

