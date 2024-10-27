import React from "react";

function ContainerTitle(props) {
  const { children } = props;
  return (
      <div className="self-stretch text-white text-[28px] font-bold leading-[42px]">
        {children}
      </div>
  );
}

export default ContainerTitle;
