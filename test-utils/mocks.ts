export const mockApiResponses = (page) => {
  page.route('**/api/register', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true })
    });
  });

  page.route('**/api/login', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true, token: 'fake-jwt-token' })
    });
  });
};