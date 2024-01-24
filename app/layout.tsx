/* Components */
import { Providers } from "@/lib/providers"
import Link from 'next/link'
import ImportProducts from '@/components/ImportProducts'

/* Instruments */

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <header>
            <ul>
              <li><Link href='/'>Productos</Link></li>
            </ul>
          </header>
          <ImportProducts />
          <main className="">{props.children}</main>
        </body>
      </html>
    </Providers>
  );
}
