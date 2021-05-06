import Header from "../components/Header";

const Contact = () => {
  // I create a card here and add all my contact details

  return (
    <div>
      <Header />
      <div className="contactCard">
        <div className="contactWidth">
          <div class="card-header">Contact Details</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Dino Ben Tovim</li>
            <li class="list-group-item">Email: dinobentovim@gmail.com</li>
            <li class="list-group-item">Tel: 0799277931</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
