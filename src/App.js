import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]); // Veriyi tutmak için kullanılır. Değişken adı , değerini ve değişkenin değerini belirtir.
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setData(response.data));
  }
  );
  return (
    <div>
      {data.map(bilgiler => {
        return (
          <ul key={bilgiler.id} class="a">
            <li>{bilgiler.name} : {bilgiler.username}</li>
          </ul>
        );
      }
      )}
    </div>
  );
}

