import React from 'react';
import ErrorRequest from './components/error/ErrorRequest';

export default class Services {
  baseUrl = 'https://front-test.beta.aviasales.ru';

  getResourse = async (url, option) => {
    const res = await fetch(url, option);
    if (!res.ok) return <ErrorRequest />;
    const body = res.json();
    return body;
  };

  requestApi = () => this.getResourse(`${this.baseUrl}/search`);

  requestTickets = (id) => 
    this.getResourse(`${this.baseUrl}/tickets?searchId=${id}`)
}