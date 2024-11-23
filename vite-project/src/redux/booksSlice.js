import { createSlice } from '@reduxjs/toolkit';

const initialBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', description: 'A classic novel set in the Jazz Age.', rating: 4.5 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', description: 'A novel about racial injustice in the Deep South.', rating: 4.8 },
  { id: 3, title: '1984', author: 'George Orwell', category: 'Sci-Fi', description: 'A dystopian novel about totalitarianism.', rating: 4.7 },
  { id: 4, title: 'A Brief History of Time', author: 'Stephen Hawking', category: 'Non-Fiction', description: 'An exploration of cosmology and physics.', rating: 4.6 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', category: 'Fiction', description: 'A story about teenage angst and rebellion.', rating: 4.3 },
  { id: 6, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction', description: 'A history of humankind.', rating: 4.9 },
  { id: 7, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', description: 'A science fiction epic set on a desert planet.', rating: 4.8 },
  { id: 8, title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Fiction', description: 'A classic novel of manners and romance.', rating: 4.6 },
  { id: 9, title: 'The Hobbit', author: 'J.R.R. Tolkien', category: 'Fiction', description: 'A fantasy adventure about a hobbit named Bilbo.', rating: 4.8 },
  { id: 10, title: 'Becoming', author: 'Michelle Obama', category: 'Non-Fiction', description: 'A memoir by the former First Lady of the United States.', rating: 4.7 },
  { id: 11, title: 'The Martian', author: 'Andy Weir', category: 'Sci-Fi', description: 'A novel about survival on Mars.', rating: 4.8 },
  { id: 12, title: 'Educated', author: 'Tara Westover', category: 'Non-Fiction', description: 'A memoir about growing up in a strict family and pursuing education.', rating: 4.8 },
  { id: 13, title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', description: 'A philosophical tale about following your dreams.', rating: 4.5 },
  { id: 14, title: 'Brave New World', author: 'Aldous Huxley', category: 'Sci-Fi', description: 'A dystopian novel about a futuristic society.', rating: 4.6 },
  { id: 15, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', category: 'Non-Fiction', description: 'A deep dive into the psychology of decision-making.', rating: 4.7 },
];




const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
