export default class Services {
  baseUrl = 'https://front-test.beta.aviasales.ru';

  getResourse = async (url, option) => {
    const res = await fetch(url, option);

    const body = res.json();
    return body;
  };

  requestApi = () =>
    this.getResourse(`${this.baseUrl}/search`).then((result) => localStorage.setItem('searchId', result.searchId));

  requestTickets () {
    return this.getResourse(`${this.baseUrl}/tickets?searchId=${localStorage.getItem('searchId')}`)
      .catch(() => this.requestTickets())
  };
}