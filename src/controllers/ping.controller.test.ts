import PingController from './ping';

test('should return pong message', async () => {
    const controller = new PingController();
    const response = await controller.getMessage();
    expect(response.message).toBe("pong");
})



/* test('it should pass', async () => {
    expect(true).toBe(true);
    //by changing false to true test will be passed
}); */
