import Menu from '@/components/Menu';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            <div className="w-[14%] md:w[8%] lg:w-[18%] xl:w-[20%] p-4">
                <Link href="/" className='flex justify-center items-center lg:justify-start  gap-2'>
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    <span className="hidden lg:block">AMS School</span>
                </Link>
                <Menu />
            </div>
            <div className="w-[86%] md:w[92%] lg:w-[82%] xl:w-[80%]  overflow-scroll">
                <Navbar />
                {children}
            </div>
        </div>
    );
}
