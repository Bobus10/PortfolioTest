"use client"

import { email } from '@/../constants'
import { google } from '@/../constants/icons'
import Image from 'next/image'

const CopyBtn= () => {
  
  const copyEmail = () => {
    const cpEmail = email.email;
    navigator.clipboard.writeText(cpEmail)
    .then(() => {
        alert(`Copied text: ` + cpEmail);
    })
    .catch(err => {
        console.error(`An error occurred while copying to the clipboard: ${err}`);
        alert(`Text copy error: ${err}`);
    });
  }

  return (
    <button type="button" className="button-contact" onClick={copyEmail}>
      Copy
      <Image
          src={google.src}
          alt={google.label}
          width={24}
          height={24}
      />
    </button>
  )
}

export default CopyBtn;