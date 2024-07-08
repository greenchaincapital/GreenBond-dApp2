// file: components/CustomMDXComponents.tsx

import Image from 'next/image';

const CustomImage = (props) => {
  return <Image {...props} alt={props.alt} className="rounded-lg shadow-md mb-4" />;
};

const CustomH1 = (props) => {
  return <h1 className="text-3xl font-bold mb-4" {...props} />;
};

const CustomH2 = (props) => {
  return <h2 className="text-2xl font-bold mb-2" {...props} />;
};

const components = {
  img: CustomImage,
  h1: CustomH1,
  h2: CustomH2,
};

export default components;
