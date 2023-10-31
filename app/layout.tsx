import { SessionProvider } from './components/SessionProvider';
import SideBar from './components/SideBar';
import './globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import Login from './components/Login';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <title>GPT Clone</title>
      <body>
        <SessionProvider session={ session }>
          { !session ?
            <Login />
            :
            <div className='flex'>
              {/* SideBar */ }
              <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
                <SideBar />
              </div>

              {/* ClientProvider - Notification */ }
              <div className=' bg-[#343541] flex-1'>
                { children }
              </div>
            </div>
          }
        </SessionProvider>
      </body>
    </html>
  );
}