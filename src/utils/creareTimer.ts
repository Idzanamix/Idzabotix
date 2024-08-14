export function createTimer() {
  let timer: ReturnType<typeof setTimeout>;

  function start(toDo: () => void, ms: number = 150) {
    timer = setTimeout(() => {
      toDo();
    }, ms);
  }

  function stop() {
    clearTimeout(timer);
  }

  return {
    start,
    stop,
  };
}
