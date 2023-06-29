/** @type {import('next').NextConfig} */
const branchName = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : ""

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: branchName,
  basePath: branchName,
  images: {
    loader: 'imgix',
    path: branchName
  }
}

module.exports = nextConfig
