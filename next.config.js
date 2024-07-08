// @ts-check

// import nextMdx from '@next/mdx'

// const withMdx = nextMdx({
//   // By default only the `.mdx` extension is supported.
//   extension: /\.mdx?$/,
//   options: {/* otherOptions… */}
// })

// const nextConfig = withMdx({
//   reactStrictMode: true,
//   typescript: {
//     ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
//   },
//   eslint: {
//     ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
//   },
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
//   webpack: config => {
//     config.resolve.fallback = { fs: false, net: false, tls: false };
//     config.externals.push("pino-pretty", "lokijs", "encoding");
//     return config;
//   },
// })

// export default nextConfig

// const withMDX = require('@next/mdx')()
 
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include MDX files
//   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//   // Optionally, add any other Next.js config below
// }
 
// module.exports = withMDX(nextConfig)

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   typescript: {
//     ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
//   },
//   eslint: {
//     ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
//   },
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
//   webpack5: true,
//   webpack: (config) => {
//       config.resolve.fallback = { fs: false };

//       return config;
//   },
// };

// module.exports = nextConfig;

// file: next.config.js

// module.exports = {
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

module.exports = nextConfig;


