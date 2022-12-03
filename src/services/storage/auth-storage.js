import { StorageService } from './storage-service'

const ITEM_KEY = 'isAuth'

class UserStorage extends StorageService {
  get isAuth() {
    return this.getItem(ITEM_KEY)
  }

  setIsAuth(isAuthValue) {
    return this.setItems({isAuth: isAuthValue})
  }

  removeIsAuth() {
    this.removeItem(ITEM_KEY)
  }
}
export default new UserStorage()
