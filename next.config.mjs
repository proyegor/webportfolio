/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/webportfolio',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
