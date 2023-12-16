import { contacts, cv } from "@/../constants"
import { filePdf } from '@/../constants/icons'
import Image from "next/image"
import Link from "next/link"
import React from 'react'
import CopyBtn from "./CopyBtn"

export default function Contact() {

  return (
    <div className="flex justify-center items-center gap-3">
        {/* Open CV */}
        <Link
            href={cv.route}
            key={cv.label}
            target="_blank"
        >
            <button type="button" className="button-contact">
                Open CV
                <Image
                    src={filePdf.src}
                    alt={filePdf.label}
                    width={24}
                    height={24}
                />
            </button>
        </Link>
        {/* Copy Email */}
        <CopyBtn />
        {/* Contacts */}
        {contacts.map((contact) => {
            return (
                <Link
                    href={contact.route}
                    key={contact.label}
                    target="_blank"
                    className="p-2"
                >
                    <Image
                        src={contact.src}
                        alt={contact.label}
                        width={30}
                        height={30}
                    />
                </Link>
            )
        })}
    </div>
  )
}
