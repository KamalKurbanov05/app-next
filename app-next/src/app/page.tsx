import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const getData = async () => {
  const data = await fetch('http://localhost:3001/products').then((d) =>
    d.json()
  );

  return data;
};

interface IProduct {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  imgSrc: string;
}

export default async function Home() {
  const products: IProduct[] = await getData();

  return (
    <main className={styles.main}>
      <ul className={styles.cardList}>
        {products.map((product) => (
          <li
            className={styles.card}
            key={product.id}>
            <Link href={`/${product.id}`}>{product.name}</Link>
            <Image
              src={product.imgSrc}
              alt={product.name}
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
