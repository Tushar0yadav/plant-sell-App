import React from 'react'
import Button from './Button'
import SecondryButton from './SecondryButton'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="bg-[#ffffff] lg:h-96 flex items-center justify-center" >
            <div className="max-w-[1200px]" >
                <div className="items-center py-6 lg:flex lg:px-20">
                    <img src="https://source.unsplash.com/random/900x700/?pots" alt=""
                        className="h-100 w-40 m-auto block object-contain rounded-full"
                    />

                    <div className="mt-10 mx-2 ">
                        <div className="m-auto mb-2 w-28">
                            <Link href={"product"} >
                                <Button text="BUY" />
                            </Link>
                        </div>
                        <div className="">
                            <div className="font-medium text-lg text-center">
                                Monstera Deliciosa Plant
                            </div>
                            <div className="font-medium text-sm text-center lg:w-96 text-stone-400">
                                You might have seen it in a million home décor posts on social media, the absolute reigning king, the me and elevates your decor.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero