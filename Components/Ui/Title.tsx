interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h2 className="text-2xl font-light text-white my-6"> {title} </h2>;
};

export default Title;
