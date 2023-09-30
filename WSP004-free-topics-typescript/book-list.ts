class Book {
    id: number;
    title: string;
    genre: string;
    author: string;
    isRead: boolean;
    readDate?: Date;
  
    constructor(id: number, title: string, genre: string, author: string, isRead: boolean, readDate?: Date) {
      this.id = id;
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.isRead = isRead;
      this.readDate = readDate;
    }
  }
  
  class BookList {
    books: Book[];
    currentBook: Book | null;
    nextBook: Book | null;
    lastBookRead: Book | null;
  
    constructor() {
      this.books = [];
      this.currentBook = null;
      this.nextBook = null;
      this.lastBookRead = null;
    }
  
    add(book: Book): void {
      this.books.push(book);
      if (!this.currentBook) {
        this.currentBook = book;
      } else if (!this.nextBook) {
        this.nextBook = book;
      }
    }
  
    finishCurrentBook(): void {
      if (this.currentBook) {
        this.currentBook.isRead = true;
        this.currentBook.readDate = new Date(Date.now());
        this.lastBookRead = this.currentBook;
        this.currentBook = this.nextUnreadBook();
        this.nextBook = this.findNextUnreadBook();
      }
    }
  
    nextUnreadBook(): Book | null {
      for (const book of this.books) {
        if (!book.isRead) {
          return book;
        }
      }
      return null;
    }
  
    findNextUnreadBook(): Book | null {
      const index = this.books.findIndex((book) => !book.isRead);
      if (index !== -1) {
        return this.books[index];
      }
      return null;
    }
  
    get readCount(): number {
      return this.books.filter((book) => book.isRead).length;
    }
  
    get unreadCount(): number {
      return this.books.filter((book) => !book.isRead).length;
    }
  }
  

  const bookList = new BookList();
  
  const book1 = new Book(1, "Book 1", "Fiction", "Author 1", false);
  const book2 = new Book(2, "Book 2", "Mystery", "Author 2", false);
  const book3 = new Book(3, "Book 3", "Fantasy", "Author 3", false);
  
  bookList.add(book1);
  bookList.add(book2);
  bookList.add(book3);
  
  console.log(`Number of books marked as read: ${bookList.readCount}`);
  console.log(`Number of books marked not read yet: ${bookList.unreadCount}`);
  
  console.log("Finishing current book...");
  bookList.finishCurrentBook();
  
  console.log(`Number of books marked as read: ${bookList.readCount}`);
  console.log(`Number of books marked not read yet: ${bookList.unreadCount}`);
