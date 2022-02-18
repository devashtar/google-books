export interface IOption {
  label: string
  value: string
  options: Array<string>
}

export interface IBook {
  authors: Array<string>
  title: string
  categories: Array<string>
  description: string
  imageLinks: {
    thumbnail: string
  }
}
