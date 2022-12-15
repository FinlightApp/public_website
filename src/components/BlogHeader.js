import * as React from "react";

const BlogHeader = (props) => {

  const {
    title,
    author,
    info
  } = props;

  return(
    <>
      { ( title || author || info ) && (
        <div className='
          flex flex-col justify-center
          w-full
          px-8 py-10 lg:p-12
          gap-10 lg:gap-12
          bg-light
        '>
          { ( title &&
            <p className='
              lg:w-[60%]
              text-3xl
            '>
              { title }
            </p>
          ) }
          <div className='
            flex flex-col
            justify-center items-end
            w-full
          '>
            { ( author &&
              <p className='text-sm'>
                { author }
              </p>
            ) }
            { ( info &&
              <p className='
                text-sm
              '>
                { info }
              </p>
            ) }
          </div>
        </div>
      ) }
    </>
)}

export default BlogHeader