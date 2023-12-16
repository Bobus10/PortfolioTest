import Image from 'next/image'

export default function Introduction() {
  return (
    <div className=''>
        <section className='flex flex-col justify-center items-center gap-3 sm:gap-2'>
            <Image
              src='./assets/images/git_profile.png'
              alt="GitHub Profile photo"
              width={220}
              height={220}
            />
            <p className="text-blue-200 text-3xl hover:text-bold hover:text-white">
                Robert Kosieradzki
            </p>
            <p className=" text-blue-500 text-lg">
                Laravel Developer
            </p>
            <hr className=" w-52 h-1 mx-auto m-2 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
        </section>
    </div>
  )
}
