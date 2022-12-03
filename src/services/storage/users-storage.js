import { StorageService } from './storage-service'

export const EVENT_UPDATE_USERS = 'updateUsers'
const ITEM_KEY = 'users'

class UsersStorage extends StorageService {
  get users() {
    return this.getItem(ITEM_KEY)
  }

  setUsers(usersList) {
    this.setItems({users: usersList})
    const event = new Event(EVENT_UPDATE_USERS)
    document.dispatchEvent(event)
  }

  deleteUser(id) {
    this.setUsers(this.users.filter(user => user.id.value !== id))
  }

  removeUsers() {
    this.removeItem(ITEM_KEY)
  }
}
export default new UsersStorage()
