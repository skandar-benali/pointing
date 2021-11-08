import { get } from 'env-var';

export const NODE_ENV = get('NODE_ENV').default('development').asString();
export const PORT = get('PORT').required().asPortNumber();
