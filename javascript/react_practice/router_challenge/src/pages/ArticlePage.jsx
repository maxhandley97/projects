import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function ArticlePage(props) {
    let {id} = useParams()
    let [articleData, setArticleData] = useState({})
    let [userData, setUserData] = useState({})
     console.log(id)

    useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setArticleData(data))
	}, [id])

    useEffect(() => {
		// This line helps reduce unnecessary fetch requests.
		if (articleData.userId == null) return;

		fetch(`https://jsonplaceholder.typicode.com/users/${articleData.userId}`).then(response => response.json()).then(json => setUserData(json));
	}, [articleData.userId])

    return (
        <>
            <h1>Article ID {id}</h1>
            <h1>{articleData.title}</h1>
			<h3>Written by {userData.name}</h3>
			<p>{articleData.body}</p>

        </>
    )
}