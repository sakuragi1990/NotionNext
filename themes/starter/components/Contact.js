import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { SVGLocation } from './svg/SVGLocation'
import { SVGEmail } from './svg/SVGEmail'

/* eslint-disable react/no-unescaped-entities */
export const Contact = () => {
  return <>
    {/* <!-- ====== Contact Start ====== --> */}
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div
        className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"
      ></div>
      <div
        className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"
      ></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">

          {/* 联系方式左侧文字 */}
       

          {/* 联系方式右侧留言 */}
         

        </div>
      </div>
    </section>
    {/* <!-- ====== Contact End ====== --> */}

</>
}
