import { makeAutoObservable } from 'mobx'
import { IOption, IBook } from '@types'

interface IFilters {
  [index: string]: IOption
}

class GlobalStore {
  isLoading: boolean
  keyAPI: string
  filters: IFilters
  queryValue: string
  books: Array<any>
  activeItemBook: IBook | null
  maxResults: number
  startIndex: number
  totalItems: number

  constructor() {
    this.isLoading = false
    this.keyAPI = ''
    this.filters = {
      categories: {
        label: 'categories',
        value: 'all',
        options: [
          'all',
          'art',
          'biography',
          'computers',
          'history',
          'medical',
          'poetry'
        ]
      },
      sort: {
        label: 'sort by',
        value: 'relevance',
        options: ['relevance', 'newest']
      }
    }
    this.queryValue = process.env.REACT_APP_GOOGLE_KEY_API || ''
    this.books = []
    this.activeItemBook = null
    this.maxResults = 30
    this.startIndex = 0
    this.totalItems = 0

    makeAutoObservable(this)
  }

  setLoading(bool: boolean) {
    this.isLoading = bool
  }

  setKeyApi(str: string) {
    this.keyAPI = str
  }

  updateFilter(name: string, value: string) {
    this.filters[name].value = value
  }

  setQueryValue(str: string) {
    this.queryValue = str
  }

  setTotalItems(num: number) {
    this.totalItems = num
  }

  addBooks(array: Array<any>) {
    this.books = this.books.concat(array)
    this.startIndex = this.books.length === 0 ? 0 : this.books.length - 1
  }

  setBooks(array: Array<any>) {
    this.books = array
    this.startIndex = this.books.length === 0 ? 0 : this.books.length - 1
  }

  setActiveBookItem(item: IBook | null) {
    this.activeItemBook = item
  }
}

export const globalStore = new GlobalStore()
