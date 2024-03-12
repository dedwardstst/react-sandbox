import styled from '@emotion/styled';

const CardContainer = styled.div`
  container-name: cardContainer;
  container-type: inline-size;
  
  @container cardContainer (width <= 200px) {
    .card {
      flex-direction: column;
    }
  }

  @container cardContainer (width > 200px) {
    .card {
      flex-direction: row;
    }
  }
`;
const ContainerQueries = () => {
  return (
    <CardContainer>

    </CardContainer>
  );
};

export default ContainerQueries;
