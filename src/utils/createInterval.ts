export function createInterval() {
  let interval: ReturnType<typeof setTimeout>;

  function start(toDo: () => void, ms: number = 1000) {
    interval = setInterval(() => {
      toDo();
    }, ms);
  }

  function stop() {
    clearInterval(interval);
  }

  return {
    start,
    stop,
  };
}
