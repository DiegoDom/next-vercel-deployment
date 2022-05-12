import type { NextPage } from 'next';
import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

const ContactPage: NextPage = () => {
  return (
    <MainLayout>
      <h1>Contact page</h1>
      <h1 className='title'>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className='description'>
        Get started by editing <code className='code'>pages/contact.tsx</code>
      </p>
    </MainLayout>
  );
};

export default ContactPage;
