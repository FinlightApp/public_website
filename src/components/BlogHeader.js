import * as React from "react";

const BlogHeader = (props) => {

  const {
    title,
    description
  } = props;

  return(
    <div className='
      flex flex-col justify-center
      w-full
      px-8 py-10 lg:p-12
      gap-10 lg:gap-12
      bg-light
    '>
    <p className='
      lg:w-[60%]
      text-3xl
    '>
      { title }
    </p>
    <div className='
      flex flex-col 
      justify-center items-end
      w-full
    '>
      <p className='
        text-sm
        text-[rgba(0, 0, 0, 0.77)]
      '>
        { description }
      </p>
      <p className='
        text-sm
      '>
        London, 31 August 2021
      </p>
    </div>
  </div>
  )
}

export default BlogHeader