/**
 * 1.Promise是一个构造函数
 * 2.new Promise时传入一个执行函数, 并且执行函数是立即执行的
 * 3.执行函数接收两个参数, resolve和reject, 并且均能接收参数
 * 4.Promise实例上有一个then方法, then方法接收两个参数
 * 5.Promise需要一个状态值, 执行函数调用resolve或者reject时改变该状态, 并且只能从pendding到fulfilled或者从pendding到rejected
 * */

const PENDDING = 'pendding'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'

class MyPromise {
	constructor(executor) {
		this.state = PENDDING
		this.value = undefined
		this.reason = undefined
		this.onFullfilledCallback = undefined
		this.onRejectedCallback = undefined
		const resolve = value => {
			if (this.state === PENDDING) {
				this.state = FULLFILLED
				this.value = value
				this.onFullfilledCallback && this.onFullfilledCallback(value)
				// console.log('resolve', value)
			}
		}
		const reject = reason => {
			if (this.state === PENDDING) {
				this.state = REJECTED
				this.reason = reason
				this.onRejectedCallback && this.onRejectedCallback(reason)
				// console.log('reject', reason)
			}
		}
		try {
			executor(resolve, reject)
		} catch (error) {
			throw error
		}
	}

	then(onFullfilled, onRejected) {
		if (this.state === FULLFILLED) {
			setTimeout(() => {
				onFullfilled(this.value)
			}, 0)
		} else if (this.state === REJECTED) {
			setTimeout(() => {
				onRejected(this.reason)
			}, 0)
		} else {
			this.onFullfilledCallback = value => {
				setTimeout(() => {
					onFullfilled(value)
				}, 0)
			}
			this.onRejectedCallback = reason => {
				setTimeout(() => {
					onRejected(reason)
				}, 0)
			}
		}
	}
}

const p = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve(1000)
	}, 1000)
	// resolve('111')
	// reject('222')
})

p.then(
	res => {
		// console.log('then', res)
	},
	reason => {
		// console.log('then', reason)
	}
)