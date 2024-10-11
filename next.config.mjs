// @ts-check
export default function Configure() {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: 'export',
    images: {
      loaderFile: './src/loader.ts',
    },
  }
  return nextConfig
}
