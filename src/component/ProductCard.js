function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
                src={product.image}
                alt={product.title}
                className="product-image"
            />
      <h3>{product.title}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Rating: {product.rating.rate}</p>
    </div>
  );
}

export default ProductCard;