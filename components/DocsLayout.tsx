// file: components/DocsLayout.tsx

import Link from 'next/link';

const DocsLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <nav>
          <ul className="space-y-4">
            <li><Link href="/docs/overview" className="hover:text-blue-300">Overview</Link></li>
            <li><Link href="/docs/nfts" className="hover:text-blue-300">Green Energy NFTs</Link></li>
                <li><Link href="/docs/yield" className="hover:text-blue-300">Yield Bonds</Link></li>
                <li><Link href="/docs/treasury" className="hover:text-blue-300">Basket Treasury</Link></li>
                <li><Link href="/docs/gov" className="hover:text-blue-300">Green Governance</Link></li>
                <li><Link href="/docs/faqs" className="hover:text-blue-300">FAQs</Link></li>
                <li><Link href="/docs/legal" className="hover:text-blue-300">Legal</Link></li>
            {/* <li>
              <Link href="/docs/bond" className="hover:text-blue-300">
                Green Bond
              </Link>
            </li>
            <li>
              <Link href="/docs/nft" className="hover:text-blue-300">
                NFT Fractional Ownership
              </Link>
            </li>
            <li>
              <Link href="/docs/fund" className="hover:text-blue-300">
                Green Index Fund
              </Link>
            </li>
            <li>
              <Link href="/docs/gov" className="hover:text-blue-300">
                Green Governance Token
              </Link>
            </li> */}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default DocsLayout;
