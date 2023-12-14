import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('page')
  return (
    <div className="flex flex-col justify-center items-center">
      
      <section className="text-white flex flex-col">
        {/* <p className="text-head">About Me</p> */}
        <p className="">
          {t('me')}
        </p>
      </section>
    </div>
  )
}
