// const throttle = (fn, delay = 1000) => {
// 	let record = Date.now()
// 	return function (...args) {
// 		let now = Date.now()
// 		if (now - record > delay) {
// 			fn(...args)
// 			record = Date.now()
// 		}
// 	}
// }

const throttle = (fn, delay = 1000) => {
	let executed = false
	return function (...args) {
		if (!executed) {
			setTimeout(() => {
				fn(...args)
        executed = false
			}, delay)
      executed = true
		}
	}
}
