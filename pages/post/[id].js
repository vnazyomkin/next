import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import MainLayout from '../../components/Layout/MainLayout';

export default function Post({post: serverPost}) {
    const [post, setPost] = useState(serverPost);
    const router = useRouter();

    useEffect(()=>{
        async function load() {
            const respose = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
            const data = await respose.json(); 

            setPost(data);
        }
        if (!serverPost) load();      
    }, []);

    if (!post) {
        return <MainLayout><p>Loading...</p></MainLayout>
    }
    return <MainLayout>
        <h1>{post.title}</h1>
        <hr/>
        <p>{post.body}</p>
        <Link href='/posts'><a>Back to all posts</a></Link>
    </MainLayout>;
}
Post.getInitialProps = async ({query, req}) => {
    if (!req) {
        return {post: null};
    }
    const respose = await fetch(`${process.env.API_URL}/posts/${query.id}`);
    const post = await respose.json();
    return {
        post
    };
}
