import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

function Card({ user }) {
  return (
    <>

      {
        user.map((e) => (
          <div className="wrapper">
            <div className="card">
              <div className="wadah-foto-profile">
                <div className="foto-profile">
                  [foto-profile]
                </div>
              </div>
              <div className="list-data">
                <p>
                  Nama:
                  {e.name}
                </p>
                <p>
                  username:
                  {e.username}
                </p>
                <p>
                  Alamat:
                  {e.address.street}
                </p>
                <p>
                  email:
                  {e.email}
                </p>
                <p>
                  no.tel:
                  {e.phone}
                </p>
              </div>

            </div>
            <div className="link">
              <Link to={`post/${e.id}`}>Post&gt;&gt;&gt;</Link>
              {/* <Link>Task&gt;&gt;&gt;</Link> */}
            </div> 
          </div>
           ))
    }

    </>
  );
}

export default Card;
