// useRedirect.ts
import { useNavigate } from 'react-router-dom';

import type { RedirectOptions } from './types';

const useRedirect = () => {
  const navigate = useNavigate();

  const redirectTo = (path: string, options: RedirectOptions = {}) => {
    const { state = {}, replace = false, queryParams: queryParameters = {} } = options;
    const queryString = new URLSearchParams(queryParameters).toString();
    const pathWithQuery = queryString ? `${path}?${queryString}` : path;

    navigate(pathWithQuery, { state, replace });
  };

  return redirectTo;
};

export default useRedirect;
