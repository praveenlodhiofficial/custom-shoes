import nextImages from 'next-images';

const nextConfig = nextImages({
  webpack(config) {
    config.module.rules.push({
      test: /\.(gltf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/models',
            outputPath: 'static/models',
          },
        },
      ],
    });
    return config;
  },
});

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


