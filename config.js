const DEFAULT_USERS_LIST = [
  {
    name: 'Test1',
    isSubscription: false,
    role: 'user',
    id: 1,
    level: 5,
    gold: 8
  },
  {
    name: 'Admin',
    isSubscription: true,
    role: 'admin',
    id: 23,
    level: 7,
    gold: 254
  },
  {
    name: 'Test3',
    isSubscription: true,
    role: 'user',
    id: 40,
    level: 90,
    gold: 1000
  }
]

const SUPER_USER = [
  {
    name: 'admin',
    password: '123456'
  }, {
    name: 'admin1',
    password: '111111'
  }
]

module.exports = {
  DEFAULT_USERS_LIST,
  SUPER_USER
}
