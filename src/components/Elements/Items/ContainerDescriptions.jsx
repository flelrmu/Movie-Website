import React from "react";

function ContainerDescriptions(props) {
    const { children } = props;
  return (
    <div className="self-stretch text-[#999999] text-base font-normal leading-normal">
      {children}  
    </div>
  );
}

export default ContainerDescriptions;
