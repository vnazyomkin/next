import Link from 'next/link';
import {useState, useEffect} from 'react';
import MainLayout from '../components/Layout/MainLayout';

export default function Posts({posts: serverPosts}) {
    const [posts, setPosts] = useState(serverPosts);
    useEffect(() => {
        async function load() {
           const response = await fetch(`${process.env.API_URL}/posts`); 
           const data = await response.json();

           setPosts(data);
        }
        if (!serverPosts) load();
    }, []);

    if (!posts) {
        return <MainLayout>
                <p>Loading...</p>
            </MainLayout>  
    }

    return <MainLayout title='Post Page'>
                <h1>Post Page</h1>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <Link href={`/post/${post.id}`}><a>{post.title}</a></Link>
                        </li>
                    ))}
                </ul>
            </MainLayout>

}

Posts.getInitialProps = async ({req}) => {
    if (!req) {
        return {posts: null};
    }
    const respose = await fetch(`${process.env.API_URL}/posts`);
    const posts = await respose.json();
    return {
        posts
    };
}
