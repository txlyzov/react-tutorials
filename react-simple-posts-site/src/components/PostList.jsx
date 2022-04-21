import "./styles/PostList.css";
import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

function PostList({ posts, title, remove }) {
    if (!posts.length) {
        return (
            <h1 style={{ textAlign: "center" }}>Постов нет</h1>
        )
    }

    return (
        <div>
            <h1 className="title">{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition key={post.id} classNames="post" timeout={250}>
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}

export default PostList;