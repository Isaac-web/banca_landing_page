interface LearnMoreButtonProps {
  label: string;
  link: string;
}

const LearnMoreButton = ({ label, link }: LearnMoreButtonProps) => {
  return (
    <a href={link}>
      <button className="relative text-lg text-red-500">
        {label || 'Learn more'} <span className="absolute -right-6">{`>`}</span>
      </button>
    </a>
  );
};

export default LearnMoreButton;
