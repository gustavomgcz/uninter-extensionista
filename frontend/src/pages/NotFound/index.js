import Banner from 'components/Banner'

function NotFound() {
  return (
    <>
      <Banner />
      <div style={{ padding: "4rem", textAlign: "center" }}>
        <h1>404</h1>
        <p>Página não encontrada</p>
      </div>
    </>
  );
}

export default NotFound;
