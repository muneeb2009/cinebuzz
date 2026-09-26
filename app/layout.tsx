import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'CineBuzz | The Last Signal & Neon Titans',description:'Discover The Last Signal and Neon Titans from CineBuzz Studios. Explore movie stories, characters and trailer previews, then try simulated showtimes and mock booking.',openGraph:{title:'CineBuzz — The Last Signal & Neon Titans',description:'Two worlds. One CineBuzz. Discover The Last Signal and Neon Titans, and experience the simulated movie booking journey.',type:'website'},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className="dark"><body>{children}</body></html>}
