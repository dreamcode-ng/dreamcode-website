"use client"
import React, { useMemo } from 'react';
import style from './cardPost.module.css';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import Link from 'next/link';



export default function CardPost ( { image, title, read, date, url, content}) {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
      <Link href={`/blog/${url}`} >
        <div  className={`${style.cardPost} w-100`}>
          <Image 
            className="w-100 h-100" 
            alt={`Post ${title} - DreamCode Software Colombia`}
            src={`/img/posts/${image}`} 
            width={460} height={259}/>
          <div className={`${style.cardContent} d-flex align-items-center justify-content-start flex-column`} >
              <div>
                  <h3 className='w_color f-lg-25 f_500' >
                    <Link href={`/blog/${url}`} className='w_color f-lg-25 f_500'>{title}</Link>
                  </h3>
                  <div className={`${style.cardTags}`} >
                      <div className="-bg-secondary d-flex ">
                          <div className="text-center p_color f_300 f-lg-12">
                            Time: {read}</div>
                      </div>
                      <div className="-bg-secondary d-flex ">
                          <div className="text-center p_color f_300 f-lg-12">
                            {date}
                          </div>
                      </div>
                  </div>
              </div>
              <Markdown className='p_color f-lg-18 f_300 text-start'>
                {content}
              </Markdown>
          </div>
        </div>
      </Link>
    </div> 
  )
}


