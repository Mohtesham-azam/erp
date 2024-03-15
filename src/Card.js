import { BsArchive, BsBasket, BsCreditCard } from "react-icons/bs";
const Card = () => {
  return (
    <div class="row">
      <div class="col-sm-3 mb-3 mb-sm-0">
        <div class="card text-bg-primary">
          <div class="card-body">
            <h3 class="card-title">
              <BsArchive /> Products
            </h3>
            <h3>2000</h3>
          </div>
        </div>
      </div>
      <div class="col-sm-3 mb-3">
        <div class="card text-bg-warning">
          <div class="card-body">
            <h3 class="card-title">
              <BsBasket /> Orders
            </h3>
            <h3>25634</h3>
          </div>
        </div>
      </div>
      <div class="col-sm-3 mb-3">
        <div class="card text-bg-success">
          <div class="card-body">
            <h3 class="card-title">
              <BsCreditCard /> Sales
            </h3>
            <h3>$32456.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
