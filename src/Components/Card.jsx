import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { TbFileInfo } from "react-icons/tb";
import { TbFileDownload } from "react-icons/tb";
import { TbFileUpload } from "react-icons/tb";
import { motion } from "framer-motion"


function Card({ data, refr }) {
    return (
        <motion.div drag dragConstraints={refr} dragTransition={{ bounceStiffness: 500, bounceDamping: 30 }} whileDrag={{scale : 1.1}} className="relative py-10 px-8 w-60 h-72 bg-zinc-600 rounded-[35px] overflow-hidden">
            <FaRegFileLines size="1.5em" className="text-zinc-100" />
            <h2 className="text-md text-zinc-100 my-4 font-semibold ">
                {data.description}
            </h2>
            <div className="footer absolute bottom-0 left-0 w-full">
                <div className=" py-3 px-8 flex justify-between items-center">
                    <h5 className="text-md text-zinc-100 ">{data.filesize} MB</h5>
                    {!data.isOpen ? <TbFileInfo size="1.5em" className="text-zinc-100" /> : ((data.tag.downOrUp && <TbFileDownload size="1.5em" className="text-zinc-100"/>) || (<TbFileUpload size="1.5em" className="text-zinc-100"/>)) }


                </div>
                { data.isOpen && 
                    (data.tag.downOrUp ?

                <div className="tag bg-green-400 py-2 w-full flex justify-center items-center" >
                    <h4 className="text-xl text-zinc-100">Download Now</h4>
                </div>
                :
                <div className="tag bg-blue-400 py-2 w-full flex justify-center items-center" >
                    <h4 className="text-xl text-zinc-100">Upload Now</h4>
                </div>)

                }
            </div>
        </motion.div>
    );
}

export default Card;
