import { SessionProvider } from './components/SessionProvider';
import SideBar from './components/SideBar';
import './globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import Login from './components/Login';
import ClientProvider from './components/ClientProvider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <title>Genyol AI - The GOD</title>
      <body className='bg-[#212121]'>
        <SessionProvider session={ session }>
          { !session ?
            <Login />
            :
            <div className='flex'>
              <div className='bg-[#212121] absolute max-w-xs h-screen overflow-y-auto md:min-w-[20rem] z-10'>
                <SideBar />
              </div>
              {/* SideBar */ }
              <div className='bg-[#065471] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
                {/* <SideBar /> */ }
              </div>

              {/* ClientProvider - Notification */ }
              <ClientProvider />

              <div className=' bg-[#323232] flex-1'>
                { children }
              </div>
            </div>
          }
        </SessionProvider>
      </body>
    </html>
  );
}
