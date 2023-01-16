import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export const LoadingIcon = () => {
  return <EllipsisHorizontalIcon className="w-3 md:w-5 animate-ping" />;
};

export const LoadingScreen = () => {
  <div className="w-full h-full f-center">
    <p className="animate-pulse text-brown-700 font-normal text-lg md:text-3xl">
      loading...
    </p>
  </div>;
};
