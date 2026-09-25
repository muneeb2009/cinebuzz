import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'The Last Signal | CineBuzz Movie Trailer & Mock Booking',description:'Discover The Last Signal, a sci-fi mystery thriller from CineBuzz Studios. Explore the story and cast, preview the trailer and try simulated movie showtimes and booking.',openGraph:{title:'THE LAST SIGNAL — CineBuzz',description:'The message came from tomorrow. Discover the fictional sci-fi mystery thriller and experience the CineBuzz mock booking journey.',type:'website'},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className="dark"><body>{children}</body></html>}
