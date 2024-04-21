import React from 'react';
import { CirclesWithBar } from "react-loader-spinner";

const UploadModal = (props) => {

  return (
    <div className="w-[100vw] h-fit bg-slate-500 left-0 fixed top-0">
      <div className="m-auto max-w-2xl text-lg bg-white rounded-xl text-[0E1C36] opacity-100 ">
        {props.loading ? (
          <div className='flex flex-col items-center justify-evenly h-[100vh]'>
            <h1 className='font-bold text-2xl'>{props.initial}</h1>
            <CirclesWithBar visible={true} width="200" color="#0E1C36" />
          </div>
        ) : (
          <div className='flex flex-col items-center justify-evenly h-[100vh]'>
            <h1 className='font-bold text-2xl'>{props.end}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadModal