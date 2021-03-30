export default class Services {
  baseUrl = 'https://front-test.beta.aviasales.ru';

  getResourse = async (url, option) => {
    const res = await fetch(`${this.baseUrl}${url}`, option);
    if (!res.ok) throw new Error(res.status);
    const body = res.json();
    return body;
  };

  requestApi = () => this.getResourse(`/search`);

  requestTickets = () =>
    this.getResourse(`/tickets?searchId=${localStorage.getItem('searchId')}`).catch(
      () => this.requestTickets()
    );
}