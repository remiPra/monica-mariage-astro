rm -rf .vercel/output .vercel/cache dist node_modules
npm install
npm run build
vercel deploy --prebuilt
