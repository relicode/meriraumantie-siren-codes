// @ts-check
export default function Configure() {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
  }
  return nextConfig
}
