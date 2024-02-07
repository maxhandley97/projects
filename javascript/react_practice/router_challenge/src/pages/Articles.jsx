import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [users, setUsers] = useState([])
    
    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            console.log(posts)
            setArticles(posts)
        })

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
            console.log(users)
            setUsers(users)
        })
},[])
return (
    <div>
        <h1>Articles</h1>
        {articles.map(article => (
            <div key={article.id}>
                <h2 className="article-title">{article.title}</h2>
                <h3>Author: {users.find(user => user.id === article.userId)?.name}</h3>
                <Link to={`/articles/${article.id}`}>Read here</Link>
            </div>
        ))}
    </div>
);
};
export default Articles