import React, { useState, useRef } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

function PostForm({ create }) {
    //Управляемый компонент
    const [post, setPost] = useState({ title: "", body: "" });
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now(),
        }
        create(newPost);
        setPost({ title: "", body: "" });
    };

    //Неуправляемый компонент (плохо)
    // const bodyInputRef = useRef();

    return (
        <form>
            {/* Неуправляемый компонент (плохо) */}
            {/* <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" /> */}
            {/* Управляемый компонент */}
            <MyInput
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
}

export default PostForm;