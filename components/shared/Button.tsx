import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import { Url } from 'url';

interface Props {
  title: String;
  icon?: ReactNode;
  extraclass?: String;
  onClick?: () => void;
  url?: LinkProps['href'];
}
const Button = ({ title, icon, extraclass, onClick, url }: Props) => {
  return (
    <button
      className={`py-2 px-4 rounded-lg bg-[#000B6A] text-base ${extraclass}`}
      onClick={onClick}
    >
      {icon}
      {url ? <Link href={url}>{title}</Link> : <p>{title}</p>}
    </button>
  );
};
export default Button;
