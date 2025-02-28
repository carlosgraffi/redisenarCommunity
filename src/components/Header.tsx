import RotatingText from './RotatingText';

export default function Header() {
  return (
    <div className="py-48 md:py-40 lg:py-48">
      <div className="flex flex-col items-center justify-center space-y-12">
        <RotatingText />
        <div className="text-lg md:text-xl">
          <span>Un lugar para </span>
          <span className="font-tostada">re</span>
          <span className="italic">-todo.</span>
        </div>
      </div>
    </div>
  );
}