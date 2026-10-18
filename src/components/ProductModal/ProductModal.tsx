
import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import type { Product } from '../ProductCard/ProductCard';

import minusIcon from '../../assets/icons/Minus.svg';
import plusIcon from '../../assets/icons/Plus.svg';

import './ProductModal.scss';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [product, onClose]);

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  if (!product) return null;

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function decreaseQuantity() {
    setQuantity((previous) => Math.max(1, previous - 1));
  }

  function increaseQuantity() {
    setQuantity((previous) => previous + 1);
  }

  function handleBuy() {
    // Integração de checkout não faz parte do JSON fornecido.
    console.log('Comprar produto:', {
      product,
      quantity,
    });
  }

  return (
    <div
      className="product-modal__overlay"
      onMouseDown={handleOverlayClick}
    >
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        aria-describedby="product-modal-description"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Fechar detalhes do produto"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="product-modal__image-area">
          <img
            src={product.photo}
            alt={product.productName}
            className="product-modal__image"
          />
        </div>

        <div className="product-modal__details">
          <div className="product-modal__heading">
            <h2
              id="product-modal-title"
              className="product-modal__title"
            >
              {product.productName}
            </h2>

            <p className="product-modal__price">
              {formattedPrice}
            </p>
          </div>

          <div className="product-modal__description-area">
            <p
              id="product-modal-description"
              className="product-modal__description"
            >
              {product.descriptionShort}
            </p>

            <span className="product-modal__more-details">
              Veja mais detalhes do produto &gt;
            </span>
          </div>

          <div className="product-modal__actions">
            <div
              className="product-modal__quantity"
              aria-label="Quantidade do produto"
            >
              <button
                type="button"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
                aria-label="Diminuir quantidade"
              >
                <img src={minusIcon} alt="" />
              </button>

              <span aria-live="polite">
                {String(quantity).padStart(2, '0')}
              </span>

              <button
                type="button"
                onClick={increaseQuantity}
                aria-label="Aumentar quantidade"
              >
                <img src={plusIcon} alt="" />
              </button>
            </div>

            <button
              type="button"
              className="product-modal__buy"
              onClick={handleBuy}
            >
              Comprar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductModal;
