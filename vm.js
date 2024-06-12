class Vue {
	constructor(options) {
		this.$options = options
		this.$data = options.data
		this.$el = document.querySelector(options.el)
		this.initData()
	}

  // 初始化数据
	initData() {
		let data = this.$data
		Object.keys(data).forEach(key => {
      defineReactive(this, key, data[key])
			// Object.defineProperty(this, key, {
			// 	enumerable: true,
			// 	configurable: true,
			// 	get() {
			// 		return data[key]
			// 	},
			// 	set(value) {
			// 		data[key] = value
			// 	},
			// })
		})
    // observe(data)
	}
}

 // 劫持数据对象
const defineReactive = (obj, key, value) => {
  observe(value)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`${key}属性被访问了`)
      return value
    },
    set(val) {
      if (val === value) return
      console.log(`值发生了改变:${val}=>${value}`)
      value = val
      return value
    },
  })
}

// // 判断数据是不是基本类型, 如果是基本类型则不进行递归, 否则进行递归
const observe = data => {
  let type = Object.prototype.toString.call(data)
  if (type !== '[object Object]' && type !== '[object Array]') {
    return
  }
  new Observer(data)
}

// 监听数据
class Observer {
  constructor(data) {
    this.walk(data)
  }
  walk(data) {
    Object.keys(data).forEach(key => {
      let value = data[key]
      defineReactive(data, key, value)
    })
  }
}