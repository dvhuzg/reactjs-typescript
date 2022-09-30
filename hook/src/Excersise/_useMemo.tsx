import React, { useMemo } from "react";
import { useState } from "react";
//useMemo goi ham kia vao trong de khi nao dependencies Products thay doi (khi them san pham moi) thi moi chay cai ham tinh toan do, tranh chay lai ham ko can thiet 
interface IProduct {
  [name: string]: string | number;
}
const _useMemo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name: name,
        price: +price,
      },
    ]);
  };
  const total = useMemo(() => {
    const res = products.reduce((res, prod) => {
      return res + Number(prod.price);
    }, 0);
    return res
  }, [products]);

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>

      <br />
      <h1>
         Total : {total} 
      </h1>
      <ul>
        {products.map((product) => (
          <li>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default _useMemo;
