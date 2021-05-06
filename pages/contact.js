import Header from "../components/Header";

const Contact = () => {
  // I create a card here and add all my contact details

  return (
    <div>
      <Header />
      <div className="contactCard">
        <div className="contactWidth">
          <div className="card-header">Contact Details</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Dino Ben Tovim</li>
            <li className="list-group-item">Email: dinobentovim@gmail.com</li>
            <li className="list-group-item">Tel: 0799277931</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
