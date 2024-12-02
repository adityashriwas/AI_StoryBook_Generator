"use client";
import { db } from "@/config/config";
import { StoryData } from "@/config/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import BookCoverPage from "../_components/BookCoverPage";
import StoryPages from "../_components/StoryPages";
import LastPage from "../_components/LastPage";
import { Button } from "@nextui-org/button";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

function ViewStory({ params }: any) {
  
  const bookRef = useRef();
  const [story, setStory] = useState<any>();
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log(params.id);
    getStory();
  }, []);

  const getStory = async () => {
    const result = await db
      .select()
      .from(StoryData)
      .where(eq(StoryData.storyId, params.id));
    console.log(result[0]);
    setStory(result[0]);
  };
  return (
    <div className="p-10 md:px-20 lg:px-40 flex items-center bg-[#0C0414] justify-evenly flex-col">
      <h2 className="font-bold text-4xl text-center p-10 bg-primary text-white">
        {story?.output?.title}
      </h2>
      {/* @ts-ignore */}
      <HTMLFlipBook className="mt-10" width={500} height={500}
      showCover={true}
      useMouseEvents={false}
      ref={bookRef}
      >
        <div>
          <BookCoverPage imageUrl={story?.coverImage} />
        </div>
        {
          [...Array(story?.output?.chapters?.length)].map((item, index)=>(
            <div key={index} className="bg-white p-10 border">
              <StoryPages storyChapter={story?.output?.chapters[index]}/>
            </div>
          ))
        }        
      </HTMLFlipBook>
        { count!=0 && <div className="absolute left-[40%] bottom-4"
        onClick={()=>{
          // @ts-ignore
          bookRef.current.pageFlip().flipPrev();
          setCount(count-1);
        }}
        >
        <IoIosArrowDropleftCircle className="text-4xl cursor-pointer"/>
        </div>}
      
        { count != (story?.output.chapters?.length-1) && <div className="absolute right-[40%] bottom-4" 
        onClick={()=>{
          // @ts-ignore
          bookRef.current.pageFlip().flipNext();
          setCount(count+1);
        }}
        >
        <IoIosArrowDroprightCircle className="text-4xl cursor-pointer"/>
        </div>}
    </div>
  );
}

export default ViewStory;
