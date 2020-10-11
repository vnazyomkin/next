import Link from 'next/link'; 

import MainLayout from '../components/Layout/MainLayout';

export default function Index() {
    console.log(`${process.env.API_URL}/posts`);

    return (
        <MainLayout>              
            <h1>Hello Next.js</h1>
            <p><Link href="/about"><a>About</a></Link></p>
            <p><Link href="/posts"><a>Post</a></Link></p>
            <p>Some texe</p>
        </MainLayout>
    );
};