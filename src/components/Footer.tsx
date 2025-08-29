import {Github,Linkedin,Mail,Twitter} from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-black border-t border-sidebar-border'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h3 className='text-2xl font-bold text-sidebar-foreground mb-4'>Portfolio</h3>
                    <p className='text-muted-foreground leading-relaxed'>Creating modern, responsive web applications with passion and precision.</p>
                </div>
                <div>
                    <h4 className='text-lg font-semibold text-sidebar-foreground mb-4'>
                        Quick Links
                    </h4>
                    <ul className='space-y-2'>
                        {["Home" , "About" ,"Projects","Skills","Contact"].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className='text-muted-foreground hover:text-purple-500 transition-colors duration-200'>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className='text-lg font-semibold text-sidebar-foreground mb-4'>Connect</h4>
                    <div className='flex space-x-4'>
                        <a href="https://github.com/yohannes-mengistie" target='_blank' rel="noopener noreferrer" className='text-green-500 hover:text-purple-500 transition-colors duration-200' >
                            <Github size={24} />
                            <span className='sr-only'>Github</span>
                        </a>
                         <a href="https://www.linkedin.com/in/yohannes-mengistie?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noopener noreferrer" className='text-green-500 hover:text-purple-500 transition-colors duration-200' >
                            <Linkedin size={24} />
                            <span className='sr-only'>Linkedin</span>
                        </a>
                         <a href="https://github.com/yohannes-mengistie" target='_blank' rel="noopener noreferrer" className='text-green-500 hover:text-purple-500 transition-colors duration-200' >
                            <Twitter size={24} />
                            <span className='sr-only'>Twitter</span>
                        </a>
                        <a href="yohannesmengistie634@gmail.com" target='_blank' rel="noopener noreferrer" className='text-green-500 hover:text-purple-500 transition-colors duration-200' >
                            <Mail size={24} />
                            <span className='sr-only'>Mail</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='border-t border-sidebar-border mt-8 pt-8 text-center'>
                <p className='text-muted-foreground'>
                    © {currentYear} Portfolio Designed and Developed by Yohannes Mengistie. Built with Next.js and deployed on Vercel.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer