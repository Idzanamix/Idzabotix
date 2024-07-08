
export function createTimer() {
  let timer: NodeJS.Timeout;

  function start(toDo: () => void, ms: number = 600) {
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
