import { APIGatewayProxyEvent } from 'aws-lambda';
import { hello } from '../../controllers/helloController';

describe('helloController test', () => {
  test('hello test', async () => {
    const expected = {
      statusCode: 200,
      body: '{\n  "message": "helloMessage"\n}'
    };
    let mockEvent: APIGatewayProxyEvent;
    const res = await hello(mockEvent, null, null);
    expect(res).toEqual(expected);
  });
});
