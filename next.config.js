/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

if (process.env.NODE_ENV === 'development') {
	// we import the utility from the next-dev submodule
	const { setupDevBindings } = require('@cloudflare/next-on-pages/__experimental__next-dev');

	// we call the utility with the bindings we want to have access to
	setupDevBindings({
		d1Databases: {
			DB: "584dc67c-8f66-452c-a4bd-13343ca3ee60"
		}
	});
}