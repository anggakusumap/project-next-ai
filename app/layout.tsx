import { SessionProvider } from './components/SessionProvider';
import SideBar from './components/SideBar';
import './globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import Login from './components/Login';
import ClientProvider from './components/ClientProvider';
import { ReduxProvider } from '@/redux/provider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head>
        <title>Genyol AI - The GOD</title>
        <meta name="description" content="Genyol AI – where innovation meets simplicity. Our AI is your Gateway to Optimal Development (GOD). I'm Genyol the GOD" />
        <meta property="og:image" content="/Genyol.png" />
        <meta charSet="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
      </head>
      <body className='bg-[#212121]'>
        <SessionProvider session={ session }>
          <ReduxProvider>
            { !session ?
              <Login />
              :
              <div className='flex'>
                {/* SideBar */ }
                <SideBar />

                {/* ClientProvider - Notification */ }
                <ClientProvider />

                <div className=' bg-[#323232] flex-1'>
                  { children }
                </div>
              </div>
            }
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
