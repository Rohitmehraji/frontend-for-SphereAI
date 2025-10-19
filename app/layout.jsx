import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata = {
  title: 'Your App Title',
  description: 'Your app description'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
