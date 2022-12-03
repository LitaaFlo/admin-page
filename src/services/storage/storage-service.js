export class StorageService {
  constructor(storage = localStorage) {
    this.storage = storage
  }

  getItem(key) {
    return JSON.parse(this.storage.getItem(key))
  }

  setItem(key, value) {
    return this.storage.setItem(key, JSON.stringify(value))
  }

  setItems(items) {
    Object.keys(items).forEach((key) => this.setItem(key, items[key]))
    return this.storage
  }

  removeItem(key) {
    return this.storage.removeItem(key)
  }
}
