// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { MarketItem } from '../MarketItem/MatketItem';
// import { ProductsType } from "../../types/productsType";

export const Catalog = () => {
  // const [searchParams] = useSearchParams();
  // const category = searchParams.get('category')
  // const subCategory = searchParams.get('subcategory')
  // const [goods, setGoods] = useState<ProductsType | null>()

  // const BASE_URL = 'https://tp136-production.up.railway.app/api';

  // function wait(delay: number) {
  //   return new Promise(resolve => {
  //     setTimeout(resolve, delay);
  //   });
  // }

  // To have autocompletion and avoid mistypes
  // type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

  // function request<T>(
  //   url: string,
  //   method: RequestMethod = 'GET',
  //   data: any = null, // we can send any data to the server
  // ): Promise<T> {
  //   const options: RequestInit = { method };

  //   if (data) {
  //     // We add body and Content-Type only for the requests with data
  //     options.body = JSON.stringify(data);
  //     options.headers = {
  //       'Content-Type': 'application/json; charset=UTF-8',
  //     };
  //   }

  //   // DON'T change the delay it is required for tests
  //   return wait(100)
  //     .then(() => fetch(BASE_URL + url, options))
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error();
  //       }

  //       return response.json();
  //     });
  // }

  // console.log(goods);

  // const client = {
  //   get: <T,>(url: string) => request<T>(url),
  //   post: <T,>(url: string, data: any) => request<T>(url, 'POST', data),
  //   patch: <T,>(url: string, data: any) => request<T>(url, 'PATCH', data),
  //   delete: <T,>(url: string) => request<T>(url, 'DELETE'),
  // };

  // const getTodos = (): Promise<ProductsType> => {
  //   return client.get<ProductsType>(`/products`);
  // };

  // useEffect(() => {
  //   getTodos()
  //     .then((todos: ProductsType) => {
  //       setGoods(todos);
  //     }).catch(error => {
  //       console.error('Error fetching todos:', error);
  //       // Handle error state if needed
  //     });
  // }, [])

  return (
    <>
      тут будуть товари
      {/* <div className="items">
        {goods && goods.content.map((item, i) => (
          <MarketItem
            item={item}
            key={i}
          />
        ))}
      </div> */}
    </>
  );
};
