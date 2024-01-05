import Image from 'next/image';
import styles from './page.module.css';

interface IProps {
  params: { name: string; id: string };
}

interface IProduct {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  imgSrc: string;
}

export async function generateStaticParams() {
  const products: IProduct[] = await fetch(
    'http://localhost:3001/products'
  ).then((res) => res.json());

  return products.map((product) => ({
    id: String(product.id),
  }));
}

const ProductPage = async (props: IProps) => {
  const { params } = props;
  const data: IProduct = await fetch(
    `http://localhost:3001/products/${params.id}`,
    { next: { revalidate: 5 } }
  ).then((res) => res.json());

  return (
    <div>
      <h2 className={styles.title}>{data.name}</h2>
      <Image
        src={data.imgSrc}
        alt={data.name}
        width={500}
        height={500}
      />
      <p className={styles.price}>{data.price}р</p>
    </div>
  );
};

export default ProductPage;
