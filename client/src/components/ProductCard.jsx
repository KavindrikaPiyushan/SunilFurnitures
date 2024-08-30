import '../pages/css/home.css';

export default function ProductCard({imgsrc,price,product}) {
  return (
    <div>
      <div className="product">
				<img src={imgsrc}/>
				<div className="product-info">
					<h4 className="product-title">{product}</h4>
					<p className="product-price">${price}</p>
					<a className="product-btn" href="#">View</a>
				</div>
			</div>
    </div>
  )
}
