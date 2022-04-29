import React from "react";

const ImgNextGen = ({ srcWebp, srcJrx, srcJp2, fallback, alt, ...props }) => {
  return (
    <picture>
      <source srcset={srcWebp} type="image/webp" />
      <source srcset={srcJrx} type="image/jxr" />
      <source srcset={srcJp2} type="image/jp2" />
      <img src={fallback} alt={alt} {...props} />
    </picture>
  );
};

export default ImgNextGen;
