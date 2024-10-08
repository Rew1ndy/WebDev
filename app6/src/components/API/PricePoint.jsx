import React, { useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import './pricePoint.css';

const Container = styled.div`
  padding: 20px;
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
`;

const Button = styled.button`
  padding: 2rem 1rem;
  background-color: palevioletred;
  color: white;
  border: none;
  border-radius: 5px;
  outline: 2px solid #00000047;
  cursor: pointer;

  &:hover {
    background-color: #d45d79;
  }
`;

const PricePoint = () => {
  const [priceData, setPriceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDialogs, setShowDialogs] = useState({});

  // Функция для получения данных с API
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const data = await response.json();
      const newData = [
        { currency: 'GBP', rate: data.bpi.GBP.rate },
        { currency: 'USD', rate: data.bpi.USD.rate },
        { currency: 'EUR', rate: data.bpi.EUR.rate },
      ];
      setPriceData(newData);
      
      // Инициализация состояний showDialog для каждого элемента
      const initialShowDialogs = newData.reduce((acc, item) => {
        acc[item.currency] = false;
        return acc;
      }, {});
      setShowDialogs(initialShowDialogs);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  // Функция для переключения состояния showDialog конкретной валюты
  const toggleDialog = (currency) => {
    setShowDialogs((prevState) => ({
      ...prevState,
      [currency]: !prevState[currency],
    }));
  };

  return (
    <div>
      <h1>Price list</h1>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <TransitionGroup className="price-list">
            <Container>
            {priceData.map((item) => (
              <div key={item.currency}>
                <Button onClick={() => toggleDialog(item.currency)}>
                  Toggle {item.currency} Dialog
                  <CSSTransition
                    in={showDialogs[item.currency]}
                    timeout={300}
                    classNames="price"
                    unmountOnExit
                  >
                    <div className="price-item dialog-box">
                      <h2>{item.currency}: {item.rate}</h2>
                    </div>
                  </CSSTransition>
                </Button>
              </div>
            ))}
          </Container>
        </TransitionGroup>
      )}
    </div>
  );
};

export { PricePoint };
