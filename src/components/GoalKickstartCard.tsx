import { useRef } from 'react';
import LearnMoreButton from './LearnMoreButton';

interface GoalKickstartCardProps {
  label: string;
  title: string;
  image: string;
}

const GoalKickstartCart = ({ label, title, image }: GoalKickstartCardProps) => {
  const cardRef = useRef(null);

  return (
    <div className="relative w-full h-[88vh]">
      <img
        ref={cardRef}
        className="w-full absolute top-0 bottom-0 left-0 right-0 -z-20"
        src={image}
      />

      <div
        className={`lg:bottom-14 bottom-0 absolute w-full py-8 max-md:py-0 px-6 max-md:px-0 max-lg:px-0`}
      >
        <div className="bg-white p-5">
          <h5 className="text-xl text-gray-500">{label}</h5>
          <h5 className="text-2xl font-semibold mb-6">{title}</h5>
          <div>
            <LearnMoreButton label="Read More" link="Link" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalKickstartCart;
