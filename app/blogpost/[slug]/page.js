
import React from 'react'
import fs from "fs"
import matter from 'gray-matter'
import Blogpostbtn from '@/components/Blogpostbtn'
import Image from 'next/image'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
const page = async({params}) => {
  const filepath = `content/${params.slug}.md`

  const readfile = fs.readFileSync(filepath, "utf-8")
  const {data,content} = matter(readfile)

  const blog = data

  const processer = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)
  
 const htmlContent =  (await processer.process(content)).toString()

  
 
  
  return (
    <>
    <div className='max-w-7xl m-auto py-20 '>
      <div className='border rounded-lg backdrop-blur-md background p-20'>
      <div className='flex justify-between items-center mb-10'>

     <h1 className='text-5xl font-bold text-white'>{blog.title}</h1> 
      <Blogpostbtn/>
      </div>
        <Image
        height={400}
        width={400}
        src={blog.image}
        alt='erro'
        />
          
        
     
     <div className='text-lg text-neutral-200' dangerouslySetInnerHTML={{__html: htmlContent}}></div>
     </div>
    </div>
    </>
  )
}

export default page
