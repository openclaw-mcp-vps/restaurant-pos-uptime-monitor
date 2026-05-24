import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'POS Uptime Monitor — Stop Losing Revenue to Downtime',
  description: 'Monitor your restaurant POS system, track outages, and calculate lost revenue in real time. Get instant alerts when your POS goes down.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6ebd1a6d-b0f0-4858-9f40-2bd99c829909"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
