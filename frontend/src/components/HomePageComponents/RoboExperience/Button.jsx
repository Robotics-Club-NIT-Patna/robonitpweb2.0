import React from "react";
function Buttonrobo ({buttontext, width}) {
    return (
        <>
        <div className={`rectangle relative inline-block pl-12 pr-12 h-16 flex justify-center w-max items-center z-10 font-bold text-2xl bg-white rounded-2xl text-black cursor-pointer overflow-hidden hover:text-slate-100 hover-bg-slate-200`}>
        {buttontext}
      </div>
        </>
    );
}
export default Buttonrobo;