"use client"

import { email } from '@/../constants'
import { google } from '@/../constants/icons'
import Image from 'next/image'

interface Props {
  copied_text: string,
  cl_err: string,
  al_err: string,
  text: string,
}

const CopyBtn: React.FC<Props> = ({text, copied_text, cl_err, al_err}) => {
  
  const copyEmail = () => {
    const cpEmail = email.email;
    navigator.clipboard.writeText(cpEmail)
    .then(() => {
        alert(`${copied_text}: ` + cpEmail);
    })
    .catch(err => {
        console.error(`${cl_err}, ${err}`);
        alert(`${al_err}: ${err}`);
    });
  }

  return (
    <button type="button" className="button-contact" onClick={copyEmail}>
      {text}
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