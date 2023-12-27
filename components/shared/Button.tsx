import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface Props {
  title: String;
  icon?: ReactNode;
  extraclass?: String;
  onClick?: (e: any) => void;
  url?: LinkProps['href'];
}
const Button = ({ title, icon, extraclass, onClick, url }: Props) => {
  return (
    <button
      className={`rounded-lg bg-[#000B6A] text-center text-base ${extraclass}`}
      onClick={onClick}
    >
      {icon}
      {url ? (
        <Link href={url} className="line-clamp-1">
          {title}
        </Link>
      ) : (
        <p className="line-clamp-1">{title}</p>
      )}
    </button>
  );
};
export default Button;
