import Statistic from './Statistic/Statistic';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <>
        <h1>Statistics</h1>
        <Statistic />
      </>
    </div>
  );
};
