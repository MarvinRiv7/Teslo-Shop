import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default function idP({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "Para Hombres",
    women: "Para Mujeres",
    kid: "Para Niños",
    unisex: "para Todos",
  };

  // if(id === 'kids') {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Articulos de ${labels[id]}`}
        subTitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />
    </>
  );
}
