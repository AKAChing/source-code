class PublishSubscribe {
	constructor() {}

	// 订阅者
	subscribes = {}

	// 注册
	subscribe(name, fn) {
		if (this.subscribes[name]) {
			this.subscribes[name].push(fn)
		} else {
			this.subscribes[name] = [fn]
		}
	}

	// 注销
	unsubscribe(name, fn) {
		if (!fn) return delete this.subscribes[name]
		const tasks = this.subscribes[name]
		if (!tasks) return
		const index = tasks.findIndex(item => item === fn)
		if (index >= 0) {
			tasks.splice(index, 1)
		}
	}

	// 触发
	publish(name, data) {
		const tasks = this.subscribes[name]
		if (!tasks) return
		// console.log(tasks);
		tasks.forEach(fn => fn(data))
	}
}


const task1 = v => console.log('task1', v)
const task2 = v => console.log('task2', v)
const task3 = v => console.log('task3', v)


const ps = new PublishSubscribe()
ps.subscribe('task', task1)
ps.subscribe('task', task2)
ps.subscribe('task', task3)

ps.unsubscribe('task', task2)

// setTimeout(() => {
// 	ps.publish('task', '012')
// }, 2000)
// ps.publish('task', 123)
// ps.publish('task', 456)
// console.log(ps)
