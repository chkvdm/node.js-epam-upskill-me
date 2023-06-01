import * as http from 'http';

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export interface IncomingMessageWithBody<T> extends http.IncomingMessage {
  body?: T;
}

export type Response = http.ServerResponse;
export type Handler<T> = (
  request: IncomingMessageWithBody<T>, 
  response: Response
) => void;

export class Router<T> {
  private routes: Map<string, Map<HTTPMethod, Handler<T>>> = new Map();

  get(path: string, handler: Handler<T>): Router<T> {
    this.addRoute(path, HTTPMethod.GET, handler);
    return this;
  }

  post(path: string, handler: Handler<T>): Router<T> {
    this.addRoute(path, HTTPMethod.POST, handler);
    return this;
  }

  put(path: string, handler: Handler<T>): Router<T> {
    this.addRoute(path, HTTPMethod.PUT, handler);
    return this;
  }

  delete(path: string, handler: Handler<T>): Router<T> {
    this.addRoute(path, HTTPMethod.DELETE, handler);
    return this;
  }

  getHandler(): http.RequestListener {
    return async (
      request: http.IncomingMessage, 
      response: http.ServerResponse
    ) => {
      const { method, url } = request;

      const routeMap = this.routes.get(url!);
      if (!routeMap) {
        response.statusCode = 404;
        response.end();
        return;
      }

      const handler = routeMap.get(method as HTTPMethod);
      if (!handler) {
        response.statusCode = 404;
        response.end();
        return;
      }

      try {
        const body = await this.parseBody<T>(request);
        const typedRequest: IncomingMessageWithBody<T> = Object.assign(
          request, { body }
        );
        handler(typedRequest, response);
      } catch (error) {
        console.error(error);
        response.statusCode = 500;
        response.end();
      }
    };
  }

  private addRoute(path: string, method: HTTPMethod, handler: Handler<T>): void {
    const routeMap = this.routes.get(path) || new Map();
    if (routeMap.has(method)) {
      throw new Error(
        `Handler already specified for route ${path} and method ${method}`
      );
    }
    routeMap.set(method, handler);
    this.routes.set(path, routeMap);
  }

  private parseBody<T>(request: http.IncomingMessage): Promise<T> {
    return new Promise((resolve, reject) => {
      let data = '';
      request.on('data', (chunk) => {
        data += chunk;
      });
      request.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed);
        } catch (error) {
          reject(error);
        }
      });
    });
  }
}
