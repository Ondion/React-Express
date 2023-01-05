import App from '../App';


describe('App', () => {
  it('1', () => {
    expect(App).toBeDefined();
    
    const result = App()
    expect(result).toBeTruthy()
  });
  
});
