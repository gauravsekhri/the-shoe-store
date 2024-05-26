import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import classNames from "classnames";
import React, { useState } from "react";

const imgArray: string[] = [
  "https://readymadeui.com/images/product1.webp",
  "https://readymadeui.com/images/product6.webp",
  "https://readymadeui.com/images/product7.webp",
  "https://readymadeui.com/images/product3.webp",
];

const SingleProduct = () => {
  const [imgInd, setImgInd] = useState<number>(0);

  return (
    <>
      <PageHeader />
      <div className="font-sans">
        <ScrollArea className="h-[calc(100vh_-_60px)]">
          <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="w-full lg:sticky top-6 sm:flex gap-2">
                <div className="sm:space-y-3 w-16 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                  {imgArray.map((ele, ind) => (
                    <img
                      src={ele}
                      key={ind + 3}
                      alt={"prod" + ind}
                      onClick={() => setImgInd(ind)}
                      className={classNames(
                        "w-full cursor-pointer rounded-sm",
                        {
                          "outline outline-primary": ind == imgInd,
                        }
                      )}
                    />
                  ))}
                </div>
                <img
                  src={imgArray[imgInd]}
                  alt="Product"
                  className="w-4/5 rounded object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  Adjective Attire | T-shirt
                </h2>
                <div className="flex flex-wrap gap-4 mt-4">
                  <p className=" text-xl font-bold">$12</p>
                  <p className="text-gray-400 text-xl">
                    <span className="line-through">$16</span>
                  </p>
                </div>

                <div className="flex space-x-2 mt-4">
                  <svg
                    className="w-5 fill-primary"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 fill-primary"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 fill-primary"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 fill-primary"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold ">Sizes</h3>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <button
                      type="button"
                      className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                    >
                      SM
                    </button>
                    <button
                      type="button"
                      className="w-12 h-12 border-2 hover:border-gray-800 border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                    >
                      MD
                    </button>
                    <button
                      type="button"
                      className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                    >
                      LG
                    </button>
                    <button
                      type="button"
                      className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                    >
                      XL
                    </button>
                  </div>
                  <Button type="button" className="w-full mt-4">
                    Add to cart
                  </Button>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold ">About the item</h3>
                  <ul className="space-y-3 list-disc mt-4 pl-4 text-sm ">
                    <li>
                      A gray t-shirt is a wardrobe essential because it is so
                      versatile.
                    </li>
                    <li>
                      Available in a wide range of sizes, from extra small to
                      extra large, and even in tall and petite sizes.
                    </li>
                    <li>
                      This is easy to care for. They can usually be
                      machine-washed and dried on low heat.
                    </li>
                    <li>
                      You can add your own designs, paintings, or embroidery to
                      make it your own.
                    </li>
                    <li>
                      A gray t-shirt is a wardrobe essential because it is so
                      versatile.
                    </li>
                    <li>
                      Available in a wide range of sizes, from extra small to
                      extra large, and even in tall and petite sizes.
                    </li>
                    <li>
                      This is easy to care for. They can usually be
                      machine-washed and dried on low heat.
                    </li>
                    <li>
                      You can add your own designs, paintings, or embroidery to
                      make it your own.
                    </li>
                    <li>
                      A gray t-shirt is a wardrobe essential because it is so
                      versatile.
                    </li>
                    <li>
                      Available in a wide range of sizes, from extra small to
                      extra large, and even in tall and petite sizes.
                    </li>
                    <li>
                      This is easy to care for. They can usually be
                      machine-washed and dried on low heat.
                    </li>
                    <li>
                      You can add your own designs, paintings, or embroidery to
                      make it your own.
                    </li>
                    <li>
                      A gray t-shirt is a wardrobe essential because it is so
                      versatile.
                    </li>
                    <li>
                      Available in a wide range of sizes, from extra small to
                      extra large, and even in tall and petite sizes.
                    </li>
                    <li>
                      This is easy to care for. They can usually be
                      machine-washed and dried on low heat.
                    </li>
                    <li>
                      You can add your own designs, paintings, or embroidery to
                      make it your own.
                    </li>
                  </ul>
                </div>

                <div className="mt-8 max-w-md">
                  <h3 className="text-lg font-bold ">Reviews(10)</h3>
                  <div className="space-y-3 mt-4">
                    <div className="flex items-center">
                      <p className="text-sm  font-bold">5.0</p>
                      <svg
                        className="w-5 fill-primary ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-300 rounded w-full h-2 ml-3">
                        <div className="w-2/3 h-full rounded bg-primary"></div>
                      </div>
                      <p className="text-sm  font-bold ml-3">66%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm  font-bold">4.0</p>
                      <svg
                        className="w-5 fill-primary ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-300 rounded w-full h-2 ml-3">
                        <div className="w-1/3 h-full rounded bg-primary"></div>
                      </div>
                      <p className="text-sm  font-bold ml-3">33%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm  font-bold">3.0</p>
                      <svg
                        className="w-5 fill-primary ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-300 rounded w-full h-2 ml-3">
                        <div className="w-1/6 h-full rounded bg-primary"></div>
                      </div>
                      <p className="text-sm  font-bold ml-3">16%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm  font-bold">2.0</p>
                      <svg
                        className="w-5 fill-primary ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-300 rounded w-full h-2 ml-3">
                        <div className="w-1/12 h-full rounded bg-primary"></div>
                      </div>
                      <p className="text-sm  font-bold ml-3">8%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm  font-bold">1.0</p>
                      <svg
                        className="w-5 fill-primary ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-300 rounded w-full h-2 ml-3">
                        <div className="w-[6%] h-full rounded bg-primary"></div>
                      </div>
                      <p className="text-sm  font-bold ml-3">6%</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800  font-bold rounded"
                  >
                    Read all reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default SingleProduct;
