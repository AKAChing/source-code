class Observer {
	observers = []
	add(observer) {
		this.observers.push(observer)
	}
	remove(observer) {
		this.observers = this.observers.filter(item => item !== observer)
	}
	notify(data) {
		this.observers.forEach(observer => observer(data))
	}
}

class Subject {
	observers = new Observer()
	state = 0
	setState(state) {
		this.state = state
		this.observers.notify(state)
	}
}

const ob1 = data => console.log('ob1', data)
const ob2 = data => console.log('ob2', data)
const ob3 = data => console.log('ob3', data)

const sj = new Subject()
sj.observers.add(ob1)
sj.observers.add(ob2)
sj.observers.add(ob3)
// sj.setState(1)

try {
	const a = 1
	a = 2
	console.log(a)
} catch (error) {
	// console.log(error.name)
	// console.log(error.message)
}
// throw new Error('错误信息')