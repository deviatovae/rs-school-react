export class Storage {
  static save = (key: string, data: string): void => {
    localStorage.setItem(key, data)
  }

  static get = (key: string, defaultValue = ''): string => {
    const value = localStorage.getItem(key)
    if (value === null) {
      return defaultValue
    }
    return value
  }
}
