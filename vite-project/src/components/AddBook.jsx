import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [form, setForm] = useState({ title: '', author: '', category: '', description: '', rating: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.author || !form.category || !form.description || !form.rating) {
            alert('All fields are required!');
            return;
        }
        dispatch(addBook({ id: Date.now(), ...form }));
        navigate('/browse');
    };

    return (
      <>
     
      <h1 style={{textAlign:"center"}}>Add Book Here..</h1>

        <form onSubmit={handleSubmit} style={{display:"flex", justifyContent:"center", flexDirection:"column",width:"30%",padding:"18px",marginLeft:"35%"}}>
            <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
            <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
            <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
            <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
            <input name="rating" placeholder="Rating" value={form.rating} onChange={handleChange} />
            <button type="submit">Add Book</button>
        </form>
        </>
    );
};

export default AddBook;
