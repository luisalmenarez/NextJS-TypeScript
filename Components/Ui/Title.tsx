interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h2 className="text-3xl font-light text-white my-10"> {title} </h2>;
};

export default Title;
