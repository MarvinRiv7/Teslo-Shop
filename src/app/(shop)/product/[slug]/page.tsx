
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/font";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function productP({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">

      {/* MobileSlideshow */}
      <ProductMobileSlideshow
      title={product.title}
      images={product.images}
      className="block md:hidden"
      />

      {/* Desktop slideshow */}
       <ProductSlideshow
       title={product.title}
       images={product.images}
       className="hidden md:block"
       />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/* Selector de tallas */}
        <SizeSelector
          selectedSize={product.sizes[1]}
          availableSizes={product.sizes}
        />

        {/* Selector de camtidad */}
        <QuantitySelector 
        quantity={2}
        />
        {/* BUtton */}
        <button className="btn-primary my-5">Agregar al carrito</button>

        {/* Descripcion */}
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
