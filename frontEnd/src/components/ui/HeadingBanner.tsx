type BannerProps = {
  title: string;
  subtitle: string;
  description?: string;
  classes?: string;
};

function HeadingBanner({
  title,
  subtitle,
  description,
  classes = "text-2xl",
}: BannerProps) {
  return (
    <h1 className={`${classes} font-semibold uppercase tracking-widest mb-8`}>
      {title} <span className="font-normal">{subtitle}</span>
      <span className="ml-2 inline-block w-16 h-[2px] bg-gray-800 align-middle"></span>
      <br />
      <span className="font-normal normal-case tracking-normal text-gray-700 text-lg">
        {description}
      </span>
    </h1>
  );
}

export default HeadingBanner;
