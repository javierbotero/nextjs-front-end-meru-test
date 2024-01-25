/* Components */
import { Providers } from "@/lib/providers"
import Link from 'next/link'
import ImportProducts from '@/components/ImportProducts'
import Notifications from '@/components/Notifications'
import { inter, workSans } from '@/lib/helpers/fonts'

// tailwind global
import './globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <header className='bg-gray-600 text-gray-100 py-3'>
            <ul className='flex justify-center font-medium text-xl'>
              <li className={`${workSans.className} hover:bg-gray-700 p-3`}><Link href='/'>Productos</Link></li>
            </ul>
          </header>
          <Notifications />
          <ImportProducts />
          <main className="container mx-auto">{props.children}</main>
        </body>
      </html>
    </Providers>
  );
}
