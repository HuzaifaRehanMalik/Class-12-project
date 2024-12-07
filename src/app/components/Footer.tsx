import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
        <div className="bg-black text-white text-center py-4">
            <p>&copy; All rights reserved.</p>
            <p>Made by Huzaifa Rehan</p>
            <p>
                <Link href="#" className="hover:underline">Privacy Policy</Link> | <Link href="#" className="hover:underline">Terms of Service</Link> </p>

            
        </div>
    </footer>
  )
}
