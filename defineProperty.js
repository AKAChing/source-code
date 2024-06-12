let user = {
  nickname: 'youngoldman',
  age: 18,
  hobby: ['football', 'basketball'],
  say() {
    console.log('hello')
  }
}

let tempName = user.nickname
Object.defineProperty(user, 'nickname', {
  get() {
    // console.log('get', objname)
    // debugger
    return tempName
  },
  set(v) {
    tempName = v
    console.log('set', tempName)
    return tempName
  },
})