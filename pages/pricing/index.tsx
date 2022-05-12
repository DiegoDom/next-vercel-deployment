import type { NextPage } from 'next';
import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';


const PrincingPage: NextPage = () => {
  return (
    <MainLayout>
      <h1>Princing page</h1>
      <h1 className='title'>
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className='description'>
        Get started by editing <code className='code'>pages/pricing/index.tsx</code>
      </p>
    </MainLayout>
  );
};

export default PrincingPage;
