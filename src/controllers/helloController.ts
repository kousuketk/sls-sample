import type { APIGatewayProxyHandler } from 'aws-lambda';

export const hello: APIGatewayProxyHandler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "helthcheck"
    }, null, 2),
  };
};