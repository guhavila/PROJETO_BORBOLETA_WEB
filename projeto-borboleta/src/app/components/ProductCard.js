import Image from "next/image";

export default function ProductCard({ link, imgSrc, title }) {
  return (
    <a href={link} className="link-card">
      <article>
        <Image src={imgSrc} alt={title} width={250} height={250} objectFit="cover" />
        <p>{title}</p>
      </article>
    </a>
  );
}