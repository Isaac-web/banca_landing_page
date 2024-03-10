import LearnMoreButton from './LearnMoreButton';

interface ArticleCardProps {
  summary: string;
  title: string;
  image: string;
}

const ArticleCard = ({ image, title, summary }: ArticleCardProps) => {
  return (
    <div className="relative w-full h-[33em]">
      <img
        className="w-full absolute top-0 bottom-0 left-0 right-0 z-20 bg-gray-300"
        src={image}
      />

      <div className="bottom-16 absolute w-full">
        <div className="bg-white min-h-[15em] pt-10">
          <h5 className="text-xl font-bold mb-4">{title}</h5>
          <p className="text-xl text-gray-500 mb-3">{summary}</p>
          <div>
            <LearnMoreButton label="Learn More" link="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
