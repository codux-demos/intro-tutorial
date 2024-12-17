import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from '@remix-run/react';
import '../src/styles/index.scss';
import { LessonsHeader } from '~/components/lessons-header/lessons-header';
import { HomePageHeader } from '~/components/home-page-header/home-page-header';

export function Layout({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {isHomePage ? <HomePageHeader /> : <LessonsHeader />}
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export function ErrorBoundary() {
    return <div>Error Boundary</div>;
}

export default function App() {
    return <Outlet />;
}
