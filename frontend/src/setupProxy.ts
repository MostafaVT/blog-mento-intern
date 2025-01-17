import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app: any) {
  app.use(
    '/api', // This path will match any calls to your backend API.
    createProxyMiddleware({
      target: 'http://localhost:3000', // Replace with your backend's URL
      changeOrigin: true,
    })
  );
}
