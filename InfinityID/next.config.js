/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  domains: ["lens.infura-ipfs.io"],
		remotePatterns: [
			{
				protocol: "ipfs",
				hostname: "**",
				pathname: "**",
			},
		],
};



module.exports = nextConfig
