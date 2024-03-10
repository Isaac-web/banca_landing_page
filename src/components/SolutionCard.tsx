import LearnMoreButton from './LearnMoreButton';

interface SolutionCardProps {
  imageUrl: string;
  title: string;
  text: string;
  buttonLabel: string;
  buttonLink: string;
}

const SolutionCard = ({
  imageUrl,
  title,
  text,
  buttonLabel,
  buttonLink,
}: SolutionCardProps) => {
  return (
    <div className="w-full border-t-4 border-[1px] border-t-red-600 bg-white p-10">
      <img src={imageUrl} className="mb-8" />
      <h4 className="font-semibold text-2xl mb-4">{title}</h4>
      <p className="text-lg text-gray-400 mb-5">{text}</p>
      <LearnMoreButton label={buttonLabel} link={buttonLink} />
    </div>
  );
};

export default SolutionCard;
