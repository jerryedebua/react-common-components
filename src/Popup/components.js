import styled from 'styled-components';

var borderColor = 'rgb(180, 176, 176)';
var backgroundColor = '#ffffff';

export const Container = styled.div`
	position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: 50000;
  padding: 2% 0 0 0;
`;

export const Wrapper1 = styled.div`
	display: flex;
  justify-content: center;
  width: 100% !important;
`;

export const Wrapper2 = styled.div`
	display: inline-flex;
  justify-content: center;
  align-items: center;
  
  min-height: 70px;
  min-width: 200px;
  max-width: 80%;

  background-color: ${backgroundColor};
  padding: 0.5%;

  border-radius: 5px;
  border-width: 0.01px;
  border-style: solid;
  border-color: ${borderColor};

  box-shadow: 0 0 5px 0.1px ${borderColor};
`;