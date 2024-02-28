import { FC } from "react";

interface HeadingProps {
  title: string;
}

const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <h1
      className="text-white"
    >
      {title}
    </h1>
  );
};

export default Heading;