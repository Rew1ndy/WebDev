import styled from 'styled-components';

// Styled Components
const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  height: 100%;

  gap: 25px;
`;

const ImagesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

const Image = styled.img`
  width: calc(92% / 4); /* Каждое изображение занимает 1/4 ширины контейнера */
  object-fit: cover;
  filter: brightness(0.2);
  padding: 0 1%;

  &:hover {
    overflow-clip-margin: border-box;
    filter: brightness(1); 
    transform: scale(1.5);
    z-index: 10;
  }

  &:hover + * {
    filter: brightness(0.5); 
  }

  &:has(+ *:hover) {
    filter: brightness(0.5); 
  }

  transition: .5s;
`;

const Button = styled.button`
  background-color: #405974;
  color: #fff;
  border: none;
  padding: 8px 10px;
  margin: 10px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  transition: .3s;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export { 
    SliderContainer, 
    ImagesWrapper, 
    Image, 
    Button, 
    NavigationContainer 
};
