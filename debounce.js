const debounce = (fn, delay = 1000, immediate = false) => {
	let timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
