import { CiCircleMinus, CiCirclePlus, CiCircleRemove } from "react-icons/ci";

function App() {
  return (
    <div className="app">
      <h2>Shopping cart</h2>
      <div className="cart-items">
        <div className="item">
          <img
            width={60}
            height={60}
            src="https://imgs.search.brave.com/v7KxYxxTVWYHU3HPK5CdXpEzk77R4ftZ1LK4a4XuBYY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzEzL2Iz/L2E5LzEzYjNhOTYx/MGRjMzRhNzI0NWJi/MWQ2YzBiNGZiY2Mz/LmpwZw"
            alt="phone"
          />

          <div className="details">
            <h4>Sumsung S21</h4>
            <span>Pink | 256GB | 8G RAM</span>
          </div>
          <div className="quantity">
            <button>
              <CiCircleMinus size={26} fill="#333" />
            </button>
            <span>1</span>
            <button>
              <CiCirclePlus size={26} fill="#333" />
            </button>
          </div>
          <p className="price">$850</p>
          <button>
            <CiCircleRemove size={26} fill="red" />
          </button>
        </div>
      </div>
      <div className="discount">
        <input type="text" placeholder="Promocode" />
        <button>Apply</button>
      </div>
      <div className="summary">
        <div className="subtotal">
          <p>Subtotal</p>
          <span>$7483.00</span>
        </div>
        <div className="discount">
          <p>Discount</p>
          <span>(20%) -$1129.20</span>
        </div>
      </div>
      <div className="to-pay">
        <div className="total">
          <p>Total</p>
          <span>$4850.89</span>
        </div>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default App;
