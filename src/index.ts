/**
 * 浏览器环境下，封装localStorage和sessionStorage
 */

// 判断运行环境是否为浏览器
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'
if (!isBrowser) {
  throw new Error('storage is only available in browser env.')
}

type StorageTyp = globalThis.Storage
type StorageValTyp = string | number | boolean | object | null

// Storage类。管理window.localStorage和window.sessionStorage
class Storage {
  private storage
  constructor(storage: StorageTyp) {
    this.storage = storage
  }

  public set(key: string, value: StorageValTyp) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  public get(key: string): StorageValTyp {
    const value = this.storage.getItem(key)
    return value ? JSON.parse(value) : null
  }

  public has(key: string) {
    return this.get(key) !== undefined
  }

  public remove(key: string) {
    this.storage.removeItem(key)
  }

  public clear() {
    this.storage.clear()
  }

  public forEachChild(cb: (key: string, val: StorageValTyp) => any) {
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i)
      cb.call(this, key!, this.get(key!))
    }
  }

  public getAll() {
    const obj: Record<string, any> = {}
    this.forEachChild((key, val) => {
      obj[key] = val
    })
    return obj
  }
}

export const _localStorage = new Storage(localStorage)
export const _sessionStorage = new Storage(sessionStorage)

export default {
  _localStorage,
  _sessionStorage
}
