export {}

declare global {
  interface IBlog {
    id: number
    date: Date
    author: string
    title: string
    content: string
    image: string
  }
}
