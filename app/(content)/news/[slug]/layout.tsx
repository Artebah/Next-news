import React from "react";

const NewsSlugLayout = ({ modal, children }: { modal: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default NewsSlugLayout;
