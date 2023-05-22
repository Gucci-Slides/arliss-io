/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
				port: "",
				pathname: "/Gucci-Slides/next-blog-posts/master/images/**",
			},
		],
	},
}

module.exports = nextConfig
