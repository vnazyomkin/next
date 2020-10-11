import Link from 'next/link';
import Head from 'next/head';

export default function MainLayout({children, title = 'Next App'}) {
    return (
        <>
            <Head>
                <title>{title} | Next Course</title>
                <meta name="keywords" content="next javascript react" />
                <meta name="description" content="It's a test project" />
            </Head>
            <header>
                <nav>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/posts"><a>Posts</a></Link>
                    <Link href="/about"><a>About</a></Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    left: 0;
                    right: 0;
                    top: 0;
                    background: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                nav a {
                    color: white;
                    text-decoration: none;
                }

                main {
                    margin-top: 60px;
                    padding: 1rem;
                }
            `}</style>
        </>
    );
} 