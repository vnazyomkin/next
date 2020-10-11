import Router from 'next/router';
import MainLayout from '../components/Layout/MainLayout';

export default function About({title}) {
    const linkClickHandler = () => {
        Router.push('/');
    }
    console.log(title);
    return (
        <MainLayout title='About Page'>
            <h1>{title}</h1>
            <button onClick={linkClickHandler}>Go back to home</button>
            <button onClick={() => Router.push('/posts')}>Go back to Posts</button>
        </MainLayout> 
    );
};

About.getInitialProps = async () => {
    const resp = await fetch(`${process.env.API_ENV}/about`);
    const data = await resp.json();
    return {title: data.title};
}