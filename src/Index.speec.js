import ReactDOM from 'react-dom';
...
jest.mock('react-dom', ()=> ({render: jest.fn()}))


it('renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  global.document.getElementById = (id) => id ==='root' && div
  expect(ReactDOM.render).toHaveBeenCalledWith(...)
});