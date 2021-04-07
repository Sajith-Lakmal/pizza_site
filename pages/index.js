import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <>
      <Head>Pizza box</Head>
      <div className="container">
        <header>
          <Image
            src="/images/logo.svg"
            width="100px"
            height="100px"
            layout="intrinsic"
          />
          <ul>
            <li>Products</li>
            <li>Sobre nosotros</li>
            <li>Vidos</li>
            <li>DOnde comprar</li>
          </ul>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src="/images/basket.svg"
              alt="Cart"
              width="40px"
              height="40px"
              layout="intrinsic"
            />
            <div className="circle">1</div>
          </motion.button>
        </header>
        <div className="content">
          <div className="info">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <span className="pizzaBox">Pizza box</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, soluta.
            </p>
            <span className="price">$15.23</span>
            <motion.button
              className="infoButton"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src="/images/basket_white.svg"
                alt="Cart"
                width="20px"
                height="20px"
                layout="intrinsic"
              />
              <span>Buy Now</span>
            </motion.button>
          </div>
          <div className="image-container">
            <Image
              src="/images/pizza.svg"
              width="1000px"
              height="1000px"
              layout="intrinsic"
            />
          </div>
          <div className="socialButtons">
            <div className="links">
              <Link href="" target="_blank">
                <a>Instegram</a>
              </Link>
              <Link href="" target="_blank">
                <a>Facebook</a>
              </Link>
              <Link href="" target="_blank">
                <a>Twiter</a>
              </Link>
            </div>
          </div>
          <div className="navigation-buttons">
            <button type="button" className="previous-btn">
              <Image
                src="/images/arrow-l.svg"
                alt="previous"
                width="100px"
                height="100px"
              />
            </button>
            <button type="button" className="next-btn">
              <Image
                src="/images/arrow-r.svg"
                alt="next"
                width="100px"
                height="100px"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
